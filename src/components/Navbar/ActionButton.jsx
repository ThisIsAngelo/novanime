"use client";
import Link from "next/link";
import Sign from "../Utilities/Sign";
import { UserCircle } from "@phosphor-icons/react";
import Filter from "../Utilities/Filter";

export default function ActionButton({ user, actionName, actionUrl,genreApi, seasonApi }) {
  if (user) {
    return (
      <div className="hidden w-[30%] xl:w-[25%] lg:flex items-center gap-2 text-4xl">
        <Filter genreApi={genreApi} seasonApi={seasonApi}/>
        <Link
          href="/user/dashboard"
          title="Dashboard"
          className="hover:text-color-primary transition ease-linear duration-150"
        >
          <UserCircle />
        </Link>
        <Sign actionName={actionName} actionUrl={actionUrl} />
      </div>
    );
  } else {
    return (
      <div className="hidden w-[20%] lg:flex items-center gap-2 *:text-4xl">
        <Filter genreApi={genreApi} seasonApi={seasonApi}/>
        <Sign actionName={actionName} actionUrl={actionUrl} />
      </div>
    );
  }
}
