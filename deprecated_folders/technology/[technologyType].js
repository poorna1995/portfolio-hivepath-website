// import HeroComponent from "components/Common/HeroComponent";
// import technologiesData from "constant_data/content/technologiesData";
// import BaseLayout from "layouts/BaseLayout";
// import { useRouter } from "next/router";
// import React from "react";
// import TechnologiesPageSections from "sections/TechnologiesPageSections";

// const TechnologyTypePage = () => {
// 	const router = useRouter();
// 	console.log({ router: router.query });
// 	const technologyType = router.query.technologyType;
// 	const data =
// 		technologiesData[technologyType] && technologiesData[technologyType];
// 	const pageTitle = data && data.title;

// 	const bgColor = data && data.bgColor;
// 	const heroImage = data && data.heroImage;
// 	const components = data && data.data.components;

// 	return (
// 		<BaseLayout pageTitle={`${pageTitle} | Hivepath`} appHeaderBg={bgColor}>
// 			<HeroComponent
// 				heroBg={bgColor}
// 				heroTitle={pageTitle}
// 				heroImage={heroImage}
// 			/>
// 			{Array.isArray(components) &&
// 				components.length > 0 &&
// 				components.map((item, index) => {
// 					const { component: Component, content } = item;
// 					return <Component key={index} content={content} />;
// 				})}

// 			{/* <TechnologiesPageSections /> */}
// 		</BaseLayout>
// 	);
// };

// export default TechnologyTypePage;
