import { z } from "zod";

export const checkoutSchema = z.object({
  firstName: z.string().max(50, "Name is too long"),
  lastName: z.string().max(50, "Last name is too long"),
  companyName: z.string().max(50, "Company name is too long").optional(),
  zipCode: z.number().max(8, "ZIP code is too long"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
})