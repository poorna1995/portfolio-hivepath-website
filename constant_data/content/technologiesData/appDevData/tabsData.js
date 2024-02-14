import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import AppImage from "components/Common/AppImage";
import DescriptionText from "components/Common/Typography/BodyText/DescriptionText";
import SectionTitleText from "components/Common/Typography/HeadingText/SectionTitleText";
import TwoColumnGridComponent from "sections/CommonPageSections/CommonSections/TwoColumnGridComponent";
import placeholderImage from "public/assets/card/tabs_placeholder.png";

const descriptionStyle = {
	fontSize: ` 14px`,
	lineHeight: `28px`,
};
const headingStyle = {
	fontWeight: 700,
	fontSize: `28px`,
	lineHeight: `42px`,
};
const appDevTabsData = [
	{
		label: `Customizable UI`,
		component: (
			<TwoColumnGridComponent
				leftComponent={
					<Box sx={{ padding: "16px" }}>
						<SectionTitleText sx={headingStyle}>
							Lorem ipsum dolor sit amet, consectetur adipiscing
						</SectionTitleText>
						<DescriptionText sx={descriptionStyle}>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Porttitor velit elit nisl sagittis. Rhoncus
							facilisis amet, id etiam nisl sed sit. Duis id nibh
							nec egestas aliquet pharetra, scelerisque tristique.
							Pulvinar turpis pellentesque rhoncus consectetur
							nunc. Faucibus i. Pulvinar turpis pellentesque
							rhoncus consectetur nunc. Faucibus
						</DescriptionText>
					</Box>
				}
				rightComponent={<AppImage src={placeholderImage} />}
			/>
		),
	},
	{
		label: `Open source code`,
		component: (
			<TwoColumnGridComponent
				leftComponent={<Typography></Typography>}
				rightComponent={<AppImage src={placeholderImage} />}
			/>
		),
	},
	{
		label: `Ease of integration`,
		component: (
			<TwoColumnGridComponent
				leftComponent={<Typography></Typography>}
				rightComponent={<AppImage src={placeholderImage} />}
			/>
		),
	},
	{
		label: `Cross-platform development`,
		component: (
			<TwoColumnGridComponent
				leftComponent={<Typography></Typography>}
				rightComponent={<AppImage src={placeholderImage} />}
			/>
		),
	},
	{
		label: `Application support`,
		component: (
			<TwoColumnGridComponent
				leftComponent={<Typography></Typography>}
				rightComponent={<AppImage src={placeholderImage} />}
			/>
		),
	},
];

export default appDevTabsData;
