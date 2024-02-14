import { Box } from "@mui/material";
import React from "react";
import ConnectionsSection from "./ConnectionsSection";
import ProfilePageSection from "./ProfilePageSection";
import VirtualSessionsSection from "./VirtualSessionsSection";

const HivepathSections = () => {
	return (
		<Box sx={{ paddingTop: "64px" }}>
			<ProfilePageSection />
			<ConnectionsSection />
			<VirtualSessionsSection />
		</Box>
	);
};

export default HivepathSections;
