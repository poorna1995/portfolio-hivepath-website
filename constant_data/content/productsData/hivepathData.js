import ChallengesAndSolutionsSection from "sections/CommonPageSections/ProductsPageSections/ChallengesAndSolutionsSection";
import DesignElementsSection from "sections/CommonPageSections/ProductsPageSections/DesignElementsSection";
import HivepathSections from "sections/CommonPageSections/ProductsPageSections/HivepathSections";
import OverviewSection from "sections/CommonPageSections/ProductsPageSections/OverviewSection";
import ProductKeyFeaturesSection from "sections/CommonPageSections/ProductsPageSections/ProductKeyFeaturesSection";
import ProductScreensSection from "sections/CommonPageSections/ProductsPageSections/ProductScreensSection";
import TechnologyStackSection from "sections/CommonPageSections/ProductsPageSections/TechnologyStackSection";
import hivepathImagesData from "./hivepathData/imagesData";

const hivepathData = {
	components: [
		// {
		// 	component: OverviewSection,
		// 	content: {
		// 		title: "Hivepath",
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
		// product key feature component that displays a grid of cards, the cards have different margins on top and bottom to show a different effect
		/*
			content => {
				title,
				description,
				data:[
					{
					id,
				 	title,
					type,
					image,
					marginTop,
					marginBottom
				}
				]}
			*/
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
			component: HivepathSections,
		},
		{
			component: TechnologyStackSection,
		},
		{
			component: ProductScreensSection,
			content: {
				cols: 2,
				images: hivepathImagesData,
				isStandard: true,
			},
		},
	],
};
export default hivepathData;
