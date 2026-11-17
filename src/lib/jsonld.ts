import { faq } from "@/content/faq";
export const organizationJsonLd = {
  "@context": "https://schema.org", "@type": "Organization", name: "FairPlay Africa",
  url: "https://www.fairplay.africa", description: "Protecting African creativity.",
};
export const faqJsonLd = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: faq.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
};
