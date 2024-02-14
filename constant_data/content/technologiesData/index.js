import applicationDevelopmentHeroBg from "public/assets/heroImages/technology/application_development.png";
import dataScienceHeroBg from "public/assets/heroImages/technology/data_science.png";
import blockchainHeroBg from "public/assets/heroImages/technology/blockchain.png";
import dataManagementHeroBg from "public/assets/heroImages/technology/data_management.png";
import infrastructureHeroBg from "public/assets/heroImages/technology/infrastructure.png";
import edgeComputingHeroBg from "public/assets/heroImages/technology/edge_computing.png";
import applicationDevelopmentData from "./applicationDevelopmentData";
import dataScienceData from "./dataScienceData";
import blockchainData from "./blockchainData";
import dataManagementData from "./dataManagementData";
import infrastructureData from "./infrastructureData";
import edgeComputingData from "./edgeComputingData";

const technologiesData = {
	"application-development": {
		title: "Application Development",
		bgColor: `rgba(21, 27, 50, 1)`,
		heroImage: applicationDevelopmentHeroBg,
		// heroImageType: "full",
		data: applicationDevelopmentData,
	},
	"data-science": {
		title: "Data Science",
		bgColor: `rgba(3, 43, 121, 1)`,
		heroImage: dataScienceHeroBg,
		data: dataScienceData,
	},
	blockchain: {
		title: "Blockchain - Smart Contract",
		bgColor: `#0B3948`,
		heroImage: blockchainHeroBg,
		data: blockchainData,
	},
	"data-management": {
		title: "Data Management",
		bgColor: `rgba(36, 21, 50, 1)`,
		heroImage: dataManagementHeroBg,
		data: dataManagementData,
	},
	infrastructure: {
		title: "Infrastructure",
		bgColor: `rgba(8, 56, 84, 1)`,
		heroImage: infrastructureHeroBg,
		data: infrastructureData,
	},
	"edge-computing": {
		title: "Edge Computing",
		bgColor: `rgba(31, 58, 34, 1)`,
		heroImage: edgeComputingHeroBg,
		data: edgeComputingData,
	},
};
export default technologiesData;
