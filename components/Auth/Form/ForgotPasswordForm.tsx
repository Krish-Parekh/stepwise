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
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { resetPassword } from "@/supabase/auth";
import Link from "next/link";
import { Label } from "@/components/ui/label";

const FormSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
});

export default function ForgotPasswordForm() {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit() {
    try {
      setIsLoading(true);
      const { email } = form.getValues();
      if (email) {
        const response = await resetPassword(email);
        if (response) {
          setIsLoading(false);
          toast({
            title: "Password reset link sent.",
            description: "Check your email for the password reset link.",
          });
          form.reset();
        }
      }
    } catch (error) {
      setIsLoading(false);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
      });
    }
  }

  return (
    <Form {...form}>
      <form
        method="POST"
        className="space-y-6"
        onSubmit={form.handleSubmit(onSubmit)}
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
        <Button disabled={isLoading} className="w-full" type="submit">
          {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
          Send Email
        </Button>
        <div className="text-center text-sm text-slate-400">
          Go back to{" "}
          <Link href="/login">
            <Label className="cursor-pointer font-semibold text-black">
              Login.
            </Label>
          </Link>
        </div>
      </form>
    </Form>
  );
}
