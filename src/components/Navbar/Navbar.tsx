import loginIcon from "../../assets/login-icon.svg";
import cartIcon from "../../assets/cart-icon.svg";
import { NavLink } from "react-router";
import { imgBucketBaseUrl } from "../../utils/baseUrls";
import { SignedIn, SignedOut, useClerk } from "@clerk/clerk-react";
import { useState } from "react";
import ShoppingCartOverlay from "./ShoppingCartOverlay";
import { useSelector } from "react-redux";
import { AppState } from "../../store/store";

const Navbar = () => {
	const { signOut } = useClerk();
	const [isCartOpen, setIsCartOpen] = useState(true);
	const cartItems = useSelector((state: AppState) => state.cart.cartItems);
	const totalCartItems = cartItems.reduce(
		(sum, item) => sum + item.quantity,
		0
	);

	return (
		<header className="flex justify-between items-center py-[30px] pl-14 pr-24 relative">
			<div className="flex items-center">
				<img
					src={`${imgBucketBaseUrl}/homeImages/logo.png`}
					alt="Logo"
					className="mr-1"
				/>
				<h1 className="font-montserrat font-bold text-[34px] leading-none">
					Furniro
				</h1>
			</div>

			<nav>
				<ul className="flex gap-[75px]">
					<li>
						<NavLink
							to="/"
							className="text-base font-medium font-poppins"
						>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/shop"
							className="text-base font-medium font-poppins"
						>
							Shop
						</NavLink>
					</li>
					<li>
						<NavLink
							to="#"
							className="text-base font-medium font-poppins"
						>
							About
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/contact"
							className="text-base font-medium font-poppins"
						>
							Contact
						</NavLink>
					</li>
				</ul>
			</nav>

			<div className="flex items-center gap-8">
				<div className="dropdown dropdown-hover dropdown-end">
					<div tabIndex={0} role="button">
						<img src={loginIcon} alt="Login" />
					</div>
					<ul
						tabIndex={0}
						className="dropdown-content bg-white menu rounded-box z-[1] w-28 p-2 drop-shadow-lg"
					>
						<SignedIn>
							<li className="bg-white hover:bg-slate-200">
								<NavLink
									to={"/"}
									onClick={() =>
										signOut({ redirectUrl: "/" })
									}
								>
									Sign Out
								</NavLink>
							</li>
						</SignedIn>

						<SignedOut>
							<li className="bg-white hover:bg-slate-200">
								<NavLink to={"/login"}>Login</NavLink>
							</li>
							<li className="bg-white hover:bg-slate-200">
								<NavLink to={"/signup"}>Sign up</NavLink>
							</li>
						</SignedOut>
					</ul>
				</div>
				<div className="flex relative">
					{totalCartItems > 0 ? (
						<div className="absolute bottom-2/3 left-1/2 w-4 h-4 bg-red-600 rounded-full text-white text-sm font-medium flex items-center justify-center">
							{totalCartItems}
						</div>
					) : (
						""
					)}
					<img
						src={cartIcon}
						alt="Cart"
						onMouseEnter={() => setIsCartOpen(true)}
					/>
				</div>
			</div>

			{isCartOpen && (
				<ShoppingCartOverlay setIsCartOpen={setIsCartOpen} />
			)}
		</header>
	);
};

export default Navbar;
