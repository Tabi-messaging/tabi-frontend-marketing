/**
 * Dashboard app (sign in, sign up, logged-in routes). Public hostname only.
 * Marketing site is often on tabi.africa; app on app.tabi.africa.
 */
const DEFAULT_DASHBOARD_ORIGIN = 'https://app.tabi.africa';

export function dashboardOrigin(): string {
  if (typeof process !== 'undefined' && process.env.NEXT_PUBLIC_APP_URL) {
    return process.env.NEXT_PUBLIC_APP_URL.replace(/\/$/, '');
  }
  return DEFAULT_DASHBOARD_ORIGIN;
}

/** Full URL to a path on the dashboard app, e.g. /login, /register, /overview */
export function dashboardUrl(path: string): string {
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${dashboardOrigin()}${p}`;
}
