import { z } from "zod";

const passwordRegex =
	/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;

export const signUpSchema = z
	.object({
		name: z.string().min(1, "Name is required").max(50, "Name is too long").regex(/^[^\d]*$/, "Name may contain only letters. We're sorry for the inconvenience Elon kids 😅"),
		email: z.string().email(),
		password: z.string().min(8).regex(passwordRegex),
		confirmPassword: z.string(),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Passwords must be equal",
		path: ["confirmPassword"],
	});
