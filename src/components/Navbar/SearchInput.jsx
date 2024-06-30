"use client";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function SearchInput() {
  const searchRef = useRef()
  const router = useRouter()

  function handleSearch(e) {
    const keyword = searchRef.current.value.trim()

    if(e.key === "Enter" || e.type === "click") {
      if(keyword == "") {
        return
      } else {
        router.push(`/search/${keyword}`)
      }
    }

  }
  return (
    <div className="flex justify-end gap-1 items-center w-[85%] sm:w-[90%] lg:w-[80%] xl:w-[85%] 2xl:w-[80%]">
      <input
        type="text"
        placeholder="Search"
        className="w-[85%] p-2 rounded-md text-xs text-color-dark placeholder:text-xs selection:bg-color-primary selection:text-color-light xl:text-base xl:placeholder:text-base"
        ref={searchRef}
        onKeyDown={handleSearch}
      />
      <button className="w-[15%] xl:w-[10%] hover:text-color-primary transition ease-linear duration-150" onClick={handleSearch}>
        <MagnifyingGlass className="text-4xl" />
      </button>
    </div>
  );
}
