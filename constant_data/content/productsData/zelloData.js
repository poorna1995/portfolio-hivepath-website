import ChallengesAndSolutionsSection from "sections/CommonPageSections/ProductsPageSections/ChallengesAndSolutionsSection";
import DesignElementsSection from "sections/CommonPageSections/ProductsPageSections/DesignElementsSection";
import OverviewSection from "sections/CommonPageSections/ProductsPageSections/OverviewSection";
import ProductKeyFeaturesSection from "sections/CommonPageSections/ProductsPageSections/ProductKeyFeaturesSection";
import ProductScreensSection from "sections/CommonPageSections/ProductsPageSections/ProductScreensSection";
import TechnologyStackSection from "sections/CommonPageSections/ProductsPageSections/TechnologyStackSection";
import ZelloFeaturesSection from "sections/CommonPageSections/ProductsPageSections/ZelloFeaturesSection";
import zelloImagesData from "./zelloData/imagesData";

const zelloData = {
	components: [
		{
			component: ZelloFeaturesSection,
		},
		// {
		// 	component: OverviewSection,
		// 	content: {
		// 		title: "Zello",
		// 		description: "",
		// 		data: [
		// 			{
		// 				// title:"",description:""
		// 			},
		// 			{},
		// 			{},
		// 		],
		// 	},
		// },
		// {
		// 	component: ChallengesAndSolutionsSection,
		// 	content: {
		// 		challengesData: [
		// 			{
		// 				// title: "", icon:""/if any/
		// 			},
		// 			{},
		// 			{},
		// 		],
		// 		solutionsData: [{}, {}, {}],
		// 	},
		// },
		// {
		// 	component: ProductKeyFeaturesSection,
		// 	content: {
		// 		title: "",
		// 		descripton: "",
		// 		data: [
		// 			{
		// 				id: 0,
		// 				title: `ARCHITECT FOR THE FUTURE`,
		// 				type: "OPERATIONS",
		// 				// marginBottom: "-64px",
		// 				marginTop: "64px",
		// 			},
		// 			{
		// 				id: 1,
		// 				title: `BUILT FOR SIMPLE, YET POWERFUL`,
		// 				cardBG: "#0B2F51",
		// 				type: "MANAGEMENT",
		// 				marginTop: "-64px",
		// 			},
		// 			{
		// 				id: 2,
		// 				title: `AUTOMATION PLATFORM`,
		// 				cardBG: "#0B2F51",
		// 				type: "OPERATIONS",
		// 				marginBottom: "-64px",
		// 			},
		// 			{
		// 				id: 3,
		// 				title: `BUILT FOR SCALE`,
		// 				type: "IT TEAMS",
		// 				marginTop: "-96px",
		// 				marginBottom: "64px",
		// 			},
		// 		],
		// 	},
		// },
		// {
		// 	component: DesignElementsSection,
		// },
		{
			component: TechnologyStackSection,
		},
		{
			component: ProductScreensSection,
			content: {
				cols: 3,
				images: zelloImagesData,
			},
		},
	],
};
export default zelloData;
