/* eslint-disable @typescript-eslint/no-explicit-any */
import Banner from "../../components/Banner";
import googleIcon from "../../assets/google-icon.svg"
import facebookLoginIcon from "../../assets/facebook-login-icon.svg"
import { Link, useNavigate } from "react-router";
import { useState } from "react";
import { useSignIn } from "@clerk/clerk-react";

const Login = () => {
	const navigate = useNavigate();
	const { signIn, isLoaded, setActive } = useSignIn();
	const [formData, setFormData] = useState({
		email: '',
		password: ''
	});

	const handleInputChange = (e: { target: { name: string; value: string; }; }) => {
		const { name, value } = e.target;
		setFormData(prevData => ({
			...prevData,
			[name]: value
		}))
	}

	const handleSubmit = async(e: React.FormEvent) => {
		e.preventDefault();
		
		if(!isLoaded) return;

		try {
			const completeSignIn = await signIn.create({
				identifier: formData.email,
				password: formData.password
			})

			if(completeSignIn.status !== "complete") {
				console.error(JSON.stringify(completeSignIn, null, 2));
				return;
			}

			await setActive({ session: completeSignIn.createdSessionId });
			setTimeout(() => {
				console.log("success")
				navigate('/')
			}, 1000)

		} catch (err: any) {
			console.error("error", err.errors[0].message);
		}
	}

	return (
		<>
			<Banner route={"login"} />
			<div className="flex items-center justify-center bg-white py-28">
				<div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
					<form className="card-body" onSubmit={handleSubmit}>
            <h1 className="text-center text-2xl font-medium text-black">Login with</h1>
						<div className="form-control">
							<label className="label">
								<span className="label-text text-base font-medium">
									Email
								</span>
							</label>
							<input
								name="email"
								type="email"
								placeholder="Email"
								className="input input-bordered"
								onChange={handleInputChange}
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text text-base font-medium">
									Password
								</span>
							</label>
							<input
								name="password"
								type="password"
								placeholder="Password"
								className="input input-bordered"
								onChange={handleInputChange}
							/>
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
								Login
							</button>
						</div>
						<div className="divider">Or</div>
						<div className="flex items-center justify-center gap-10 mb-4">
							<button className="btn rounded-full border drop-shadow-lg flex items-center justify-center">
                <img src={googleIcon} alt="Google" className="w-6 h-6" />
              </button>
              <button className="btn rounded-full border drop-shadow-lg flex items-center justify-center">
                <img src={facebookLoginIcon} alt="Facebook" className="w-6 h-6"/>
              </button>
						</div>
            <div className="text-center ">
              Don't have an account? <Link className="link" to={'/signup'}>Sign up.</Link>
            </div>
					</form>
				</div>
			</div>
		</>
	);
};

export default Login;
