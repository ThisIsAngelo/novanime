"use client";
import Link from "next/link";
import Sign from "../Utilities/Sign";
import { UserCircle } from "@phosphor-icons/react";

export default function ActionButton({ user, actionName, actionUrl }) {
  if (user) {
    return (
      <div className="hidden w-[20%] xl:w-[15%] lg:flex items-center gap-2 text-4xl">
        <Sign actionName={actionName} actionUrl={actionUrl} />
        <Link
          href="/user/dashboard"
          className="hover:text-color-primary transition ease-linear duration-150"
        >
          <UserCircle />
        </Link>
      </div>
    );
  } else {
    return (
      <div className="hidden w-[10%] xl:w-[10%] lg:flex items-center gap-2 text-4xl">
        <Sign actionName={actionName} actionUrl={actionUrl} />
      </div>
    );
  }
}
