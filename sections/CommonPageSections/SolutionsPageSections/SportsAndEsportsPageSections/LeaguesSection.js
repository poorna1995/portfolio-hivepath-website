import React from "react";
import SolarPowerSectionOne from "../EnergyPageSections/SolarPowerSectionOne";
import TwoRowTwoColumnsGridWithHeading from "../TwoRowTwoColumnsGridWithHeading";
// images
import image1 from "public/assets/solutions/sports/sports1.png";
import image2 from "public/assets/solutions/sports/sports2.png";
import ChippedtabContentComponent from "sections/CommonPageSections/TechnologiesPageSections/ChippedTabContentComponent";
import ChippedTabsChildComponent from "sections/CommonPageSections/TechnologiesPageSections/ChippedTabContentComponent/ChippedTabsChildComponent";
const LeaguesSection = () => {
	const solarGridData = {
		title: "Renewable Energy Intelligence",
		description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non tellus in odio aliquam viverra. Elit aliquam natoque morbi malesuada tempus, at. `,
		data: {
			leftContent: {
				title: "",
				description: "",
				image: image1,
				data: [
					{
						description: "",
					},
					{
						description: "",
					},
					{
						description: "",
					},
				],
			},
			rightContent: {
				title: "",
				description: "",
				image: image2,
				data: [
					{
						description: "",
					},
					{
						description: "",
					},
					{
						description: "",
					},
				],
			},
		},
	};

	return (
		<div>
			{" "}
			<SolarPowerSectionOne />
			<TwoRowTwoColumnsGridWithHeading content={solarGridData} />
			<ChippedtabContentComponent content={chippedTabsContent} />
		</div>
	);
};

export default LeaguesSection;

const chippedTabsContent = {
	title: "",
	description: "",
	data: [
		{
			id: 0,
			title: "Customizable UI",
			component: <ChippedTabsChildComponent />,
		},
		{
			id: 1,
			title: "Open source",
			component: <ChippedTabsChildComponent />,
		},
		{
			id: 2,
			title: "Cross-platform",
			component: <ChippedTabsChildComponent />,
		},
		{
			id: 3,
			title: "Application support",
			component: <ChippedTabsChildComponent />,
		},
		{
			id: 4,
			title: "Customizable UI",
			component: <ChippedTabsChildComponent />,
		},
	],
};
