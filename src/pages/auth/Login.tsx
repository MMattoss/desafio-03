import Banner from "../../components/Banner";
import googleIcon from "../../assets/google-icon.svg"
import facebookLoginIcon from "../../assets/facebook-login-icon.svg"
import { Link } from "react-router";

const Login = () => {
	return (
		<>
			<Banner route={"login"} />
			<div className="flex items-center justify-center bg-white py-28">
				<div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
					<form className="card-body">
            <h1 className="text-center text-2xl font-medium text-black">Login with</h1>
						<div className="form-control">
							<label className="label">
								<span className="label-text text-base font-medium">
									Email
								</span>
							</label>
							<input
								type="email"
								placeholder="Email"
								className="input input-bordered"
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text text-base font-medium">
									Password
								</span>
							</label>
							<input
								type="password"
								placeholder="Password"
								className="input input-bordered"
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
						<div className="flex items-center justify-center gap-4 mb-4">
							<button className="btn rounded-full border drop-shadow-lg flex items-center justify-center">
                <img src={googleIcon} alt="Google" className="w-6 h-6" />
              </button>
              <button className="btn rounded-full border drop-shadow-lg flex items-center justify-center">
                <img src={facebookLoginIcon} alt="Facebook" className="w-6 h-6"/>
              </button>
						</div>
            <div className="text-center link">
              <Link to={'/register'}>
                Don't have an account?
              </Link>
            </div>
					</form>
				</div>
			</div>
		</>
	);
};

export default Login;
