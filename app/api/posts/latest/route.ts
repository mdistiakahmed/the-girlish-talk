import { NextRequest, NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";

export async function GET(req: NextRequest, res: NextResponse) {
  const query = `
     *[_type == "post"] | order(publishedAt desc) [0...3] {
        title,
        "authorName": author->name,
        "mainImageUrl": mainImage.asset->url,
        slug
      }
  `;

  const data = await client.fetch(query);

  const response = NextResponse.json({ data });

  return response;
}
