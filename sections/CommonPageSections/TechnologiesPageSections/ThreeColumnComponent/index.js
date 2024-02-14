import { Grid, Stack } from "@mui/material";

import BaseCard from "components/Common/Cards/BaseCard";
import DescriptionText from "components/Common/Typography/BodyText/DescriptionText";
import SectionTitleText from "components/Common/Typography/HeadingText/SectionTitleText";
import React from "react";
import BaseBoxComponent from "../../CommonSections/BaseBoxComponent";

const ThreeColumnComponent = ({ content }) => {
	const { title, description, data, headingAlign } = content;
	// const data = [1, 2, 3, 4, 5, 6];
	return (
		<BaseBoxComponent
			boxStyle={{
				background: "#F5F9F6",
			}}
		>
			<Stack sx={{ textAlign: headingAlign }}>
				<SectionTitleText
					sx={{
						fontSize: "40px",
					}}
				>
					{title || `Natural Language Processing`}
				</SectionTitleText>
				<DescriptionText
					sx={{
						fontSize: "16px",
						maxWidth: "800px",
						margin: headingAlign && "auto",
					}}
				>
					{description ||
						`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
				tellus in odio aliquam viverra. Elit aliquam natoque morbi
				malesuada tempus, at.
		`}{" "}
				</DescriptionText>
			</Stack>
			<Grid container spacing={3} marginTop="32px">
				{data.map((item, index) => (
					<Grid key={index} item md={4} xs={12}>
						<BaseCard
							sx={{
								boxShadow: "none",
								padding: "16px",
							}}
						>
							<SectionTitleText
								sx={{
									fontSize: "24px",
									lineHeight: "28px",
								}}
							>
								{item.title ||
									`	State-of-the-art technology
							`}
							</SectionTitleText>
							<DescriptionText
								sx={{
									fontSize: "14px",
									lineHeight: "28px",
								}}
							>
								{item.description ||
									`	Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Vehicula massa in enim luctus.
								Rutrum arcu.
							`}
							</DescriptionText>
						</BaseCard>
					</Grid>
				))}
			</Grid>
		</BaseBoxComponent>
	);
};

export default ThreeColumnComponent;
