import { Container } from "@mui/material";
import FooterCard from "components/AppFooter/FooterCard";
import HeroComponent from "components/Common/HeroComponent";
import React from "react";
import KeyFeaturesSection from "./KeyFeaturesSection";
import OurWorkSection from "./OurWorkSection";
import ProcessSection from "./ProcessSection";
import WhyUsSection from "./WhyUsSection";

const HomePageSections = () => {
  return (
    <div>
      <HeroComponent />
      <Container>
        <WhyUsSection />
        {/* <OurWorkSection /> */}
        <ProcessSection />
        <KeyFeaturesSection />
        {/* <FooterCard /> */}
      </Container>
    </div>
  );
};

export default HomePageSections;
