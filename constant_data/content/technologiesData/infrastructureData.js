import TwoColumnContentGrid from "sections/CommonPageSections/TechnologiesPageSections/TwoColumnContentGrid";
import TwoColumnContentWithOneColumnImageComponent from "sections/CommonPageSections/TechnologiesPageSections/TwoColumnContentWithOneColumnImageComponent";

const infrastructureData = {
	components: [
		{
			component: TwoColumnContentWithOneColumnImageComponent,
			content: {
				title: "Cloud agnostic architecture",
				description: "",
				data: { contentGrid: [{}, {}, {}, {}], image: "" },
			},
		},

		{
			component: TwoColumnContentGrid,
			content: {
				title: "Infrastructure creation and maintenance",
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
	],
};
export default infrastructureData;
