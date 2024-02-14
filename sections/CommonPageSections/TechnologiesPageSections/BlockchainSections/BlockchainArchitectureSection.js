import { Box } from "@mui/material";
import CustomizedAccordions from "components/Common/Accordion/CustomAccordion";
import AppImage from "components/Common/AppImage";
import DescriptionText from "components/Common/Typography/BodyText/DescriptionText";
import SectionTitleText from "components/Common/Typography/HeadingText/SectionTitleText";
import React from "react";
import BaseBoxComponent from "sections/CommonPageSections/CommonSections/BaseBoxComponent";
import TwoColumnGridComponent from "sections/CommonPageSections/CommonSections/TwoColumnGridComponent";

const BlockchainArchitectureSection = () => {
	return (
		<BaseBoxComponent boxStyle={{ background: "#0B3948" }}>
			<Box
				sx={{ textAlign: "center", maxWidth: "800px", margin: "auto" }}
			>
				<SectionTitleText sx={{ color: "white" }}>
					Blockchain Archiectures
				</SectionTitleText>
				<DescriptionText sx={{ color: "white" }}>
					Lorem ipsum dolor sit amet consectetur. Morbi quam et vitae
					suspendisse malesuada quis magna id morbi. Vel in nunc
					volutpat quis.
				</DescriptionText>
			</Box>

			<TwoColumnGridComponent
				leftComponent={
					<>
						<SectionTitleText sx={{ color: "white" }}>
							Decentralized Architecture
						</SectionTitleText>
						<DescriptionText
							sx={{
								color: "#FFFFFF",
								opacity: "0.7",
								marginBottom: "32px",
							}}
						>
							Lorem ipsum dolor sit amet consectetur. Consectetur
							elit suscipit enim lectus lectus fermentum. Volutpat
							consectetur et mattis amet posuere scelerisque a
							phasellus. Tincidunt eleifend dapibus tincidunt
							etiam orci. Volutpat pharetra porta enim vivamus non
							lorem varius. Adipiscing aliquam ultrices varius .
						</DescriptionText>
						<CustomizedAccordions
							sx={{
								"&.MuiAccordion-root": {
									borderColor: "white",
								},
								"&.MuiAccordionSummary-expandIconWrapper": {
									color: "white !important",
									fill: "white",
								},
							}}
							data={accordionData}
							itemTitleColor="white"
							itemDescriptionColor={"rgba(255, 255, 255, 0.7)"}
						/>
					</>
				}
				rightComponent={<AppImage />}
			/>
			<TwoColumnGridComponent
				rightComponent={
					<>
						<SectionTitleText sx={{ color: "white" }}>
							Decentralized Architecture
						</SectionTitleText>
						<DescriptionText
							sx={{
								color: "#FFFFFF",
								opacity: "0.7",
								marginBottom: "32px",
							}}
						>
							Lorem ipsum dolor sit amet consectetur. Consectetur
							elit suscipit enim lectus lectus fermentum. Volutpat
							consectetur et mattis amet posuere scelerisque a
							phasellus. Tincidunt eleifend dapibus tincidunt
							etiam orci. Volutpat pharetra porta enim vivamus non
							lorem varius. Adipiscing aliquam ultrices varius .
						</DescriptionText>
						<CustomizedAccordions
							sx={{
								"&.MuiAccordion-root": {
									borderColor: "white",
								},
								"&.MuiAccordionSummary-expandIconWrapper": {
									color: "white !important",
									fill: "white",
								},
							}}
							data={accordionData}
							itemTitleColor="white"
							itemDescriptionColor={"rgba(255, 255, 255, 0.7)"}
						/>
					</>
				}
				leftComponent={<AppImage />}
			/>
		</BaseBoxComponent>
	);
};

export default BlockchainArchitectureSection;

const accordionData = [
	{
		panelID: "panel1",
		title: "Authentication",
		description: `Web3 based wallets like MetaMask For authenticating the user to use the application we require them to authenticate with their web3 wallets`,
	},
	{ panelID: "panel2", title: "Data", description: "" },
	{ panelID: "panel3", title: "UI Layer", description: "" },
	{ panelID: "panel4", title: "Compute (Decentralized)", description: "" },
];
