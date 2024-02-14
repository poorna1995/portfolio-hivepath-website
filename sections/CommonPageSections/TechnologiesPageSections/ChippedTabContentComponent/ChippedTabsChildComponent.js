import { Box } from "@mui/system";
import AppImage from "components/Common/AppImage";
import DescriptionText from "components/Common/Typography/BodyText/DescriptionText";
import SectionTitleText from "components/Common/Typography/HeadingText/SectionTitleText";
import BaseBoxComponent from "sections/CommonPageSections/CommonSections/BaseBoxComponent";
import TwoColumnGridComponent from "sections/CommonPageSections/CommonSections/TwoColumnGridComponent";
import placeholderImage from "public/assets/card/acc_placeholder.png";

// the child component of Chipped Tabs section
// this component is made up of Two Column grid component
// the left side displays the heading and description text and right side displays an image
// the props => {title, description, image}
const ChippedTabsChildComponent = ({ title, description, image }) => (
	<BaseBoxComponent
		boxStyle={{
			background: "#F5F9F6",
			borderRadius: "35px",
			paddingTop: "16px",
			paddingBottom: "16px",
		}}
	>
		<TwoColumnGridComponent
			containerStyles={{
				marginTop: "8px",
				alignItems: "center",
			}}
			leftComponent={
				<Box>
					<SectionTitleText
						sx={{
							fontWeight: 700,
							fontSize: `28px`,
							lineHeight: `42px`,
						}}
					>
						{title ||
							`	Lorem ipsum dolor sit amet, consectetur adipiscing{" "}
					`}
					</SectionTitleText>
					<DescriptionText
						sx={{
							fontSize: "14px",
						}}
					>
						{description ||
							`
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Porttitor velit elit nisl sagittis. Rhoncus facilisis
						amet, id etiam nisl sed sit. Duis id nibh nec egestas
						aliquet pharetra, scelerisque tristique. Pulvinar turpis
						pellentesque rhoncus consectetur nunc. Faucibus i.
						Pulvinar turpis pellentesque rhoncus consectetur nunc.
						Faucibus{" "}
					`}
					</DescriptionText>
				</Box>
			}
			rightComponent={<AppImage src={image || placeholderImage} />}
		/>
	</BaseBoxComponent>
);

export default ChippedTabsChildComponent;
