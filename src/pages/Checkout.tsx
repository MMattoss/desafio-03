import { useForm } from "react-hook-form";
import Banner from "../components/Banner";
import BenefitsBanner from "../components/BenefitsBanner";
import { zodResolver } from "@hookform/resolvers/zod";
import { checkoutSchema } from "../utils/formValidations/checkoutSchema";
import { useSelector } from "react-redux";
import { AppState } from "../store/store";
import { useEffect, useState } from "react";
import { getAddressInfo } from "../utils/getAddressInfo";

const Checkout = () => {
	const {
		register,
		formState: { errors },
		watch,
	} = useForm({
		resolver: zodResolver(checkoutSchema),
	});
	const zipCode = watch("zipCode");
	const [addressInfo, setAddressInfo] = useState({
		regiao: "",
		cidade: "",
		estado: "",
		logradouro: ""
	});

	const cartItems = useSelector((state: AppState) => state.cart.cartItems);
	const total = cartItems.reduce(
		(sum, item) => sum + item.price * item.quantity,
		0
	);

	useEffect(() => {
		if (zipCode?.length === 8) {
			const addressInfo = async () => {
				const res = await getAddressInfo(zipCode);
				setAddressInfo({
					regiao: res.regiao,
					cidade: res.localidade,
					estado: res.estado,
					logradouro: res.logradouro
				})
				return res;
			};
			console.log(addressInfo());
		}
	}, [zipCode]);

	return (
		<>
			<Banner route="checkout" />
			<section className="flex justify-center gap-24 py-14 px-44">
				{/* Form */}
				<div className="flex-1">
					<h1 className="text-4xl text-black font-semibold mb-9">
						Billing details
					</h1>
					<form className="flex flex-col gap-9">
						{/* First and last name */}
						<div className="flex gap-8">
							<div className="form-control">
								<label className="label">
									<span className="label-text text-base font-medium">
										First Name
									</span>
								</label>
								<input
									{...register("firstName")}
									name="firstName"
									type="text"
									className="input input-bordered"
								/>
								{errors.firstName && (
									<label className="label">
										<p className="label-text-alt text-red-600">
											{errors.firstName.message?.toString()}
										</p>
									</label>
								)}
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text text-base font-medium">
										Last Name
									</span>
								</label>
								<input
									{...register("lastName")}
									name="lastName"
									type="text"
									className="input input-bordered"
								/>
								{errors.lastName && (
									<label className="label">
										<p className="label-text-alt text-red-600">
											{errors.lastName.message?.toString()}
										</p>
									</label>
								)}
							</div>
						</div>

						{/* Company name */}
						<div className="form-control">
							<label className="label">
								<span className="label-text text-base font-medium">
									Company Name (Optional)
								</span>
							</label>
							<input
								{...register("companyName")}
								name="companyName"
								type="text"
								className="input input-bordered"
							/>
							{errors.companyName && (
								<label className="label">
									<p className="label-text-alt text-red-600">
										{errors.companyName.message?.toString()}
									</p>
								</label>
							)}
						</div>

						{/* ZIP code */}
						<div className="form-control">
							<label className="label">
								<span className="label-text text-base font-medium">
									ZIP code
								</span>
							</label>
							<input
								{...register("zipCode")}
								name="zipCode"
								type="number"
								className="input input-bordered"
							/>
							{errors.zipCode && (
								<label className="label">
									<p className="label-text-alt text-red-600">
										{errors.zipCode.message?.toString()}
									</p>
								</label>
							)}
						</div>

						{/* Country/region */}
						<div className="form-control">
							<label className="label">
								<span className="label-text text-base font-medium">
									Country / Region
								</span>
							</label>
							<input
								{...register("contryRegion")}
								name="contryRegion"
								type="text"
								className="input input-bordered"
								value={addressInfo.regiao}
							/>
							{errors.contryRegion && (
								<label className="label">
									<p className="label-text-alt text-red-600">
										{errors.contryRegion.message?.toString()}
									</p>
								</label>
							)}
						</div>

						{/* Street address */}
						<div className="form-control">
							<label className="label">
								<span className="label-text text-base font-medium">
									Street address
								</span>
							</label>
							<input
								{...register("streetAddress")}
								name="streetAddress"
								type="text"
								className="input input-bordered"
								value={addressInfo.logradouro}
							/>
							{errors.streetAddress && (
								<label className="label">
									<p className="label-text-alt text-red-600">
										{errors.streetAddress.message?.toString()}
									</p>
								</label>
							)}
						</div>

						{/* Town / City */}
						<div className="form-control">
							<label className="label">
								<span className="label-text text-base font-medium">
									Town / City
								</span>
							</label>
							<input
								{...register("townCity")}
								name="townCity"
								type="text"
								className="input input-bordered"
								value={addressInfo.cidade}
							/>
							{errors.townCity && (
								<label className="label">
									<p className="label-text-alt text-red-600">
										{errors.townCity.message?.toString()}
									</p>
								</label>
							)}
						</div>

						{/* Province */}
						<div className="form-control">
							<label className="label">
								<span className="label-text text-base font-medium">
									Province
								</span>
							</label>
							<input
								{...register("province")}
								name="province"
								type="text"
								className="input input-bordered"
								value={addressInfo.estado}
							/>
							{errors.province && (
								<label className="label">
									<p className="label-text-alt text-red-600">
										{errors.province.message?.toString()}
									</p>
								</label>
							)}
						</div>

						{/* Addon address */}
						<div className="form-control">
							<label className="label">
								<span className="label-text text-base font-medium">
									Add-on address
								</span>
							</label>
							<input
								{...register("addonAddress")}
								name="addonAddress"
								type="text"
								className="input input-bordered"
							/>
							{errors.addonAddress && (
								<label className="label">
									<p className="label-text-alt text-red-600">
										{errors.addonAddress.message?.toString()}
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

						{/* Additional information */}
						<div className="form-control">
							<input
								name="additionalInfo"
								type="text"
								className="input input-bordered"
								placeholder="Additional information"
							/>
						</div>
					</form>
				</div>

				{/* Payment info */}
				<div className="flex-1 mt-9">
					<div className="flex justify-between">
						<div>
							<h1 className="text-2xl text-black font-medium mb-3">
								Product
							</h1>
							{cartItems.map((product) => (
								<h2 className="text-base font-normal text-gray-500 mb-5">
									{product.title}{" "}
									<span className="text-black text-xs font-medium">
										x {product.quantity}
									</span>
								</h2>
							))}
							<h2 className="text-base text-black font-normal mb-5">
								Subtotal
							</h2>
							<h2 className="text-base text-black font-normal">
								Total
							</h2>
						</div>
						<div className="text-right">
							<h1 className="text-2xl text-black font-medium mb-3">
								Subtotal
							</h1>
							{cartItems.map((product) => (
								<h2 className="text-black text-base font-light mb-5">
									Rs. {product.price.toLocaleString()}
								</h2>
							))}
							<h2 className="text-base text-black font-light mb-4">
								Rs. {total.toLocaleString()}
							</h2>
							<h2 className="text-2xl text-color-primary font-semibold">
								Rs. {total.toLocaleString()}
							</h2>
						</div>
					</div>

					<div className="divider"></div>

					<div className="flex flex-col">
						<label
							htmlFor="paymentMethod"
							className="flex items-center cursor-pointer relative"
						>
							<input
								type="radio"
								name="paymentMethod"
								className="peer/directBankTransfer z-10 mr-4 opacity-0 cursor-pointer"
							/>
							<div className="w-3 h-3 bg-white rounded-full border border-black peer-checked/directBankTransfer:bg-black absolute left-0"></div>
							Direct Bank Transfer
						</label>
						<p className="text-gray-500 text-base font-light mb-6">
							Make your payment directly into our bank account.
							Please use your Order ID as the payment reference.
							Your order will not be shipped until the funds have
							cleared in our account.
						</p>

						<label
							htmlFor="paymentMethod"
							className="flex items-center cursor-pointer relative mb-2"
						>
							<input
								type="radio"
								name="paymentMethod"
								className="peer/pix z-10 mr-4 opacity-0 cursor-pointer"
							/>
							<div className="w-3 h-3 bg-white rounded-full border border-black peer-checked/pix:bg-black absolute left-0"></div>
							Pix
						</label>

						<label
							htmlFor="paymentMethod"
							className="flex items-center cursor-pointer relative mb-6"
						>
							<input
								type="radio"
								name="paymentMethod"
								className="peer/cashOnDelivery z-10 mr-4 opacity-0 cursor-pointer"
							/>
							<div className="w-3 h-3 bg-white rounded-full border border-black peer-checked/cashOnDelivery:bg-black absolute left-0"></div>
							Cash On Delivery
						</label>

						<p className="text-base text-black font-light mb-10">
							Your personal data will be used to support your
							experience throughout this website, to manage access
							to your account, and for other purposes described in
							our{" "}
							<strong className="font-semibold">
								privacy policy
							</strong>
							.
						</p>

						<button className="w-[318px] h-16 text-center border border-black rounded-2xl text-xl font-regular self-center">
							Place order
						</button>
					</div>
				</div>
			</section>
			<BenefitsBanner />
		</>
	);
};

export default Checkout;
