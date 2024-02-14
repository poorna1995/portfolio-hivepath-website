import TabbedContentComponent from "sections/CommonPageSections/TechnologiesPageSections/TabbedContentComponent";
import TwoColumnContentGrid from "sections/CommonPageSections/TechnologiesPageSections/TwoColumnContentGrid";
import TwoColumnContentWithOneColumnImageComponent from "sections/CommonPageSections/TechnologiesPageSections/TwoColumnContentWithOneColumnImageComponent";
import TwoColumnWithAccordionComponent from "sections/CommonPageSections/TechnologiesPageSections/TwoColumnWithAccordionComponent";
import appDevAccordionData from "./appDevData/accordionData";
import appDevTabsData from "./appDevData/tabsData";

const dataManagementData = {
	components: [
		{
			component: TwoColumnContentWithOneColumnImageComponent,
			content: {
				title: "Data Warehousing",
				description: "",
				data: { contentGrid: [{}, {}, {}, {}], image: "" },
			},
		},

		{
			component: TwoColumnContentGrid,
			content: {
				title: "Data Architecture",
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
				title: "Security",
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
	],
};
export default dataManagementData;
