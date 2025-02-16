import { useSignUp } from "@clerk/clerk-react";
import googleIcon from "../assets/google-icon.svg";
import facebookLoginIcon from "../assets/facebook-login-icon.svg";
import { useState } from "react";

type OauthButtonProp = {
	provider: "google" | "facebook";
};

export const OauthButton = ({ provider }: OauthButtonProp) => {
	const { signUp, isLoaded } = useSignUp();
	const [loading, setLoading] = useState(false);

	const handleSocialSubmit = async (
		providerCode: "oauth_google" | "oauth_facebook"
	) => {
		if (!isLoaded) return;
		try {
			setLoading(true);
			await signUp.authenticateWithRedirect({
				strategy: providerCode,
				redirectUrl: "/checkout",
				redirectUrlComplete: "/checkout",
			});
			setLoading(false);
		} catch (err) {
			console.error("Err: ", err);
		}
	};

	if (provider === "google") {
		return (
			<button
				onClick={() => handleSocialSubmit("oauth_google")}
				className="btn rounded-full border drop-shadow-lg flex items-center justify-center"
			>
				{loading ? (
					<div className="loading loading-spinner text-color-primary"></div>
				) : (
					<img
						src={googleIcon}
						alt="Google"
						className="w-6 h-6"
					/>
				)}
			</button>
		);
	}

	if (provider === "facebook") {
		return (
			<button
				onClick={() => handleSocialSubmit("oauth_facebook")}
				className="btn rounded-full border drop-shadow-lg flex items-center justify-center"
			>
				{loading ? (
					<div className="loading loading-spinner text-color-primary"></div>
				) : (
					<img
						src={facebookLoginIcon}
						alt="Facebook"
						className="w-6 h-6"
					/>
				)}
			</button>
		);
	}
};
