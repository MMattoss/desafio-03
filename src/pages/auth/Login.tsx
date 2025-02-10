/* eslint-disable @typescript-eslint/no-explicit-any */
import Banner from "../../components/Banner";
import googleIcon from "../../assets/google-icon.svg";
import facebookLoginIcon from "../../assets/facebook-login-icon.svg";
import { Link } from "react-router";
import { useSignIn } from "@clerk/clerk-react";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema } from "../../utils/formValidations/signInSchema";

const Login = () => {
	const { signIn, isLoaded, setActive } = useSignIn();
	const {
		register,
		reset,
		handleSubmit,
		setError,
		formState: { isSubmitting, errors },
	} = useForm({
		resolver: zodResolver(signInSchema)
	});

	const onSubmit = async (data: FieldValues) => {
		if (!isLoaded) return;

		try {
			const attemptSignIn = await signIn.create({
				identifier: data.email,
				password: data.password,
			});

			reset();
			await setActive({ session: attemptSignIn.createdSessionId, redirectUrl: "/success"});
		} catch (err: any) {
			console.error("error", err.errors[0].message);
			setError("password", {
				type: "manual",
				message: "Incorrect password",
			});
		}
	};

	return (
		<>
			<Banner route={"login"} />
			<div className="flex items-center justify-center bg-white py-28">
				<div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
					<form
						className="card-body"
						onSubmit={handleSubmit(onSubmit)}
					>
						<h1 className="text-center text-2xl font-medium text-black">
							Login with
						</h1>
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
							{errors.email && <label className="label">
								<p className="label-text-alt text-red-600">{errors.email.message?.toString()}</p>
							</label> }
						</div>

						<div className="form-control">
							<label className="label">
								<span className="label-text text-base font-medium">
									Password
								</span>
							</label>
							<input
								{...register("password")}
								name="password"
								type="password"
								placeholder="Password"
								className="input input-bordered"
							/>
							{errors.password && <label className="label">
								<p className="label-text-alt text-red-600">{errors.password.message?.toString()}</p>
							</label> }
							<label className="label">
								<a
									href="#"
									className="label-text-alt link link-hover"
								>
									Forgot password?
								</a>
							</label>
						</div>

						<div className="form-control mt-6">
							<button className="btn bg-color-primary text-white">
								{isSubmitting ? (
									<div className="loading loading-spinner text-white"></div>
								) : (
									"Login"
								)}
							</button>
						</div>
						<div className="divider">Or</div>
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
						<div className="text-center ">
							Don't have an account?{" "}
							<Link className="link" to={"/signup"}>
								Sign up.
							</Link>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default Login;
