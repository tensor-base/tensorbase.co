"use client"; // Important: This component uses hooks, so it needs to be a client component

import { Github } from "lucide-react";
import Link from "next/link";

// Self-contained Google Icon component
const GoogleIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M47.532 24.552c0-1.566-.14-3.084-.404-4.548H24.44v8.532h13.01c-.563 2.76-2.253 5.112-4.824 6.684v5.52h7.104c4.14-3.816 6.564-9.42 6.564-16.188z" fill="#4285F4"/>
    <path d="M24.44 48c6.516 0 11.988-2.148 15.984-5.772l-7.104-5.52c-2.148 1.44-4.884 2.304-7.88 2.304-5.904 0-10.896-3.972-12.684-9.324H4.44v5.7c3.552 7.056 10.428 11.904 18 11.904z" fill="#34A853"/>
    <path d="M11.756 28.656A14.45 14.45 0 0111.024 24c0-1.644.276-3.228.792-4.656V13.68H4.44A23.852 23.852 0 000 24c0 3.936.96 7.632 2.676 10.92L11.756 28.656z" fill="#FBBC05"/>
    <path d="M24.44 9.48c3.492 0 6.324 1.188 8.664 3.432l6.324-6.324C36.428 2.676 30.956 0 24.44 0 16.852 0 9.976 4.848 6.424 11.904l7.332 5.7C15.544 13.452 20.536 9.48 24.44 9.48z" fill="#EA4335"/>
  </svg>
);

const SignUpComponent = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#111111] p-4">
      <div className="w-full max-w-xs text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white">
          Create an Account
        </h2>
        <p className="mt-2 text-gray-400">
          Get started with Tensor Base today.
        </p>

        <form className="mt-8 space-y-4" action="#" method="POST">
          <div>
            <label htmlFor="fullName" className="sr-only">
              Full Name
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              autoComplete="name"
              required
              placeholder="Enter your full name..."
              className="relative block w-full appearance-none rounded-md border border-gray-700 bg-transparent px-3 py-2.5 text-gray-100 placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
            />
          </div>
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
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              placeholder="Create a password..."
              className="relative block w-full appearance-none rounded-md border border-gray-700 bg-transparent px-3 py-2.5 text-gray-100 placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full justify-center rounded-md bg-blue-600 px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
          >
            Create Account
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
            <Github className="h-4 w-4 text-gray-400" /> Sign up with GitHub
          </button>
          <button className="flex w-full items-center justify-center gap-x-3 rounded-md border border-gray-800 bg-transparent px-3 py-2 text-sm font-semibold text-gray-300 shadow-sm transition-colors hover:bg-gray-800/50">
            <GoogleIcon /> Sign up with Google
          </button>
        </div>
        
        <p className="mt-8 text-sm text-gray-500">
            Already have an account?{' '}
            <Link href="/login" className="font-semibold text-blue-500 hover:underline">
                Log in
            </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpComponent;
