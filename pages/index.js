import Head from "next/head";
import { Typography } from "@mui/material";
import BaseLayout from "layouts/BaseLayout";
import HeroComponent from "components/Common/HeroComponent";
import HomePageSections from "sections/HomePageSections";
export default function Home() {
  return (
    <BaseLayout>
      <HomePageSections />
    </BaseLayout>
  );
}
