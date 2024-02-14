import { Avatar, Grid } from "@mui/material";
import BaseCard from "components/Common/Cards/BaseCard";
import CardDescription from "components/Common/Typography/BodyText/CardDescription";
import DescriptionText from "components/Common/Typography/BodyText/DescriptionText";
import CardTitle from "components/Common/Typography/HeadingText/CardTitle";
import SectionTitleText from "components/Common/Typography/HeadingText/SectionTitleText";
import React from "react";
import { FaCube } from "react-icons/fa";
import BaseBoxComponent from "sections/CommonPageSections/CommonSections/BaseBoxComponent";

const FourColumnGrid = () => {
	const data = [1, 2, 3, 4, 5, 6];
	return (
		<BaseBoxComponent
			boxStyle={{ textAlign: "center", background: "#F5F9F6" }}
			// containerWidth="xl"
		>
			<SectionTitleText>
				Renewable Energy analytics and data
			</SectionTitleText>
			<DescriptionText
				sx={{
					maxWidth: "800px",
					margin: "auto",
					marginTop: "24px",
					marginBottom: "32px",
				}}
			>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				Vehicula massa in enim luctus. Rutrum arcu.Lorem ipsum dolor sit
				amet, consectetur adipiscing elit. Vehicula massa in enim
				luctus. Rutrum arcu.
			</DescriptionText>
			<Grid
				container
				justifyContent={"center"}
				spacing={3}
				marginTop="24px"
			>
				{data.map((item, index) => {
					return (
						<Grid key={index} item md={3}>
							<BaseCard
								sx={{
									padding: "16px",
									textAlign: "center",
								}}
							>
								<Avatar
									sx={{
										margin: "auto",
									}}
								>
									<FaCube />
								</Avatar>
								<CardTitle
									sx={{
										marginTop: "16px",
										marginBottom: "16px",
									}}
								>
									Housing
								</CardTitle>
								<CardDescription>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit. Vehicula massa in enim
									luctus. Rutrum arcu.
								</CardDescription>
							</BaseCard>
						</Grid>
					);
				})}
			</Grid>
		</BaseBoxComponent>
	);
};

export default FourColumnGrid;
