import ChippedtabContentComponent from "sections/CommonPageSections/TechnologiesPageSections/ChippedTabContentComponent";
import TabbedContentComponent from "sections/CommonPageSections/TechnologiesPageSections/TabbedContentComponent";
import ThreeColumnComponent from "sections/CommonPageSections/TechnologiesPageSections/ThreeColumnComponent";
import TwoColumnContentGrid from "sections/CommonPageSections/TechnologiesPageSections/TwoColumnContentGrid";
import TwoColumnContentWithOneColumnImageComponent from "sections/CommonPageSections/TechnologiesPageSections/TwoColumnContentWithOneColumnImageComponent";
import TwoColumnWithAccordionComponent from "sections/CommonPageSections/TechnologiesPageSections/TwoColumnWithAccordionComponent";
import appDevAccordionData from "./appDevData/accordionData";
import appDevTabsData from "./appDevData/tabsData";
import dataScienceChippedTabsData from "./dataScienceData/chippedTabsData";

const dataScienceData = {
	components: [
		{
			component: TwoColumnContentWithOneColumnImageComponent,
			content: {
				title: "Computer Vision",
				description: "",
				data: { contentGrid: [{}, {}, {}, {}], image: "" },
			},
		},

		{
			component: TwoColumnContentGrid,
			content: {
				title: "Natural Language Processing",
				description: "",
				data: [
					{ title: "Client experience" },
					{ title: "Engagement" },
					{ title: "Analytics" },
					{ title: "State-of-the-art technology" },
					{ title: "State-of-the-art technology" },
				],
			},
		},
		{
			component: TabbedContentComponent,
			content: {
				title: "Forecasting",
				description: "",
				data: appDevTabsData,
			},
		},
		{
			component: TwoColumnWithAccordionComponent,
			content: {
				title: "API Architecture",
				description: "",
				data: appDevAccordionData,
			},
		},
		{
			component: ChippedtabContentComponent,
			content: {
				title: "Integer Programming",
				description: "",
				data: dataScienceChippedTabsData,
			},
		},
		{
			component: ThreeColumnComponent,
			content: {
				title: "Natural Language Processing",
				description: "",
				data: [
					{
						// title:"",
						// description:""
					},
					{},
					{},
					{},
					{},
					{},
				],
			},
		},
	],
};
export default dataScienceData;
