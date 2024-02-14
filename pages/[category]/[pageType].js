import HeroComponent from "components/Common/HeroComponent";
import HeroComponentCenterImage from "components/Common/HeroComponent/HeroComponentCenterImage";
import HeroComponentWithRightImageFull from "components/Common/HeroComponent/HeroComponentWithRightImageFull";
import constantData from "constant_data/content";
import BaseLayout from "layouts/BaseLayout";
import { useRouter } from "next/router";
import React from "react";

const CategoryPageTypePage = () => {
	const router = useRouter();
	const category = router.query.category;
	// router.query.pageType
	const pageType = router.query.pageType;
	const pageData = constantData[category] && constantData[category];

	const data = pageType && pageData[pageType] && pageData[pageType];
	// console.log({ router: router, data, pageData });

	const pageTitle = data && data.title;
	const heroTitle = data && data.heroTitle;
	const heroImageType = data && data.heroImageType;
	const bgColor = data && data.bgColor;
	const heroImage = data && data.heroImage;
	const heroButtonTitle = data && data.heroButtonTitle;
	const heroStyle = data && data.heroStyle;
	const components = data && data.data && data.data.components;
	const overflow = data && data.overflow;

	return (
		<BaseLayout
			pageTitle={`${pageTitle} | Aradit`}
			appHeaderBg={bgColor}
			overflow={overflow}
		>
			{heroImageType === "center" ? (
				<HeroComponentCenterImage
					heroBg={bgColor}
					heroTitle={heroTitle || pageTitle}
					heroImage={heroImage}
					heroButtonTitle={heroButtonTitle}
					heroStyle={heroStyle}
				/>
			) : (
				<HeroComponent
					heroBg={bgColor}
					heroTitle={heroTitle || pageTitle}
					heroImage={heroImage}
				/>
			)}

			{Array.isArray(components) &&
				components.length > 0 &&
				components.map((item, index) => {
					const { component: Component, content } = item;
					return <Component key={index} content={content} />;
				})}
		</BaseLayout>
	);
};

export default CategoryPageTypePage;
