import { ArrowRight } from "lucide-react";
import { home } from "@/content/home";
import { LINKS } from "@/config/links";
export default function FinalCta() { return <section className="final-cta"><div className="cta-pattern"/><div className="container final-cta-inner"><span className="eyebrow">YOUR NEXT CHAPTER STARTS HERE</span><h2>{home.finalCta.headline.pre}<em>{home.finalCta.headline.accent}</em></h2><p>{home.finalCta.sub}</p><div><a className="button button-light" href={LINKS.getStarted}>Get Started<ArrowRight size={17}/></a><a className="cta-secondary" href={LINKS.bookOnboarding}>Book Assisted Onboarding</a></div></div></section>; }
