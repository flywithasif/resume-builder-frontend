import { Link } from "react-router-dom";

import Card from "../../components/ui/Card";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

function Register() {
  return (
    <div className="page-container flex min-h-[calc(100vh-72px)] items-center justify-center py-12">
      <Card className="w-full max-w-md" padding="p-7 sm:p-8">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#987542]">
            Get started
          </p>

          <h1 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-950">
            Create your account
          </h1>

          <p className="mt-2 text-sm text-zinc-500">
            Build your first professional resume.
          </p>
        </div>

        <div className="space-y-5">
          <Input
            id="name"
            label="Full name"
            placeholder="John Doe"
          />

          <Input
            id="email"
            type="email"
            label="Email"
            placeholder="you@example.com"
          />

          <Input
            id="password"
            type="password"
            label="Password"
            placeholder="Create a password"
          />

          <Input
            id="confirm-password"
            type="password"
            label="Confirm password"
            placeholder="Confirm your password"
          />

          <Button className="w-full" size="lg">
            Create Account
          </Button>
        </div>

        <p className="mt-7 text-center text-sm text-zinc-500">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-zinc-900 hover:text-[#987542]"
          >
            Sign in
          </Link>
        </p>
      </Card>
    </div>
  );
}

export default Register;
