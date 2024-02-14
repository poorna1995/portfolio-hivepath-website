import SolarPowerSection from "sections/CommonPageSections/SolutionsPageSections/EnergyPageSections/SolarPowerSection";
import WindPowerSection from "sections/CommonPageSections/SolutionsPageSections/EnergyPageSections/WindPowerSection";
import OtherSolutionsSection from "sections/CommonPageSections/SolutionsPageSections/OtherSolutionsSection";
import CDLSection from "sections/CommonPageSections/SolutionsPageSections/SportsAndEsportsPageSections/CDLSection";
import LeaguesSection from "sections/CommonPageSections/SolutionsPageSections/SportsAndEsportsPageSections/LeaguesSection";
import TabbedPageSections from "sections/CommonPageSections/SolutionsPageSections/TabbedPageSections";

const sportsAndEsportsData = {
	components: [
		{
			component: TabbedPageSections,
			content: {
				data: [
					{
						label: `Leagues`,
						component: <LeaguesSection />,
					},
					{
						label: `CDL`,
						component: <CDLSection />,
					},
				],
			},
		},
		{
			component: OtherSolutionsSection,
		},
	],
};
export default sportsAndEsportsData;
