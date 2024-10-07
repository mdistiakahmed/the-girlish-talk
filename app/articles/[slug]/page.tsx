import { urlFor, urlForImage } from "@/sanity/lib/image";
import { fetchPostBySlug } from "@/services/getPostsData";
import { Metadata } from "next";
import { PortableText } from "next-sanity";
import Image from "next/image";

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const { slug } = params;
  const post = await fetchPostBySlug(slug);

  if (!post) {
    return {
      title: "Post not found",
      description: "This post was not found.",
    };
  }

  return {
    title: post.title,
    description: `Read more about ${post.title} by ${post.author} on ${new Date(
      post.publishedAt
    ).toLocaleDateString()}`,
    openGraph: {
      title: post.title,
      description: post.body.slice(0, 155), // Limit description length
      url: `/posts/${post.slug}`,
      images: [
        {
          url: urlFor(post.mainImage).url(),
          alt: post.mainImage.alt || post.title,
        },
      ],
    },
  };
}

export default async function PostPage({ params }: any) {
  const { slug } = params;
  const post = await fetchPostBySlug(slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="container mx-auto px-4 md:px-[15vw] py-10">
      <h1 className="text-4xl text-center font-bold text-pink-700 mb-4">
        {post.title}
      </h1>

      <div className="flex items-center  text-gray-600 mb-6">
        {post.authorImage && (
          <Image
            src={post.authorImage}
            alt={post.author}
            width={40}
            height={40}
            className="rounded-full mr-4 "
          />
        )}
        <div>
          <p>{post.author}</p>
          <p className="text-sm">
            {new Date(post.publishedAt).toLocaleDateString()}
          </p>
        </div>
      </div>

      {/* Main Image */}
      {post.mainImage?.asset?.url && (
        <div className="mb-6 flex items-center justify-center">
          <Image
            src={post.mainImage.asset.url}
            alt={post.mainImage.alt || "Main image"}
            width={800}
            height={500}
            className="rounded-lg"
          />
        </div>
      )}

      {/* Post Body */}
      <article className="prose lg:prose-xl max-w-none">
        <PortableText value={post.body} components={myPortableTextComponents} />
      </article>

      {/* Categories */}
      {post.categories && (
        <div className="mt-8 flex gap-5">
          <h3 className="text-lg font-bold text-pink-700">Categories:</h3>
          <div className="flex flex-wrap gap-2">
            {post.categories.map((category: any) => (
              <span
                key={category.title}
                className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium"
              >
                {category.title}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

const CodeBlock = ({ children }: any) => {
  return (
    <pre className="bg-gray-800 text-white my-4 p-4 rounded overflow-x-auto">
      <code>{children}</code>
    </pre>
  );
};

const MyPortableTextImage = ({ value }: any) => {
  const { asset, alt } = value;
  const dimensions = extractImageDimensions(asset._ref);

  return (
    <div className="w-full flex justify-center">
      <Image
        src={urlForImage(value)}
        alt={alt || "image"}
        width={dimensions.width}
        height={dimensions.height}
        className="rounded-lg"
      />
    </div>
  );
};

const MyPortableTextVideo = ({ value }: any) => {
  const { url, title } = value;

  return (
    <div className="w-full flex justify-center my-8">
      <iframe
        width="560"
        height="315"
        src={url.replace("watch?v=", "embed/")}
        title={title || "Embedded Video"}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="rounded-lg"
      ></iframe>
    </div>
  );
};

const myPortableTextComponents = {
  types: {
    image: MyPortableTextImage,
    videoEmbed: MyPortableTextVideo,
  },
  marks: {
    code: ({ children }: any) => <CodeBlock>{children}</CodeBlock>,
    link: ({ value, children }: any) => (
      <a href={value.href} className="text-pink-600 underline">
        {children}
      </a>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-3xl font-bold text-gray-900 my-4">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-2xl font-semibold text-gray-800 my-4">{children}</h2>
    ),
    normal: ({ children }: any) => <p className="my-4">{children}</p>,
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc pl-6">{children}</ul>
    ),
  },
};

function extractImageDimensions(ref: any) {
  const match = ref.match(/-(\d+)x(\d+)-/);
  if (!match) {
    throw new Error("Invalid image reference format");
  }
  const width = parseInt(match[1], 10);
  const height = parseInt(match[2], 10);
  return { width, height };
}
