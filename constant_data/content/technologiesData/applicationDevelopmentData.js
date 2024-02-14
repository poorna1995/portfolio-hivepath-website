import TwoColumnGridComponent from "sections/CommonPageSections/CommonSections/TwoColumnGridComponent";
import TabbedContentComponent from "sections/CommonPageSections/TechnologiesPageSections/TabbedContentComponent";
import TwoColumnContentGrid from "sections/CommonPageSections/TechnologiesPageSections/TwoColumnContentGrid";
import TwoColumnContentWithOneColumnImageComponent from "sections/CommonPageSections/TechnologiesPageSections/TwoColumnContentWithOneColumnImageComponent";
import TwoColumnWithAccordionComponent from "sections/CommonPageSections/TechnologiesPageSections/TwoColumnWithAccordionComponent";
import appDevAccordionData from "./appDevData/accordionData";
import appDevTabsData from "./appDevData/tabsData";

const applicationDevelopmentData = {
	components: [
		{
			// Tow column component with one column image component
			/**
			 * data props=> {contentGrid:[{},{},{},{}], image:image}
			 */
			component: TwoColumnContentWithOneColumnImageComponent,
			content: {
				title: "Backend Development",
				description: "",
				data: { contentGrid: [{}, {}, {}, {}], image: "" },
			},
		},

		{
			component: TwoColumnContentGrid,
			content: {
				title: "Front End Development",
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
				title: "Android App development",
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
export default applicationDevelopmentData;
