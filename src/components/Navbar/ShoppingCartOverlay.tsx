import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../store/cart/cartSlice";
import closeCartIcon from "../../assets/close-cart-icon.svg";
import xIcon from "../../assets/x-icon.svg";
import { AppState } from "../../store/store";
import { NavLink } from "react-router";

type ShoppingCartOverlayProps = {
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ShoppingCartOverlay: React.FC<ShoppingCartOverlayProps> = ({ setIsCartOpen }) => {
	const dispatch = useDispatch();
	const cartItems = useSelector((state: AppState) => state.cart.cartItems);

	return (
		<div className="fixed right-0 top-0 bg-black bg-opacity-50 w-screen h-screen z-50 flex justify-end">
			<div
				onMouseLeave={() => setIsCartOpen(false)}
				className=" w-[420px] max-h-[90vh] h-[746px]  bg-white  flex flex-col"
			>
				<div className="flex justify-between py-7 px-8">
					<h1 className="text-black text-2xl font-semibold">
						Shopping Cart
					</h1>
					<img
						src={closeCartIcon}
						alt="Close cart"
						onClick={() => setIsCartOpen(false)}
					/>
				</div>

				<div className="divider px-8"></div>

				<ul className="flex flex-col gap-5 overflow-y-scroll mb-auto px-8">
					{cartItems.map((item, index) => (
						<div
							className="flex items-center justify-between pr-5"
							key={index}
						>
							<img
								src={item.thumbnailUrl}
								alt="Product"
								className="w-24 h-24 rounded mr-8"
							/>
							<article className="flex flex-col gap-2 mr-16">
								<h3>{item.title}</h3>
								<p className="text-black text-base font-light flex items-center gap-4">
									{item.quantity} <span>X</span>
									<span className="text-color-primary text-xs font-medium">
										Rs.
										{item.hasDiscount
											? (
													item.price -
													item.price *
														(item.discount! / 100)
											  ).toLocaleString()
											: item.price.toLocaleString()}
									</span>
								</p>
							</article>
							<img
								src={xIcon}
								alt="Close"
								onClick={() =>
									dispatch(removeFromCart(item.id))
								}
							/>
						</div>
					))}
				</ul>

				{cartItems.length > 0 && (
					<div className="flex gap-[100px] justify-self-end px-8 pt-3">
						<h3 className="text-black text-base font-normal">
							Subtotal
						</h3>
						<h3 className="text-color-primary text-base font-semibold">
							{cartItems
								.reduce((sum, item) => (sum += item.price), 0)
								.toLocaleString()}
						</h3>
					</div>
				)}

				<div className="divider"></div>

				<div className="flex items-center justify-center gap-3 pb-6 px-8">
					<NavLink
						to={"/cart"}
						className="border border-black rounded-full px-8 py-2 text-xs text-black font-normal"
					>
						Cart
					</NavLink>
					<NavLink
						to={"/checkout"}
						className="border border-black rounded-full px-8 py-2 text-xs text-black font-normal"
					>
						Checkout
					</NavLink>
					<NavLink
						to={"#"}
						className="border border-black rounded-full px-8 py-2 text-xs text-black font-normal"
					>
						Comparison
					</NavLink>
				</div>
			</div>
		</div>
	);
};

export default ShoppingCartOverlay;
