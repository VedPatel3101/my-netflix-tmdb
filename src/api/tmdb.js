const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE = import.meta.env.VITE_TMDB_BASE_URL;

export async function fetchFromTMDB(endpoint, params = {}) {
  const url = new URL(`${BASE}/${endpoint}`);

  url.searchParams.set("api_key", API_KEY);

  Object.entries(params).forEach(([k, v]) =>
    url.searchParams.set(k, v)
  );

  const res = await fetch(url.toString());

  if (!res.ok) throw new Error("TMDB fetch faild");

  return res.json();
}

export const imageUrl = (path, size = "w500") =>
  path ? `https://image.tmdb.org/t/p/${size}${path}` : null;