import { Link } from "react-router-dom";

import Card from "../../components/ui/Card";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

function ResetPassword() {
  return (
    <div className="page-container flex min-h-[calc(100vh-72px)] items-center justify-center py-12">
      <Card className="w-full max-w-md" padding="p-7 sm:p-8">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#987542]">
            Secure your account
          </p>

          <h1 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-950">
            Create a new password
          </h1>

          <p className="mt-2 text-sm text-zinc-500">
            Choose a strong password for your account.
          </p>
        </div>

        <div className="space-y-5">
          <Input
            id="password"
            type="password"
            label="New password"
            placeholder="Enter new password"
          />

          <Input
            id="confirm-password"
            type="password"
            label="Confirm password"
            placeholder="Confirm new password"
          />

          <Button className="w-full" size="lg">
            Reset Password
          </Button>
        </div>

        <Link
          to="/login"
          className="mt-6 block text-center text-sm font-medium text-zinc-700 hover:text-zinc-950"
        >
          Back to login
        </Link>
      </Card>
    </div>
  );
}

export default ResetPassword;
