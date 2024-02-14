import { Grid, Stack } from "@mui/material";
import BaseCard from "components/Common/Cards/BaseCard";
import CardDescription from "components/Common/Typography/BodyText/CardDescription";
import DescriptionText from "components/Common/Typography/BodyText/DescriptionText";
import CardTitle from "components/Common/Typography/HeadingText/CardTitle";
import SectionTitleText from "components/Common/Typography/HeadingText/SectionTitleText";
import React from "react";
import BaseBoxComponent from "sections/CommonPageSections/CommonSections/BaseBoxComponent";

const SolarPowerSectionOne = () => {
	return (
		<BaseBoxComponent>
			<Stack sx={{ textAlign: "center" }}>
				<SectionTitleText>Turn insights into action</SectionTitleText>
				<DescriptionText sx={{ maxWidth: "800px", margin: "auto" }}>
					Ultricies convallis eget ipsum integer quam amet mauris.
					Tempor egestas mauris vitae fermentum sed massa purus
					egestas vitae. Vulputate hendrerit est posuere quam
					dignissim ac dolor. Ultrices.Ultricies convallis eget ipsum
					integer quam amet mauris. Tempor egestas mauris vitae
					fermentum sed massa purus egestas vitae. Vulputate hendrerit
					est posuere quam dignissim ac dolor. Ultrices.
				</DescriptionText>
			</Stack>

			<Grid
				container
				sx={{ textAlign: "center" }}
				spacing={3}
				marginTop="32px"
			>
				<Grid item md={6}>
					<BaseCard sx={{ padding: `24px` }}>
						<CardTitle>Increase production</CardTitle>
						<CardDescription>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Suspendisse placerat enim nunc at tortor sed
							lectus tincidunt. Odio fringilla sit dictum a
							aliquet orci, dignissim et gravida. Ornare mauris
							dignissim egestas suscipit vitae, vitae nunc viverra
							dictumst. Amet, id tortor et ultricies bibendum
							pretium eget.
						</CardDescription>
					</BaseCard>
				</Grid>
				<Grid item md={6}>
					<BaseCard sx={{ padding: `24px` }}>
						<CardTitle>Minimize operational costs</CardTitle>
						<CardDescription>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Suspendisse placerat enim nunc at tortor sed
							lectus tincidunt. Odio fringilla sit dictum a
							aliquet orci, dignissim et gravida. Ornare mauris
							dignissim egestas suscipit vitae, vitae nunc viverra
							dictumst. Amet, id tortor et ultricies bibendum
							pretium eget.
						</CardDescription>
					</BaseCard>
				</Grid>
			</Grid>
		</BaseBoxComponent>
	);
};

export default SolarPowerSectionOne;
