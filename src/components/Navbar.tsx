import loginIcon from "../assets/login-icon.svg";
import cartIcon from "../assets/cart-icon.svg";
import { NavLink } from "react-router";
import { imgBucketBaseUrl } from "../utils/baseUrls";
import { SignedIn, SignedOut, useClerk } from "@clerk/clerk-react";

const Navbar = () => {
	const { signOut } = useClerk();

	return (
		<header className="flex justify-between items-center py-[30px] pl-14 pr-24">
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
								<NavLink to={"/"} onClick={() => signOut({redirectUrl: '/'})}>
									Sign Out
								</NavLink>
							</li>
						</SignedIn>

						<SignedOut>
							<li className="bg-white hover:bg-slate-200">
								<NavLink to={"/login"}>
									Login
								</NavLink>
							</li>
							<li className="bg-white hover:bg-slate-200">
								<NavLink to={"/signup"}>
									Sign up
								</NavLink>
							</li>
						</SignedOut>
					</ul>
				</div>
				<img src={cartIcon} alt="Cart" />
			</div>
		</header>
	);
};

export default Navbar;
