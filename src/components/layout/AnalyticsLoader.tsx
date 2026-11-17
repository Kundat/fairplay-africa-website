"use client";
import { useEffect } from "react";
// Provider intentionally not selected. This component is the consent-aware integration point.
export default function AnalyticsLoader() {
  useEffect(() => { /* No analytics provider is configured; nothing is loaded or tracked. */ }, []);
  return null;
}
