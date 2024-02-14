import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import SecondaryButton from "components/Common/Buttons/SecondaryButton";
import React from "react";
import TwoColumnGridComponent from "./TwoColumnGridComponent";

const ReusableQuoteComponent = () => {
	return (
		<TwoColumnGridComponent
			leftComponent={
				<Typography
					sx={{
						fontWeight: 800,
						fontSize: ` 30px`,
						lineHeight: `48px`,
						color: "#2E3749",
					}}
				>
					Achieve your goals with the best web development services
				</Typography>
			}
			rightComponent={
				<Stack sx={{ paddingLeft: "64px" }}>
					<Typography
						sx={{
							fontSize: "14px",
							lineHeight: "28px",
							color: "#1f1f1f",
							marginBottom: "16px",
						}}
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Porttitor velit elit nisl sagittis. Rhoncus facilisis
						amet, id etiam nisl sed sit. Duis id nibh nec egestas
						aliquet pharetra, scelerisque tristique. Pulvinar turpis
						pellentesque rhoncus consectetur nunc.
					</Typography>
					<SecondaryButton
						sx={{
							background: "#153230",
							color: "white",
							maxWidth: "250px",

							"&:hover": {
								background: "#153230",
								color: "white",
							},
						}}
					>
						Get a quote
					</SecondaryButton>
				</Stack>
			}
		></TwoColumnGridComponent>
	);
};

export default ReusableQuoteComponent;
