import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"]});

export default function AnimeList({ api }) {

  return (
    <div className="p-2 grid gap-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {api ? (api.data?.map((anime, index) => {
        return (
          <Link key={index} href={`/anime/${anime.mal_id}`} className="group flex flex-col gap-1">
            <Image
              src={anime.images.webp.image_url}
              alt={anime.images.jpg.image_url}
              width={250}
              height={250}
              className="h-[200px] xs:h-[250px] xl:h-[300px] 2xl:h-[350px] w-full group-hover:scale-[102%] transition ease-linear duration-150"
            />
            <h1 className={`text-xs lg:text-lg w-full text-center ${inter.className}`}>{anime.title}</h1>
          </Link>
        );
      })): <p>Tidak ada anime</p>}
    </div>
  );
}