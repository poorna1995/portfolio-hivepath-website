import { Box } from "@mui/material";
import BasicTabs from "components/Common/Tabs/BasicTabs";
import DescriptionText from "components/Common/Typography/BodyText/DescriptionText";
import SectionTitleText from "components/Common/Typography/HeadingText/SectionTitleText";
import React from "react";
import BaseBoxComponent from "../../CommonSections/BaseBoxComponent";
import ReusableQuoteComponent from "sections/CommonPageSections/CommonSections/ReusableQuoteComponent";

const TabbedContentComponent = ({ content }) => {
	const { title, description, data } = content;
	return (
		<BaseBoxComponent>
			<Box
				sx={{
					textAlign: "center",
					marginTop: "32px",
					marginBottom: "32px",
				}}
			>
				<SectionTitleText sx={{ fontSize: "36px" }}>
					{title || `Android & iOS App Development`}
				</SectionTitleText>
				<DescriptionText
					sx={{
						maxWidth: "800px",
						margin: "auto",
						marginTop: "24px",
					}}
				>
					{description ||
						`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
					tellus in odio aliquam viverra. Elit aliquam natoque morbi
					malesuada tempus, at.
				`}
				</DescriptionText>
			</Box>
			<BasicTabs data={data} />
			<ReusableQuoteComponent />
		</BaseBoxComponent>
	);
};

export default TabbedContentComponent;
