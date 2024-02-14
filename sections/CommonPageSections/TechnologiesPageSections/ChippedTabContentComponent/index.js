import { Box, Stack, Typography } from "@mui/material";
import AppImage from "components/Common/AppImage";
import ChippedTabs from "components/Common/Tabs/ChippedTabs";
import DescriptionText from "components/Common/Typography/BodyText/DescriptionText";
import SectionTitleText from "components/Common/Typography/HeadingText/SectionTitleText";
import React from "react";
import BaseBoxComponent from "../../CommonSections/BaseBoxComponent";

const ChippedtabContentComponent = ({ content }) => {
	const { title, description, data, headingAlign } = content;
	return (
		<BaseBoxComponent>
			<Stack sx={{ textAlign: headingAlign }}>
				<SectionTitleText sx={{ fontSize: "40px" }}>
					{title || `Integer Programming`}
				</SectionTitleText>
				<DescriptionText
					sx={{
						fontSize: "16px",
						maxWidth: "800px",
						margin: headingAlign && "auto",
					}}
				>
					{description ||
						`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
				tellus in odio aliquam viverra. Elit aliquam natoque morbi
				malesuada tempus, at.
			`}
				</DescriptionText>
			</Stack>
			<ChippedTabs alldata={data} />
		</BaseBoxComponent>
	);
};

export default ChippedtabContentComponent;
