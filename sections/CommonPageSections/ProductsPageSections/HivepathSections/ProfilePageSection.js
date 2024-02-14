import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import AppImage from "components/Common/AppImage";
import DescriptionText from "components/Common/Typography/BodyText/DescriptionText";
import SectionTitleText from "components/Common/Typography/HeadingText/SectionTitleText";
import React from "react";
import img from "public/assets/products/hivepath/profile.png";
import { FaCheckCircle } from "react-icons/fa";

const ProfilePageSection = () => {
	return (
		<Box sx={{ paddingBottom: "64px", paddingTop: "64px" }}>
			<Box
				sx={{ maxWidth: "600px", margin: "auto", textAlign: "center" }}
			>
				<SectionTitleText sx={{ marginBottom: "16px" }}>
					{`Build the best professional profile!`}
				</SectionTitleText>
				<DescriptionText sx={{ marginBottom: "32px" }}>
					Dive into our highly interactive features to create an
					amazing profile defining your professional journey so far.
				</DescriptionText>
			</Box>
			<Box sx={{ paddingTop: "64px" }}>
				<Grid container>
					<Grid item md={6}>
						<Box
							sx={{
								paddingLeft: "96px",
								paddingRight: "64px",
							}}
						>
							<SectionTitleText sx={{ paddingTop: "32px" }}>
								Build website like profile page
							</SectionTitleText>
							<DescriptionText sx={{ paddingTop: "32px" }}>
								Easily create a personal brand with our amazing
								exposure to networks worldwide. Share
								achievements, experiences, interact with
								millions, and more - all in Hivepath!
							</DescriptionText>{" "}
							<DescriptionText sx={{ marginTOp: "32px" }}>
								{listData.map((item, index) => {
									return (
										<Stack
											key={index}
											direction="row"
											// alignItems={"center"}
											justifyContent="flex-start"
											sx={{
												margin: "16px",
												height: "100%",
											}}
										>
											<div>
												<FaCheckCircle
													style={{
														fontSize: "24px",
														marginRight: "32px",
														color: "#1EC41E",
													}}
												/>
											</div>
											<Typography
												sx={{
													fontFamily: "Mulish",
													fontWeight: 700,
													fontSize: "14px",
													lineHeight: "18px",
													/* identical to box height */
													letterSpacing: " 0.01em",
													color: "#222222",
													opacity: 0.9,
												}}
											>
												{item.title}{" "}
											</Typography>
										</Stack>
									);
								})}
							</DescriptionText>
						</Box>
					</Grid>
					<Grid item md={6}>
						<Container>
							<AppImage src={img} />
						</Container>
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
};

export default ProfilePageSection;
const listData = [
	{
		title: `Customize Headlines to express yourself. `,
	},
	{
		title: "Upload & change cover images from our presets.",
	},
	{
		title: "Share your work & academic journey. ",
	},
	{
		title: "Highlight your skills and level of expertise.",
	},
	{
		title: "Let people know what languages you speak.",
	},
];
