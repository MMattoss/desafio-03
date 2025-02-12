import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { ClerkProvider } from "@clerk/clerk-react";
import { Provider } from 'react-redux';
import { store } from "./store/store.ts";
import Home from "./pages/home/Home.tsx";
import App from "./App.tsx";
import "./index.css";
import Login from "./pages/auth/Login.tsx";
import SignUpPage from "./pages/auth/Signup.tsx";
import Success from "./pages/Success.tsx";
import Shop from "./pages/shop/Shop.tsx";

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
						<Route path="login" element={<Login />} />
						<Route path="signup" element={<SignUpPage />} />
						<Route path="shop" element={<Shop />} />
						<Route path="success" element={<Success />} />
					</Route>
				</Routes>
			</ClerkProvider>
			</Provider>

		</StrictMode>
		,
	</BrowserRouter>
);
