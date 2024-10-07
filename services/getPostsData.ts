export const fetchRecentPosts = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/posts/latest`
  );
  if (!res.ok) {
    console.error(`Failed to fetch post: ${res.status}`);
    return null; // Return null or handle the error accordingly
  }
  const { data } = await res.json();
  return data;
};

export async function fetchPostBySlug(slug: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SITE_URL}/api/posts/${slug}`
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch post with slug: ${slug}`);
    }

    const data = await res.json();
    return data.post; // returns the post object
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }
}

export async function fetch4PostByCategory(category: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SITE_URL}/api/posts/category?category=${category.toLocaleLowerCase()}`
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch post with slug: ${category}`);
    }

    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }
}
