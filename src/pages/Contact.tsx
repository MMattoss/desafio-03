import Banner from "../components/Banner";
import BenefitsBanner from "../components/BenefitsBanner";
import pinIcon from "../assets/pin-icon.svg";
import phoneIcon from "../assets/phone-icon.svg";
import clockIcon from "../assets/clock-icon.svg";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "../utils/formValidations/contactSchema";
import { useState } from "react";

const Contact = () => {
	const {
		register,
    reset,
		handleSubmit,
		formState: { isSubmitting, errors },
	} = useForm({
    resolver: zodResolver(contactSchema)
  });
  const [success, setSuccess] = useState(false);

  const onSubmit = async(data: FieldValues) => {
    setTimeout(() => {
      console.log(data)
      setSuccess(true)
      reset()
    }, 500);

  }

	return (
		<>
			<Banner route="contact" />
			<section className="flex flex-col items-center justify-center gap-[133px] pt-24 pb-14 h-fit">
				<header className="text-center w-[644px] flex flex-col gap-2">
					<h1 className="text-4xl text-black font-semibold">
						Get In Touch With Us
					</h1>
					<p className="text-gray-500 text-base font-normal">
						For More Information About Our Product & Services.
						Please Feel Free To Drop Us An Email. Our Staff Always
						Be There To Help You Out. Do Not Hesitate!
					</p>
				</header>

				<div className="flex gap-[159px]">
					<div className="flex flex-col gap-11">
						<ul className="flex flex-col gap-10">
							<li className="flex items-start gap-4">
								<img src={pinIcon} alt="Pin" />
								<article>
									<h2 className="text-black text-2xl font-medium">
										Address
									</h2>
									<p className="text-black text-base font-normal">
										236 5th SE Avenue, New <br /> York
										NY10000, United <br /> States
									</p>
								</article>
							</li>
							<li className="flex items-start gap-4">
								<img src={phoneIcon} alt="Phone" />
								<article>
									<h2 className="text-black text-2xl font-medium">
										Phone
									</h2>
									<p className="text-black text-base font-normal">
										Mobile: +(84) 546-6789
									</p>
									<p className="text-black text-base font-normal">
										Hotline: +(84) 456-6789
									</p>
								</article>
							</li>
							<li className="flex items-start gap-4">
								<img src={clockIcon} alt="Clock" />
								<article>
									<h2 className="text-black text-2xl font-medium">
										Address
									</h2>
									<p className="text-black text-base font-normal">
										Monday-Friday: 9:00 - 22:00
									</p>
									<p className="text-black text-base font-normal">
										Saturday-Sunday: 9:00 - 21:00
									</p>
								</article>
							</li>
						</ul>
					</div>

					<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-9">
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
								placeholder="Abc"
								className="input input-bordered p-7 w-[528px]"
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
									Email address
								</span>
							</label>
							<input
								{...register("email")}
								name="email"
								type="email"
								placeholder="Abc@def.com"
								className="input input-bordered p-7 w-[528px]"
							/>
							{errors.email && (
								<label className="label">
									<p className="label-text-alt text-red-600">
										{errors.email.message?.toString()}
									</p>
								</label>
							)}
						</div>
            
            {/* Subject */}
            <div className="form-control">
							<label className="label">
								<span className="label-text text-base font-medium">
									Subject
								</span>
							</label>
							<input
								{...register("subject")}
								name="subject"
								type="text"
								placeholder="This is an optional"
								className="input input-bordered p-7 w-[528px]"
							/>
							{errors.subject && (
								<label className="label">
									<p className="label-text-alt text-red-600">
										{errors.subject.message?.toString()}
									</p>
								</label>
							)}
						</div>

            {/* Message */}
            <div className="form-control">
							<label className="label">
								<span className="label-text text-base font-medium">
									Message
								</span>
							</label>
							<textarea
								{...register("message")}
								name="message"
								placeholder="Hi! i'd like to ask about"
								className="input input-bordered p-7 w-[528px] h-[120px]"
							/>
							{errors.message && (
								<label className="label">
									<p className="label-text-alt text-red-600">
										{errors.message.message?.toString()}
									</p>
								</label>
							)}
						</div>

            <button type="submit" className="bg-color-primary rounded-md w-[237px] px-24 py-3 text-white text-base font-normal">
              {isSubmitting ? <div className="loading loading-spinner text-white"></div> : "Submit"}
            </button>
            {success && <h3>Obrigado por entrar em contato!</h3> }
					</form>
				</div>
			</section>
			<BenefitsBanner />
		</>
	);
};

export default Contact;
