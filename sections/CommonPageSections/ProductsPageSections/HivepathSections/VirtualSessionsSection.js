import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import CardDescription from "components/Common/Typography/BodyText/CardDescription";
import DescriptionText from "components/Common/Typography/BodyText/DescriptionText";
import SectionTitleText from "components/Common/Typography/HeadingText/SectionTitleText";
import React from "react";
import BaseBoxComponent from "sections/CommonPageSections/CommonSections/BaseBoxComponent";

//images
import img1 from "public/assets/products/hivepath/sessions/img1.png";
import img2 from "public/assets/products/hivepath/sessions/img2.png";
import img3 from "public/assets/products/hivepath/sessions/img3.png";
import img4 from "public/assets/products/hivepath/sessions/img4.png";
import AppImage from "components/Common/AppImage";
const VirtualSessionsSection = () => {
	return (
		<BaseBoxComponent
			boxStyle={{
				background: "#0B3948",
				textAlign: "center",
			}}
		>
			<Box sx={{ maxWidth: "600px", margin: "auto" }}>
				<SectionTitleText sx={{ color: "white" }}>
					Schedule smooth 1:1 virtual sessions
				</SectionTitleText>
				<DescriptionText sx={{ color: "white", marginTop: "32px" }}>
					Explore our networks, find interesting topics, and schedule
					1:1 virtual meetings from anywhere around the world.
				</DescriptionText>
			</Box>
			<Box sx={{ marginTop: "48px" }}>
				<Grid container spacing={4}>
					{data.map((item, index) => {
						const { title, imageSrc } = item;
						return (
							<Grid key={index} item md={6} xs={12}>
								<AppImage src={imageSrc} />
								<CardDescription sx={{ color: "white" }}>
									{title}
								</CardDescription>
							</Grid>
						);
					})}
				</Grid>
			</Box>
		</BaseBoxComponent>
	);
};

export default VirtualSessionsSection;

const data = [
	{
		title: "Select your preferred time slot or join a waitlist.",
		imageSrc: img1,
	},
	{
		title: "Ask questions & add a note for the Host.",
		imageSrc: img2,
	},
	{
		title: "Send your request & easily track its status. ",
		imageSrc: img3,
	},
	{
		title: "Post reviews & receive feedback from your network. ",
		imageSrc: img4,
	},
];
