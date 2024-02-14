import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import SecondaryButton from "components/Common/Buttons/SecondaryButton";
import BaseCard from "components/Common/Cards/BaseCard";
import CardDescription from "components/Common/Typography/BodyText/CardDescription";
import DescriptionText from "components/Common/Typography/BodyText/DescriptionText";
import CardTitle from "components/Common/Typography/HeadingText/CardTitle";
import SectionTitleText from "components/Common/Typography/HeadingText/SectionTitleText";
import React from "react";
import BaseBoxComponent from "sections/CommonPageSections/CommonSections/BaseBoxComponent";
import RightArrowIcon from "svg-icons/RightArrowIcon";

const BlockchainChoicesSection = () => {
	return (
		<BaseBoxComponent>
			<Box
				sx={{ margin: "auto", maxWidth: "800px", textAlign: "center" }}
			>
				<SectionTitleText>Popular Blockchain Choices</SectionTitleText>
				<DescriptionText>
					Lorem ipsum dolor sit amet consectetur. Morbi quam et vitae
					suspendisse malesuada quis magna id morbi. Vel in nunc
					volutpat quis.
				</DescriptionText>
			</Box>
			<Grid
				container
				spacing={4}
				columnSpacing={4}
				direction="row"
				justifyContent="space-between"
				alignItems="stretch"
				sx={{
					marginTop: "32px",
					// padding: "24px",
					// justifyContent: "stretch",
					// display: "flex",
					// alignItems: "stretch",
				}}
			>
				<Grid item md={6}>
					<Box
						sx={{
							background: "#F3EFE0",
							borderRadius: "30px",
							padding: "32px",
							paddingBottom: "96px",
							height: "inherit",
							// marginRight: "32px",
						}}
					>
						<CardTitle>ERC-20 / Fungible Tokens</CardTitle>
						<CardDescription
							sx={{ marginBottom: "32px", marginTop: "24px" }}
						>
							A standard interface for fungible (interchangeable)
							tokens, like voting tokens, staking tokens, or
							virtual currencies.
						</CardDescription>
						<SecondaryButton endIcon={<RightArrowIcon />}>
							View Demo
						</SecondaryButton>
					</Box>
				</Grid>
				<Grid item md={6}>
					<Box
						sx={{
							background: "#F3EFE0",
							borderRadius: "30px",
							padding: "32px",
							paddingBottom: "96px",
							height: "inherit",
						}}
					>
						<CardTitle>
							ERC-721 / Non-Fungible Tokens (NFT)
						</CardTitle>
						<CardDescription
							sx={{ marginBottom: "32px", marginTop: "24px" }}
						>
							A standard interface for non-fungible tokens, like a
							deed for artwork or a song.You can deploy your own
							NFTs on blockchain with this token standard.
						</CardDescription>
						<SecondaryButton endIcon={<RightArrowIcon />}>
							View Demo
						</SecondaryButton>
					</Box>
				</Grid>
			</Grid>
		</BaseBoxComponent>
	);
};

export default BlockchainChoicesSection;
