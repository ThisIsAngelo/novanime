"use client";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";
import { getAnimeResponse } from "@/libs/api-libs";
import { useEffect, useState } from "react";

export default function Page({ params }) {
  const [page, setPage] = useState(1);
  const [searchAnime, setSearchAnime] = useState([]);

  const { keyword } = params;
  const decodedKeyword = decodeURI(keyword);

  async function fetchData() {
    const response = await getAnimeResponse(
      "anime",
      `q=${decodedKeyword}&page=${page}`
    );
    setSearchAnime(response);
  }

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <div className="mt-[10vh]">
      <section>
        <Header title={`Searching for ${decodedKeyword}...`} />
        <HeaderMenu title={`Page ${page}`} />
        <AnimeList api={searchAnime} />
        <Pagination
          page={page}
          setPage={setPage}
          lastPage={searchAnime.pagination?.last_visible_page}
        />
      </section>
    </div>
  );
}
