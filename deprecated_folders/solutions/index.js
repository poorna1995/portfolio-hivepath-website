import HeroComponent from "components/Common/HeroComponent";
import BaseLayout from "layouts/BaseLayout";
import React from "react";
import SolutionsPageSections from "sections/SolutionsPageSections";

const SolutionsPage = () => {
  const bgColor = `rgba(9, 59, 81, 1)`;
  return (
    <BaseLayout pageTitle={`Technologies | Hivepath`} appHeaderBg={bgColor}>
      <HeroComponent heroBg={bgColor} heroTitle={`Warehouse Operations`} />
      <SolutionsPageSections />
    </BaseLayout>
  );
};

export default SolutionsPage;
