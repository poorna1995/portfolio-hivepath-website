/* eslint-disable react/no-unescaped-entities */
import { Box, Grid } from "@mui/material";
import BaseCard from "components/Common/Cards/BaseCard";
import DescriptionText from "components/Common/Typography/BodyText/DescriptionText";
import SectionTitleText from "components/Common/Typography/HeadingText/SectionTitleText";
import React from "react";
import BaseBoxComponent from "sections/CommonPageSections/CommonSections/BaseBoxComponent";
import AppImage from "components/Common/AppImage";
// images
import image1 from "public/assets/products/zello/features/image1.png";
import image2 from "public/assets/products/zello/features/image2.png";
import image3 from "public/assets/products/zello/features/image3.png";
import image4 from "public/assets/products/zello/features/image4.png";
import image5 from "public/assets/products/zello/features/image5.png";

const ZelloFeaturesSection = () => {
	return (
		<BaseBoxComponent>
			<BaseCard
				sx={{
					background: "#0B3948",
					padding: "32px",
					borderRadius: "80px",
					marginTop: "64px",
				}}
			>
				<Box
					sx={{
						maxWidth: "600px",
						margin: "auto",
						textAlign: "center",
						marginTop: "32px",
					}}
				>
					<SectionTitleText sx={{ color: "white" }}>
						Surprise your friend's home screen with photo widgets
					</SectionTitleText>
					<DescriptionText sx={{ color: "white" }}>
						Explore our networks, find interesting topics, and
						schedule 1:1 virtual meetings from anywhere around the
						world.
					</DescriptionText>
				</Box>
				<Box sx={{ marginTop: "32px" }}>
					{data.map((item, index) => {
						const { imageSrc, title } = item;
						return (
							<Grid
								container
								key={index}
								alignItems="center"
								sx={{ padding: "32px 64px" }}
							>
								<Grid item xs={6}>
									<AppImage src={imageSrc} />
								</Grid>
								<Grid item xs={6} sx={{ padding: "32px" }}>
									<SectionTitleText sx={{ color: "white" }}>
										{title ||
											`Track all your Groups and their details
										in a clean list view.`}{" "}
									</SectionTitleText>
								</Grid>
							</Grid>
						);
					})}
				</Box>
			</BaseCard>
		</BaseBoxComponent>
	);
};

export default ZelloFeaturesSection;

const data = [
	{
		imageSrc: image1,
		title: `Capture memories from your Camera or Select one from your Gallery.`,
	},
	{
		imageSrc: image2,
		title: `Send pictures to multiple phone screens at the same time.`,
	},
	{
		imageSrc: image3,
		title: `Create one or multiple Groups. Add & Invite all your contacts!`,
	},
	{
		imageSrc: image4,
		title: `Track all your Groups and their details in a clean list view.`,
	},
	{
		imageSrc: image5,
		title: `Find all your shared pictures in a smooth timeline view. `,
	},
];
