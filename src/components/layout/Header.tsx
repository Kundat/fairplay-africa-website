"use client";
import { useEffect, useState, useCallback } from "react";
import { Menu } from "lucide-react";
import { home } from "@/content/home";
import { LINKS } from "@/config/links";
import Logo from "@/components/ui/Logo";
import MobileMenu from "./MobileMenu";
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setMenuOpen(false), []);
  useEffect(() => { const update = () => setScrolled(window.scrollY > 24); update(); window.addEventListener("scroll", update, { passive: true }); return () => window.removeEventListener("scroll", update); }, []);
  return <>
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container header-inner"><Logo />
        <nav className="desktop-nav" aria-label="Main navigation">{home.nav.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}</nav>
        <div className="header-actions"><a className="login-link" href={LINKS.login}>Log in</a><a className="button button-primary header-cta" href={LINKS.getStarted}>Get Started</a><button className="icon-button menu-trigger" onClick={() => setMenuOpen(true)} aria-label="Open menu" aria-expanded={menuOpen}><Menu /></button></div>
      </div>
    </header>
    <MobileMenu open={menuOpen} onClose={closeMenu} />
  </>;
}
