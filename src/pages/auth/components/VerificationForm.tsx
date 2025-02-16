/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldValues, useForm } from "react-hook-form";

const VerificationForm = ({ signUp, isLoaded, setActive }: any) => {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		setError,
	} = useForm();

	const onCodeSubmit = async (data: FieldValues) => {
		if (!isLoaded) return;

		try {
			const completeSignUp = await signUp.attemptEmailAddressVerification(
				{
					code: data.code,
				}
			);

			await setActive({ session: completeSignUp.createdSessionId, redirectUrl: "/checkout" });

		} catch (err) {
			console.error("error: ", err);
			setError("Submitting", {
				type: "manual",
				message:
					"We had some trouble signing you up, please try again later.",
			});
		}
	};

	return (
		<form
			action="#"
			className="card-body"
			onSubmit={handleSubmit(onCodeSubmit)}
		>
			<h1>Check your email</h1>
			<div className="form-control">
				<label className="label">
					<span className="label-text text-base font-medium">
						Verification code
					</span>
				</label>
				<input
					{...register("code")}
					name="code"
					type="number"
					className="input input-bordered"
				/>
        {errors.code && <div>{errors.code.message?.toString()}</div> }
			</div>
			<div className="form-control mt-6">
				<button
					className="btn bg-color-primary text-white"
					type="submit"
				>
					{isSubmitting ? (
						<div className="loading loading-spinner text-white"></div>
					) : (
						"Sign up"
					)}
				</button>
			</div>
		</form>
	);
};

export default VerificationForm;
