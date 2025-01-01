import Link from "next/link";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import SigninButton from "../_components/SigninButton";

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex min-h-screen">
        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <div>
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Welcome back
              </h2>
              <p className="mt-2 text-center text-sm text-gray-600 mb-8">
                Continue with Google to access your account
              </p>
            </div>

            <SigninButton />
            <p className="mt-8 text-center text-sm text-gray-600">
              Don&apos;t have an account?{" "}
              <Link
                href="/signup"
                className="font-medium text-customGreen hover:text-customGreen/80"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>

        <div className="hidden lg:block relative w-0 flex-1">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1505022610485-0249ba5b3675?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Background"
          />
        </div>
      </div>
    </div>
  );
}
