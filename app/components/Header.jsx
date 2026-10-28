"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { contact, navLinks } from "../data";
import SocialIcons from "./SocialIcons";
import { CloseIcon, MenuIcon, SearchIcon } from "./Icons";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header>
      {/* Top bar (hidden on mobile, like the original) */}
      <div className="hidden bg-brand px-[70px] py-[10px] text-white md:block">
        <div className="flex items-center justify-between">
          <p className="text-[15px]">
            ☏ {contact.phone}&nbsp;&nbsp;&nbsp; ✉ {contact.email}
          </p>
          <SocialIcons small />
        </div>
      </div>

      {/* Main header row */}
      <div className="relative bg-white px-[10px] md:px-[70px]">
        <div className="grid grid-cols-[1fr_auto] items-center gap-4 py-[10px] lg:grid-cols-[1fr_auto_1fr]">
          <Link href="/" className="block w-[150px] md:w-[200px]">
            <Image
              src="/images/psm-logo.webp"
              alt="PSM Spices"
              width={811}
              height={362}
              priority
              className="h-auto w-full"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden justify-center lg:flex">
            <ul className="flex">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={`block px-[12px] py-[15px] text-[14px] font-semibold whitespace-nowrap transition-colors hover:text-brand ${
                      pathname === href ? "text-brand" : "text-black"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Search */}
          <form
            action="/"
            role="search"
            className="hidden justify-end md:flex lg:justify-end"
          >
            <label className="relative block w-full max-w-[280px]">
              <span className="sr-only">Search</span>
              <span className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-white">
                <SearchIcon className="h-4 w-4" />
              </span>
              <input
                type="search"
                name="s"
                placeholder="Search..."
                className="h-10 w-full rounded-[30px] bg-brand pr-4 pl-11 text-[14px] text-white outline-none placeholder:text-white"
              />
            </label>
          </form>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={open}
            className="justify-self-end p-2 text-black lg:hidden"
          >
            {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <nav className="absolute inset-x-0 top-full z-50 bg-white shadow-md lg:hidden">
            <ul>
              {navLinks.map(({ label, href }) => (
                <li key={href} className="border-b border-[#c4c4c4] last:border-b-0">
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    className={`block px-[15px] py-[15px] font-semibold hover:text-brand ${
                      pathname === href ? "text-brand" : "text-black"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
