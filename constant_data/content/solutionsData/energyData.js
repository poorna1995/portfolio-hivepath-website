import OtherSolutionsSection from "sections/CommonPageSections/SolutionsPageSections/OtherSolutionsSection";
import SolarPowerSection from "sections/CommonPageSections/SolutionsPageSections/EnergyPageSections/SolarPowerSection";
import TabbedPageSections from "sections/CommonPageSections/SolutionsPageSections/TabbedPageSections";
import WindPowerSection from "sections/CommonPageSections/SolutionsPageSections/EnergyPageSections/WindPowerSection";

const energyData = {
	components: [
		{
			component: TabbedPageSections,
			content: {
				data: [
					{
						label: `Solar power`,
						component: <SolarPowerSection />,
					},
					{
						label: `Wind power`,
						component: <WindPowerSection />,
					},
				],
			},
		},
		{
			component: OtherSolutionsSection,
		},
	],
};

export default energyData;
