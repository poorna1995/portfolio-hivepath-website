/* eslint-disable react/no-unescaped-entities */
import { Box, Grid } from "@mui/material";
import CardDescription from "components/Common/Typography/BodyText/CardDescription";
import DescriptionText from "components/Common/Typography/BodyText/DescriptionText";
import CardTitle from "components/Common/Typography/HeadingText/CardTitle";
import SectionTitleText from "components/Common/Typography/HeadingText/SectionTitleText";
import React from "react";

const ContactUsDetailsSection = () => {
	return (
		<Box sx={{ marginTop: "32px" }}>
			<SectionTitleText>
				We design and make concrete products.
			</SectionTitleText>
			<DescriptionText>
				Ultricies convallis eget ipsum integer quam amet mauris. Tempor
				egestas mauris vitae fermentum sed massa purus egestas vitae.
				Vulputate hendrerit est posuere quam dignissim ac dolor
			</DescriptionText>
			<Grid container sx={{ marginTop: "96px" }}>
				<Grid item xs={6}>
					<CardTitle>Let's Talk</CardTitle>
					<CardDescription>email@hivepath.io</CardDescription>
				</Grid>
				<Grid item xs={6}>
					<CardTitle>Call Us</CardTitle>
					<CardDescription>+91 99999 88888</CardDescription>
				</Grid>
			</Grid>
		</Box>
	);
};

export default ContactUsDetailsSection;
