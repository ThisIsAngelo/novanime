import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import Header from "@/components/Dashboard/Header";

const inter = Inter({ subsets: ["latin"] });

export default async function Page() {
  const user = await authUserSession();
  const collection = await prisma.collection.findMany({
    where: {
      user_email: user.email,
    },
  });
  return (
    <div className="mt-[10vh]">
      <Header title="My Collection" />
      <div className="p-2 grid gap-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {collection ? (
          collection.map((collect, index) => {
            return (
              <Link
                key={index}
                href={`/anime/${collect.anime_mal_id}`}
                className="group flex flex-col gap-1"
              >
                <Image
                  src={collect.anime_image}
                  alt="..."
                  width={250}
                  height={250}
                  className="h-[200px] xs:h-[250px] xl:h-[300px] 2xl:h-[350px] w-full group-hover:scale-[102%] transition ease-linear duration-150"
                />
                <h1
                  className={`text-xs lg:text-lg w-full text-center ${inter.className}`}
                >
                  {collect.anime_title}
                </h1>
              </Link>
            );
          })
        ) : (
          <p>Tidak ada anime</p>
        )}
      </div>
    </div>
  );
}
