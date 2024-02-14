// import HeroComponent from "components/Common/HeroComponent";
// import HeroCompWithBgImage from "components/Common/HeroComponent/HeroCompWithBgImage";
// import productsData from "constant_data/content/productsData";
// import BaseLayout from "layouts/BaseLayout";
// import { useRouter } from "next/router";
// import React from "react";

// const ProductPage = () => {
// 	const router = useRouter();
// 	console.log({ router: router.query });
// 	const product = router.query.product;
// 	const data = productsData[product] && productsData[product];
// 	const pageTitle = data && data.title;

// 	const bgColor = data && data.bgColor;
// 	const heroImage = data && data.heroImage;
// 	const heroStyle = data && data.heroStyle;
// 	const components = data && data.data && data.data.components;

// 	return (
// 		<BaseLayout pageTitle={`${pageTitle} | Hivepath`} appHeaderBg={bgColor}>
// 			<HeroComponent
// 				heroBg={bgColor}
// 				heroTitle={pageTitle}
// 				heroImage={heroImage}
// 				heroStyle={heroStyle}

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

// export default ProductPage;
