"use client";
import { useEffect, useState } from "react";
export default function ConsentBanner() {
  const [show, setShow] = useState(false);
  useEffect(() => { try { setShow(localStorage.getItem("fp-consent") !== "accepted"); } catch { setShow(true); } }, []);
  const accept = () => { try { localStorage.setItem("fp-consent", "accepted"); } catch {} setShow(false); };
  if (!show) return null;
  return <aside className="consent-banner" aria-label="Privacy notice"><div><strong>Your privacy matters.</strong><p>This site does not run third-party analytics at this time. You can continue browsing.</p></div><button className="button button-primary" onClick={accept}>Continue</button></aside>;
}
