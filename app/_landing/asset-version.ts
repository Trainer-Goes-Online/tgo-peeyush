/* Bump in the same pass as any artwork replaced under an existing filename:
   the path is the cache key in the browser, the CDN and Next's image
   optimizer, and all three keep serving the old bytes otherwise.
   v2: 7 Oct 2026, breath-healing rebuild. */
export const ASSET_V = '2';

export const asset = (path: string) => `${path}?v=${ASSET_V}`;
