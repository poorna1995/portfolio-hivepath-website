import TabbedContentComponent from "sections/CommonPageSections/TechnologiesPageSections/TabbedContentComponent";
import TwoColumnContentGrid from "sections/CommonPageSections/TechnologiesPageSections/TwoColumnContentGrid";
import TwoColumnContentWithOneColumnImageComponent from "sections/CommonPageSections/TechnologiesPageSections/TwoColumnContentWithOneColumnImageComponent";
import appDevTabsData from "./appDevData/tabsData";

const edgeComputingData = {
	components: [
		{
			component: TwoColumnContentWithOneColumnImageComponent,
			content: {
				title: "Hardware",
				description: "",
				data: { contentGrid: [{}, {}, {}, {}], image: "" },
			},
		},

		{
			component: TwoColumnContentGrid,
			content: {
				title: "Data Security",
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
				title: "Deep learning Models",
				description: "",
				data: appDevTabsData,
			},
		},
	],
};
export default edgeComputingData;
