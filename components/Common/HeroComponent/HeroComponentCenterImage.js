import { Box, Container, Typography } from "@mui/material";
import React from "react";
import BaseBoxComponent from "sections/CommonPageSections/CommonSections/BaseBoxComponent";
import RightArrowIcon from "svg-icons/RightArrowIcon";
import AppImage from "../AppImage";
import SecondaryButton from "../Buttons/SecondaryButton";
import DescriptionText from "../Typography/BodyText/DescriptionText";
import SectionTitleText from "../Typography/HeadingText/SectionTitleText";

const HeroComponentCenterImage = ({
	heroBg,
	heroTitle,
	heroDescription,
	heroImage,
	heroStyle,
	heroButtonTitle,
}) => {
	const { heroMarginBottom } = heroStyle && heroStyle;
	return (
		<Box
			sx={{
				background: heroBg || "rgba(21, 50, 48, 1)",
				height: "100vh",
				width: "100vw",
				color: "white",
				marginBottom: heroMarginBottom || "256px",
				// paddingBottom: "64px",
			}}
		>
			<Box
				sx={{
					padding: "32px",
					paddingTop: "80px",
					textAlign: "center",
				}}
			>
				<Typography
					variant="h3"
					sx={{
						fontSize: "48px",
						lineHeight: "66px",
						fontWeight: "800",
						marginTop: "64px",

						fontFamily: "Manrope, sans-serif",
					}}
				>
					{heroTitle ||
						`	Create your digital Transformational Journey`}
				</Typography>{" "}
				<Typography
					sx={{
						margin: "auto",

						marginTop: "24px",
						marginBottom: "24px",
						maxWidth: "600px",
					}}
				>
					{heroDescription ||
						`A New Way of Networking!
Step into Hivepath to build your network in no time!
Connect, share experiences, and explore the joy of meaningful networking.`}
				</Typography>
				<SecondaryButton
					endIcon={<RightArrowIcon />}
					sx={{
						borderRadius: "60px",
						height: "60px",
					}}
					// sx={{

					// }}
				>
					{heroButtonTitle || "Get Quote"}
				</SecondaryButton>
			</Box>
			<Container sx={{}}>
				<AppImage src={heroImage} />
			</Container>
		</Box>
	);
};

export default HeroComponentCenterImage;
