import {
  fetch4PostByCategory,
  fetchRecentPosts,
} from "@/services/getPostsData";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const posts = await fetchRecentPosts();
  const categories = [
    {
      name: "Fashion",
      description:
        "Stay updated with the latest trends, styles, and tips in women's fashion. Discover how to express your unique style through clothing, accessories, and beauty. Whether you're looking for casual wear or something more glamorous, find inspiration and advice to elevate your wardrobe.",
      posts: await fetch4PostByCategory("Fashion"),
    },
    {
      name: "Health",
      description:
        "Explore a wide range of advice and insights on women's health issues. From physical fitness to mental wellness, this category covers essential topics such as nutrition, exercise, and preventive care. Empower yourself with knowledge to take charge of your health and well-being.",
      posts: await fetch4PostByCategory("Health"),
    },
    {
      name: "Relationship",
      description:
        "Find helpful guidance to navigate your relationships, whether they be romantic, familial, or friendships. This category offers tips on effective communication, conflict resolution, and maintaining healthy connections. Learn how to build and sustain strong, fulfilling relationships.",
      posts: await fetch4PostByCategory("Relationship"),
    },
    {
      name: "Nursery",
      description:
        "Get expert tips on nursery care and child development. This category provides resources for new parents, covering topics such as feeding, sleeping, and developmental milestones. Equip yourself with the knowledge to nurture your child's growth and create a loving environment.",
      posts: await fetch4PostByCategory("Nursery"),
    },
    {
      name: "Psyche",
      description:
        "Discover solutions for psychological challenges and mental well-being. This category delves into topics like stress management, anxiety, and self-esteem. Gain insights into maintaining mental health and fostering resilience in everyday life, empowering you to thrive.",
      posts: await fetch4PostByCategory("Psyche"),
    },
    {
      name: "Decor",
      description:
        "Transform your space with beautiful home decor ideas. From interior design tips to DIY projects, this category inspires you to create a home that reflects your personality and style. Explore various themes and find practical advice for organizing and beautifying your living space.",
      posts: await fetch4PostByCategory("Decor"),
    },
    {
      name: "Self-Care",
      description:
        "Learn about the importance of self-care and nurturing your well-being. This category covers techniques for relaxation, mindfulness, and personal growth. Discover how prioritizing yourself can lead to a more balanced and fulfilling life, allowing you to show up as your best self.",
      posts: await fetch4PostByCategory("Self-Care"),
    },
  ];

  return (
    <div className="bg-pink-100 min-h-screen flex flex-col">
      <main className="flex-1 container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Main Content Area - Categories */}
        <section className="md:col-span-3">
          <section
            className="relative text-center my-20 py-20 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/girl_talking.webp')",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40"></div>

            <div className="relative z-10 max-w-2xl mx-auto px-4 flex flex-col items-center justify-center">
              <h2 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 mb-6 animate-fadeInUp">
                Welcome to The Girlish Talk!
              </h2>

              {/* Typing effect on the description */}
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8 animate-fadeInUp delay-1s">
                Your go-to platform for everything empowering, fashionable, and
                fun. Join our community of strong, inspiring women who uplift
                and support one another.
              </p>

              <button className="bg-gradient-to-r from-pink-600 to-purple-600 text-white py-3 px-8 rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out flex items-center justify-center animate-fadeInUp delay-2s">
                Get Started
                {/* <FaArrowRight className="ml-2" /> */}
              </button>
            </div>
          </section>

          <h2 className="text-4xl font-semibold text-pink-700 mb-4 text-center">
            Explore Categories
          </h2>

          {/* Displaying posts for each category */}
          {categories.map((category) => (
            <div key={category.name} className="mb-8">
              <h3 className="text-3xl font-semibold text-pink-600 mb-4 text-center my-10">
                {category.name}
              </h3>
              <p className="text-gray-600 mb-4 text-center">
                {category.description}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.posts?.length > 0 ? (
                  category.posts.map((post: any, index: any) => (
                    <Link
                      href={`/articles/${post.slug.current}`}
                      className=" bg-white border border-gray-300 hover:border-gray-400 p-4 hover:shadow-xl transition duration-300"
                      key={index}
                    >
                      <div className="">
                        <h4 className="text-lg font-bold mb-2">{post.title}</h4>
                        <p className="text-sm text-gray-600">
                          By: {post.authorName}
                        </p>

                        <div className="flex items-center justify-center">
                          {post.mainImageUrl && (
                            <Image
                              src={post.mainImageUrl}
                              alt={`Image for ${post.title}`}
                              width={300} // Provide fixed width
                              height={300} // Provide fixed height
                              className="mt-2 w-[300px] h-[300px]"
                              layout="intrinsic" // Ensures the image maintains aspect ratio
                            />
                          )}
                        </div>
                        <div className="mt-2  font-semibold hover:underline flex items-center justify-center">
                          <p>Continue Reading...</p>
                        </div>
                      </div>
                    </Link>
                  ))
                ) : (
                  <p>No posts available in this category.</p>
                )}
              </div>
            </div>
          ))}
        </section>

        {/* Sidebar - Recent Posts */}
        <aside className="md:col-span-1">
          <h3 className="text-2xl font-semibold text-pink-700 mb-6">
            Recent Posts
          </h3>
          <div className="space-y-6">
            {posts?.length > 0 ? (
              posts.map((post: any, index: any) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition duration-300"
                >
                  <h4 className="text-lg font-bold mb-2">{post.title}</h4>
                  <p className="text-sm text-gray-600">By: {post.authorName}</p>
                  {post.mainImageUrl && (
                    <img
                      src={post.mainImageUrl}
                      alt={`Image for ${post.title}`}
                      className="mt-2 rounded-lg"
                    />
                  )}
                  <Link
                    href={`/articles/${post.slug.current}`}
                    className="mt-2 text-pink-600 font-semibold hover:underline"
                  >
                    Read More
                  </Link>
                </div>
              ))
            ) : (
              <p>No recent posts available.</p>
            )}
          </div>
        </aside>
      </main>
    </div>
  );
}
