import { Check, LockKeyhole } from "lucide-react";
import { home } from "@/content/home";
export default function Trust() { return <section className="section trust-section"><div className="container trust-grid"><div><div className="section-kicker">07 / TRUST AND CARE</div><span className="eyebrow dark-eyebrow"><LockKeyhole size={15}/> YOUR WORK, RESPECTED</span><h2>{home.trust.headline.pre}<em>{home.trust.headline.accent}</em></h2></div><div className="trust-checklist">{home.trust.points.map((p)=><div key={p}><span><Check size={15}/></span>{p}</div>)}</div></div></section>; }
