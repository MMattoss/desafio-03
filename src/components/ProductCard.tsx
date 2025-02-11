import { useState } from "react";
import { Link } from "react-router";

interface ProductCardProps {
	title: string;
	description: string;
	price: number;
	isNew: boolean;
	hasDiscount: boolean;
	discount: number;
	thumbnailUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
	title,
	description,
	price,
	isNew,
	hasDiscount,
	discount,
	thumbnailUrl,
}: ProductCardProps) => {
	const calculatedPrice =
		hasDiscount && !isNew ? price - price * (discount / 100) : price;
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div
			className="bg-[#F4F5F7] w-[285px] h-[446px] relative"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			{/* Photo */}
			<div
				style={{ backgroundImage: `url(${thumbnailUrl})` }}
				className="w-full h-[301px] bg-no-repeat bg-cover bg-center mb-4 relative"
			>
				{/* "New" circle */}
				{isNew ? (
					<div className="bg-red-400 w-12 h-12 rounded-full flex items-center justify-center absolute top-3 right-3 text-white text-base font-medium">
						New
					</div>
				) : (
					""
				)}

				{/* Discount circle */}
				{hasDiscount ? (
					<div className="bg-green-300 w-12 h-12 rounded-full flex items-center justify-center absolute top-3 right-3 text-white text-base font-medium">
						{discount}%
					</div>
				) : (
					""
				)}
			</div>

			{/* Text */}
			<div className="px-4 pb-8 text-left">
				<h1 className="text-dark-2 text-2xl font-semibold mb-2">
					{title}
				</h1>
				<p className="text-base text-semi-dark-grey-2 font-medium mb-2">
					{description}
				</p>
				{hasDiscount ? (
					<p className="text-xl text-dark-grey-2 font-semibold">
						Rp {calculatedPrice.toLocaleString()}{" "}
						<span className="text-base text-light-grey font-normal line-through ml-4">
							Rp {price.toLocaleString()}
						</span>
					</p>
				) : (
					<p className="text-xl text-dark-grey-2 font-semibold">
						Rp {price.toLocaleString()}
					</p>
				)}
			</div>

			{/* Hover */}
			{isHovered ? (
				<div className="absolute top-0 left-0 w-full h-full bg-dark-grey-2 bg-opacity-75 flex flex-col items-center justify-center">
					<button className="bg-white w-52 h-12 text-color-primary text-base font-semibold mb-6">
						Add to cart
					</button>
					<nav className="w-full">
						<ul className="flex justify-evenly">
							<li className="flex items-center gap-1">
								<Link to={"#"}>
									<svg width="16" height="16" fill="none">
										<path
											d="M10 9.667c-.525 0-1 .206-1.356.538L3.94 7.467C3.973 7.313 4 7.16 4 7c0-.16-.027-.313-.06-.467l4.7-2.74A1.997 1.997 0 0 0 12 2.333c0-1.106-.893-2-2-2s-2 .894-2 2c0 .16.027.314.06.467l-4.7 2.74A1.997 1.997 0 0 0 0 7a1.997 1.997 0 0 0 3.36 1.46l4.699 2.745c-.038.151-.058.306-.059.462a2 2 0 1 0 2-2Z"
											fill="#fff"
										/>
									</svg>
									<h3 className="text-white text-base font-semibold">
										Share
									</h3>
								</Link>
							</li>
							<li className="flex items-center gap-1">
								<Link to={"#"}>
									<svg width="16" height="16" fill="none">
										<path
											d="m10.08 7 1 1 3.44-3.45L11 1l-1 1 1.8 1.8H2v1.4h9.82L10.08 7ZM5.86 9l-1-1-3.44 3.5L4.91 15l1-1-1.81-1.8H14v-1.4H4.1L5.86 9Z"
											fill="#fff"
										/>
									</svg>
									<h3 className="text-white text-base font-semibold">
										Compare
									</h3>
								</Link>
							</li>
							<li className="flex items-center gap-1">
								<Link to={"#"}>
									<svg width="16" height="16" fill="none">
										<path
											d="M8 14.036c-13.333-7.37-4-15.37 0-10.31 4-5.06 13.333 2.94 0 10.31Z"
											stroke="#fff"
											stroke-width="1.8"
										/>
									</svg>
									<h3 className="text-white text-base font-semibold">
										Like
									</h3>
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			) : (
				""
			)}
		</div>
	);
};

export default ProductCard;
