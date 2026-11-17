// Analytics adapter placeholder. No analytics provider has been selected.
// Do not add a provider until FairPlay chooses one and consent handling is reviewed.
export type AnalyticsEvent = { name: string; properties?: Record<string, string> };
export function track(_event: AnalyticsEvent) {
  // Intentionally empty: the MVP does not send analytics events.
}
