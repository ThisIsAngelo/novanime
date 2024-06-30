"use client";
import { ArrowCircleLeft } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

export default function Header({ title }) {
  const router = useRouter();

  function handleBack(e) {
    e.preventDefault();
    router.back();
  }
  return (
    <div className="h-[5vh] flex items-center justify-between">
      <div>
        <button onClick={handleBack}>
          <ArrowCircleLeft className="text-[30px] hover:text-color-primary transition ease-linear duration-150" />
        </button>
      </div>
      <div>
        <h1 className="text-base">{title}</h1>
      </div>
    </div>
  );
}
