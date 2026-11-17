import { ArrowUpRight, Instagram, Linkedin, Mail } from "lucide-react";
import { home } from "@/content/home";
import { LINKS } from "@/config/links";
import Logo from "@/components/ui/Logo";
export default function Footer() {
  return <footer className="site-footer"><div className="container footer-main">
    <div className="footer-brand"><Logo inverse /><p>{home.footer.line}</p><div className="social-links"><a href={LINKS.social.instagram} aria-label="Instagram" target="_blank" rel="noopener noreferrer"><Instagram /></a><a href={LINKS.social.linkedin} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><Linkedin /></a><a href={LINKS.email} aria-label="Email"><Mail /></a></div></div>
    {home.footer.columns.map((column) => <div className="footer-column" key={column.title}><h3>{column.title}</h3>{column.links.map((link) => <a href={link.href} key={link.label}>{link.label}<ArrowUpRight size={13} /></a>)}</div>)}
  </div><div className="container footer-bottom"><p>{home.footer.disclaimer}</p><span>© {new Date().getFullYear()} {home.footer.copyright}</span></div></footer>;
}
