import React, { useEffect, useState } from "react";
import { fetchFromTMDB, imageUrl } from "../api/tmdb";
import { Link } from "react-router-dom";

const Heroslider = () => {
  const [items, setItems] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    (async () => {
      const data = await fetchFromTMDB("trending/movie/week");
      setItems(data.results.slice(0, 5));
    })();
  }, []);

  useEffect(() => {
    if (items.length === 0) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [items]);

  return (
    <div>
      <div className="relative h-[60vh] md:h-[75vh] overflow-hidden rounded-b-lg">
        {items.map((item, i) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === activeIndex
                ? "opacity-100 z-10"
                : "opacity-0 z-0"
            }`}
            style={{
              backgroundImage: `linear-gradient(to right, rgba(6,6,7,.7), rgba(6,6,7,0.2)), url('${imageUrl(
                item.backdrop_path,
                "w780"
              )}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="max-w-6xl mx-auto h-full flex items-center p-6">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-5xl font-bold">
                  {item.title}
                </h2>

                <p className="mt-4 line-clamp-3">
                  {item.overview}
                </p>

                <div className="mt-6 flex gap-3">
                  <Link
                    to={`/movie/${item.id}`}
                    className="bg-white text-black px-4 py-2 rounded-md font-semibold"
                  >
                    Play
                  </Link>

                  <button className="bg-gray-700 px-4 py-2 rounded-md font-semibold">
                    MyList
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Heroslider;