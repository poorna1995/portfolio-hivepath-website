import PageTabs from "components/Common/Tabs/PageTabs";
import React from "react";

const TabbedPageSections = ({ content }) => {
	const { data } = content;
	return (
		<div>
			<PageTabs data={data} />
		</div>
	);
};

export default TabbedPageSections;
