import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.highplainsraceway.com";
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/calendar`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${base}/open-lapping`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/vip-track-days`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/customer-appreciation`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/insurance`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/track-info`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/rv-rental`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/instruction`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/employment`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
  ];
}
