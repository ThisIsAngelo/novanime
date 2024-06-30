import Header from "@/components/Dashboard/Header";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export default async function Page() {
  const user = await authUserSession();
  const comments = await prisma.comment.findMany({
    where: { user_email: user?.email },
  });

  // Group comments by anime_title
  const groupedComments = comments.reduce((acc, comment) => {
    if (!acc[comment.anime_title]) {
      acc[comment.anime_title] = {
        anime_mal_id: comment.anime_mal_id,
        comments: [],
      };
    }
    acc[comment.anime_title].comments.push(comment);
    return acc;
  }, {});

  return (
    <div className="mt-[10vh] p-2">
      <Header title="My Comment" />
      <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mt-6">
        {Object.keys(groupedComments).map((animeTitle, index) => {
            const {anime_mal_id, comments} = groupedComments[animeTitle];
            return(
          <div key={index} className="mb-4 h-[50vh]">
            {/* Anime Title */}
            <div className="flex items-center justify-center mb-2 h-[10vh]">
              <Link href={`/anime/${anime_mal_id}`} className="text-lg font-bold text-center hover:text-color-primary transition ease-linear duration-200 sm:text-base">
                {animeTitle}
              </Link>
            </div>
            <div className="flex flex-col gap-2 h-[35vh] w-full overflow-y-scroll border-2 border-color-primary p-2 rounded-md">
              {comments.map((comment, commentIndex) => (
                <div
                  className="flex gap-2 max-h-[15vh] w-full"
                  key={commentIndex}
                >
                  {/* Profile Image */}
                  <div className="w-[15%] flex justify-center">
                    <Image
                      src={comment.profile_image}
                      alt="Profile"
                      width={50}
                      height={50}
                      className="rounded-full w-[40px] h-[40px]"
                    />
                  </div>
                  {/* Comment */}
                  <div
                    className={`${inter.className} p-2 rounded-md w-[85%] h-full bg-color-secondary overflow-y-scroll`}
                  >
                    <h1 className="text-sm font-bold text-color-primary sm:text-base">
                      {comment.username}
                    </h1>
                    <p className="text-xs sm:text-sm">{comment.comment}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )})}
      </div>
    </div>
  );
}
