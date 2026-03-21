/**
 * Load RealScout web components UMD once (no global layout script).
 * Used only by listing widgets that render `<realscout-office-listings>`.
 * @see https://em.realscout.com/widgets/realscout-web-components.umd.js
 */

const REALSCOUT_SCRIPT_URL = 'https://em.realscout.com/widgets/realscout-web-components.umd.js';
const SCRIPT_ID = 'realscout-widgets';

let loadPromise: Promise<void> | null = null;

export function loadRealScoutScript(): Promise<void> {
  if (typeof window === 'undefined') {
    return Promise.resolve();
  }

  const existing = document.getElementById(SCRIPT_ID);
  if (existing) {
    return Promise.resolve();
  }

  if (loadPromise) {
    return loadPromise;
  }

  loadPromise = new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.id = SCRIPT_ID;
    s.src = REALSCOUT_SCRIPT_URL;
    s.type = 'module';
    s.async = true;
    s.onload = () => resolve();
    s.onerror = () => {
      loadPromise = null;
      reject(new Error('Failed to load RealScout script'));
    };
    document.head.appendChild(s);
  });

  return loadPromise;
}
