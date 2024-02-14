import { Avatar, Box, IconButton, Stack } from "@mui/material";
import AppImage from "components/Common/AppImage";
import CardDescription from "components/Common/Typography/BodyText/CardDescription";
import DescriptionText from "components/Common/Typography/BodyText/DescriptionText";
import SectionTitleText from "components/Common/Typography/HeadingText/SectionTitleText";
import React from "react";
import { SlGlobe } from "react-icons/sl";
import BaseBoxComponent from "sections/CommonPageSections/CommonSections/BaseBoxComponent";
import TwoColumnGridComponent from "sections/CommonPageSections/CommonSections/TwoColumnGridComponent";

const TwoRowTwoColumnGrid = ({ content, firstRowStyle, secondRowStyle }) => {
	const { leftContent, rightContent } = content && content;
	return (
		<BaseBoxComponent>
			<TwoColumnGridComponent
				containerStyles={firstRowStyle}
				leftComponent={
					<ContentComponent
						data={leftContent.data}
						title={leftContent.title}
						description={leftContent.description}
					/>
				}
				rightComponent={
					<AppImage src={leftContent.image} alt={leftContent.title} />
				}
			/>
			<TwoColumnGridComponent
				containerStyles={secondRowStyle}
				leftComponent={
					<AppImage
						src={rightContent.image}
						alt={leftContent.title}
					/>
				}
				rightComponent={
					<ContentComponent
						paddingLeft={"48px"}
						data={rightContent.data}
						title={rightContent.title}
						description={rightContent.description}
					/>
				}
			/>
		</BaseBoxComponent>
	);
};

export default TwoRowTwoColumnGrid;

const ContentComponent = ({ title, description, data, paddingLeft }) => {
	return (
		<Box sx={{ paddingRight: "48px", paddingLeft: paddingLeft }}>
			<SectionTitleText>
				{title || `Porttitor tristique vel eget.`}
			</SectionTitleText>
			<DescriptionText>
				{description ||
					`	Ultricies convallis eget ipsum integer quam amet mauris. Tempor
				egestas mauris vitae fermentum sed massa purus egestas vitae.
				Vulputate hendrerit est posuere quam dignissim ac dolor.
				Ultrices.
			`}
			</DescriptionText>
			<Box sx={{ marginTop: "32px" }}>
				{data.map((item, index) => (
					<Stack
						key={index}
						direction="row"
						alignItems={"self-start"}
						sx={{ marginTop: "16px" }}
					>
						<Avatar
							sx={{
								marginRight: "16px",
								background: " rgba(51, 97, 255, 0.1)",
							}}
						>
							<SlGlobe
								style={{ color: " rgba(51, 97, 255, 0.8)" }}
							/>
						</Avatar>

						<CardDescription>
							{" "}
							{item.description ||
								`	Ultricies convallis eget ipsum integer quam amet mauris. Tempor egestas	`}
						</CardDescription>
					</Stack>
				))}
			</Box>
		</Box>
	);
};
