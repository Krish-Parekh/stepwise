"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input, PasswordInput } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

export default function LoginPage() {
  const { toast } = useToast();
  return (
    <div className="w-[50%] space-y-10">
      <h1 className="text-2xl font-bold">LOGO.</h1>
      <p className="text-xl font-semibold">
        Welcome back, please login to your account.
      </p>
      <form className="space-y-6">
        <div className="space-y-3">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="Email" />
        </div>
        <div className="space-y-3">
          <Label htmlFor="password">Password</Label>
          <PasswordInput id="password" placeholder="Password" />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-2">
            <Checkbox id="remember-me" />
            <Label htmlFor="remember-me">Remember me</Label>
          </div>
          <p className="text-sm text-black">Forgot Password ?</p>
        </div>
        <Button
          type="submit"
          className="w-full"
          onClick={(e) => {
            e.preventDefault();
            toast({
              title: "Login Successful",
              description: "Welcome back",
            });
          }}
        >
          Login
        </Button>
        <p className="text-center text-sm text-slate-400">
          Don&apos;t have an account?{" "}
          <span className="font-semibold text-black">Signup.</span>
        </p>
      </form>
    </div>
  );
}
