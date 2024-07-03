"use client";
import Link from "next/link";
import { useState } from "react";

export default function HamburgerMenu({
  user,
  actionName,
  actionUrl,
  genreApi,
  seasonApi,
}) {
  const [isOpen, setIsOpen] = useState(false);

  function closeNavbar() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <div className="flex mb-1 w-[15%] sm:w-[10%] lg:hidden">
        {/* Using useState to make button interactive*/}
        <button
          className="relative w-10 h-10 right-0"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`block absolute h-1 w-7 bg-color-primary transition-transform duration-300 ease-in-out ${
              isOpen ? "rotate-45" : "-translate-y-2.5"
            }`}
          />
          <span
            className={`block absolute h-1 w-7 bg-color-primary transition-opacity duration-300 ease-in-out ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block absolute h-1 w-7 bg-color-primary transition-transform duration-300 ease-in-out ${
              isOpen ? "-rotate-45" : "translate-y-2.5"
            }`}
          />
        </button>
      </div>

      {/* Extra Nav */}
      <div
        className={`extra-nav-rounded absolute px-2 py-4 right-0 top-full bg-color-dark border-2 border-r-0 border-color-primary w-1/2 transition-transform ease-linear duration-150 lg:hidden ${
          isOpen ? "right-0" : "translate-x-full"
        } `}
      >
        <ul className="*:text-[15px] xs:*:text-[17px] flex flex-col gap-2">
          {user && (
            <li>
              <Link href="/user/dashboard" onClick={closeNavbar}>
                Dashboard
              </Link>
            </li>
          )}
          <li>
            <Link href={actionUrl} onClick={closeNavbar}>
              {actionName}
            </Link>
          </li>
          <li>
            <details className="group w-full">
              <summary className="text-[15px] xs:text-[17px] group-open:text-color-primary">
                Genres
              </summary>
              <ul className="ml-[1px] grid md:grid-cols-2 max-h-[25vh] overflow-y-scroll overflow-x-hidden">
                {genreApi.data?.map((genres, index) => {
                  return (
                    <li
                      key={index}
                      className="flex text-sm gap-1 before:content-['•'] before:block"
                    >
                      {/* <button onClick={handleSetId(genres.mal_id)}>{genres.name}</button> */}
                      <Link href={`/genres/${genres.mal_id}`}>
                        {genres.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </details>
          </li>
          <li>
            <details open={!isOpen} className="group w-full">
              <summary className="group-open:text-color-primary text-[15px] xs:text-[17px]">
                Season
              </summary>
              <ul className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 max-h-[25vh] w-full overflow-y-scroll">
                {seasonApi.data?.map((seasons, index) => {
                  return (
                    <li key={index} className="text-sm">
                      <details open={!isOpen}>
                        <summary className="">{seasons.year}</summary>
                        <ul>
                          {seasons.seasons.map((season, seasonIndex) => {
                            return (
                              <li
                                key={seasonIndex}
                                className="flex gap-1 before:content-['•'] before:block w-full"
                              >
                                <Link
                                  className="hover:text-color-primary transition ease-linear duration-200"
                                  onClick={closeNavbar}
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
          </li>
        </ul>
      </div>
    </div>
  );
}
