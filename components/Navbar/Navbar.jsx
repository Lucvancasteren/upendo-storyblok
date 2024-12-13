"use client";

import { storyblokEditable } from "@storyblok/react/rsc";
import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Search, User } from "lucide-react";

export default function Navbar({
  blok = {
    logo: { filename: "/placeholder.svg?height=96&width=96" },
    nav_links: [
      { url: { url: "#" }, label: "About" },
      { url: { url: "#" }, label: "Services" },
      { url: { url: "#" }, label: "Pricing" },
      { url: { url: "#" }, label: "Training" },
      { url: { url: "#" }, label: "Home" },
      { url: { url: "# " }, label: "Login" },
    ],
    artikelen_titel: "Welkom bij Artikelen",
    Artikelen_lijn: { filename: "/placeholder-line.svg" },
    contactbutton: true,
    flag: { filename: "/flag1.svg" },
    flagDutch: { filename: "/flagDutch.svg" },
    user: { filename: "/user-placeholder.svg?height=32&width=32" },
  },
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [flagSrc, setFlagSrc] = useState("/placeholder.svg"); // Fallback initialisatie
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    if (blok.flag?.filename) {
      setFlagSrc(blok.flag.filename);
    }
  }, [blok.flag]);

  const toggleFlag = () => {
    setFlagSrc((prevSrc) =>
      prevSrc === blok.flag.filename
        ? blok.flagDutch.filename
        : blok.flag.filename
    );
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  return (
    <header className="bg-[#002626] text-white h-[100px]">
      <div className="max-w-[1440px] mx-auto px-4 h-full">
        <nav className="grid grid-cols-[auto_1fr_auto] items-center h-full">
          {/* Logo aan de linkerzijde */}
          <div className="flex-shrink-0 ml-4">
            {blok.logo && (
              <Link href="/home">
                <img
                  src={blok.logo.filename}
                  alt="Logo"
                  className="object-contain h-[24px] sm:h-[32px] md:h-[36px] lg:h-[40px]"
                />
              </Link>
            )}
          </div>

          {/* Navigatiewoorden */}
          <ul
            className={`fixed lg:static top-0 left-0 w-full h-full bg-[#002626] text-white flex flex-col lg:flex-row gap-6 lg:gap-12 justify-start lg:justify-center items-start lg:items-center transition-transform duration-300 ease-in-out ${
              menuOpen ? "translate-y-0" : "-translate-y-full"
            } lg:translate-y-0`}
            style={{ zIndex: 10, paddingTop: menuOpen ? "250px" : "0" }}
          >
            {Array.isArray(blok.nav_links) ? (
              blok.nav_links.map((link, index) => (
                <li
                  key={index}
                  className="font-light text-2xl px-6 lg:px-0 lg:text-center text-left"
                >
                  <Link
                    href={link.url.url}
                    className={`transition-colors duration-300 ${
                      menuOpen
                        ? "bg-gradient-to-r from-[#EAFFBD] to-[#F4C5FF] text-transparent bg-clip-text"
                        : "hover:text-[#F4C5FF]"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))
            ) : (
              <>
                <li className="font-light text-2xl px-6 lg:px-0 lg:text-center text-left">
                  <Link
                    href="/about-us"
                    className="hover:text-[#F4C5FF] transition-colors duration-300"
                  >
                    About us
                  </Link>
                </li>
                <li className="font-light text-2xl px-6 lg:px-0 lg:text-center text-left">
                  <Link
                    href="/services"
                    className="hover:text-[#F4C5FF] transition-colors duration-300"
                  >
                    Services
                  </Link>
                </li>
                <li className="font-light text-2xl px-6 lg:px-0 lg:text-center text-left">
                  <Link
                    href="/pricing"
                    className="hover:text-[#F4C5FF] transition-colors duration-300"
                  >
                    Pricing
                  </Link>
                </li>
                <li className="font-light text-2xl px-6 lg:px-0 lg:text-center text-left">
                  <Link
                    href="/training"
                    className="hover:text-[#F4C5FF] transition-colors duration-300"
                  >
                    Training
                  </Link>
                </li>
              </>
            )}
          </ul>

          {/* Contact Button, Search, Flag, and Hamburger menu */}
          <div
            className="flex items-center ml-auto space-x-4"
            style={{ zIndex: 20 }}
          >
            {blok.contactbutton && (
              <div className="hidden lg:flex items-center space-x-4">
                <button
                  onClick={toggleSearch}
                  className="text-white focus:outline-none mr-2"
                  aria-label="Toggle search"
                >
                  <Search className="w-5 h-5" />
                </button>
                <Image
                  src={flagSrc}
                  alt="Flag"
                  width={24}
                  height={24}
                  className="w-6 h-auto cursor-pointer"
                  onClick={toggleFlag}
                  priority
                />
                <Link
                  href="/contact"
                  className="inline-block bg-[#F4C5FF] text-[#002626] px-4 py-2 rounded-md font-medium hover:bg-opacity-90 transition-colors duration-300"
                >
                  Contact
                </Link>
                <div className="relative w-8 h-8 ml-2">
                  <Link href="/login">
                    <Image
                      src={blok.user.filename}
                      alt="User profile"
                      width={32}
                      height={32}
                      className="rounded-t-lg rounded-b-none"
                    />
                  </Link>
                </div>
              </div>
            )}
            <div className="lg:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-white focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="url(#gradient)"
                >
                  <defs>
                    <linearGradient
                      id="gradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#EAFFBD" />
                      <stop offset="100%" stopColor="#F4C5FF" />
                    </linearGradient>
                  </defs>
                  {menuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </div>
      {/* Search bar */}
      <div
        className={`absolute top-[100px] left-0 w-full bg-[#002626] transition-all duration-300 ease-in-out ${
          searchOpen ? "h-16 opacity-100" : "h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="max-w-[1440px] mx-auto px-4 h-full flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-transparent border-b border-white text-white placeholder-gray-400 focus:outline-none"
            aria-label="Search"
          />
        </div>
      </div>
    </header>
  );
}
