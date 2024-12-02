"use client";

import {
  storyblokInit,
  apiPlugin,
  SbReactComponentsMap,
} from "@storyblok/react/rsc";
import Page from "./page.component";
import Feature from "./Feature/Feature";
import ThreeQuarterLayout from "./ThreeQuarterLayout/ThreeQuarterLayout";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import AboutUs_hero from "./AboutUs_hero/AboutUs_hero";
import ourValues from "./ourValues/ourValues";
import CallToAction_1 from "./CallToAction_1/CallToAction_1";
import PricingHeader from "./Pricing/PricingHeader";
import PricingCards from "./Pricing/PricingCards";
import HomePag_hero from "./HomePag_hero/HomePag_hero";
import weworkedwith_slider from "./WeWorkedWith/weworkedwith_slider"
import Servicesheader from "./Servicesheader/Servicesheader";
import OurTeamCaroussel from "./OurTeamCaroussel/OurTeamCaroussel";


const components = {
  page: Page,
  feature: Feature,
  threequarterlayout: ThreeQuarterLayout,
  navbar: Navbar,
  Footer: Footer,
  AboutUs_hero: AboutUs_hero,
  ourValues: ourValues,
  CallToAction_1 : CallToAction_1,
  pricingheader: PricingHeader,
  pricingcards: PricingCards,
  HomePag_hero: HomePag_hero,
  weworkedwith_slider:  weworkedwith_slider,
  Servicesheader: Servicesheader,
  OurTeamCaroussel: OurTeamCaroussel,
};

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  components: components as SbReactComponentsMap,
});

export default function StoryblokProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

console.log(process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN);
