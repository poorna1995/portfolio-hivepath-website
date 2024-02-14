import React from "react";

const MouseCircleIcon = () => {
	return (
		<svg
			width="69"
			height="70"
			viewBox="0 0 69 70"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M27.3125 60.8926C42.3968 60.8926 54.625 48.6644 54.625 33.5801C54.625 18.4958 42.3968 6.26758 27.3125 6.26758C12.2282 6.26758 0 18.4958 0 33.5801C0 48.6644 12.2282 60.8926 27.3125 60.8926Z"
				fill="url(#paint0_linear_588_674)"
			/>
			<g filter="url(#filter0_bi_588_674)">
				<path
					d="M53.6358 52.9421L48.9495 54.5234C47.6558 54.9547 46.6208 55.9609 46.1896 57.2834L44.6083 61.9697C43.257 66.0234 37.5645 65.9372 36.2995 61.8834L30.9808 44.7771C29.9458 41.3846 33.0796 38.2221 36.4433 39.2859L53.5783 44.6046C57.6033 45.8696 57.6608 51.5909 53.6358 52.9421Z"
					fill="white"
					fillOpacity="0.3"
				/>
				<path
					d="M53.5155 52.5838L53.5149 52.5839L48.83 54.1648C48.8298 54.1649 48.8296 54.1649 48.8294 54.165C47.4266 54.6328 46.3007 55.7253 45.8307 57.1644C45.8305 57.165 45.8303 57.1656 45.8301 57.1662L44.2501 61.8488L44.2497 61.8501C43.0159 65.5515 37.8174 65.4784 36.6604 61.7708L31.3424 44.6668C31.3423 44.6665 31.3422 44.6662 31.3421 44.6659C30.3941 41.5562 33.2648 38.6772 36.3293 39.6463L36.3312 39.6469L53.465 44.9653C53.4652 44.9654 53.4654 44.9654 53.4656 44.9655C57.1383 46.1204 57.1955 51.3483 53.5155 52.5838Z"
					stroke="url(#paint1_linear_588_674)"
					strokeOpacity="0.1"
					strokeWidth="0.756061"
				/>
			</g>
			<defs>
				<filter
					id="filter0_bi_588_674"
					x="19.4389"
					y="27.7354"
					width="48.528"
					height="48.5727"
					filterUnits="userSpaceOnUse"
					colorInterpolationFilters="sRGB"
				>
					<feFlood floodOpacity="0" result="BackgroundImageFix" />
					<feGaussianBlur
						in="BackgroundImageFix"
						stdDeviation="5.67045"
					/>
					<feComposite
						in2="SourceAlpha"
						operator="in"
						result="effect1_backgroundBlur_588_674"
					/>
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="effect1_backgroundBlur_588_674"
						result="shape"
					/>
					<feColorMatrix
						in="SourceAlpha"
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						result="hardAlpha"
					/>
					<feOffset dx="-4.44742" dy="2.66845" />
					<feGaussianBlur stdDeviation="2.22371" />
					<feComposite
						in2="hardAlpha"
						operator="arithmetic"
						k2="-1"
						k3="1"
					/>
					<feColorMatrix
						type="matrix"
						values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"
					/>
					<feBlend
						mode="normal"
						in2="shape"
						result="effect2_innerShadow_588_674"
					/>
				</filter>
				<linearGradient
					id="paint0_linear_588_674"
					x1="2.27604"
					y1="17.1926"
					x2="61.8218"
					y2="25.4628"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#FE82DB" />
					<stop offset="1" stopColor="#68E4FF" />
				</linearGradient>
				<linearGradient
					id="paint1_linear_588_674"
					x1="31.5875"
					y1="40.2532"
					x2="56.6259"
					y2="40.2532"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#FD84DC" />
					<stop offset="1" stopColor="#7FD6FA" />
				</linearGradient>
			</defs>
		</svg>
	);
};

export default MouseCircleIcon;
