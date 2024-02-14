import ProductKeyFeaturesSection from "sections/CommonPageSections/ProductsPageSections/ProductKeyFeaturesSection";
import OtherSolutionsSection from "sections/CommonPageSections/SolutionsPageSections/OtherSolutionsSection";
import SliderWithContentRowComponent from "sections/CommonPageSections/SolutionsPageSections/SliderWithContentRowComponent";
import TwoRowTwoColumnGrid from "sections/CommonPageSections/SolutionsPageSections/TwoRowTwoColumnGrid";
import realEstateGridContentData from "./realEstateData/gridContent";

const largeRestaurantsChainsData = {
	components: [
		{
			// To be replaced with a four column row
			component: SliderWithContentRowComponent,
			content: {
				title: "Unified platform that works for all",
				background: "white",
				paddingBottom: "80px",
			},
		},
		{
			component: ProductKeyFeaturesSection,
			content: {
				title: "Enterprise Restaurant Technology",
				descripton: "",
				data: [
					{
						id: 0,
						title: `ARCHITECT FOR THE FUTURE`,
						type: "OPERATIONS",
						// marginBottom: "-64px",
						marginTop: "64px",
					},
					{
						id: 1,
						title: `BUILT FOR SIMPLE, YET POWERFUL`,
						cardBG: "#0B2F51",
						type: "MANAGEMENT",
						marginTop: "-64px",
					},
					{
						id: 2,
						title: `AUTOMATION PLATFORM`,
						cardBG: "#0B2F51",
						type: "OPERATIONS",
						marginBottom: "-64px",
					},
					{
						id: 3,
						title: `BUILT FOR SCALE`,
						type: "IT TEAMS",
						marginTop: "-96px",
						marginBottom: "64px",
					},
				],
			},
		},
		{
			component: TwoRowTwoColumnGrid,
			content: realEstateGridContentData,
		},
		{
			component: OtherSolutionsSection,
		},
	],
};
export default largeRestaurantsChainsData;
