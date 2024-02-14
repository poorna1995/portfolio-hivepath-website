import { Box, Card, Grid, Stack, Typography } from "@mui/material";
import AppImage from "components/Common/AppImage";
import SecondaryButton from "components/Common/Buttons/SecondaryButton";
import BaseCard from "components/Common/Cards/BaseCard";
import DescriptionText from "components/Common/Typography/BodyText/DescriptionText";
import SectionTitleText from "components/Common/Typography/HeadingText/SectionTitleText";
import React from "react";
import ReusableQuoteComponent from "sections/CommonPageSections/CommonSections/ReusableQuoteComponent";
import BaseBoxComponent from "../../CommonSections/BaseBoxComponent";
import placeholder from "public/assets/card/placeholder.png";
import MouseCircleIcon from "svg-icons/MouseCircleIcon";

const TwoColumnContentWithOneColumnImageComponent = ({ content }) => {
	const { title, description, data } = content;
	const { contentGrid, image } = data;
	// const data = [
	// 	{ type: "card" },
	// 	{ type: "card" },
	// 	{ type: "image" },
	// 	{ type: "card" },
	// 	{ type: "card" },
	// ];
	return (
		<BaseBoxComponent>
			<SectionTitleText
				sx={{
					fontWeight: 800,
					fontSize: "36px",
					lineHeight: " 66px",
					color: "#2E3749",
				}}
			>
				{title || `Backend Development`}
			</SectionTitleText>
			<DescriptionText
				sx={{
					fontSize: "16px",
					lineHeight: " 28px",
					color: "#1f1f1f",
					maxWidth: "800px",
					marginBottom: "32px",
				}}
			>
				{description ||
					`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
				tellus in odio aliquam viverra. Elit aliquam natoque morbi
				malesuada tempus, at.
			`}
			</DescriptionText>
			<Grid container spacing={4}>
				<Grid item md={8}>
					<Grid container >
						{contentGrid.length > 0 &&
							contentGrid.map((item, index) => (
								<Grid key={index} item xs={12} md={6}>
									<BaseCard
										sx={{
											padding: "24px",
											background: "#F5F9F6",
											margin: "8px",
											boxShadow: "none",
										}}
									>
										{/* <AppImage src={placeholder} />
										 */}
										<MouseCircleIcon />
										<Typography
											sx={{
												fontWeight: 800,
												fontSize: " 24px",
												lineHeight: "28px",
											}}
										>
											{item.title ||
												`State-of-the-art technology`}
										</Typography>
										<Typography
											sx={{
												fontSize: "14px",
												lineHeight: "28px",
											}}
										>
											{item.description ||
												`Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Vehicula massa in enim luctus.
								Rutrum arcu.
							`}
										</Typography>
									</BaseCard>
								</Grid>
							))}
					</Grid>
				</Grid>
				<Grid item md={4}>
					<AppImage src={placeholder} />
				</Grid>
			</Grid>

			<ReusableQuoteComponent />
		</BaseBoxComponent>
	);
};

export default TwoColumnContentWithOneColumnImageComponent;
