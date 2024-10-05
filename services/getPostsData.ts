export const fetchRecentPosts = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/posts/latest`
  );
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
