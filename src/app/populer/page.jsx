"use client";
import AnimeList from "@/components/AnimeList";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";
import { getAnimeResponse } from "@/libs/api-libs";
import { useEffect, useState } from "react";

export default function Page() {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);

  async function fetchData() {
    const populerAnime = await getAnimeResponse("top/anime", `page=${page}`);
    setTopAnime(populerAnime);
  }

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <div className="mt-[10vh]">
      <HeaderMenu title={`Populer Anime ${page}`} />
      <AnimeList api={topAnime} />
      <Pagination
        page={page}
        setPage={setPage}
        lastPage={topAnime.pagination?.last_visible_page}
      />
    </div>
  );
}
