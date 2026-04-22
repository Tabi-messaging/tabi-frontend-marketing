'use client';

import { useEffect, useState } from 'react';

/** True when `waapi_token` exists — landing page can show Dashboard. Re-checks on tab focus & storage sync. */
export function useMarketingSession(): boolean {
  const [hasToken, setHasToken] = useState(false);

  useEffect(() => {
    const read = () => {
      try {
        setHasToken(!!localStorage.getItem('waapi_token'));
      } catch {
        setHasToken(false);
      }
    };
    read();
    window.addEventListener('storage', read);
    document.addEventListener('visibilitychange', read);
    window.addEventListener('focus', read);
    return () => {
      window.removeEventListener('storage', read);
      document.removeEventListener('visibilitychange', read);
      window.removeEventListener('focus', read);
    };
  }, []);

  return hasToken;
}
