import { Box, Grid, Typography } from "@mui/material";
import AppImage from "components/Common/AppImage";
import BaseCard from "components/Common/Cards/BaseCard";
import CardDescription from "components/Common/Typography/BodyText/CardDescription";
import DescriptionText from "components/Common/Typography/BodyText/DescriptionText";
import CardTitle from "components/Common/Typography/HeadingText/CardTitle";
import SectionTitleText from "components/Common/Typography/HeadingText/SectionTitleText";
import React from "react";
import BaseBoxComponent from "../CommonSections/BaseBoxComponent";
import bgImage from "public/assets/products/zello/card_bgs/bg1.png";
const ProductKeyFeaturesSection = ({ content }) => {
	const { title, description, data } = content;
	return (
		<BaseBoxComponent
			boxStyle={{
				background: "#F5F9F6",
				paddingTop: "0px",
				paddingBottom: "0px",
				marginBottom: "64px",
			}}
		>
			<Grid container sx={{ alignItems: "center" }}>
				<Grid item md={4}>
					<SectionTitleText>
						{title || `Key Features`}
					</SectionTitleText>
					<DescriptionText>
						{description ||
							`		Ultricies convallis eget ipsum integer quam amet mauris.
						Tempor egestas mauris vitae fermentum sed massa purus
						egestas vitae.Ultricies convallis eget ipsum integer
						quam amet mauris. Tempor egestas mauris vitae fermentum
						sed massa purus egestas vitae.
				`}{" "}
					</DescriptionText>
				</Grid>
				<Grid item md={8}>
					<Grid container>
						{data.map((item, index) => (
							<Grid key={index} item md={6}>
								<BaseCard
									sx={{
										background: item.cardBG,
										padding: "24px",
										color: item.cardBG
											? "white !important"
											: "black !important",
										margin: "16px",
										marginTop: item.marginTop,
										marginBottom: item.marginBottom,
										position: "relative",
									}}
								>
									<div
										style={{
											position: "absolute",
											top: "0px",
											zIndex: 0,
											width: "120px",
											right: "0px",
										}}
									>
										<AppImage
											src={item.bgImage || bgImage}
										/>
									</div>
									<Box
										sx={{
											position: "aboslute",
											top: "0px",
											zIndex: 5,
											padding: "16px",
										}}
									>
										<Typography
											sx={{
												fontSize: "14px",
												fontWeight: "800",
												lineHeight: "19px",
											}}
										>
											{item.type}
										</Typography>
										<CardTitle
											sx={{
												textTransform: "capitalize",
												color: item.cardBG
													? "white !important"
													: "black !important",
												marginTop: "16px",
												marginBottom: "16px",
												zIndex: 5,
												paddingRight: "32px",
											}}
										>
											{item.title ||
												`BUILT FOR SIMPLE, YET POWERFUL`}
										</CardTitle>
										<CardDescription
											sx={{
												color: item.cardBG
													? "white !important"
													: "black !important",
											}}
										>
											{item.description ||
												`	Lorem ipsum dolor sit amet, consectetur
										adipiscing elit. Vehicula massa in enim
										luctus. Rutrum arcu.Lorem ipsum dolor
										sit amet, consectetur adipiscing elit.
										Vehicula massa in enim luctus.
									`}
										</CardDescription>
									</Box>
								</BaseCard>
							</Grid>
						))}
					</Grid>
				</Grid>
			</Grid>
		</BaseBoxComponent>
	);
};

export default ProductKeyFeaturesSection;
