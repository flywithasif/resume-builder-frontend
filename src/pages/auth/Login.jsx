import { Link } from "react-router-dom";

import Card from "../../components/ui/Card";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

function Login() {
  return (
    <div className="page-container flex min-h-[calc(100vh-72px)] items-center justify-center py-12">
      <Card className="w-full max-w-md" padding="p-7 sm:p-8">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#987542]">
            Welcome back
          </p>

          <h1 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-950">
            Sign in to your account
          </h1>

          <p className="mt-2 text-sm text-zinc-500">
            Continue building your professional resume.
          </p>
        </div>

        <div className="space-y-5">
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
            placeholder="Enter your password"
          />

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm text-zinc-600">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-stone-300"
              />
              Remember me
            </label>

            <Link
              to="/forgot-password"
              className="text-sm font-medium text-zinc-800 hover:text-[#987542]"
            >
              Forgot password?
            </Link>
          </div>

          <Button className="w-full" size="lg">
            Sign In
          </Button>
        </div>

        <p className="mt-7 text-center text-sm text-zinc-500">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-medium text-zinc-900 hover:text-[#987542]"
          >
            Create one
          </Link>
        </p>
      </Card>
    </div>
  );
}

export default Login;
