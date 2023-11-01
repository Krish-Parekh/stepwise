import { SignupForm } from "@/components/Auth/Form/SignupForm";

export default function SignupPage() {
  return (
    <div className="w-1/2 space-y-10">
      <h1 className="text-2xl font-bold">LOGO.</h1>
      <p className="text-xl font-semibold">Create an account to get started.</p>
      <SignupForm />
    </div>
  );
}
