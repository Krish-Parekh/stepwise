import { LoginForm } from "@/components/Auth/Form/LoginForm";

export default function LoginPage() {
  return (
    <div className="w-1/2 space-y-10">
      <h1 className="text-2xl font-bold">LOGO.</h1>
      <p className="text-xl font-semibold">
        Welcome back, please login to your account.
      </p>
      <LoginForm />
    </div>
  );
}
