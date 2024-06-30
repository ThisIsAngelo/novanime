"use client";
import Link from "next/link";
import { useState } from "react";

export default function HamburgerMenu({ user,actionName,actionUrl }) {
  const [isOpen, setIsOpen] = useState(false);

  function closeNavbar() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <div className="flex mb-1 w-[15%] sm:w-[10%] lg:hidden">
        {/* Using useState to make button interactive*/}
        <button
          className="relative w-10 h-10 right-0"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`block absolute h-1 w-7 bg-color-primary transition-transform duration-300 ease-in-out ${
              isOpen ? "rotate-45" : "-translate-y-2.5"
            }`}
          />
          <span
            className={`block absolute h-1 w-7 bg-color-primary transition-opacity duration-300 ease-in-out ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block absolute h-1 w-7 bg-color-primary transition-transform duration-300 ease-in-out ${
              isOpen ? "-rotate-45" : "translate-y-2.5"
            }`}
          />
        </button>
      </div>

      {/* Extra Nav */}
      <div
        className={`extra-nav-rounded absolute px-2 py-4 right-0 top-full bg-color-primary w-1/2 transition-transform ease-linear duration-150 lg:hidden ${
          isOpen ? "right-0" : "translate-x-full"
        } `}
      >
        <ul className="*:text-[15px] xs:*:text-[17px] flex flex-col gap-2">
          {user && (
            <li>
              <Link href="/user/dashboard" onClick={closeNavbar}>
                Dashboard
              </Link>
            </li>
          )}
          <li>
            <Link href={actionUrl} onClick={closeNavbar}>
              {actionName}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
