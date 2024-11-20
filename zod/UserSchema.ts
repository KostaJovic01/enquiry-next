import {z} from "zod";

export const UserSchema = z.object({
    givenName: z.string().min(2, { message: "First name must be at least 2 characters long" }),
    familyName: z.string().min(2, { message: "Last name must be at least 2 characters long" }),
    email: z.string().email({ message: "Invalid email address" }),
    language: z.string().optional(),
    languages: z.array(z.string()).optional(),
});

export type UserSchemaData = z.infer<typeof UserSchema>;