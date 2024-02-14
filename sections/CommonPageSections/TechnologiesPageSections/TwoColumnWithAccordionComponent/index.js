import { Box, Grid, Typography } from "@mui/material";
import CustomizedAccordions from "components/Common/Accordion/CustomAccordion";
import React from "react";
import placeholderImage from "public/assets/card/acc_placeholder.png";
import AppImage from "components/Common/AppImage";
import SectionTitleText from "components/Common/Typography/HeadingText/SectionTitleText";
import DescriptionText from "components/Common/Typography/BodyText/DescriptionText";
import ReusableQuoteComponent from "../../CommonSections/ReusableQuoteComponent";
import BaseBoxComponent from "../../CommonSections/BaseBoxComponent";
import TwoColumnGridComponent from "sections/CommonPageSections/CommonSections/TwoColumnGridComponent";

const TwoColumnWithAccordionComponent = ({ content }) => {
	const { title, description, data } = content;
	return (
		<BaseBoxComponent
			boxStyle={{
				background: "#F5F9F6",
			}}
		>
			<SectionTitleText
				sx={{
					fontWeight: 800,
					fontSize: "36px",
					lineHeight: " 66px",
					color: "#2E3749",
				}}
			>
				{title || `API Architecture`}
			</SectionTitleText>
			<DescriptionText
				sx={{
					fontSize: "16px",
					lineHeight: " 28px",
					color: "#1f1f1f",
					maxWidth: "800px",
				}}
			>
				{description ||
					`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
				tellus in odio aliquam viverra. Elit aliquam natoque morbi
				malesuada tempus, at.
			`}
			</DescriptionText>

			<TwoColumnGridComponent
				leftComponent={<CustomizedAccordions data={data} />}
				rightComponent={<AppImage src={placeholderImage} />}
			/>
			<ReusableQuoteComponent />
		</BaseBoxComponent>
	);
};

export default TwoColumnWithAccordionComponent;

// const accordionData =
