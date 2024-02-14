import { Box, Grid, Typography } from "@mui/material";
import BaseCard from "components/Common/Cards/BaseCard";
import CardDescription from "components/Common/Typography/BodyText/CardDescription";
import DescriptionText from "components/Common/Typography/BodyText/DescriptionText";
import CardTitle from "components/Common/Typography/HeadingText/CardTitle";
import SectionTitleText from "components/Common/Typography/HeadingText/SectionTitleText";
import React from "react";
import { FaCalendar } from "react-icons/fa";
import BaseBoxComponent from "../CommonSections/BaseBoxComponent";

const OverviewSection = ({ content }) => {
	const { title, description, data } = content;
	// const data = [1, 2, 3];
	return (
		<BaseBoxComponent boxStyle={{ background: "#F5F9F6" }}>
			<Box sx={{ textAlign: "center" }}>
				<Typography
					sx={{
						color: "#008CCC",
						fontSize: "32px",
						lineHeight: "44px",
						fontWeight: 500,
						marginBottom: "16px",
					}}
				>
					Overview of
				</Typography>
				<SectionTitleText>{title || `Zello`}</SectionTitleText>
				<DescriptionText
					sx={{
						maxWidth: "600px",
						margin: "auto",
						marginTop: "24px",
					}}
				>
					{description ||
						`Ultricies convallis eget ipsum integer quam amet mauris.
					Tempor egestas mauris vitae fermentum sed massa purus
					egestas vitae. Vulputate hendrerit est posuere quam
					dignissim ac dolor. Ultrices.Ultricies convallis eget ipsum
					integer quam amet mauris.`}
				</DescriptionText>
			</Box>
			<Grid
				container
				// spacing={3}
				sx={{ paddingTop: "64px" }}
				// columnSpacing={4}
				// columnGap={4}
			>
				{data.map((item) => (
					<Grid key={item} md={4}>
						<BaseCard
							sx={{
								padding: "16px",
								margin: "16px",
								boxShadow: "none",
								background: "#F5F9F6",
							}}
						>
							<FaCalendar
								style={{
									fontSize: "32px",
								}}
							/>
							<CardTitle
								sx={{ marginBottom: "16px", marginTop: "16px" }}
							>
								{item.title || `Nisl convallis.`}
							</CardTitle>
							<CardDescription>
								{item.description ||
									`	Ultricies convallis eget ipsum integer quam amet
								mauris. Tempor egestasUltricies convallis eget
								ipsum integer quam amet mauris. Tempor
								egestasUltricies convallis eget ipsum integer
								quam amet mauris. Tempor egestasUltricies
								convallis eget ipsum integer
							`}
							</CardDescription>
						</BaseCard>
					</Grid>
				))}
			</Grid>
		</BaseBoxComponent>
	);
};

export default OverviewSection;
