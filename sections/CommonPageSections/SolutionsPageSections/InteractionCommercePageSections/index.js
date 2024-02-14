import AppImage from "components/Common/AppImage";
import SectionTitleText from "components/Common/Typography/HeadingText/SectionTitleText";
import React from "react";
import BaseBoxComponent from "sections/CommonPageSections/CommonSections/BaseBoxComponent";
import SoftwareTechnologiesSection from "./SoftwareTechnologiesSection";
import TypesOfTechnologiesSection from "./TypesOfTechnologiesSection";
import companyLogos from "public/assets/solutions/interaction-commerce/companies-logos.png";
const InteractionCommercePageSections = () => {
	return (
		<div>
			<BaseBoxComponent>
				<SectionTitleText
					sx={{ textAlign: "center", marginBottom: "32px" }}
				>
					PLATFORMS PROVIDING 3D MODELS PREVIEW
				</SectionTitleText>
				<AppImage src={companyLogos} />
			</BaseBoxComponent>
			<TypesOfTechnologiesSection />
			<SoftwareTechnologiesSection />
		</div>
	);
};

export default InteractionCommercePageSections;
