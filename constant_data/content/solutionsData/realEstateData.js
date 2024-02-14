import OtherSolutionsSection from "sections/CommonPageSections/SolutionsPageSections/OtherSolutionsSection";
import SliderWithContentRowComponent from "sections/CommonPageSections/SolutionsPageSections/SliderWithContentRowComponent";
import TwoRowTwoColumnsGridWithHeading from "sections/CommonPageSections/SolutionsPageSections/TwoRowTwoColumnsGridWithHeading";
import ThreeColumnComponent from "sections/CommonPageSections/TechnologiesPageSections/ThreeColumnComponent";
import realEstateGridContentData from "./realEstateData/gridContent";

const realEstateData = {
	components: [
		{
			component: SliderWithContentRowComponent,
			content: {
				title: "",
			},
		},
		{
			component: TwoRowTwoColumnsGridWithHeading,
			content: {
				title: "",
				description: "",
				data: realEstateGridContentData,
			},
		},
		{
			component: ThreeColumnComponent,
			content: {
				title: "Analytics & Digitization Solutions (in progress)",
				description: "",
				data: [{}, {}, {}],
				headingAlign: "center",
			},
		},
		{
			component: OtherSolutionsSection,
		},
	],
};
export default realEstateData;
