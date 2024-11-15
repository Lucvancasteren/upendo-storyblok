'use client';

import { storyblokEditable } from "@storyblok/react/rsc";
import * as React from "react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar({ blok = {
  logo: { filename: '/placeholder.svg?height=96&width=96' },
  nav_links: [
    { url: { url: '#' }, label: 'About us' },
    { url: { url: '#' }, label: 'Services' },
    { url: { url: '#' }, label: 'Pricing' },
    { url: { url: '#' }, label: 'Training' }
  ],
  artikelen_titel: 'Welkom bij Artikelen',
  Artikelen_lijn: { filename: '/placeholder-line.svg' },
  contactbutton: true
}}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#002626] text-white h-[100px]">
      <div className="max-w-[1400px] mx-auto px-4 h-full">
        <nav className="grid grid-cols-[auto_1fr_auto] items-center h-full">
          {/* Logo aan de linkerzijde */}
          <div className="flex-shrink-0">
            {blok.logo && (
              <img
                src={blok.logo.filename}
                alt="Logo"
                className="object-contain h-[24px] sm:h-[32px] md:h-[36px] lg:h-[40px]"
              />
            )}
          </div>

          {/* Navigatiewoorden */}
          <ul
            className={`fixed lg:static top-0 left-0 w-full h-full bg-[#002626] text-white flex flex-col lg:flex-row gap-6 lg:gap-12 justify-start lg:justify-center items-start lg:items-center transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-y-0' : '-translate-y-full'} lg:translate-y-0`}
            style={{ zIndex: 10, paddingTop: menuOpen ? '250px' : '0' }} // Extra ruimte bovenaan in het hamburger-menu
          >
            {Array.isArray(blok.nav_links) ? (
              blok.nav_links.map((link, index) => (
                <li
                  key={index}
                  className={`font-light px-6 lg:px-0 lg:text-center text-left`} // Links op mobiel, gecentreerd op desktop
                >
                  <Link
                    href={link.url.url}
                    className="hover:text-[#F4C5FF] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))
            ) : (
              <>
                <li className="font-light px-6 lg:px-0 lg:text-center text-left">
                  <Link
                    href="/about-us"
                    className="hover:text-[#F4C5FF] transition-colors duration-300"
                  >
                    about us
                  </Link>
                </li>
                <li className="font-light px-6 lg:px-0 lg:text-center text-left">
                  <Link
                    href="/services"
                    className="hover:text-[#F4C5FF] transition-colors duration-300"
                  >
                    services
                  </Link>
                </li>
                <li className="font-light px-6 lg:px-0 lg:text-center text-left">
                  <Link
                    href="/pricing"
                    className="hover:text-[#F4C5FF] transition-colors duration-300"
                  >
                    pricing
                  </Link>
                </li>
                <li className="font-light px-6 lg:px-0 lg:text-center text-left">
                  <Link
                    href="/training"
                    className="hover:text-[#F4C5FF] transition-colors duration-300"
                  >
                    training
                  </Link>
                </li>
              </>
            )}
          </ul>

          {/* Contact Button and Hamburger menu */}
          <div className="flex items-center ml-auto" style={{ zIndex: 20 }}>
            {blok.contactbutton && (
              <Link
                href="/contact"
                className="hidden lg:inline-block bg-[#F4C5FF] text-[#002626] px-4 py-2 rounded-md font-medium hover:bg-opacity-90 transition-colors duration-300 mr-4"
              >
                Contact
              </Link>
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
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
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
    </header>
  );
}
