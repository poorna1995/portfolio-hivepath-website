import ChippedTabsChildComponent from "sections/CommonPageSections/TechnologiesPageSections/ChippedTabContentComponent/ChippedTabsChildComponent";

// the data for chipped tabs component in supply chain page
// the props => {id, title, component: <Component title={title} description={description} image={image} />}

const supplyChainChippedTabsData = [
	{
		id: 0,
		title: "WareHousing",
		component: <ChippedTabsChildComponent />,
	},
	{ id: 1, title: "Logistics", component: <ChippedTabsChildComponent /> },
	{
		id: 2,
		title: "Project Management",
		component: <ChippedTabsChildComponent />,
	},
	{
		id: 3,
		title: "E-commmerce",
		component: <ChippedTabsChildComponent />,
	},
	{
		id: 4,
		title: "Transportation",
		component: <ChippedTabsChildComponent />,
	},
];

export default supplyChainChippedTabsData;
