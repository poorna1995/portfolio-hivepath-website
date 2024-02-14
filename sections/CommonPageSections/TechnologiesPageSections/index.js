import { Box, Container } from "@mui/material";
import FooterCard from "components/AppFooter/FooterCard";
import React from "react";
import ChippedtabContentComponent from "./ChippedTabContentComponent";
import TabbedContentComponent from "./TabbedContentComponent";
import ThreeColumnComponent from "./ThreeColumnComponent";
import TwoColumnContentWithOneColumnImageComponent from "./TwoColumnContentWithOneColumnImageComponent";
import TwoColumnContentGrid from "./TwoColumnContentGrid";
import TwoColumnWithAccordionComponent from "./TwoColumnWithAccordionComponent";

const TechnologiesPageSections = () => {
  return (
    <Box sx={{ marginTop: "64px" }}>
      {/* Add Technology Related Sections here */}
      <TwoColumnContentWithOneColumnImageComponent />
      <TwoColumnContentGrid />
      <TabbedContentComponent />
      <TwoColumnWithAccordionComponent />
      <ChippedtabContentComponent />
      <ThreeColumnComponent />
      <Container sx={{ paddingTop: "64px" }}>
        <FooterCard />
      </Container>
    </Box>
  );
};

export default TechnologiesPageSections;
