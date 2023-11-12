import {
  INVALID_EMAIL_ERROR,
  LOWERCASE_LETTER_ERROR,
  MIN_PASSWORD_LENGTH_ERROR,
  MIN_USERNAME_LENGTH_ERROR,
  NUMBER_IN_PASSWORD_ERROR,
  SPECIAL_CHARACTER_ERROR,
  UPPERCASE_LETTER_ERROR,
} from "@/lib/strings";
import * as z from "zod";

export const LoginFormSchema = z.object({
  email: z.string().email({ message: INVALID_EMAIL_ERROR }),
  password: z
    .string()
    .min(8, { message: MIN_PASSWORD_LENGTH_ERROR })
    .regex(/[a-z]/, { message: LOWERCASE_LETTER_ERROR })
    .regex(/[A-Z]/, { message: UPPERCASE_LETTER_ERROR })
    .regex(/[0-9]/, { message: NUMBER_IN_PASSWORD_ERROR })
    .regex(/[^a-zA-Z0-9]/, { message: SPECIAL_CHARACTER_ERROR }),
  rememberMe: z.boolean(),
});

export const SignupFormSchema = z.object({
  username: z.string().min(3, { message: MIN_USERNAME_LENGTH_ERROR }),
  email: z.string().email({ message: INVALID_EMAIL_ERROR }),
  password: z
    .string()
    .min(8, { message: MIN_PASSWORD_LENGTH_ERROR })
    .regex(/[a-z]/, { message: LOWERCASE_LETTER_ERROR })
    .regex(/[A-Z]/, { message: UPPERCASE_LETTER_ERROR })
    .regex(/[0-9]/, { message: NUMBER_IN_PASSWORD_ERROR })
    .regex(/[^a-zA-Z0-9]/, { message: SPECIAL_CHARACTER_ERROR }),
});

export const ForgotPasswordFormSchema = z.object({
  email: z.string().email({ message: INVALID_EMAIL_ERROR }),
});
