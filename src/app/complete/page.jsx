"use client";
import AnimeList from "@/components/AnimeList";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";
import { getAnimeResponse } from "@/libs/api-libs";
import { useEffect, useState } from "react";

export default function Page() {
  const [page, setPage] = useState(1);
  const [completeAnime, setComplete] = useState([]);

  async function fetchData() {
    const completeAnime = await getAnimeResponse("anime", `status=complete&page=${page}`);
    setComplete(completeAnime);
  }

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <div className="mt-[10vh]">
      <HeaderMenu title={`Complete Anime ${page}`} />
      <AnimeList api={completeAnime} />
      <Pagination
        page={page}
        setPage={setPage}
        lastPage={completeAnime.pagination?.last_visible_page}
      />
    </div>
  );
}
