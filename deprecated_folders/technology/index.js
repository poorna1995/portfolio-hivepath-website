import HeroComponent from "components/Common/HeroComponent";
import BaseLayout from "layouts/BaseLayout";
import React from "react";
import TechnologiesPageSections from "sections/TechnologiesPageSections";

const TechnologyPage = () => {
  const bgColor = `rgba(9, 59, 81, 1)`;
  return (
    <BaseLayout pageTitle={`Technologies | Hivepath`} appHeaderBg={bgColor}>
      <HeroComponent heroBg={bgColor} />
      <TechnologiesPageSections />
    </BaseLayout>
  );
};

export default TechnologyPage;
