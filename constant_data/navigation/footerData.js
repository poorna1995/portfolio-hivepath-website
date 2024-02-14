import {
	FaFacebook,
	FaFacebookF,
	FaLinkedinIn,
	FaTwitter,
} from "react-icons/fa";
import linksData from "./linksData";

const footerData = {
	hivepath: {
		title: "Hivepath",
		description: `Tempor egestas mauris vitae fsa.Ultricies convallis eget ipsum integer quam amet mauris. Tempor egestas mauris vitae fsa.mauris vitae fsa.`,
		email: "email@hivepath.io",
		emailIcon: "",
	},
	links: [
		{
			head: linksData[2].title,
			data: linksData[2].links,
		},
		{
			head: linksData[3].title,
			data: linksData[3].links,
		},
		{
			head: linksData[4].title,
			data: linksData[4].links,
		},
	],
	socialLinks: {
		title: "Connect",
		data: [
			{
				title: "facebook",
				icon: <FaFacebookF />,
			},
			{
				title: "linkedin",
				icon: <FaLinkedinIn />,
			},
			{
				title: "Twitter",
				icon: <FaTwitter />,
			},
		],
	},
};
export default footerData;
