import hivepathHeroBg from "public/assets/products/hivepath/hivepath_new_hero_img.png";
import zelloHeroBg from "public/assets/products/zello/zello_new_hero_img.png";
import hivepathData from "./hivepathData";
import zelloData from "./zelloData";

const productsData = {
	hivepath: {
		title: "Hivepath",
		bgColor: "#0B2F51",
		heroImage: hivepathHeroBg,
		data: hivepathData,
		heroImageType: "center",
		heroButtonTitle: "Visit Website",
		heroStyle: {
			heroMarginBottom: "300px",
		},
	},
	zello: {
		title: "Zello - Photo Sharing App",
		bgColor: "#0B2F51",
		heroImage: zelloHeroBg,
		data: zelloData,
		heroImageType: "center",
		heroStyle: {
			heroMarginBottom: "300px",
		},
	},
};

export default productsData;
