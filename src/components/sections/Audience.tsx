import * as Icons from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { home } from "@/content/home";
import { audienceHref } from "@/config/links";
import Reveal from "@/components/ui/Reveal";
export default function Audience() { return <section className="section audience-section" id="audience"><div className="container"><div className="section-kicker">03 / WHO IT IS FOR</div><div className="section-heading"><span className="eyebrow dark-eyebrow">Made around your work</span><h2>{home.audience.headline.pre}<em>{home.audience.headline.accent}</em></h2></div><div className="audience-grid">{home.audience.cards.map((card,i)=>{const Icon=Icons[card.icon as keyof typeof Icons] as React.ElementType;return <Reveal className={`audience-card audience-card-${i+1}`} key={card.category}><div className="audience-card-top"><span className="audience-icon"><Icon size={24}/></span><span>0{i+1}</span></div><h3>{card.title}</h3><strong>{card.headline}</strong><p>{card.text}</p><a href={audienceHref(card.category)}>{card.cta}<ArrowUpRight size={16}/></a></Reveal>})}</div></div></section>; }
