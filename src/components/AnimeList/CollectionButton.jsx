"use client";
import { Star } from "@phosphor-icons/react";
import { useState } from "react";

export default function CollectionButton({
  anime_mal_id,
  user_email,
  anime_image,
  anime_title,
  collections
}) {
  const [isCollection, setIsCollection] = useState(false);
  

  async function handleCollection(e) {
    e.preventDefault();
    const data = { anime_mal_id, user_email, anime_image, anime_title };
    const response = await fetch("/api/v1/collection", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const collection = await response.json();
    console.log(collection.isCreated);
    if (collection.isCreated) {
      setIsCollection(true);
    }
    return;
  }

  return (
    <div className="absolute flex justify-end top-0 w-full xs:w-3/4 sm:w-1/2 md:w-[40%] lg:w-full">
      <button
        className="relative flex items-center p-1 bg-color-secondary radius-collection"
        title="Add To Collection"
        onClick={handleCollection}
      >
        <Star
          className={`text-4xl text-color-stars transition-all ease-in duration-300 ${
             isCollection || collections ? "opacity-0" : "opacity-100"
          }`}
          weight="regular"
        />
        <Star
          className={`absolute text-4xl text-color-stars transition-all ease-in duration-300 ${
             isCollection || collections ? "opacity-100" : "opacity-0"
          }`}
          weight="fill"
        />
      </button>
    </div>
  );
}
