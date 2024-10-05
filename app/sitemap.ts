import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const BASE_URL = "https://www.thegirlishtalk.com";

  const mainPages = [
    {
      url: `${BASE_URL}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as any,
      priority: 1,
    },
  ];

  const siteMapArray = [...mainPages];

  return siteMapArray;
}
