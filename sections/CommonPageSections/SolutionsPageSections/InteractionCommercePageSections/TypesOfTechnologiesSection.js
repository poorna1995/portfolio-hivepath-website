import { Chip } from "@mui/material";
import { Box } from "@mui/system";
import AppImage from "components/Common/AppImage";
import BaseCard from "components/Common/Cards/BaseCard";
import DescriptionText from "components/Common/Typography/BodyText/DescriptionText";
import SectionTitleText from "components/Common/Typography/HeadingText/SectionTitleText";
import React from "react";
import BaseBoxComponent from "sections/CommonPageSections/CommonSections/BaseBoxComponent";
import TwoColumnGridComponent from "sections/CommonPageSections/CommonSections/TwoColumnGridComponent";
// images
import arImage from "public/assets/solutions/interaction-commerce/ar-in-home.png";
import productConfiguratorImage from "public/assets/solutions/interaction-commerce/3d-product-configurator.png";
import virtualNFTImage from "public/assets/solutions/interaction-commerce/virtual-fashion-nft.png";
import visualTryOnImage from "public/assets/solutions/interaction-commerce/visual-try-on.png";
const TypesOfTechnologiesSection = () => {
	return (
		<BaseBoxComponent
			boxStyle={{
				background: "#F5F9F6",
			}}
		>
			<Box sx={{ textAlign: "center", marginBottom: "48px" }}>
				<SectionTitleText sx={{ marginBottom: "24px" }}>
					Types Of Technologies
				</SectionTitleText>
				<DescriptionText sx={{ maxWidth: "600px", margin: "auto" }}>
					There are different types of interactions a user can carry
					while shopping. These are classified into following,
				</DescriptionText>
			</Box>
			{data.map((item, index) => {
				const { title, description, imgSrc, chipLabel } = item;
				return (
					<BaseCard
						key={index}
						sx={{
							paddingLeft: "32px",
							paddingRight: "32px",
							background: "#0B3948",
							color: "white !important",
							marginBottom:
								index === data.length - 1 ? "32px" : "64px",
						}}
					>
						<TwoColumnGridComponent
							leftComponent={
								<Box>
									<Chip
										label={chipLabel || "View in Room"}
										sx={{
											color: "white",
											background:
												"rgba(255, 255, 255, 0.2)",
											paddingRight: "32px",
											paddingLeft: "32px",
										}}
									/>
									<SectionTitleText
										sx={{
											color: "white",
											marginTop: "24px",
											marginBottom: "24px",
										}}
									>
										{title ||
											`Augmented Reality Software in Room`}
									</SectionTitleText>
									<DescriptionText sx={{ color: "white" }}>
										{description ||
											`This is an AR (Augmented Reality)
										interaction, where the user can place
										the object in the real world and check
										if it suits the environment. This allows
										the user to get a feel of the product in
										real world before purchasing the product`}
									</DescriptionText>
									<DescriptionText
										sx={{
											color: "white",
											marginTop: "24px",
										}}
									>
										This type of technology is best suited
										for following product lines :
										<ol>
											{[
												" Furniture and décor",
												"Kitchen & Dining",
												`Garden & Outdoor`,
												`Storage & Organization Art`,
												`Crafts & Sewing`,
											].map((ite, id) => {
												return <li key={id}>{ite}</li>;
											})}
										</ol>
									</DescriptionText>
								</Box>
							}
							rightComponent={<AppImage src={imgSrc} />}
						/>
					</BaseCard>
				);
			})}
		</BaseBoxComponent>
	);
};

export default TypesOfTechnologiesSection;

const data = [
	{ chipLabel: "View-In-Room", title: "", description: "", imgSrc: arImage },
	{
		chipLabel: "Visual Try-On",
		title: "",
		description: "",
		imgSrc: visualTryOnImage,
	},
	{
		chipLabel: "Virtual Fashion NFT",
		title: "",
		description: "",
		imgSrc: virtualNFTImage,
	},
	{
		chipLabel: "3D Product Configurator",
		title: "",
		description: "",
		imgSrc: productConfiguratorImage,
	},
];
