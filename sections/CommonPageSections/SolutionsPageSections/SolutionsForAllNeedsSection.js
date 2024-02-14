import DescriptionText from "components/Common/Typography/BodyText/DescriptionText";
import SectionTitleText from "components/Common/Typography/HeadingText/SectionTitleText";
import CustomSlider from "components/CustomSlider";
import React from "react";
import BaseBoxComponent from "../CommonSections/BaseBoxComponent";

const SolutionsForAllNeedsSection = () => {
  const data = [0, 1, 2, 3];
  return (
    <BaseBoxComponent
      boxStyle={{
        background: "#F5F9F6",
      }}
    >
      <SectionTitleText sx={{ textAlign: "center", marginBottom: "24px" }}>
        Solution for all your needs
      </SectionTitleText>
      <DescriptionText
        sx={{
          textAlign: "center",
          maxWidth: "800px",
          margin: "auto",
          marginBottom: "32px",
        }}
      >
        Ultricies convallis eget ipsum integer quam amet mauris. Tempor egestas
        mauris vitae fermentum sed massa purus egestas vitae. Vulputate
        hendrerit est posuere quam dignissim ac dolor. Ultrices.Ultricies
        convallis eget ipsum integer quam amet mauris. Tempor egestas mauris
        vitae fermentum sed massa purus egestas vitae. Vulputate hendrerit est
        posuere quam dignissim ac dolor. Ultrices.
      </DescriptionText>
      <CustomSlider data={data} title="Dolor duis neque pellentesque." />
    </BaseBoxComponent>
  );
};

export default SolutionsForAllNeedsSection;
