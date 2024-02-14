import {
	Avatar,
	Box,
	Container,
	Grid,
	ListItem,
	Stack,
	Typography,
} from "@mui/material";
import AppImage from "components/Common/AppImage";
import DescriptionText from "components/Common/Typography/BodyText/DescriptionText";
import SectionTitleText from "components/Common/Typography/HeadingText/SectionTitleText";
import React from "react";
import img from "public/assets/products/hivepath/session.png";
import { FaCheckCircle } from "react-icons/fa";

const ConnectionsSection = () => {
	return (
		<Box sx={{ paddingBottom: "64px", paddingTop: "64px" }}>
			<Box
				sx={{ maxWidth: "600px", margin: "auto", textAlign: "center" }}
			>
				<SectionTitleText sx={{ marginBottom: "16px" }}>
					{`Make Efficient Connections With
Your Professional Journey`}
				</SectionTitleText>
				<DescriptionText sx={{ marginBottom: "32px" }}>
					You get to share your knowledge & experiences to build a
					community of reliable networks who inspire one another to
					learn, adapt, and expand their digital footprint.
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
								Experience sharing like never before!
							</SectionTitleText>
							<DescriptionText sx={{ paddingTop: "32px" }}>
								We are redefining networking features, packed
								with a new way of smart technology and research
								from ground zero. We believe in a world of
								smooth engagements and strive to provide our
								users with the best solutions at Hivepath.
								Become a Host
							</DescriptionText>
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
														minHeight: "32px",
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

export default ConnectionsSection;
const listData = [
	{
		title: `Spread your presence beyond digital media.`,
	},
	{
		title: "Share your experiences to guide others. Help them learn new things",
	},
	{
		title: "Form a reliable network who constantly inspire you to improve with new ideas and information.",
	},
	{
		title: "Connect, interact, expand & diversify your network to unlimited opportunities, fields, and more.",
	},
	{
		title: "Create your digital presence & build your network by becoming a Host.",
	},
];
