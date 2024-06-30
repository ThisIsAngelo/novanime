"use client";
import { Inter } from "next/font/google";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function CommentInput({
  anime_mal_id,
  anime_title,
  user_email,
  profile_image,
  username,
}) {
  const [isCreated, setIsCreated] = useState(false);
  const [comment, setComment] = useState("");
  const router = useRouter();
  const commentRef = useRef();

  function handleInput(e) {
    setComment(e.target.value);
  }

  async function handlePosting(e) {
    e.preventDefault();
    const keyword = commentRef.current.value.trim();
    if (keyword.length < 3) {
      return alert("Komentar tidak boleh kurang dari 3 karakter");
    } else if (keyword == "") {
      return;
    } else if(!user_email) {
        router.push('/api/auth/signin')
    }else {
      const data = {
        anime_mal_id,
        anime_title,
        user_email,
        profile_image,
        username,
        comment: comment.trim()
      };
      const response = await fetch("/api/v1/comment", {
        method: "POST",
        body: JSON.stringify(data),
      });
      const postComment = await response.json();
      if (postComment.isCreated) {
        setIsCreated(true);
        setComment("");
        router.refresh();
      }
      return
    }
  }
  return (
    <div className="w-full flex items-center gap-1">
      <textarea
        type="text"
        ref={commentRef}
        value={comment}
        onChange={handleInput}
        className={`${inter.className} resize-none w-3/4 p-2 rounded-md text-sm h-[40px] text-color-dark focus:outline-color-primary`}
      />
      <button
        onClick={handlePosting}
        className="w-1/4 p-2 border-2 border-color-primary rounded-md hover:bg-color-primary hover:text-color-dark transition ease-linear duration-300"
      >
        Post
      </button>
    </div>
  );
}
