import { Box, Grid } from "@mui/material";
import DescriptionText from "components/Common/Typography/BodyText/DescriptionText";
import SectionTitleText from "components/Common/Typography/HeadingText/SectionTitleText";
import CustomSlider from "components/CustomSlider";
import React from "react";

const SliderWithContentRowComponent = ({ content }) => {
	const { title, background, paddingBottom } = content;
	const sliderData = [1, 2, 3, 4];
	return (
		<Box
			sx={{
				background: background || "#F5F9F6",
				paddingTop: "64px",
				paddingBottom: paddingBottom && paddingBottom,
			}}
		>
			<Grid
				container
				spacing={4}
				sx={{
					// paddingTop: "0px",
					paddingBottom: "64px",
				}}
			>
				<Grid item md={5}>
					<Box sx={{ padding: "32px", paddingLeft: "64px" }}>
						<SectionTitleText>
							{title || `		Industries we Provide solutions for`}
						</SectionTitleText>
						<DescriptionText>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Curabitur blandit nam nunc sit lectus pulvinar
							amet morbi tellus. Nunc, dolor orci amet, id ut
							auctor feugiat. Massa at iaculis at bibendum. In
							neque suscipit potenti in dignissim scelerisque.
						</DescriptionText>
					</Box>
				</Grid>
				<Grid item md={7}>
					<CustomSlider data={sliderData} />
				</Grid>
			</Grid>
		</Box>
	);
};

export default SliderWithContentRowComponent;
