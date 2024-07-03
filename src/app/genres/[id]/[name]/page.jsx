"use client";
import AnimeList from "@/components/AnimeList";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";
import { getAnimeResponse } from "@/libs/api-libs";
import { useEffect, useState } from "react";

export default function Page({ params }) {
  const [page, setPage] = useState(1);
  const [genresAnime, setGenresAnime] = useState([]);

  async function fetchData() {
    const genresAnime = await getAnimeResponse("anime", `genres=${params.id}`);
    setGenresAnime(genresAnime);
  }

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <div className="mt-[10vh]">
      <HeaderMenu title={`${params.name} Page ${page}`} />
      <AnimeList api={genresAnime} />
      <Pagination
        page={page}
        setPage={setPage}
        lastPage={genresAnime.pagination?.last_visible_page}
      />
    </div>
  );
}
