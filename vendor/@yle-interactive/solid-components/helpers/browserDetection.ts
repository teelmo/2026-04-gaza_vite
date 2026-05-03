// Cache at module level - shared across all component instances
let cachedIsMobile: boolean | null = null;
let maxMobileHeight: number | null = null;
let isTrackingHeight = false;

/**
 * Detects if current device is mobile.
 * Result is cached - safe to call multiple times.
 */
export function isMobileDevice(): boolean {
  if (cachedIsMobile !== null) {
    return cachedIsMobile;
  }

  // Check if we're in browser environment (SSR safety)
  if (typeof window === "undefined" || typeof navigator === "undefined") {
    cachedIsMobile = false;
    return false;
  }

  const userAgent = navigator.userAgent;
  cachedIsMobile =
    /iPhone|iPad|iPod|Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(
      userAgent
    );

  return cachedIsMobile;
}

/**
 * Gets the maximum viewport height seen.
 * On mobile: tracks and returns the largest height seen (never shrinks).
 * On desktop: always returns current height (windows are resizable).
 *
 * The resize listener is registered ONCE globally, regardless of how many
 * components call this function.
 *
 * @returns Maximum viewport height in pixels
 */
export function getMaxViewportHeight(): number {
  // Desktop: always return current height (user can resize windows)
  if (!isMobileDevice()) {
    return typeof window !== "undefined" ? window.innerHeight : 0;
  }

  // Mobile: track maximum height seen
  if (typeof window === "undefined") {
    return 0;
  }

  // Initialize on first call
  if (maxMobileHeight === null) {
    maxMobileHeight = window.innerHeight;
  }

  // Set up resize listener ONCE (only on first call)
  if (!isTrackingHeight) {
    isTrackingHeight = true;

    const updateMaxHeight = () => {
      const currentHeight = window.innerHeight;

      // Only grow, never shrink
      if (maxMobileHeight === null || currentHeight > maxMobileHeight) {
        maxMobileHeight = currentHeight;

        // Dispatch event so components can react if needed
        window.dispatchEvent(
          new CustomEvent("maxViewportHeightChange", {
            detail: { height: maxMobileHeight },
          })
        );
      }
    };

    // Standard resize event
    window.addEventListener("resize", updateMaxHeight, { passive: true });

    // Visual Viewport API for more accurate mobile detection
    if (window.visualViewport) {
      window.visualViewport.addEventListener("resize", updateMaxHeight, {
        passive: true,
      });
    }
  }

  return maxMobileHeight;
}

/**
 * Reset cache - useful for testing
 */
export function resetBrowserDetectionCache(): void {
  cachedIsMobile = null;
  maxMobileHeight = null;
  isTrackingHeight = false;
}
