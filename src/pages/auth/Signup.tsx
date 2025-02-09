import { Link } from "react-router";
import Banner from "../../components/Banner";
import googleIcon from "../../assets/google-icon.svg";
import facebookLoginIcon from "../../assets/facebook-login-icon.svg"

const SignUpPage = () => {
  return (
    <>
      <Banner route={"Sign Up"} />
			<div className="flex items-center justify-center bg-white py-28">
				<div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
					<form className="card-body">
            <h1 className="text-center text-2xl font-medium text-black">Sign up with</h1>
            {/* Name */}
						<div className="form-control">
							<label className="label">
								<span className="label-text text-base font-medium">
									Name
								</span>
							</label>
							<input
								type="text"
								placeholder="Name"
								className="input input-bordered"
							/>
						</div>
            {/* Email */}
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
            {/* Password */}
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
						</div>
            {/* Confirm password */}
						<div className="form-control">
							<label className="label">
								<span className="label-text text-base font-medium">
									Confirm password
								</span>
							</label>
							<input
								type="password"
								placeholder="Confirm password"
								className="input input-bordered"
							/>
						</div>
						<div className="form-control mt-6">
							<button className="btn bg-color-primary text-white">
								Sign up
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
            <div className="text-center">
                Already have an account? <Link className="link" to={'/login'}>Login</Link>
            </div>
					</form>
				</div>
			</div>
    </>
  )
}

export default SignUpPage;