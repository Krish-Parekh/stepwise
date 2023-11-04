import ForgotPasswordForm from "@/components/Auth/Form/ForgotPasswordForm";

export default function ForgotPasswordPage() {
  return (
    <div className="w-1/2 space-y-10">
      <h1 className="text-2xl font-bold">LOGO.</h1>
      <p className="text-xl font-semibold">
        Reset your password, please enter your email.
      </p>
      <ForgotPasswordForm />
    </div>
  );
}
