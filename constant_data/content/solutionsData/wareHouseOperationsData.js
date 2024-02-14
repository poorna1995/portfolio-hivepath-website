import IndustrySolutionsSection from "sections/CommonPageSections/SolutionsPageSections/IndustrySolutionsSection";
import OtherSolutionsSection from "sections/CommonPageSections/SolutionsPageSections/OtherSolutionsSection";
import SolutionsForAllNeedsSection from "sections/CommonPageSections/SolutionsPageSections/SolutionsForAllNeedsSection";
import ThirdSection from "sections/CommonPageSections/SolutionsPageSections/ThirdSection";

const wareHouseOperationData = {
  components: [
    {
      component: IndustrySolutionsSection,
      content: {
        data: [
          {
            title: `Pharma`,
          },
          {
            title: `Ecommerce`,
          },
          {
            title: `Food`,
          },
          {
            title: `Retails`,
          },
          {
            title: `Pharma`,
          },
        ],
      },
    },
    {
      component: SolutionsForAllNeedsSection,
    },
    {
      component: ThirdSection,
    },
    {
      component: OtherSolutionsSection,
    },
  ],
};
export default wareHouseOperationData;
