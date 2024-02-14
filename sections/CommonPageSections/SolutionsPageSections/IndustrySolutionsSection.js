import { Box, Grid, Typography } from "@mui/material";
import BaseCard from "components/Common/Cards/BaseCard";
import CardDescription from "components/Common/Typography/BodyText/CardDescription";
import DescriptionText from "components/Common/Typography/BodyText/DescriptionText";
import CardTitle from "components/Common/Typography/HeadingText/CardTitle";
import SectionTitleText from "components/Common/Typography/HeadingText/SectionTitleText";
import React from "react";
import BaseBoxComponent from "../CommonSections/BaseBoxComponent";

const IndustrySolutionsSection = ({ content }) => {
	// const data = [1, 2, 3, 4, 5];
	const { title, description, data } = content;
	return (
		<BaseBoxComponent>
			<SectionTitleText
				sx={{
					textAlign: "center",
				}}
			>
				Industries we Provide solutions for
			</SectionTitleText>
			<DescriptionText
				sx={{
					textAlign: "center",
				}}
			>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				Vehicula massa in enim luctus. Rutrum arcu.
			</DescriptionText>
			<Grid
				container
				sx={{
					justifyContent: "center",
					justifyItems: "center",
					marginTop: "32px",
				}}
				spacing={3}
			>
				{data.map((item, index) => (
					<Grid key={index} item md={4}>
						<BaseCard sx={{ padding: "16px", textAlign: "center" }}>
							<CardTitle>{item.title || `Pharma`}</CardTitle>
							<CardDescription>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Vehicula massa in enim luctus.
								Rutrum arcu.
							</CardDescription>
						</BaseCard>
					</Grid>
				))}
			</Grid>
		</BaseBoxComponent>
	);
};

export default IndustrySolutionsSection;
