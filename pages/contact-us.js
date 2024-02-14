import { Grid } from "@mui/material";
import BaseLayout from "layouts/BaseLayout";
import React from "react";
import ContactUsPageSections from "sections/ContactUsPageSections";

const ContactUsPage = () => {
	return (
		<BaseLayout
			pageTitle={`Contact us | Aradit`}
			// appHeaderBg={"white"}
			hideFooterCard
		>
			<ContactUsPageSections />
		</BaseLayout>
	);
};

export default ContactUsPage;
