import BaseCard from "components/Common/Cards/BaseCard";
import DescriptionText from "components/Common/Typography/BodyText/DescriptionText";
import SectionTitleText from "components/Common/Typography/HeadingText/SectionTitleText";
import React from "react";
import BaseBoxComponent from "../CommonSections/BaseBoxComponent";
import TwoColumnGridComponent from "../CommonSections/TwoColumnGridComponent";
import { IoMdAlert, IoMdCheckmarkCircle } from "react-icons/io";
const ChallengesAndSolutionsSection = ({ content }) => {
	const { challengesData, solutionsData } = content;
	return (
		<BaseBoxComponent>
			<TwoColumnGridComponent
				leftComponent={<ChallengesComponent data={challengesData} />}
				rightComponent={<SolutionsComponent data={solutionsData} />}
			/>
		</BaseBoxComponent>
	);
};

export default ChallengesAndSolutionsSection;

const ChallengesComponent = ({ data }) => (
	<BaseCard
		sx={{
			padding: "24px",
			boxShadow: "none",
			background: "#F5F9F6",
			borderRadius: "0",
			marginRight: "-8px",
			paddingRight: "48px",
		}}
	>
		<SectionTitleText>Challenges</SectionTitleText>
		{data.map((item) => (
			<DescriptionText
				key={item}
				sx={{
					fontSize: "18px",
					marginTop: "24px",
					lineHeight: "30px",
					display: "flex",
					justifyContent: "start",
					alignItems: "start",
				}}
			>
				<p>
					<IoMdAlert
						style={{
							color: "#E62E2E",
							fontSize: "24px",
							marginRight: "24px",
							marginTop: "-16px",
						}}
					/>
				</p>

				<span>
					{item.title ||
						`
				Ultricies convallis eget ipsum integer quam amet mauris. Tempor
				egestas mauris vitae fermentum sed massa purus egestas vitae.
		`}
				</span>
			</DescriptionText>
		))}
	</BaseCard>
);
const SolutionsComponent = ({ data }) => (
	<BaseCard
		sx={{
			padding: "24px",
			marginLeft: "-40px",
			paddingLeft: "64px",
			paddingBottom: "64px",
			paddingTop: "48px",
			marginTop: "-32px",
		}}
	>
		<SectionTitleText>Solutions</SectionTitleText>
		{data.map((item) => (
			<DescriptionText
				key={item}
				sx={{
					fontSize: "18px",
					// marginTop: "16px",
					lineHeight: "30px",
					display: "flex",
					justifyContent: "start",
					alignItems: "start",

					// marginTop: "-16px",
				}}
			>
				<p>
					<IoMdCheckmarkCircle
						style={{
							color: "#29CC39",
							fontSize: "24px",
							marginRight: "24px",
							marginTop: "16px",
						}}
					/>
					{/* <IoCheckmarkCircleSharp  /> */}
				</p>
				<p>
					{item.title ||
						`	Ultricies convallis eget ipsum integer quam amet mauris. Tempor
				egestas mauris vitae fermentum sed massa purus egestas vitae.
			`}
				</p>
			</DescriptionText>
		))}
	</BaseCard>
);
