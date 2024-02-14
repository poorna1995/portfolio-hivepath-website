import { Box, Chip, Grid } from "@mui/material";
import CardDescription from "components/Common/Typography/BodyText/CardDescription";
import DescriptionText from "components/Common/Typography/BodyText/DescriptionText";
import CardTitle from "components/Common/Typography/HeadingText/CardTitle";
import SectionTitleText from "components/Common/Typography/HeadingText/SectionTitleText";
import React from "react";
import { IoMdPeople } from "react-icons/io";
import BaseBoxComponent from "sections/CommonPageSections/CommonSections/BaseBoxComponent";

const BlockchainFeaturesSection = () => {
	return (
		<BaseBoxComponent>
			<Box
				sx={{ textAlign: "center", maxWidth: "800px", margin: "auto" }}
			>
				<Chip
					label="Features"
					sx={{
						background: "#0B3948",
						color: "white",
						padding: "24px",
						paddingRight: "24px",
						paddingLeft: "24px",
						fontWeight: "700",
						fontSize: "14px",
						lineHeight: "28px",
						borderRadius: "50px",
					}}
				/>
				<SectionTitleText>Blockchain features</SectionTitleText>
				<DescriptionText>
					Lorem ipsum dolor sit amet consectetur. Morbi quam et vitae
					suspendisse malesuada quis magna id morbi. Vel in nunc
					volutpat quis.
				</DescriptionText>
			</Box>
			<Grid container spacing={4} sx={{ marginTop: "32px" }}>
				{[1, 2, 3, 4, 5].map((item) => {
					return (
						<Grid key={item} item xs={12} md={4}>
							<IoMdPeople style={{ fontSize: "32px" }} />
							<CardTitle>Decentralized</CardTitle>
							<CardDescription>
								The network is decentralized meaning it doesn’t
								have any governing authority or a single person
								looking after the framework.
							</CardDescription>
						</Grid>
					);
				})}
			</Grid>
		</BaseBoxComponent>
	);
};

export default BlockchainFeaturesSection;
