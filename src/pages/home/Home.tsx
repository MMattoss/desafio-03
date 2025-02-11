import { useEffect } from "react";
import { imgBucketBaseUrl } from "../../utils/baseUrls";
import Carousel from "./components/Carousel";
import ProductsGrid from "../../components/ProductsGrid";
import { useClerk } from "@clerk/clerk-react";

const Home = () => {
	const { signOut } = useClerk();
	useEffect(() => {
		signOut({
			redirectUrl: "/",
		});
	}, [signOut]);
	
	return (
		<>
			<section
				id="hero"
				style={{
					backgroundImage: `url(${imgBucketBaseUrl}/homeImages/hero-bg.png)`,
				}}
				className={`bg-no-repeat bg-cover bg-center h-[712px] flex items-center justify-end pr-[18px]`}
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

			<section
				id="categories"
				className="mt-14 pl-[131px] pr-32 flex items-center justify-center"
			>
				<div>
					<header className="mb-16">
						<h1 className="text-[34px] text-dark-grey font-bold text-center">
							Browse The Range
						</h1>
						<p className="text-xl text-semi-dark-grey font-normal text-center">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit.
						</p>
					</header>

					<div className="flex gap-5">
						<div>
							<img
								src={`${imgBucketBaseUrl}/homeImages/category-dining.png`}
								alt="Dining table"
								className="mb-[30px] rounded"
							/>
							<h3 className="text-dark-grey text-2xl font-semibold text-center">
								Dining
							</h3>
						</div>
						<div>
							<img
								src={`${imgBucketBaseUrl}/homeImages/category-living-room.png`}
								alt="Living room"
								className="mb-[30px] rounded"
							/>
							<h3 className="text-dark-grey text-2xl font-semibold text-center">
								Living
							</h3>
						</div>
						<div>
							<img
								src={`${imgBucketBaseUrl}/homeImages/category-bathroom.png`}
								alt="Bathroom"
								className="mb-[30px] rounded"
							/>
							<h3 className="text-dark-grey text-2xl font-semibold text-center">
								Bedroom
							</h3>
						</div>
					</div>
				</div>
			</section>

			<section
				id="products"
				className="mt-14 px-[102px] flex items-center justify-center text-center mb-16"
			>
				<div className="">
					<h3 className="text-[40px] text-dark-grey font-bold mb-8">
						Our Products
					</h3>

					<ProductsGrid />

					<button className="bg-white w-[245px] h-12 border border-color-primary text-color-primary text-center text-base font-semibold ">
						Show more
					</button>
				</div>
			</section>

			<section
				id="inspirations"
				className="bg-[#FCF8F3] flex items-center justify-center  overflow-x-hidden "
			>
				<div className="flex items-center pl-24 py-11 max-w-[1440px]">
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

					<Carousel />
				</div>
			</section>

			<section
				id="furniture-showcase"
				className="overflow-hidden relative w-screen h-[900px] mt-16"
			>
				<header className="text-center">
					<h2 className="text-xl text-semi-dark-grey-3 font-semibold">
						Share your setup with
					</h2>
					<h1 className="text-[40px] text-dark-grey-2 font-bold">
						#FurniroFurniture
					</h1>
				</header>
				<img
					src={`${imgBucketBaseUrl}/homeImages/mosaic.png`}
					alt=""
					className="min-w-[1800px] absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"
				/>
			</section>
		</>
	);
};

export default Home;
