// import HeroComponent from "components/Common/HeroComponent";
// import solutionsData from "constant_data/content/solutionsData";
// import BaseLayout from "layouts/BaseLayout";
// import { useRouter } from "next/router";
// import React from "react";
// import SolutionsPageSections from "sections/SolutionsPageSections";

// const SolutionTypePage = () => {
// 	const router = useRouter();
// 	console.log({ router: router.query });
// 	const solutionType = router.query.solutionType;
// 	const data = solutionsData[solutionType] && solutionsData[solutionType];

// 	const pageTitle = data && data.title;
// 	const bgColor = data && data.bgColor;

// 	const heroImage = data && data.heroImage;

// 	return (
// 		<BaseLayout pageTitle={`${pageTitle} | Hivepath`} appHeaderBg={bgColor}>
// 			<HeroComponent
// 				heroBg={bgColor}
// 				heroTitle={pageTitle || `Warehouse Operations`}
// 				heroImage={heroImage}
// 			/>
// 			<SolutionsPageSections />
// 		</BaseLayout>
// 	);
// };

// export default SolutionTypePage;
