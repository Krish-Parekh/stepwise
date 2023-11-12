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
import { toast } from "@/components/ui/use-toast";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import Link from "next/link";
import { FadeIn } from "@/lib/animations";
import { signIn } from "@/lib/supabase/auth";
import { Loader2 } from "lucide-react";
import { useState } from "react";

const FormSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." })
    .regex(/[a-z]/, {
      message: "Password must contain at least one lowercase letter.",
    })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter.",
    })
    .regex(/[0-9]/, { message: "Password must contain at least one number." })
    .regex(/[^a-zA-Z0-9]/, {
      message: "Password must contain at least one special character.",
    }),
  rememberMe: z.boolean(),
});

export function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  async function onSubmit() {
    try {
      setIsLoading(true);
      const { email, password } = form.getValues();
      if (email && password) {
        const response = await signIn(email, password);
        if (response) {
          setIsLoading(false);
          toast({
            title: "Login Success",
            description: "You have successfully logged in.",
          });
          form.reset();
        }
      }
    } catch (error) {
      setIsLoading(false);
      toast({
        title: "Login Failed",
        description: "There was an error logging in.",
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

        <div className="flex justify-between">
          <FormField
            control={form.control}
            name="rememberMe"
            render={() => (
              <FormItem>
                <FormControl>
                  <div className="flex items-center gap-x-2">
                    <Checkbox />
                    <Label className="text-sm font-medium">Remember Me</Label>
                  </div>
                </FormControl>
              </FormItem>
            )}
          />
          <Link href="/forgot-password">
            <Label className="cursor-pointer text-sm">Forgot Password ?</Label>
          </Link>
        </div>

        <Button disabled={isLoading} className="w-full" type="submit">
          {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
          Login
        </Button>
        <div className="text-center text-sm text-slate-400">
          Don&apos;t have an account?{" "}
          <Link href="/signup">
            <Label className="cursor-pointer font-semibold text-black">
              Signup.
            </Label>
          </Link>
        </div>
      </motion.form>
    </Form>
  );
}
