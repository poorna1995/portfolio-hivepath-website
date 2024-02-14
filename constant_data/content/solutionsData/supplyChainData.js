import IndustrySolutionsSection from "sections/CommonPageSections/SolutionsPageSections/IndustrySolutionsSection";
import OtherSolutionsSection from "sections/CommonPageSections/SolutionsPageSections/OtherSolutionsSection";
import StickyComponentWithCardList from "sections/CommonPageSections/SolutionsPageSections/StickyComponentWithCardList";
import ChippedtabContentComponent from "sections/CommonPageSections/TechnologiesPageSections/ChippedTabContentComponent";
import supplyChainChippedTabsData from "./supplyChainData/chippedTabsData";

// supply chain page components listed

const supplyChainData = {
	components: [
		{
			// Industry solution section
			// this section of the page shows a grid of cards , the title, description
			// the card has the props for {title, description, icon}
			component: IndustrySolutionsSection,
			content: {
				data: [
					{
						title: `Pharma`,
						description: ``,
					},
					{
						title: `Ecommerce`,
						description: ``,
					},
					{
						title: `Food`,
						description: ``,
					},
					{
						title: `Retails`,
						description: ``,
					},
					{
						title: `Pharma`,
						description: ``,
					},
				],
			},
		},
		// chipped content component shows different components when clicked on the chip
		// the props inside the content are {title, description,data,headingAlign}
		{
			component: ChippedtabContentComponent,
			content: {
				title: "Supply Chain Solutions",
				description: "",
				// the data for the supply chain chipped tabs component
				data: supplyChainChippedTabsData,
				headingAlign: "center",
			},
		},
		// {
		//   component: ThirdSection,
		// },

		{
			// the two column component with left side component sticky and right side component with scrollable cards list
			// content props => {title, description, data: {title, icon, description}}
			component: StickyComponentWithCardList,
		},
		{
			// A three column component shown in the end of the page
			// It displays the other solutions given
			// content props => {title,data:{imageUrl,title,description, slug}}
			component: OtherSolutionsSection,
		},
	],
};
export default supplyChainData;
