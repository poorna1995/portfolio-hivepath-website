import React from "react";
import BaseBoxComponent from "sections/CommonPageSections/CommonSections/BaseBoxComponent";
import TwoColumnGridComponent from "sections/CommonPageSections/CommonSections/TwoColumnGridComponent";
import ContactUsDetailsSection from "./ContactUsDetailsSection";
import ContactUsFormSection from "./ContactUsFormSection";

const ContactUsPageSections = () => {
	return (
		<BaseBoxComponent>
			<TwoColumnGridComponent
				leftComponent={<ContactUsDetailsSection />}
				rightComponent={<ContactUsFormSection />}
			/>
		</BaseBoxComponent>
	);
};

export default ContactUsPageSections;
