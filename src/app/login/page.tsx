// src/app/login/page.tsx

import LoginPage from "@/components/auth/login"; // Using path alias for clean imports
import { Metadata } from "next";

// Best practice: Add metadata for the page (e.g., title)
export const metadata: Metadata = {
  title: "Login",
  description: "Log in to access your account.",
};

// This is the route component for `/login`
export default function LoginRoute() {
  // It simply renders your actual UI component
  return <LoginPage />;
}
