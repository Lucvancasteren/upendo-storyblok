'use client'

import { storyblokEditable } from "@storyblok/react/rsc";
import * as React from "react";
import Link from "next/link";

const header = ({ blok }) => (
  <div className="Artikelen_header" {...storyblokEditable(blok)}>
    <h1 className="Artikelen_titel" style={{ fontFamily: 'Area Normal', fontWeight: '300' }}>{blok.artikelen_titel}</h1>
    <img className="w-[95vw] mt-5" src={blok.Artikelen_lijn.filename} alt="Artikelen lijn" />
  </div>
);

export default function HeaderComponent({ blok = {
  logo: { filename: '/placeholder.svg?height=96&width=96' },
  nav_links: [
    { url: { url: '#' }, label: 'Home' },
    { url: { url: '#' }, label: 'About us' },
    { url: { url: '#' }, label: 'Services' },
    { url: { url: '#' }, label: 'Pricing' },
    { url: { url: '#' }, label: 'Training' }
  ],
  artikelen_titel: 'Welkom bij Artikelen',
  Artikelen_lijn: { filename: '/placeholder-line.svg' }
}}) {
  return (
    <header className="bg-[#002626] text-white h-[100px] flex items-center justify-center px-4"> {/* Flexbox voor centrering */}
      <nav className="flex items-center justify-center w-full">
        {/* Logo aan de linkerzijde */}
        {blok.logo && (
          <img
            src={blok.logo.filename}
            alt="Logo"
            className="absolute left-10 object-contain"
            style={{ height: '', width: 'auto', maxHeight: '40px' }}
          />
        )}
        {/* Navigatiewoorden in het midden */}
        <ul className="flex flex-row text-white gap-12 justify-center items-center">
          {Array.isArray(blok.nav_links) ? (
            blok.nav_links.map((link, index) => (
              <li key={index} style={{ fontWeight: '300' }}>
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
              <li style={{ fontWeight: '300' }}>
                <Link
                  href="/about-us"
                  className="hover:text-[#F4C5FF] transition-colors duration-300"
                >
                  about us
                </Link>
              </li>
              <li style={{ fontWeight: '300' }}>
                <Link
                  href="/services"
                  className="hover:text-[#F4C5FF] transition-colors duration-300"
                >
                  services
                </Link>
              </li>
              <li style={{ fontWeight: '300' }}>
                <Link
                  href="/pricing"
                  className="hover:text-[#F4C5FF] transition-colors duration-300"
                >
                  pricing
                </Link>
              </li>
              <li style={{ fontWeight: '300' }}>
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
        
      </nav>
    </header>
  );
}
