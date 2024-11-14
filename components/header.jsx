// Zorgt ervoor dat de component als client-side component wordt gerenderd in Next.js
'use client'

import { storyblokEditable } from "@storyblok/react/rsc";
import * as React from "react"; // Importeert de React-bibliotheek om React-functionaliteit te gebruiken
import Link from "next/link"; // Importeert de Link-component van Next.js voor interne navigatie

const header = ({ blok }) => (
  <div className="Artikelen_header" {...storyblokEditable(blok)}>
    <h1 className="Artikelen_titel">{blok.artikelen_titel}</h1>
    <img className="w-[95vw] mt-5" src={blok.Artikelen_lijn.filename} alt="Artikelen lijn" />
  </div>
);

export default function HeaderComponent({ blok = {
  logo: { filename: '/placeholder.svg?height=96&width=96' }, // Plaatshouder voor het logo
  nav_links: [
    { url: { url: '#' }, label: 'Home' },
    { url: { url: '#' }, label: 'About' },
    { url: { url: '#' }, label: 'Services' },
    { url: { url: '#' }, label: 'Contact' }
  ],
  artikelen_titel: 'Welkom bij Artikelen', // Default titel
  Artikelen_lijn: { filename: '/placeholder-line.svg' } // Plaatshouder voor een lijnafbeelding
}}) {
  return (
    <header className="bg-[#002626] text-white"> {/* Header-sectie met achtergrondkleur en tekstkleur ingesteld */}
      <nav className="w-full flex items-center justify-between p-2 sm:p-4"> {/* Nav-sectie die flex gebruikt voor uitlijning */}
        {blok.logo && ( // Checkt of er een logo is, als dat het geval is, rendert het de afbeelding
          <img
            src={blok.logo.filename} // De bron van de afbeelding, ingesteld op het logo-pad
            alt="Logo" // Alternatieve tekst voor de afbeelding
            className="h-12 w-12 sm:h-29 sm:w-29 object-contain mr-2 sm:mr-4 ml-4 sm:ml-4" // Klasse voor responsieve grootte en marges
          />
        )}

        <div className="flex-1 flex flex-wrap justify-start space-x-2 sm:space-x-4 ml-2 sm:ml-4"> {/* Container voor navigatielinks */}
          {blok.nav_links?.slice(0, 4).map((link, index) => ( // Itereert door de eerste vier navigatielinks
            <Link
              key={index} // Unieke key voor elke link, gebaseerd op de index
              href={link.url.url} // URL waar de link naar verwijst
              className="text-sm sm:text-lg font-semibold hover:underline py-1 sm:py-2" // Stijlen voor tekstgrootte, dikte en hover-effect
            >
              {link.label} {/* De tekst van de navigatielink */}
            </Link>
          ))}
        </div>
      </nav>
      {/* Artikelen header sectie */}
      <header blok={blok} />
    </header>
  );
}