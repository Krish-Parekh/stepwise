"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input, PasswordInput } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { signUp } from "@/lib/supabase/auth";
import { toast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { FadeIn } from "@/lib/animations";
import {
  INVALID_EMAIL_ERROR,
  LOWERCASE_LETTER_ERROR,
  MIN_PASSWORD_LENGTH_ERROR,
  MIN_USERNAME_LENGTH_ERROR,
  NUMBER_IN_PASSWORD_ERROR,
  SPECIAL_CHARACTER_ERROR,
  UPPERCASE_LETTER_ERROR,
} from "@/lib/strings";

const FormSchema = z.object({
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

export function SignupForm() {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit() {
    const { username, email, password } = form.getValues();
    try {
      setIsLoading(true);
      if (username && email && password) {
        const response = await signUp(email, password);
        if (response) {
          setIsLoading(false);
          toast({
            title: "Signup Success",
            description: "You have successfully logged in.",
          });
          form.reset();
        }
      }
    } catch (error) {
      setIsLoading(false);
      toast({
        title: "Signup Error",
        description: "There was an error signing up.",
      });
    }
  }

  return (
    <Form {...form}>
      <motion.form
        variants={FadeIn}
        initial="initial"
        animate="animate"
        exit="exit"
        method="POST"
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Username" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <PasswordInput placeholder="Password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button disabled={isLoading} className="w-full" type="submit">
          {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
          Signup
        </Button>
        <div className="text-center text-sm text-slate-400">
          Already, have an account?{" "}
          <Link href="/login">
            <Label className="cursor-pointer font-semibold text-black">
              Login.
            </Label>
          </Link>
        </div>
      </motion.form>
    </Form>
  );
}
