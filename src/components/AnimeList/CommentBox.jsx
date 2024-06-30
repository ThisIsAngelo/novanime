import prisma from "@/libs/prisma";
import Image from "next/image";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default async function CommentBox({ anime_mal_id }) {
  const comments = await prisma.comment.findMany({
    where: { anime_mal_id },
  });
  return (
    <div className="p-2 w-full max-h-[50vh] xl:max-h-[75vh] overflow-y-scroll grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-2 xl:gap-4">
      {comments.map((comment) => {
        return (
          <div className="flex gap-2 max-h-[15vh] w-full " key={comment.id}>
            {/* Profile Image */}
            <div className="w-[15%] flex justify-center">
              <Image
                src={comment.profile_image}
                alt="..."
                width={50}
                height={25}
                className="rounded-[50%] w-[40px] h-[40px]"
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
        );
      })}
    </div>
  );
}
