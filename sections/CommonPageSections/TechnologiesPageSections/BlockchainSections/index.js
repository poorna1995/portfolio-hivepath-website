import { Box } from "@mui/system";
import AppImage from "components/Common/AppImage";
import SectionTitleText from "components/Common/Typography/HeadingText/SectionTitleText";
import React from "react";
import BaseBoxComponent from "sections/CommonPageSections/CommonSections/BaseBoxComponent";
import BlockchainArchitectureSection from "./BlockchainArchitectureSection";
import BlockchainChoicesSection from "./BlockchainChoicesSection";
import BlockchainFeaturesSection from "./BlockchainFeaturesSection";
import logos from "public/assets/technologies/blockchain/logo_group.png";
const BlockchainSections = () => {
	return (
		<div>
			<BlockchainFeaturesSection />
			<BlockchainArchitectureSection />
			<BlockchainChoicesSection />
			<BaseBoxComponent>
				<SectionTitleText
					sx={{
						fontSize: "18px",
						lineHeight: " 52px",
						textAlign: " center",
						letterSpacing: "2.5px",
						textTransform: "uppercase",
						color: "#2E3749",
						paddingBottom: "32px",
					}}
				>
					Technologies used for building blockchain applications
				</SectionTitleText>
				<AppImage src={logos} />
			</BaseBoxComponent>
		</div>
	);
};

export default BlockchainSections;
