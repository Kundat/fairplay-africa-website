"use client";
import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { home } from "@/content/home";
import { LINKS } from "@/config/links";
export default function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const panel = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
    const items = () => panel.current?.querySelectorAll<HTMLElement>('a,button');
    items()?.[0]?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "Tab") {
        const nodes = Array.from(items() ?? []);
        if (!nodes.length) return;
        const first = nodes[0], last = nodes[nodes.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("keydown", onKey); previous?.focus(); };
  }, [open, onClose]);
  if (!open) return null;
  return <div className="mobile-menu-backdrop" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}>
    <div className="mobile-menu" ref={panel} role="dialog" aria-modal="true" aria-label="Main navigation">
      <div className="mobile-menu-top"><span className="brand-name">FairPlay<span>Africa</span></span><button className="icon-button" onClick={onClose} aria-label="Close menu"><X /></button></div>
      <nav>{home.nav.map((item) => <a key={item.href} href={item.href} onClick={onClose}>{item.label}</a>)}</nav>
      <a className="button button-primary full-width" href={LINKS.getStarted}>Get Started</a>
    </div>
  </div>;
}
