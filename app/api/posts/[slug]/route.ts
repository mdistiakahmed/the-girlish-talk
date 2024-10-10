import { NextRequest, NextResponse } from "next/server";
import { client } from "@/sanity/lib/client"; // Make sure you have the sanity client imported

export async function GET(req: NextRequest, { params }: any) {
  const { slug } = params;

  const query = `
    *[_type == "post" && slug.current == $slug][0] {
      title,
      "slug": slug.current,
      "author": author->name,
      "authorImage": author->image.asset->url,
      mainImage{
        asset->{
          _id,
          url
        },
        alt
      },
      categories[]->{
        title,
        description
      },
      body,
      publishedAt,
      excerpt
    }
  `;

  const post = await client.fetch(query, { slug });

  if (!post) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }

  return NextResponse.json({ post });
}
