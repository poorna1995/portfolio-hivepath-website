import { Box, Container } from "@mui/material";
import AppFooter from "components/AppFooter";
import FooterCard from "components/AppFooter/FooterCard";
import AppHeader from "components/AppHeader";
import Head from "next/head";
import React from "react";
import Script from "next/script";
import TransitionLayout from "layouts/TransitionLayout";

const BaseLayout = ({
	appHeaderBg,
	pageTitle,
	pageDescription,
	children,
	hideFooterCard,
	overflow,
}) => {
	return (
		<Box sx={{ maxWidth: "100%", overflow: overflow || "hidden" }}>
			<Head>
				<title>{pageTitle || "Aradit"}</title>
				<meta
					name="description"
					content={pageDescription || "Aradit Portfolio website"}
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Script
				src="https://www.googletagmanager.com/gtag/js?id=G-9BCV67K1LT"
				strategy="afterInteractive"
			/>
			<Script id="google-analytics" strategy="afterInteractive">
				{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-9BCV67K1LT');
        `}
			</Script>

			<AppHeader appHeaderBg={appHeaderBg} />
			<Box>
				<TransitionLayout>{children}</TransitionLayout>
			</Box>

			{!hideFooterCard && (
				<Container sx={{ paddingTop: "64px" }}>
					<FooterCard />
				</Container>
			)}
			<AppFooter />
		</Box>
	);
};

export default BaseLayout;
