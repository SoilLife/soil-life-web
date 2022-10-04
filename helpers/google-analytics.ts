export const GOOGLE_ANALYTICS_ID = "G-Z3E3TD3PZ9";

export function initGoogleAnalytics() {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: Window["dataLayer"]) {
    dataLayer.push(...args);
  }
  gtag("js", new Date());

  gtag("config", GOOGLE_ANALYTICS_ID);
}
