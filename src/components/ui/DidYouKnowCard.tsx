"use client";
import { useState } from "react";
import { ChevronDown, Lightbulb } from "lucide-react";
import { home } from "@/content/home";
export default function DidYouKnowCard() {
  const [open, setOpen] = useState(false); const data = home.academy.didYouKnow;
  return <div className={`did-you-know ${open ? "is-open" : ""}`}><div className="dyk-icon"><Lightbulb /></div><div className="dyk-copy"><span>{data.label}</span><h3>{data.prompt}</h3>{open && <p>{data.answer}</p>}</div><button className="icon-button dyk-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? "Hide answer" : "Show answer"}><ChevronDown /></button></div>;
}
