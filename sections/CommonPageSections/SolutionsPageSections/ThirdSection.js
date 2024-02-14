import { Box } from "@mui/material";
import AppImage from "components/Common/AppImage";
import DescriptionText from "components/Common/Typography/BodyText/DescriptionText";
import SectionTitleText from "components/Common/Typography/HeadingText/SectionTitleText";
import React from "react";
import placeholderImage from "public/assets/card/acc_placeholder.png";
import BaseBoxComponent from "../CommonSections/BaseBoxComponent";
import TwoColumnGridComponent from "../CommonSections/TwoColumnGridComponent";

const ThirdSection = () => {
  return (
    <BaseBoxComponent>
      <TwoColumnGridComponent
        leftComponent={<LeftComponent />}
        rightComponent={<AppImage src={placeholderImage} />}
      />
    </BaseBoxComponent>
  );
};

export default ThirdSection;

const LeftComponent = () => {
  return (
    <Box>
      <SectionTitleText>Porttitor tristique vel eget.</SectionTitleText>
      <DescriptionText>
        Ultricies convallis eget ipsum integer quam amet mauris. Tempor egestas
        mauris vitae fermentum sed massa purus egestas vitae. Vulputate
        hendrerit est posuere quam dignissim ac dolor. Ultrices.
      </DescriptionText>
    </Box>
  );
};
const RightComponent = () => {
  return <Box></Box>;
};
