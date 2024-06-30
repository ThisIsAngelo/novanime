import Score from "@/components/Utilities/Score";
import { getAnimeResponse, getNestedAnimeResponse } from "@/libs/api-libs";
import Image from "next/image";
import { Inter } from "next/font/google";
import VideoPlayer from "@/components/Utilities/VideoPlayer";
import CollectionButton from "@/components/AnimeList/CollectionButton";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import CommentBox from "@/components/AnimeList/CommentBox";
import CommentInput from "@/components/AnimeList/CommentInput";
const inter = Inter({ subsets: ["latin"] });

export default async function Page({ params: { id } }) {
  const anime = await getAnimeResponse(`anime/${id}`);
  const scoredBy = anime.data.scored_by;
  const formatedScoredBy = scoredBy?.toLocaleString() ?? "0";

  const user = await authUserSession();
  const collection = await prisma.collection.findFirst({
    where: {
      user_email: user?.email,
      anime_mal_id: id,
    },
  });

  return (
    <div className="mt-[10vh] p-2 flex flex-col gap-6 ">
      {/* Title */}
      <div className="w-full p-2 border-2 border-color-primary rounded-md">
        <h1 className="text-base  font-bold xl:text-lg 2xl:text-xl lg:text-base ">
          {anime.data.title}
        </h1>
        <h3 className="text-sm xl:text-base 2xl:text-lg lg:text-sm">
          {anime.data.title_english}
        </h3>
      </div>
      {/* Anime Detail */}
      <div
        className={`${inter.className} flex flex-col lg:flex-row gap-4 lg:gap-2 before:content-[''] before:border-t-2 before:border-color-primary before:block before:mb-2 before:scale-75`}
      >
        <div className="relative w-full flex justify-center lg:h-[20rem] xl:h-[25rem] 2xl:h-[30rem] lg:w-1/4">
          <Image
            src={anime.data.images.webp.image_url}
            alt={anime.data.images.jpg.image_url}
            width={250}
            height={450}
            className="w-full xs:w-3/4 sm:w-1/2 md:w-[40%] lg:w-full h-[25rem] lg:h-full rounded-md transition ease-linear duration-300"
          />
          {user && (
            <CollectionButton
              anime_mal_id={id}
              anime_image={anime.data.images.webp.image_url}
              anime_title={anime.data.title}
              user_email={user?.email}
              collections={collection}
            />
          )}
        </div>
        <div className="w-full lg:w-3/4 lg:h-[20rem] xl:h-[25rem] 2xl:h-[30rem] p-2 bg-color-secondary rounded-md">
          <div className="flex justify-around sm:justify-start gap-2 mb-2">
            {/* Score */}
            <div className="flex flex-col items-center w-[35%] sm:w-[20%] xl:w-[15%] p-2 border-2 border-color-stars rounded-md">
              <h1 className="text-xl flex flex-col font-bold leading-tight 2xl:text-2xl">
                SCORE
                <span className="text-center text-color-light mt-[2px]">
                  {anime.data.score}
                </span>
              </h1>
              <p className="text-sm mt-2 text-color-subHeading text-center 2xl:text-base">
                ({formatedScoredBy} users)
              </p>
            </div>
            {/* Rank */}
            <h2 className="flex flex-col items-center w-[30%] sm:w-[20%] xl:w-[15%] text-lg p-2 border-2 border-color-primary rounded-md lg:text-base xl:text-lg 2xl:text-xl text-color-light">
              <span className="text-color-light">Ranked</span> #
              {anime.data.rank}
            </h2>
            {/* Type & Season & Year */}
            <h1 className="flex flex-col items-center w-[30%] sm:w-[20%] xl:w-[15%] px-1 py-2 border-2 border-color-primary rounded-md text-lg lg:text-base xl:text-lg 2xl:text-xl">
              {anime.data.type}
              <p className="first-letter:uppercase text-center text-base xs:text-lg">
                {anime.data.season} {anime.data.year}
              </p>
            </h1>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-2 xl:gap-4 2xl:gap-6 w-full">
            {/* Producer */}
            <div className="">
              <h1 className="text-lg lg:text-base xl:text-lg 2xl:text-xl text-color-subHeading">
                Producers:
              </h1>
              <h2 className="text-base lg:text-sm xl:text-base 2xl:text-lg">
                {anime.data.producers
                  .map((producer) => producer.name)
                  .join(", ")}
              </h2>
            </div>
            {/* Studios */}
            <div className="">
              <h1 className="text-lg lg:text-base xl:text-lg 2xl:text-xl text-color-subHeading">
                Studios:
              </h1>
              <h2 className="text-base lg:text-sm xl:text-base 2xl:text-lg">
                {anime.data.studios[0]?.name}
              </h2>
            </div>
            {/* Source */}
            <div className="">
              <h1 className="text-lg lg:text-base xl:text-lg 2xl:text-xl text-color-subHeading">
                Source:
              </h1>
              <h2 className="text-base lg:text-sm xl:text-base 2xl:text-lg">
                {anime.data.source}
              </h2>
            </div>
            {/* Episode */}
            <div className="">
              <h1 className="text-lg lg:text-base xl:text-lg 2xl:text-xl text-color-subHeading">
                Episode:
              </h1>
              <h2 className="text-base lg:text-sm xl:text-base 2xl:text-lg">
                {anime.data.episodes}
              </h2>
            </div>
            {/* Duration Per Episode */}
            <div className="">
              <h1 className="text-lg lg:text-base xl:text-lg 2xl:text-xl text-color-subHeading">
                Duration:
              </h1>
              <h2 className="text-base lg:text-sm xl:text-base 2xl:text-lg">
                {anime.data.duration}
              </h2>
            </div>
            {/* Status */}
            <div className="">
              <h1 className="text-lg lg:text-base xl:text-lg 2xl:text-xl text-color-subHeading">
                Status:
              </h1>
              <h2 className="text-base lg:text-sm xl:text-base 2xl:text-lg">
                {anime.data.status}
              </h2>
            </div>
            {/* Genre */}
            <div className="">
              <h1 className="text-lg lg:text-base xl:text-lg 2xl:text-xl text-color-subHeading">
                Genre:
              </h1>
              <h2 className="text-base lg:text-sm xl:text-base 2xl:text-lg">
                {anime.data.genres.map((genre) => genre.name).join(", ")}
              </h2>
            </div>
            {/* Rating */}
            <div className="">
              <h1 className="text-lg lg:text-base xl:text-lg 2xl:text-xl text-color-subHeading">
                Rating:
              </h1>
              <h2 className="text-base lg:text-sm xl:text-base 2xl:text-lg">
                {anime.data.rating}
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col xl:flex-row gap-6">
        {/* Trailer & Synopsis Anime */}
        <div className="flex flex-col gap-2 w-full xl:w-1/2">
          <div className="w-full flex justify-center">
            <h1 className="text-color-light font-bold">Trailer & Synopsis</h1>
          </div>
          <div className="w-full border-2 border-color-primary rounded-md p-2 flex flex-col xl:gap-3">
            <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
            <div className="xl:h-[55vh] 2xl:h-[56vh] overflow-y-scroll">
              <p
                className={`${inter.className} w-full text-justify lg:text-lg`}
              >
                {anime.data.synopsis}
              </p>
            </div>
          </div>
        </div>
        {/* Comment Box */}
        <div className="flex flex-col gap-4 w-full xl:w-1/2">
          <div className="w-full flex justify-center">
            <h1 className="text-color-light font-bold">Comment</h1>
          </div>
          {/* Comment Input */}
          <CommentInput
            anime_mal_id={id}
            anime_title={anime.data.title}
            user_email={user?.email}
            username={user?.name}
            profile_image={user?.image}
          />
          {/* Comment Area */}
          <CommentBox anime_mal_id={id} />
        </div>
      </div>
    </div>
  );
}
