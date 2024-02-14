import { Box, Container } from "@mui/material";
import FooterCard from "components/AppFooter/FooterCard";
import CustomSlider from "components/CustomSlider";
import React from "react";
import IndustrySolutionsSection from "./IndustrySolutionsSection";
import OtherSolutionsSection from "./OtherSolutionsSection";
import SliderWithContentRowComponent from "./SliderWithContentRowComponent";
import SolutionsForAllNeedsSection from "./SolutionsForAllNeedsSection";
import ThirdSection from "./ThirdSection";

const SolutionsPageSections = () => {
  const data = [1, 2, 3, 4];
  return (
    <Box>
      <SliderWithContentRowComponent />
      <IndustrySolutionsSection />
      <SolutionsForAllNeedsSection />
      <ThirdSection />
      <OtherSolutionsSection />
      {/* <Container sx={{ marginTop: "64px" }}>
				<FooterCard />
			</Container> */}
    </Box>
  );
};

export default SolutionsPageSections;
