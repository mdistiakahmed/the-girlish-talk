import { NextRequest, NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";

export async function GET(req: NextRequest, res: NextResponse) {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get("category");

  if (!category) {
    return NextResponse.json(
      { error: "Category is required" },
      { status: 400 }
    );
  }

  const query = `
     *[_type == "post" && references(*[_type == "category" && slug.current == $category]._id)] 
     | order(publishedAt desc) [0...4] {
        title,
        "authorName": author->name,
        "mainImageUrl": mainImage.asset->url,
        slug
      }
  `;

  const data = await client.fetch(query, { category }, { cache: "default" });

  const response = NextResponse.json({ data });

  return response;
}
