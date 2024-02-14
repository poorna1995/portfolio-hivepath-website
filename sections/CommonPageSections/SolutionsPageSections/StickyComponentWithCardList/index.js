import { Box, Grid } from "@mui/material";
import BaseCard from "components/Common/Cards/BaseCard";
import CardDescription from "components/Common/Typography/BodyText/CardDescription";
import DescriptionText from "components/Common/Typography/BodyText/DescriptionText";
import CardTitle from "components/Common/Typography/HeadingText/CardTitle";
import SectionTitleText from "components/Common/Typography/HeadingText/SectionTitleText";
import React from "react";
import { FaCube } from "react-icons/fa";
import BaseBoxComponent from "sections/CommonPageSections/CommonSections/BaseBoxComponent";

const StickyComponentWithCardList = () => {
	const data = [1, 2, 3, 4, 5];
	return (
		<BaseBoxComponent
			boxStyle={{
				display: "flex",
				flexWrap: "wrap",
				justifyContent: " center",
				alignItems: "center",
				minHeight: "100vh",
			}}
		>
			<div className="ebook">
				<div className="ebook__cover">
					<div
						className="ebook__image"
						style={{ paddingTop: "120px" }}
					>
						<SectionTitleText>
							Easily request logistics services
						</SectionTitleText>
						<DescriptionText>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Non tellus in odio aliquam viverra. Elit
							aliquam natoque morbi malesuada tempus, at.Lorem
							ipsum dolor sit amet, consectetur adipiscing elit.
							Non tellus in odio aliquam viverra. Elit aliquam
							natoque morbi maLorem ipsum dolor sit amet,
							consectetur adipiscing elit.
						</DescriptionText>
					</div>
				</div>
				<div item md={6} className="ebook__body">
					<div
						className="ebook__content"
						style={{ paddingTop: "120px" }}
					>
						{data.map((item, index) => {
							return (
								<p key={index}>
									<BaseCard
										sx={{
											padding: "24px",
											maxWidth: "400px",
											margin: "auto",
											marginBottom: "32px",
										}}
									>
										<FaCube
											style={{
												fontSize: "32px",
												marginBottom: "16px",
											}}
										/>
										<CardTitle>Lorem Ipsum</CardTitle>
										<CardDescription>
											Lorem ipsum dolor sit amet,
											consectetur adipiscing elit.
											Vehicula massa in enim luctus.
											Rutrum arcu.
										</CardDescription>
									</BaseCard>
								</p>
							);
						})}
					</div>
				</div>
			</div>
		</BaseBoxComponent>
	);
};

export default StickyComponentWithCardList;
