"use client"
import { useRouter } from "next/navigation";

export default function Page() {
    const router = useRouter()
    return (
        <div className="h-[90vh] mt-[10vh] flex flex-col gap-2 w-full justify-center items-center">
            <h1 className="text-xl font-bold">4 0 4 | <span className="text-color-primary">NOT FOUND</span></h1>
            <button onClick={() => router.back()} className="text-base hover:text-color-primary transition ease-linear duration-150">Back</button>
        </div>
    )
}