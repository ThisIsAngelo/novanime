"use client";

import { useState } from "react";
import YouTube from "react-youtube";

export default function VideoPlayer({ youtubeId }) {
  const [error, setError] = useState(false);

  const option = {
    width: "100%",
    height: "100%",
  };
  return (
    <div className="w-3/4 h-[180px] mx-auto xs:w-1/2 sm:w-[40%] md:w-[35%] lg:w-[25%] xl:w-[50%] 2xl:w-[40%] 2xl:h-[200px]">
      {error ? (
        <p className="text-color-primary text-center">Maaf, Video sedang tidak tersedia</p>
      ) : (
        <YouTube
          videoId={youtubeId}
          onReady={(event) => event.target.pauseVideo()}
          opts={option}
          onError={() => setError(true)}
          className="w-full h-full"
        />
      )}
    </div>
  );
}
