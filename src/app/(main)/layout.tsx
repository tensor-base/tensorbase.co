import Navbar from "@/components/Navbar";
import Footer from "@/components/home/Footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // The body is now a flex container that fills the screen
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {/* The main content area will now grow to fill available space */}
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
