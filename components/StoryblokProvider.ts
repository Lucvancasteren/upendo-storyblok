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
import Training_intro from "./Training_intro/Training_intro";
import Training_OurOptions from "./Training_OurOptions/Training_OurOptions";
import Training_CallToAction from "./Training_CallToAction/Training_CallToAction";
import Login from "./Login/Login";
import Register from "./Register/Register";
import Servicesmain from "./Servicesmain/Servicesmain";
import Contact_Formulier from "./Contact_Formulier/Contact_Formulier";
import TrainingPlanner from "./TrainingPlanner/TrainingPlanner";
import Contact_intro from "./Contact_intro/Contact_intro";
import Configurationheader from "./Configurationheader/Configurationheader";
import HomeCarousel from "./HomeCarousel/HomeCarousel";
import Configuaration_body from "./Configuaration_body/Configuaration_body";
import Configuaration_CTA from "./Configuaration_CTA/Configuaration_CTA";
import RotatingImages from "./Rotatingimages/Rotatingimages";
import Home_reviews from "./Home_reviews/Home_reviews";

const components = {
  page: Page,
  feature: Feature,
  threequarterlayout: ThreeQuarterLayout,
  navbar: Navbar,
  Footer: Footer,
  AboutUs_hero: AboutUs_hero,
  ourValues: ourValues,
  CallToAction_1: CallToAction_1,
  pricingheader: PricingHeader,
  pricingcards: PricingCards,
  HomePag_hero: HomePag_hero,
  weworkedwith_slider: weworkedwith_slider,
  Servicesheader: Servicesheader,
  OurTeamCaroussel: OurTeamCaroussel,
  Training_intro: Training_intro,
  Training_OurOptions: Training_OurOptions,
  Training_CallToAction: Training_CallToAction,
  Login: Login,
  Servicesmain: Servicesmain,
  Contact_Formulier: Contact_Formulier,
  TrainingPlanner: TrainingPlanner,
  Register: Register,
  Contact_intro: Contact_intro,
  Configurationheader: Configurationheader,
  HomeCarousel: HomeCarousel,
  Configuaration_body: Configuaration_body,
  Configuaration_CTA: Configuaration_CTA,
  RotatingImages: RotatingImages,
  Home_reviews: Home_reviews,
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
