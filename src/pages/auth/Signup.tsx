import { Link } from "react-router";
import Banner from "../../components/Banner";
import googleIcon from "../../assets/google-icon.svg";
import facebookLoginIcon from "../../assets/facebook-login-icon.svg";
import { useState } from "react";
import { useSignUp } from "@clerk/clerk-react";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema } from "../../utils/formValidations/signUpSchema";
import VerificationForm from "./components/VerificationForm";

const SignUpPage = () => {
	const [pendingVerification, setPendingVerification] = useState(false);
	const { signUp, isLoaded, setActive } = useSignUp();
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		reset,
	} = useForm({
		resolver: zodResolver(signUpSchema),
	});

	const onSubmit = async (data: FieldValues) => {
		if (!isLoaded) return;

		try {
			await signUp.create({
				firstName: data.name,
				emailAddress: data.email,
				password: data.password,
			});

			await signUp.prepareEmailAddressVerification({
				strategy: "email_code",
			});
			setPendingVerification(true);
			reset();
		} catch (err) {
			console.error("Error: ", err);
		}
	};

	return (
		<>
			<Banner route={"Sign Up"} />
			<div className="flex items-center justify-center bg-white py-28">
				<div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
					{!pendingVerification ? (
						<form
							className="card-body"
							onSubmit={handleSubmit(onSubmit)}
						>
							<h1 className="text-center text-2xl font-medium text-black">
								Sign up with
							</h1>
							{/* Name */}
							<div className="form-control">
								<label className="label">
									<span className="label-text text-base font-medium">
										Name
									</span>
								</label>
								<input
									{...register("name")}
									name="name"
									type="text"
									placeholder="Name"
									className="input input-bordered"
								/>
								{errors.name && (
									<label className="label">
										<p className="label-text-alt text-red-600">
											{errors.name.message?.toString()}
										</p>
									</label>
								)}
							</div>

							{/* Email */}
							<div className="form-control">
								<label className="label">
									<span className="label-text text-base font-medium">
										Email
									</span>
								</label>
								<input
									{...register("email")}
									name="email"
									type="email"
									placeholder="Email"
									className="input input-bordered"
								/>
								{errors.email && (
									<label className="label">
										<p className="label-text-alt text-red-600">
											{errors.email.message?.toString()}
										</p>
									</label>
								)}
							</div>

							{/* Password */}
							<div className="form-control">
								<label className="label">
									<span className="label-text text-base font-medium">
										Password
									</span>
								</label>
								<input
									{...register("password")}
									type="password"
									placeholder="Password"
									className="input input-bordered"
								/>
								<label className="label">
									<p
										className={`label-text-alt  ${
											errors.password
												? "text-red-600"
												: "text-gray-400"
										}`}
									>
										Password must contain at least:
										<ul>
											<li>- One uppercase letter</li>
											<li>- One lowercase letter</li>
											<li>- One number</li>
											<li>- One symbol ($,#,%,&,*)</li>
											<li>- 8 characters</li>
										</ul>
									</p>
								</label>
								{errors.password && <div>Erro</div> }
							</div>

							{/* Confirm password */}
							<div className="form-control">
								<label className="label">
									<span className="label-text text-base font-medium">
										Confirm password
									</span>
								</label>
								<input
									{...register("confirmPassword")}
									name="confirmPassword"
									type="password"
									placeholder="Confirm password"
									className="input input-bordered"
								/>
								{errors.confirmPassword && (
									<label className="label">
										<p className="label-text-alt text-red-600">
											{errors.confirmPassword.message?.toString()}
										</p>
									</label>
								)}
							</div>

							{/* Submit */}
							<div className="form-control mt-6">
								<button
									className="btn bg-color-primary text-white"
									type="submit"
								>
									{isSubmitting ? (
										<div className="loading loading-spinner text-white"></div>
									) : (
										"Sign Up"
									)}
								</button>
							</div>

							<div className="divider">Or</div>

							{/* Oauth submit */}
							<div className="flex items-center justify-center gap-10 mb-4">
								<button className="btn rounded-full border drop-shadow-lg flex items-center justify-center">
									<img
										src={googleIcon}
										alt="Google"
										className="w-6 h-6"
									/>
								</button>
								<button className="btn rounded-full border drop-shadow-lg flex items-center justify-center">
									<img
										src={facebookLoginIcon}
										alt="Facebook"
										className="w-6 h-6"
									/>
								</button>
							</div>
							<div className="text-center">
								Already have an account?{" "}
								<Link className="link" to={"/login"}>
									Log in
								</Link>
							</div>
						</form>
					) : (
						<VerificationForm signUp={signUp} isLoaded={isLoaded} setActive={setActive} />
					)}
				</div>
			</div>
		</>
	);
};

export default SignUpPage;
