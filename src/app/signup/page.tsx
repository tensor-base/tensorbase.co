import SignUpComponent from "@/components/auth/signup"; // Using path alias for clean imports
import { Metadata } from "next";

// Best practice: Add metadata for the page (e.g., title)
export const metadata: Metadata = {
  title: "Tensor Base - Sign Up",
  description: "Create a new account to get started.",
};

// This is the route component for `/signup`
export default function SignUpRoute() {
  // It simply renders your actual UI component
  return <SignUpComponent />;
}
