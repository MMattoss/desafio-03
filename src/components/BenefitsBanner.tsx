import trophyIcon from "../assets/trophy-icon.svg";
import verifiedIcon from "../assets/verified-icon.svg";
import shippingIcon from "../assets/shipping-icon.svg";
import customerSupportIcon from "../assets/customer-support-icon.svg";

const BenefitsBanner = () => {
	return (
		<div className="flex bg-beige gap-14 px-14 py-[100px] justify-center items-center">
			<div className="flex gap-2">
				<img src={trophyIcon} alt="Trophy" />
				<article>
					<h1 className="text-gray-900 text-2xl font-semibold">
						High Quality
					</h1>
					<p className="text-gray-500 text-xl font-medium">
						crafted from top materials
					</p>
				</article>
			</div>
			<div className="flex gap-2">
				<img src={verifiedIcon} alt="Verified" />
				<article>
					<h1 className="text-gray-900 text-2xl font-semibold">
						Warranty Protection
					</h1>
					<p className="text-gray-500 text-xl font-medium">
						Over 2 years
					</p>
				</article>
			</div>
			<div className="flex gap-2">
				<img src={shippingIcon} alt="Free shipping" />
				<article>
					<h1 className="text-gray-900 text-2xl font-semibold">
						Free shipping
					</h1>
					<p className="text-gray-500 text-xl font-medium">
						Order over 150 $
					</p>
				</article>
			</div>
			<div className="flex gap-2">
				<img src={customerSupportIcon} alt="customer Support" />
				<article>
					<h1 className="text-gray-900 text-2xl font-semibold">
						24 / 7 Support
					</h1>
					<p className="text-gray-500 text-xl font-medium">
						Dedicated support
					</p>
				</article>
			</div>
		</div>
	);
};

export default BenefitsBanner;