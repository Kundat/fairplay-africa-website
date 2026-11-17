"use client";
import { useEffect, useState } from "react";
import { LINKS } from "@/config/links";
export default function StickyCtaBar() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { const hero = document.getElementById("hero"); if (!hero) return; const observer = new IntersectionObserver(([entry]) => setVisible(!entry.isIntersecting), { threshold: 0 }); observer.observe(hero); return () => observer.disconnect(); }, []);
  if (!visible) return null;
  return <div className="sticky-cta visible"><span>Ready to protect your work?</span><a className="button button-primary" href={LINKS.getStarted}>Get Started</a></div>;
}
