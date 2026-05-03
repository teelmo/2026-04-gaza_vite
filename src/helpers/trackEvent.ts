/**
 * trackEvent.ts
 *
 * Stub for analytics event tracking. Wire up to the consent-sdk / Yle
 * analytics integration before publishing.
 */
const trackEvent = (eventName: string, label?: string): void => {
  if (import.meta.env.DEV) {
    console.debug('[trackEvent]', eventName, label);
  }
};

export default trackEvent;
