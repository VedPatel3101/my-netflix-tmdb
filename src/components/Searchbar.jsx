import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchFromTMDB } from "../api/tmdb";

export default function Searchbar() {
  const [q, setQ] = useState("");
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  async function onSearch(e) {
    e.preventDefault();

    if (!q.trim()) return;

    try {
      const data = await fetchFromTMDB("search/movie", {
        query: q,
        include_adult: false,
      });

      setResults(data.results || []);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <form onSubmit={onSearch} className="relative">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          type="text"
          placeholder="Search movies..."
          className="bg-gray-800 px-3 py-1 rounded-md text-sm w-48 md:w-64 focus:outline-none"
        />

        {results.length > 0 && (
          <ul className="absolute right-0 mt-2 bg-gray-600 text-sm rounded-md overflow-hidden w-64 overflow-auto">
            {results.slice(0, 6).map((r) => (
              <li
                key={r.id}
                onClick={() => {
                  setResults([]);
                  navigate(`/movie/${r.id}`);
                }}
                className="px-3 py-2 hover:bg-gray-700 cursor-pointer"
              >
                {r.title} ({(r.release_date || "").slice(0, 4)})
              </li>
            ))}
          </ul>
        )}
      </form>
    </div>
  );
}