import { Link, useNavigate } from "react-router";
import Banner from "../../components/Banner";
import googleIcon from "../../assets/google-icon.svg";
import facebookLoginIcon from "../../assets/facebook-login-icon.svg"
import { useState } from "react";
import { useSignUp } from "@clerk/clerk-react";

const SignUpPage = () => {
	const navigate = useNavigate();
	const [ pendingVerification, setPendingVerification ] = useState(false)
	const { signUp, isLoaded, setActive } = useSignUp();
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
	});
	const [verificationCode, setVerificationCode] = useState("")

	const handleInputChange = (e: { target: { name: string; value: string; }; }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
		console.log(formData)
	};

	const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setVerificationCode(e.target.value)
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if(!isLoaded) return;

		try {
			await signUp.create({
				firstName: formData.name,
				emailAddress: formData.email,
				password: "G9edM9Q382tRsap",
			});

			await signUp.prepareEmailAddressVerification({
				strategy: "email_code"
			})

			setPendingVerification(true)

		} catch (err) {
			console.error("Error: ", err)
		}
	}

	const handleVerification = async (e: React.FormEvent, code: string) => {
		e.preventDefault();

		if(!isLoaded) return;

		const completeSignUp = await signUp.attemptEmailAddressVerification({code});
		console.log(completeSignUp)

		if(completeSignUp.status !== "complete") {
			return "Verification error."
		}

		await setActive({session: completeSignUp.createdSessionId});
		console.log("success")
		setTimeout(() => {
			navigate('/');

		}, 1000)
	}

  return (
    <>
      <Banner route={"Sign Up"} />
			<div className="flex items-center justify-center bg-white py-28">
				<div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
					{!pendingVerification ? (
						<form className="card-body" onSubmit={handleSubmit}>
            <h1 className="text-center text-2xl font-medium text-black">Sign up with</h1>
            {/* Name */}
						<div className="form-control">
							<label className="label">
								<span className="label-text text-base font-medium">
									Name
								</span>
							</label>
							<input
								name="name"
								type="text"
								placeholder="Name"
								className="input input-bordered"
								onChange={handleInputChange}
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
								name="email"
								type="email"
								placeholder="Email"
								className="input input-bordered"
								onChange={handleInputChange}
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
								name="password"
								type="password"
								placeholder="Confirm password"
								className="input input-bordered"
								onChange={handleInputChange}
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
					) : (
						<form action="#" className="card-body" onSubmit={(e) => handleVerification(e, verificationCode)}>
							<h1>Check your email</h1>
							<div className="form-control">
								<label className="label">
									<span className="label-text text-base font-medium">
										Verification code
									</span>
								</label>
								<input
									name="code"
									type="number"
									placeholder=""
									className="input input-bordered"
									onChange={handleCodeChange}
								/>
							</div>
							<div className="form-control mt-6">
							<button className="btn bg-color-primary text-white" type="submit">
								Sign up
							</button>
						</div>
						</form>
					)}
					
				</div>
			</div>
    </>
  )
}

export default SignUpPage;