// images
import energyHeroBg from "public/assets/heroImages/solutions/energy.png";
import realEstateHeroBg from "public/assets/heroImages/solutions/real_estate.png";
import restaurantChainsHeroBg from "public/assets/heroImages/solutions/restaurant_chains.png";
import supplyChainHeroBg from "public/assets/heroImages/solutions/supply_chain.png";
import evChargeheroBg from "public/assets/heroImages/solutions/ev_charge.png";
import sportsHeroBg from "public/assets/heroImages/solutions/sports.png";
import interactionCommerceHeroBg from "public/assets/heroImages/solutions/interaction-commerce.png";

// data
import electricChargingStationsData from "./electricChargingStationsData";
import energyData from "./energyData";
import largeRestaurantsChainsData from "./largeRestaurantsChainsData";
import realEstateData from "./realEstateData";
import sportsAndEsportsData from "./sportsAndEsportsData";
import supplyChainData from "./supplyChainData";
import wareHouseOperationData from "./wareHouseOperationsData";
import interactionCommerceData from "./interactionCommerceData";

const solutionsData = {
	"large-restaurants-chains": {
		title: "Large Restaurants Chains",
		heroTitle: "",
		bgColor: "rgba(66, 51, 22, 1)",
		heroImage: restaurantChainsHeroBg,
		data: largeRestaurantsChainsData,
	},
	"real-estate": {
		title: "Real Estate",
		heroTitle: "",
		heroImage: realEstateHeroBg,
		bgColor: "rgba(57, 114, 186, 1)",
		data: realEstateData,
	},
	"warehouse-operations": {
		heroTitle: "",
		title: "Warehouse Oprations",
		heroImage: realEstateHeroBg,
		bgColor: "rgba(14, 65, 94, 1)",
		data: wareHouseOperationData,
	},
	"supply-chain": {
		title: "Supply Chain",
		heroTitle: "Your supply chain, streamlined",
		heroImage: supplyChainHeroBg,
		bgColor: "rgba(41, 39, 37, 1)",
		data: supplyChainData,
		overflow: "none",
	},
	energy: {
		title: "Energy",
		heroTitle: `The market intelligence platform for wind and solar
		`,
		heroImage: energyHeroBg,
		bgColor: "rgba(7, 59, 76, 1)",
		data: energyData,
	},
	"electric-charging-stations": {
		title: "Electric Charging Stations",
		heroTitle: "Empowering the EV Ecosystem",
		heroImage: evChargeheroBg,
		bgColor: " #352D1E",
		data: electricChargingStationsData,
	},
	"sports-and-esports": {
		title: "Sports and e-Sports",
		heroTitle: "",
		heroImage: sportsHeroBg,
		bgColor: "#2F3E46",
		data: sportsAndEsportsData,
	},
	"interaction-commerce": {
		title: "Interaction Commerce Technology",
		heroTitle: "",
		heroImage: interactionCommerceHeroBg,
		bgColor: "#0B3948",
		data: interactionCommerceData,
	},
};
export default solutionsData;
