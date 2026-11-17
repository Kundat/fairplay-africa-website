const mvpOpen = process.env.NEXT_PUBLIC_MVP_OPEN === "true";
const whatsapp = "https://wa.me/REPLACE_NUMBER";
export const LINKS = {
  getStarted: mvpOpen ? "/get-started" : whatsapp,
  bookOnboarding: mvpOpen ? "/book-onboarding" : whatsapp,
  login: whatsapp,
  whatsapp,
  email: "mailto:REPLACE_EMAIL",
  social: {
    x: "https://x.com/fairplay_africa",
    instagram: "https://instagram.com/fair.playafrica",
    linkedin: "https://www.linkedin.com/company/fair-play-africa",
  },
} as const;
export type Category = "creator" | "filmmaker" | "organisation";
export const audienceHref = (category: Category) => {
  const base = category === "creator" ? LINKS.getStarted : LINKS.bookOnboarding;
  if (base.startsWith("/")) return `${base}?category=${category}`;
  return base;
};
