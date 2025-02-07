import { useState } from "react";
import arrow from "../../../assets/Right 24px.svg";
import animation from "./carousel.module.css";

const initialImages = [
	"https://furniro-images.s3.us-east-2.amazonaws.com/carouselImages/carousel-img-1.png",
	"https://furniro-images.s3.us-east-2.amazonaws.com/carouselImages/carousel-img-2.png",
	"https://furniro-images.s3.us-east-2.amazonaws.com/carouselImages/carousel-img-3.png",
	"https://furniro-images.s3.us-east-2.amazonaws.com/carouselImages/carousel-img-4.jpg",
];


const Carousel = () => {
	const [images, setImages] = useState(initialImages);
	const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNextSlide = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
			setIsTransitioning(false)
			setImages((prevImages) => {
        const newImages = [...prevImages.slice(1), prevImages[0]];
        return newImages;
      });
    }, 500);

  };

  return (
    <div className="relative flex-1 self-stretch overflow-hidden">
      {/* Track */}
      <div
        className={`flex gap-6 ${
          isTransitioning ? animation.track : ""
        }`}
      >
        <div className="relative flex gap-6">
          {/* Controller */}
          <button
            onClick={handleNextSlide}
            className="bg-white w-12 h-12 rounded-full shadow-xl flex items-center justify-center absolute z-10 top-1/2 left-[351px] translate-y-[-150%]"
          >
            <img src={arrow} alt="arrow left" />
          </button>

          {images.map((item, index) => (
            <CarouselItem src={item} key={index} isActive={index === 0} />
          ))}
        </div>
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
		className={`${animation.carouselItem} ${isActive ? animation.active : ""}`}
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
