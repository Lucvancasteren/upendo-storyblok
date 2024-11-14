"use client";

import { storyblokInit, apiPlugin, SbReactComponentsMap } from "@storyblok/react/rsc";
import Page from "./page.component";
import header from "./header";

const components = {
  page: Page,
  header: header,
};

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  components: components as SbReactComponentsMap,
});

export default function StoryblokProvider({ children }: { children: React.ReactNode }) {
  return children;
}
