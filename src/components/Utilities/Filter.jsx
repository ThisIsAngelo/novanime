import { Faders } from "@phosphor-icons/react";
import Link from "next/link";
import { useState } from "react";

export default function Filter({ genreApi, seasonApi }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleFilter() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="flex flex-col justify-center">
      <button onClick={handleFilter} title="Filter">
        <Faders className="hover:text-color-primary transition ease-linear duration-150" />
      </button>
      <div
        className={`absolute top-full w-[40vw] xl:w-[35vw] h-[90vh] p-2 extra-nav-rounded bg-color-dark border-2 border-r-0 border-color-primary right-0 overflow-y-scroll transition-transform ease-linear duration-200 ${
          isOpen ? "right-0" : "translate-x-full"
        }`}
      >
        {/* Genres Filter */}
        <details open={!isOpen} className="group">
          <summary className="text-xl cursor-pointer group-open:text-color-primary hover:text-color-primary transition ease-linear duration-200">
            Genres
          </summary>
          <ul className="grid grid-cols-2 2xl:grid-cols-2">
            {genreApi.data?.map((genres, index) => {
              return (
                <li
                  key={index}
                  className="flex text-sm xl:text-base 2xl:text-lg gap-1 before:content-['•'] before:block w-full hover:text-color-primary transition ease-linear duration-200"
                >
                  <Link
                    href={`/genres/${genres.mal_id}/${genres.name}`}
                    onClick={handleFilter}
                  >
                    {genres.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </details>
        {/* Season Filter */}
        <details open={!isOpen} className="group">
          <summary className="group-open:text-color-primary text-xl cursor-pointer hover:text-color-primary transition ease-linear duration-200">
            Year & Season
          </summary>
          <ul className="grid grid-cols-3 xl:grid-cols-4">
            {seasonApi.data?.map((seasons, index) => {
              return (
                <li key={index} className="text-base">
                  <details open={!isOpen}>
                    <summary className="hover:text-color-primary transition ease-linear duration-200 cursor-pointer">
                      {seasons.year}
                    </summary>
                    <ul>
                      {seasons.seasons.map((season, seasonIndex) => {
                        return (
                          <li
                            key={seasonIndex}
                            className="flex gap-1 before:content-['•'] before:block w-full"
                          >
                            <Link
                              className="hover:text-color-primary transition ease-linear duration-200"
                              onClick={handleFilter}
                              href={`/season/${seasons.year}/${season}`}
                            >
                              {season}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </details>
                </li>
              );
            })}
          </ul>
        </details>
      </div>
    </div>
  );
}
