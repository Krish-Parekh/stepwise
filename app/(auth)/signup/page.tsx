"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SignupPage() {
  return (
    <div className="w-[50%] space-y-10">
      <h1 className="text-2xl font-bold">LOGO.</h1>
      <p className="text-xl font-semibold">Create an account to get started.</p>
      <form className="space-y-6">
        <div className="space-y-3">
          <Label htmlFor="username">Username</Label>
          <Input id="username" type="text" placeholder="Username" />
        </div>
        <div className="space-y-3">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="Email" />
        </div>
        <div className="space-y-3">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" placeholder="Password" />
        </div>
        <Button type="submit" className="w-full">
          Sign up
        </Button>
        <p className="text-center text-sm text-slate-400">
          Already have an account?{" "}
          <span className="font-semibold text-black">Login.</span>
        </p>
      </form>
    </div>
  );
}
