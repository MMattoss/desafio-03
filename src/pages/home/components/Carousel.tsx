import { useState } from "react";
import arrow from "../../../assets/Right 24px.svg";
import animation from "./carousel.module.css";

const initialImages = [
	`https://furniro-images.s3.us-east-2.amazonaws.com/carouselImages/carousel-img-1.png`,
	"https://furniro-images.s3.us-east-2.amazonaws.com/carouselImages/carousel-img-2.png",
	"https://furniro-images.s3.us-east-2.amazonaws.com/carouselImages/carousel-img-3.png",
	"https://furniro-images.s3.us-east-2.amazonaws.com/carouselImages/carousel-img-4.jpg",
];

const Carousel = () => {
	const [images, setImages] = useState(initialImages);
	const [isTransitioning, setIsTransitioning] = useState(false);
	const [activeIndex, setActiveIndex] = useState(0);

	const handleNextSlide = () => {
		if (isTransitioning) return;

		setIsTransitioning(true);
		setTimeout(() => {
			setIsTransitioning(false);
			setImages((prevImages) => {
				const newImages = [...prevImages.slice(1), prevImages[0]];
				return newImages;
			});
			setActiveIndex((prevIndex) => (prevIndex + 1) % initialImages.length);
		}, 500);
	};

	return (
		<div className="relative flex-1 self-stretch overflow-hidden">
			{/* Controller */}
			<button
				onClick={handleNextSlide}
				className="bg-white w-12 h-12 rounded-full drop-shadow-2xl flex items-center justify-center absolute z-10 top-1/2 left-[776px] translate-y-[-50%]"
			>
				<img src={arrow} alt="arrow left" />
			</button>

			{/* Track */}
			<div
				className={`flex gap-6 relative transition-[transform] ${
					isTransitioning ? animation.track : ""
				}`}
			>
				<div className="flex gap-6">
					{images.map((item, index) => (
						<CarouselItem
							src={item}
							key={index}
							isActive={index === 0}
						/>
					))}
				</div>
			</div>

			{/* Indicator */}
			<div className="flex justify-between items-center absolute left-[428px] bottom-[29px] gap-5">
				{images.map((_, index) => (
					<div
						key={index}
						className={`w-7 h-7 rounded-full p-2 ${index === activeIndex ? "border border-color-primary" : ""}`} 
					>
						<div className={`w-full h-full rounded-full ${index === activeIndex ? "bg-color-primary" : "bg-slate-200"}`}></div>
					</div>
				))}
			</div>
		</div>
	);
};

type CarouselItemProp = {
	src: string;
	isActive: boolean;
};

const CarouselItem = ({ src, isActive }: CarouselItemProp) => {
	return (
		<div
			className={`w-[372px] h-[486px] bg-no-repeat bg-cover bg-center transition-[height] duration-500 ${
				isActive
					? "w-[404px] h-[582px] transition-[height] duration-500"
					: ""
			}`}
			style={{ backgroundImage: `url(${src})` }}
		>
			<div className="absolute bottom-6 left-6 flex items-end">
				<article className="bg-white bg-opacity-75 pt-16 pl-8 pb-8 pr-4">
					<h3 className="flex items-center text-semi-dark-grey-3 text-base font-medium gap-1">
						01{" "}
						<div className="w-7 h-[1px] bg-semi-dark-grey-3"></div>{" "}
						Bed room{" "}
					</h3>
					<h2 className="text-semi-grey-2 text-3xl font-semibold ">
						Inner Peace
					</h2>
				</article>
				<button className="min-w-12 h-12 bg-color-primary flex items-center justify-center">
					<svg
						width="20"
						height="14"
						viewBox="0 0 20 14"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M19 7H1M19 7L13 1M19 7L13 13"
							stroke="white"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</button>
			</div>
		</div>
	);
};

export default Carousel;
