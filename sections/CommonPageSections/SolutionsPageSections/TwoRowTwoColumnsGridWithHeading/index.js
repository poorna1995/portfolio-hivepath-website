import { Box, Stack } from "@mui/material";
import DescriptionText from "components/Common/Typography/BodyText/DescriptionText";
import SectionTitleText from "components/Common/Typography/HeadingText/SectionTitleText";
import React from "react";
import BaseBoxComponent from "sections/CommonPageSections/CommonSections/BaseBoxComponent";
import TwoRowTwoColumnGrid from "../TwoRowTwoColumnGrid";

const TwoRowTwoColumnsGridWithHeading = ({ content }) => {
	const { title, description, data } = content && content;
	return (
		<BaseBoxComponent>
			<Stack sx={{ textAlign: "center" }}>
				<SectionTitleText>
					{title || `Empower Your Real Estate Business`}
				</SectionTitleText>
				<DescriptionText sx={{ maxWidth: "800px", margin: "auto" }}>
					{description ||
						`	Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				Vehicula massa in enim luctus. Rutrum arcu.
			`}
				</DescriptionText>
			</Stack>
			<TwoRowTwoColumnGrid
				content={data}
				firstRowStyle={{
					marginTop: "-48px",
				}}
				secondRowStyle={{
					marginTop: "64px",
				}}
			/>
		</BaseBoxComponent>
	);
};

export default TwoRowTwoColumnsGridWithHeading;
