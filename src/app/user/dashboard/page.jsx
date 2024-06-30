import { authUserSession } from "@/libs/auth-libs";
import Image from "next/image";
import Link from "next/link";

export default async function Page() {
    const user = await authUserSession()
    return (
        <div className="h-screen flex flex-col gap-4 justify-center items-center">
            <div className="flex flex-col gap-1">
                <div className="p-2 border-2 border-color-primary rounded-md">
                    <Image src={user.image} alt="..." width={200} height={200} className="rounded-md md:w-[215px] md:h-[215px] lg:w-[250px] lg:h-[250px] 2xl:w-[300px] 2xl:h-[300px]"/>
                </div>
                <h1 className="text-center w-full font-bold xl:text-lg">{user.name}</h1>
            </div>
            <div className="flex gap-2 w-[85%] xs:w-[70%] sm:w-[60%] md:w-1/2 lg:w-[40%] 2xl:w-[30%]">
                <Link href="dashboard/collection" className="p-2 w-1/2 border-2 border-color-primary rounded-md font-bold text-xs xl:text-sm hover:bg-color-primary hover:text-color-dark text-center transition ease-linear duration-150">My Collection</Link>
                <Link href="dashboard/comment" className="p-2 w-1/2 border-2 border-color-primary rounded-md font-bold text-xs xl:text-sm hover:bg-color-primary hover:text-color-dark text-center transition ease-linear duration-150">My Comment</Link>
            </div>
        </div>
    )
}