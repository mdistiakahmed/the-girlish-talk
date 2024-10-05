import { fetchRecentPosts } from "@/services/getPostsData";
import Link from "next/link";

export default async function Home() {
  const posts = await fetchRecentPosts();
  return (
    <div className="bg-pink-100 min-h-screen flex flex-col">
      <main className="flex-1 container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Main Content Area - Categories */}

        <section className="md:col-span-3">
          <section className="text-center my-20">
            <h2 className="text-4xl font-semibold text-pink-700 mb-4">
              Welcome to The Girlish Talk!
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Your go-to platform for everything empowering, fashionable, and
              fun. Join our community of strong, inspiring women who uplift and
              support one another.
            </p>
            <button className="bg-pink-600 text-white py-3 px-6 rounded-full shadow-md hover:bg-pink-700 transition duration-300">
              Get Started
            </button>
          </section>

          <h2 className="text-4xl font-semibold text-pink-700 mb-4">
            Explore Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Category Cards */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-bold mb-2">Women Fashion</h3>
              <p className="text-gray-600">
                Discover the latest fashion trends and tips.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-bold mb-2">Health Problems</h3>
              <p className="text-gray-600">
                Get advice and insights on common women&apos;s health issues.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-bold mb-2">
                Relationship Guidelines
              </h3>
              <p className="text-gray-600">
                Navigate your relationships with helpful guidance.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-bold mb-2">Child Care</h3>
              <p className="text-gray-600">
                Find tips on how to care for your children effectively.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-bold mb-2">Mental Health</h3>
              <p className="text-gray-600">
                Find solution for psychological problems and possible solutions
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-bold mb-2">Home Decor</h3>
              <p className="text-gray-600">
                Find solution for beautifully decor your home
              </p>
            </div>
          </div>
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
