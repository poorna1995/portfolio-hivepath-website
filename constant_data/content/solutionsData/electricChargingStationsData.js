import OtherSolutionsSection from "sections/CommonPageSections/SolutionsPageSections/OtherSolutionsSection";
import FourColumnGrid from "sections/CommonPageSections/SolutionsPageSections/TabbedPageSections/FourColumnGrid";
import TwoRowTwoColumnsGridWithHeading from "sections/CommonPageSections/SolutionsPageSections/TwoRowTwoColumnsGridWithHeading";
import image1 from "public/assets/solutions/ev-charging/ev1.png";
import image2 from "public/assets/solutions/ev-charging/ev2.png";
const electricChargingStationsData = {
	components: [
		{ component: FourColumnGrid, content: {} },
		{
			component: TwoRowTwoColumnsGridWithHeading,
			content: {
				title: "Renewable Energy Intelligence",
				description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non tellus in odio aliquam viverra. Elit aliquam natoque morbi malesuada tempus, at. `,
				data: {
					leftContent: {
						title: "Charging infrastructure",
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
						title: "Advance Pricing Mechanism",
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
			},
		},
		{
			component: OtherSolutionsSection,
			content: {},
		},
	],
};
export default electricChargingStationsData;
