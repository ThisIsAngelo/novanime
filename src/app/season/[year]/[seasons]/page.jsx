"use client";
import AnimeList from "@/components/AnimeList";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";
import { getAnimeResponse } from "@/libs/api-libs";
import { useEffect, useState } from "react";

export default function Page({ params }) {
  const [page, setPage] = useState(1);
  const [seasonAnime, setSeasonAnime] = useState([]);

  async function fetchData() {
    const seasonAnime = await getAnimeResponse(
      `seasons/${params.year}/${params.seasons}`,
      `page=${page}`
    );
    setSeasonAnime(seasonAnime);
  }

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <div className="mt-[10vh]">
      <HeaderMenu title={`${params.year} - ${params.seasons} Page ${page}`} />
      <AnimeList api={seasonAnime} />
      <Pagination
        page={page}
        setPage={setPage}
        lastPage={seasonAnime.pagination?.last_visible_page}
      />
    </div>
  );
}
