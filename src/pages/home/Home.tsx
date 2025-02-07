import Carousel from "./components/Carousel";
import ProductsGrid from "./components/ProductsGrid";

const Home = () => {
	return (
		<>
			<section
				id="hero"
				style={{
					backgroundImage: `url(https://furniro-images.s3.us-east-2.amazonaws.com/homeImages/hero-bg.png)`,
				}}
				className="bg-no-repeat bg-cover bg-center h-[712px] flex items-center justify-end pr-[18px]"
			>
				<div className="w-[643px] h-[443px] bg-color-primary-light pt-16 pl-10 pr-11 pb-9 rounded-lg">
					<h3 className="text-base font-semibold text-dark-grey tracking-widest ">
						New Arrival
					</h3>
					<h1 className="text-[52px] text-color-primary font-bold leading-tight mb-6">
						Discover Our <br /> New Collection
					</h1>
					<p className="text-lg font-medium text-dark-grey leading-tight mb-11">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Ut <br /> elit tellus, luctus nec ullamcorper mattis.
					</p>
					<button className="w-[222px] h-[74px] bg-color-primary uppercase font-bold text-white">
						Buy now
					</button>
				</div>
			</section>

			<section id="categories" className="mt-14 pl-[131px] pr-32 ">
				<header className="mb-16">
					<h1 className="text-[34px] text-dark-grey font-bold text-center">
						Browse The Range
					</h1>
					<p className="text-xl text-semi-dark-grey font-normal text-center">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</p>
				</header>

				<div className="flex gap-5">
					<div>
						<img
							src="https://furniro-images.s3.us-east-2.amazonaws.com/homeImages/category-dining.png"
							alt="Dining table"
							className="mb-[30px] rounded"
						/>
						<h3 className="text-dark-grey text-2xl font-semibold text-center">
							Dining
						</h3>
					</div>
					<div>
						<img
							src="https://furniro-images.s3.us-east-2.amazonaws.com/homeImages/category-living-room.png"
							alt="Living room"
							className="mb-[30px] rounded"
						/>
						<h3 className="text-dark-grey text-2xl font-semibold text-center">
							Living
						</h3>
					</div>
					<div>
						<img
							src="https://furniro-images.s3.us-east-2.amazonaws.com/homeImages/category-bathroom.png"
							alt="Bathroom"
							className="mb-[30px] rounded"
						/>
						<h3 className="text-dark-grey text-2xl font-semibold text-center">
							Bedroom
						</h3>
					</div>
				</div>
			</section>

			<section
				id="products"
				className="mt-14 px-[102px] text-center mb-16"
			>
				<h3 className="text-[40px] text-dark-grey font-bold mb-8">
					Our Products
				</h3>

				<ProductsGrid />

				<button className="bg-white w-[245px] h-12 border border-color-primary text-color-primary text-center text-base font-semibold ">
					Show more
				</button>
			</section>

			<section
				id="inspirations"
				className="bg-[#FCF8F3] flex items-center pl-24 py-11 overflow-x-hidden"
			>
				<article className="mr-10">
					<h1 className="text-[40px] text-dark-grey-2 font-bold leading-10 mb-2">
						50+ Beautiful rooms <br /> inspiration
					</h1>
					<p className="text-gray-500 text-base font-medium mb-6 leading-6">
						Our designer already made a lot of beautiful <br />{" "}
						prototipe of rooms that inspire you
					</p>
					<button className="w-44 h-12 bg-color-primary text-white text-base font-medium">
						Explore More
					</button>
				</article>

				{/* <div className="relative">
					<img
						src="https://furniro-images.s3.us-east-2.amazonaws.com/homeImages/inspiration-banner.png"
						alt="Bedroom decoration"
						className="mr-6"
					/>
					<div className="absolute bottom-6 left-6 flex items-end">
						<article className="bg-white bg-opacity-75 pt-16 pl-8 pb-8 pr-4">
              <h3 className="flex items-center text-semi-dark-grey-3 text-base font-medium gap-1">01 <div className="w-7 h-[1px] bg-semi-dark-grey-3"></div> Bed room </h3>
              <h2 className="text-semi-grey-2 text-3xl font-semibold ">Inner Peace</h2>
            </article>
						<button className="w-12 h-12 bg-color-primary flex items-center justify-center">
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
				</div> */}

        <Carousel />
			</section>
		</>
	);
};

export default Home;
