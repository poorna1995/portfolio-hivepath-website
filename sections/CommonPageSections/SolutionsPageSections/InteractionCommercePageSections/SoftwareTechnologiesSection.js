import AppImage from "components/Common/AppImage";
import DescriptionText from "components/Common/Typography/BodyText/DescriptionText";
import SectionTitleText from "components/Common/Typography/HeadingText/SectionTitleText";
import React from "react";
import BaseBoxComponent from "sections/CommonPageSections/CommonSections/BaseBoxComponent";
import TwoColumnGridComponent from "sections/CommonPageSections/CommonSections/TwoColumnGridComponent";
import placeholderImage from "public/assets/card/acc_placeholder.png";
import { Box } from "@mui/system";

// images
import nftImage from "public/assets/solutions/interaction-commerce/nft.png";
import scanningImage from "public/assets/solutions/interaction-commerce/3d-scanning.png";
import modellingImage from "public/assets/solutions/interaction-commerce/3d-modelling.png";
import metaOculusImage from "public/assets/solutions/interaction-commerce/meta-oculus.png";
import photogrammetryImage from "public/assets/solutions/interaction-commerce/photogrammetry.png";
import { Avatar } from "@mui/material";
import { FaGlobe } from "react-icons/fa";
import { IoMdGlobe } from "react-icons/io";
import { SlGlobe } from "react-icons/sl";

const SoftwareTechnologiesSection = () => {
	return (
		<BaseBoxComponent>
			<Box sx={{ textAlign: "center" }}>
				<SectionTitleText>Software Technologies</SectionTitleText>
				<DescriptionText sx={{ maxWidth: "600px", margin: "auto" }}>
					There are different types of interactions a user can carry
					while shopping. These are classified into following,
				</DescriptionText>
			</Box>

			{data.map((item, index) => {
				const { title, flexDirection, imageSrc, description } = item;
				return (
					<TwoColumnGridComponent
						key={index}
						containerStyles={{
							marginTop: "32px",
							display: "flex",
							flexDirection:
								flexDirection === "reverse"
									? "row-reverse"
									: "row",
						}}
						leftComponent={
							<Box sx={{ padding: "32px" }}>
								<SectionTitleText>{title}</SectionTitleText>
								<DescriptionText>
									{description ||
										`	Ultricies convallis eget ipsum integer quam
									amet mauris. Tempor egestas mauris vitae
									fermentum sed massa purus egestas vitae.
									Vulputate hendrerit est posuere quam
									dignissim ac dolor. Ultrices.
								`}
								</DescriptionText>
								{[1, 2, 3].map((it) => (
									<div
										key={it}
										style={{
											display: "flex",
											marginTop: "24px",
										}}
									>
										<Avatar
											sx={{
												marginRight: "16px",
												background: "rgba(0,0,0,0.1)",
											}}
										>
											<SlGlobe
												style={{ color: "blue " }}
											/>
										</Avatar>
										<DescriptionText>
											Ultricies convallis eget ipsum
											integer quam amet mauris. Tempor
											egestas mauris vitae fermentum sed
											massa purus egestas vitae.
										</DescriptionText>
									</div>
								))}
							</Box>
						}
						rightComponent={<AppImage src={imageSrc} />}
					/>
				);
			})}
			<TwoColumnGridComponent />
		</BaseBoxComponent>
	);
};

export default SoftwareTechnologiesSection;

const data = [
	{
		title: "Meta Oculus",
		imageSrc: metaOculusImage,
		// description,
	},
	{
		title: "NFTs (Polygon, Ethereum)",
		flexDirection: "reverse",
		imageSrc: nftImage,
	},
	{
		title: "Photogrammetry",
		imageSrc: photogrammetryImage,
	},
	{
		title: "3D Scanning",
		flexDirection: "reverse",
		imageSrc: scanningImage,
	},
	{
		title: "3D Modelling",
		imageSrc: modellingImage,
	},
];
