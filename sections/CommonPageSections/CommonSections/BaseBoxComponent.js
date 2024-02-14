import { Box, Container, styled } from "@mui/material";
import React from "react";

const StyledBox = styled(Box)(({ theme }) => ({
	paddingTop: "64px",
	paddingBottom: "64px",
}));
const BaseBoxComponent = ({ children, boxStyle, containerWidth }) => {
	return (
		<StyledBox sx={boxStyle}>
			<Container maxWidth={containerWidth}>{children}</Container>
		</StyledBox>
	);
};

export default BaseBoxComponent;
