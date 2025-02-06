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

	return (
		<div className="bg-[#F4F5F7] w-[285px] h-[446px]">
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
		</div>
	);
};

export default ProductCard;
