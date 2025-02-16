import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { ClerkProvider } from "@clerk/clerk-react";
import { Provider } from 'react-redux';
import { store } from "./store/store.ts";
import Home from "./pages/home/Home.tsx";
import App from "./App.tsx";
import "./index.css";
import SignUpPage from "./pages/auth/Signup.tsx";
import SignInPage from "./pages/auth/SignIn.tsx";
import Success from "./pages/Success.tsx";
import Shop from "./pages/shop/Shop.tsx";
import Cart from "./pages/Cart.tsx";
import Contact from "./pages/Contact.tsx";
import Checkout from "./pages/Checkout.tsx";
import ProtectedRoute from "./pages/ProtectedRoutes.tsx";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
	throw new Error("Missing Publishable Key");
}

createRoot(document.getElementById("root")!).render(
	<BrowserRouter>
		<StrictMode>
			<Provider store={store}>

			<ClerkProvider
				publishableKey={PUBLISHABLE_KEY}
				afterSignOutUrl={"/"}
			>
				<Routes>
					<Route element={<App />}>
						<Route path="/" element={<Home />} />
						<Route path="sign-in" element={<SignInPage />} />
						<Route path="sign-up" element={<SignUpPage />} />
						<Route path="shop" element={<Shop />} />
						<Route path="cart" element={<Cart />} />
						<Route path="contact" element={<Contact />} />
						<Route path="success" element={<Success />} />

						{/* Protected routes */}
						<Route element={<ProtectedRoute />} >
							<Route path="checkout" element={<Checkout />}/>
						</Route>
					</Route>
				</Routes>
			</ClerkProvider>
			</Provider>

		</StrictMode>
		,
	</BrowserRouter>
);
