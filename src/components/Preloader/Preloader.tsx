"use client";

import { useEffect, useState } from "react";
import styles from "./preloader.module.css";
import { VIEWBOX, TEAL, ORANGE, CHECK } from "./icon-paths";

const MIN_MS = 1700;
const FADE_MS = 450;
const KEY = "fp_seen";

export default function Preloader() {
  const [quick, setQuick] = useState(false);
  const [done, setDone] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    let seen = false;
    try { seen = sessionStorage.getItem(KEY) === "1"; } catch {}
    if (seen) setQuick(true);

    let timer: ReturnType<typeof setTimeout> | undefined;
    const finish = () => {
      const wait = seen ? 0 : Math.max(0, MIN_MS - performance.now());
      timer = setTimeout(() => {
        setDone(true);
        try { sessionStorage.setItem(KEY, "1"); } catch {}
      }, wait);
    };

    if (document.readyState === "complete") finish();
    else window.addEventListener("load", finish, { once: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("load", finish);
    };
  }, []);

  useEffect(() => {
    if (!done) return;
    const t = setTimeout(() => setGone(true), FADE_MS + 50);
    return () => clearTimeout(t);
  }, [done]);

  if (gone) return null;
  const cls = [styles.root, quick && styles.quick, done && styles.done].filter(Boolean).join(" ");
  return (
    <div className={cls} role="status" aria-label="Loading">
      <svg viewBox={VIEWBOX} aria-hidden="true">
        <path className={styles.t} pathLength={1} fillRule="evenodd" d={TEAL} />
        <path className={styles.o} fill="#e87150" fillRule="evenodd" d={ORANGE} />
        <path className={styles.c} fill="#66dedc" fillRule="evenodd" d={CHECK} />
      </svg>
    </div>
  );
}
