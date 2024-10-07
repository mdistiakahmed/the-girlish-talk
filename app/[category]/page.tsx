import { fetch4PostByCategory } from "@/services/getPostsData";
import React from "react";

const CategoryPage = async ({ params }: any) => {
  const { category } = params;
  const posts = await fetch4PostByCategory(category);

  return (
    <div className="flex justify-center">
      {/* Left Ad Space */}
      <div className="hidden lg:block lg:w-1/6 bg-gray-100 p-4">
        {/* Add Google Ad here */}
        <div className="h-full  flex items-center justify-center"></div>
      </div>

      {/* Main Content */}
      <div className="w-full lg:w-4/6 p-4">
        <h1 className="text-3xl font-bold mb-6 text-center capitalize">
          {category} Articles
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post: any) => (
            <div
              key={post.slug.current}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={post.mainImageUrl}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4">by {post.authorName}</p>
                <a
                  href={`/articles/${post.slug.current}`}
                  className="text-blue-500 hover:underline"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Ad Space */}
      <div className="hidden lg:block lg:w-1/6 bg-gray-100 p-4">
        {/* Add Google Ad here */}
        <div className="h-full  flex items-center justify-center"></div>
      </div>
    </div>
  );
};

export default CategoryPage;
