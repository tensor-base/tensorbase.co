import type { Metadata } from "next";
import Navbar from "../../components/Navbar";

export const metadata: Metadata = {
  title: "Tensor Base: Unobtrusive AI/ML development",
  description: "A platform for seamless AI/ML development",
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
