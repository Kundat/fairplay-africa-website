import { Award, Sparkles } from "lucide-react";
import { home } from "@/content/home";
export default function Proof() { return <section className="proof-band"><div className="container proof-inner"><span className="proof-icon"><Award /></span><div><strong>{home.proof.line}</strong><span>{home.proof.sub}</span></div><span className="proof-side"><Sparkles size={16}/> CREATIVE INFRASTRUCTURE FOR AFRICA</span></div></section>; }
