import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(50, "Name is too big."),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  subject: z.string().max(70, "Subject is too long").optional(),

})