import React from "react";
import FourColumnGrid from "../TabbedPageSections/FourColumnGrid";
import TwoRowTwoColumnsGridWithHeading from "../TwoRowTwoColumnsGridWithHeading";
import SolarPowerSectionOne from "./SolarPowerSectionOne";
import image1 from "public/assets/solutions/energy/solar/solar1.png";

import image2 from "public/assets/solutions/energy/solar/solar2.png";

const SolarPowerSection = () => {
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
			<SolarPowerSectionOne />
			<TwoRowTwoColumnsGridWithHeading content={solarGridData} />
			<FourColumnGrid />
		</div>
	);
};

export default SolarPowerSection;
