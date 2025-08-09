import { Github } from "lucide-react";
import { GoogleIcon } from "@/components/icons";

const LoginPageVariation2 = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#111111] p-4">
      <div className="w-full max-w-xs text-center">
        {/* Logo or Brand Name can go here */}
        {/* <h1 className="text-2xl font-bold text-gray-200 mb-4">YourBrand</h1> */}

        <h2 className="text-3xl font-bold tracking-tight text-white">
          Login to Tensor Base
        </h2>
        <p className="mt-2 text-gray-400">
          Log in using your preferred method.
        </p>

        <form className="mt-8 space-y-4" action="#" method="POST">
          <div>
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="Enter your email..."
              className="relative block w-full appearance-none rounded-md border border-gray-700 bg-transparent px-3 py-2.5 text-gray-100 placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full justify-center rounded-md bg-blue-600 px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
          >
            Continue
          </button>
        </form>

        <div className="my-6 flex items-center justify-center">
          <div className="w-full border-t border-gray-800" />
          <span className="flex-shrink-0 bg-[#111111] px-2 text-xs text-gray-500">
            OR
          </span>
          <div className="w-full border-t border-gray-800" />
        </div>

        <div className="space-y-2">
          <button className="flex w-full items-center justify-center gap-x-3 rounded-md border border-gray-800 bg-transparent px-3 py-2 text-sm font-semibold text-gray-300 shadow-sm transition-colors hover:bg-gray-800/50">
            <Github className="h-4 w-4 text-gray-400" /> Login with GitHub
          </button>
          <button className="flex w-full items-center justify-center gap-x-3 rounded-md border border-gray-800 bg-transparent px-3 py-2 text-sm font-semibold text-gray-300 shadow-sm transition-colors hover:bg-gray-800/50">
            <GoogleIcon /> Login with Google
          </button>
        </div>
      </div>
      <div className="absolute bottom-6 text-center text-xs text-gray-600">
        <p>Protected by reCAPTCHA and subject to the Google</p>
        <p>
          <a href="#" className="underline">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="#" className="underline">
            Terms of Service
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default LoginPageVariation2;
