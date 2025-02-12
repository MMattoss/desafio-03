import { useDispatch, useSelector } from "react-redux";
import Banner from "../components/Banner";
import BenefitsBanner from "../components/BenefitsBanner";
import { AppState } from "../store/store";
import { NavLink } from "react-router";
import trashIcon from "../assets/trash-icon.svg";
import { addToCart, decreaseQuantity, removeFromCart } from "../store/cart/cartSlice";

const Cart = () => {
	const cartItems = useSelector((state: AppState) => state.cart.cartItems);
	const dispatch = useDispatch();

	return (
		<>
			<Banner route="cart" />
			<section className="flex py-16 px-24 gap-9">
				<div className="w-full">
					<div className="py-4 text-black text-base font-medium bg-beige">
						<ul className="grid grid-cols-6">
							<li>{""}</li>
							<li>Product</li>
							<li>Price</li>
							<li>Quantity</li>
							<li>Subtotal</li>
							<li>{""}</li>
						</ul>
					</div>

					<div className="flex flex-col gap-8 py-8">
						{cartItems.map((item) => (
							<div
								key={item.id}
								className="grid grid-cols-6 items-center"
							>
								<img
									src={item.thumbnailUrl}
									alt="Product"
									className="w-24 h-24 rounded-md"
								/>
								<h3 className="text-gray-500 text-base font-normal tracking-wide">
									{item.title}
								</h3>
								<h3 className="text-gray-500 text-base font-normal tracking-wide">
									Rs. {item.price.toLocaleString()}
								</h3>
								<div className="w-24 py-3 border border-gray-500 flex items-center justify-evenly rounded-xl">
									<button
										onClick={() =>
											dispatch(decreaseQuantity(item.id))
										}
										className="text-xl font-bold mr-2"
									>
										-
									</button>
									<span className="text-base font-medium text-black">
										{item.quantity}
									</span>
									<button
										onClick={() =>
											dispatch(
												addToCart({
													id: item.id,
													title: item.title,
													price: item.price,
													hasDiscount:
														item.hasDiscount,
													discount: item.discount,
													thumbnailUrl:
														item.thumbnailUrl,
													quantity: item.quantity,
												})
											)
										}
										className="text-xl font-bold ml-2"
									>
										+
									</button>
								</div>
								<h3>
									Rs.{" "}
									{(
										item.price * item.quantity
									).toLocaleString()}
								</h3>
								<div className="flex justify-center">
									<img src={trashIcon} alt="Delete" onClick={()=> dispatch(removeFromCart(item.id))}/>
								</div>
							</div>
						))}
					</div>
				</div>

				<div className="w-96 h-96 flex flex-col items-center pt-4 px-20 bg-beige">
					<h1 className="text-3xl text-black font-semibold text-center mb-16">
						Cart Totals
					</h1>

					<div className="w-full mb-14">
						<div className="flex justify-between mb-8">
							<h3 className="text-black text-base font-medium">
								Subtotal
							</h3>
							<h3 className="text-gray-400 text-base font-normal">
								Rs.{" "}
								{cartItems
									.reduce(
										(sum, item) =>
											sum + item.price * item.quantity,
										0
									)
									.toLocaleString()}
							</h3>
						</div>
						<div className="flex justify-between">
							<h3 className="text-black text-base font-medium">
								Total
							</h3>
							<h3 className="text-color-primary text-xl font-medium">
								Rs.{" "}
								{cartItems
									.reduce(
										(sum, item) =>
											sum + item.price * item.quantity,
										0
									)
									.toLocaleString()}
							</h3>
						</div>
					</div>

					<NavLink
						to={"/checkout"}
						className="px-14 py-4 text-black text-xl font-normal border border-black rounded-xl"
					>
						Checkout
					</NavLink>
				</div>
			</section>
			<BenefitsBanner />
		</>
	);
};

export default Cart;
