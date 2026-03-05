import type { Metadata } from "next";
import {
  SITE,
  INSTRUCTOR,
  PRICING,
  DEMO_HERO,
} from "./constants";

const title = `${SITE.name} — ${SITE.tagline}`;
const description =
  SITE.description +
  " Khóa học marketing online: content, quảng cáo, funnel, tối ưu chuyển đổi. Giá từ 179k.";
const keywords = [
  "khóa học marketing",
  "digital marketing",
  "content marketing",
  "quảng cáo",
  "Meta Ads",
  "TikTok Ads",
  "tối ưu chuyển đổi",
  "funnel",
  "GA4",
  "marketing online",
];

export function createMetadata(): Metadata {
  return {
    title: {
      default: title,
      template: `%s | ${SITE.name}`,
    },
    description,
    keywords: keywords.join(", "),
    openGraph: {
      type: "website",
      url: SITE.url,
      title,
      description,
      siteName: SITE.name,
      locale: "vi_VN",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: "index, follow",
  };
}

export function createCourseJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: SITE.name,
        url: SITE.url,
        description: SITE.description,
      },
      {
        "@type": "Course",
        name: SITE.name,
        description: SITE.description,
        provider: { "@type": "Organization", name: SITE.name },
        instructor: {
          "@type": "Person",
          name: INSTRUCTOR.name,
          jobTitle: INSTRUCTOR.role,
        },
        offers: {
          "@type": "Offer",
          price: PRICING.salePro,
          priceCurrency: "VND",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: DEMO_HERO.rating,
          ratingCount: DEMO_HERO.ratingCount,
          bestRating: 5,
        },
      },
    ],
  };
}
