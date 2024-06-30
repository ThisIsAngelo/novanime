"use client"
import { SignIn, SignOut } from "@phosphor-icons/react";
import Link from "next/link";

export default function Sign({ actionUrl, actionName }) {
  if (actionName === "Sign In") {
    return (
      <div className="flex">
        <Link href={actionUrl} title="Sign In" className="hover:text-color-primary transition ease-linear duration-150">
          <SignIn />
        </Link>
      </div>
    );
  } else {
    return (
      <div className="flex">
        <Link href={actionUrl} title="Sign Out" className="hover:text-color-primary transition ease-linear duration-150">
          <SignOut />
        </Link>
      </div>
    );
  }
}
