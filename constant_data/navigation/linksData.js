import productsData from "constant_data/content/productsData";
import solutionsData from "constant_data/content/solutionsData";
import technologiesData from "constant_data/content/technologiesData";
import mapLinksFromData from "utills/mapLinksFromData";

const linksData = [
	{
		id: 0,
		title: "Aradit",
		url: "/",
		flex: 1,
	},
	{
		id: 1,
		title: "Services",
		url: "/",
	},
	{
		id: 2,
		title: "Solutions",
		// url: "/solutions",
		links: mapLinksFromData(solutionsData, "solutions"),
	},
	{
		id: 3,
		title: "Technology",
		// url: "/technology",
		links: mapLinksFromData(technologiesData, "technology"),
	},
	{
		id: 4,
		title: "Products",
		links: mapLinksFromData(productsData, "products"),
	},
	{
		id: 5,
		title: "About Us",
		url: "/contact-us",
	},
];
export default linksData;
