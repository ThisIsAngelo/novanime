import SearchInput from "./SearchInput";
import HamburgerMenu from "./HamburgerMenu";
import Link from "next/link";
import ActionButton from "./ActionButton";
import { authUserSession } from "@/libs/auth-libs";

export default async function NavBar() {
  const user = await authUserSession();
  const actionName = user ? "Sign Out" : "Sign In";
  const actionUrl = user ? "/api/auth/signout" : "/api/auth/signin";
  return (
    <header className="fixed w-full h-[10vh] top-0 right-0 left-0 backdrop-blur-[2px] flex items-center justify-between px-2 py-3 z-[9999]">
      {/* Logo */}
      <div className="w-1/4">
        <Link
          href="/"
          className="text-color-light font-bold text-base xl:text-xl"
        >
          Nova<span className="text-color-primary">nime</span>
        </Link>
      </div>

      <div className="w-[65%] xs:w-1/2 flex justify-end gap-4 sm:gap-2 md:w-[40%] lg:w-[35%] 2xl:w-[30%]">
        {/* Search Input */}
        <SearchInput />

        <ActionButton user={user} actionName={actionName} actionUrl={actionUrl}/>

        {/* Hamburger Menu */}
        <HamburgerMenu user={user} actionName={actionName} actionUrl={actionUrl}/>
      </div>
    </header>
  );
}
