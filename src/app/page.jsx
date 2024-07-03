import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import {
  getAnimeResponse,
  getAnimeStatus,
  getNestedAnimeResponse,
  reproduce,
} from "@/libs/api-libs";

export default async function Home() {
  const topAnime = await getAnimeResponse("top/anime", "limit=10");
  let recommendAnime = await getNestedAnimeResponse(
    "recommendations/anime",
    "entry"
  );
  recommendAnime = reproduce(recommendAnime, 10);
  let completeAnime = await getAnimeStatus("anime", "complete");
  completeAnime = reproduce(completeAnime, 10);

  return (
    <div>
      <div className="mt-[10vh]">
        {/* Top-Anime */}
        <section id="top-anime">
          <Header
            title={"Top Anime"}
            linkTitle={"See More"}
            linkHref="populer"
          />
          <AnimeList api={topAnime} />
        </section>
        {/* Recommended-Anime */}
        <section id="recommend-anime">
          <Header title={"Recommended Anime"} />
          <AnimeList api={recommendAnime} />
        </section>
        {/* Complete Anime */}
        <section id="complete-anime">
          <Header
            title={"Complete Anime"}
            linkTitle={"See More"}
            linkHref="complete"
          />
          <AnimeList api={completeAnime} />
        </section>
      </div>
    </div>
  );
}
