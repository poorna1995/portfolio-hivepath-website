import { Button, CardContent, Grid, Typography } from "@mui/material";
import AppImage from "components/Common/AppImage";
import BaseCard from "components/Common/Cards/BaseCard";
import SectionTitleText from "components/Common/Typography/HeadingText/SectionTitleText";
import React from "react";
import placeholderImage from "public/assets/card/text_placeholder.png";
import BaseBoxComponent from "../CommonSections/BaseBoxComponent";
import CardTitle from "components/Common/Typography/HeadingText/CardTitle";
import CardDescription from "components/Common/Typography/BodyText/CardDescription";
import { BsArrowRight } from "react-icons/bs";

const OtherSolutionsSection = () => {
	const data = [1, 2, 3];
	return (
		<BaseBoxComponent>
			<SectionTitleText>Other Solutions</SectionTitleText>
			<Grid container spacing={3} marginTop="32px">
				{data.map((item) => (
					<Grid key={item} item md={4}>
						<BaseCard sx={{ padding: "8px", margin: "16px" }}>
							<AppImage src={placeholderImage} height="200px" />
							<CardContent sx={{ padding: "16px" }}>
								<CardTitle>Real-estate</CardTitle>
								<CardDescription>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit. Vehicula massa in enim
									luctus. Rutrum arcu.
								</CardDescription>
								<Button
									sx={{
										textTransform: "initial",
										marginTop: "16px",
									}}
									endIcon={<BsArrowRight />}
								>
									Learn more
								</Button>
							</CardContent>
						</BaseCard>
					</Grid>
				))}
			</Grid>
		</BaseBoxComponent>
	);
};

export default OtherSolutionsSection;
