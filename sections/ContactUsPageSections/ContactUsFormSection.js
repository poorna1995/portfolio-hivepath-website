/* eslint-disable react/no-unescaped-entities */
import { FormLabel, OutlinedInput, Stack } from "@mui/material";
import SecondaryButton from "components/Common/Buttons/SecondaryButton";
import BaseCard from "components/Common/Cards/BaseCard";
import FormSelectInput from "components/Common/Inputs/SelectInput";
import TextInput from "components/Common/Inputs/TextInput";
import CardTitle from "components/Common/Typography/HeadingText/CardTitle";
import React from "react";

const ContactUsFormSection = () => {
	const options = [{ label: "Application Development", value: "appDev" }];
	return (
		<BaseCard sx={{ padding: "24px" }}>
			<Stack sx={{ alignItems: "center", flexDirection: "column" }}>
				<CardTitle>What can we help you with?</CardTitle>
				<TextInput placeholder="your name" />
				<TextInput placeholder="your email" />
				<TextInput placeholder="details" />
				<FormSelectInput
					title={"Select service"}
					placeholder="choose a service"
					options={options}
				/>
				<SecondaryButton
					sx={{
						background: "#153230",
						color: "white",
						maxWidth: "200px",
						marginTop: "32px",
						"&:hover": {
							background: "#153230",
							color: "white",
						},
					}}
				>
					Let's Talk
				</SecondaryButton>
			</Stack>
		</BaseCard>
	);
};

export default ContactUsFormSection;
