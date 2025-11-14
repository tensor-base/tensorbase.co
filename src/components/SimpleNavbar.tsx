import Link from "next/link";

export default function SimpleNavbar() {
  return (
    <nav className="bg-black px-6 py-8 relative z-10">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-xl font-semibold text-white hover:text-gray-300 transition-colors"
        >
          TB
        </Link>
        <div className="flex gap-6">
          <Link
            href="/careers"
            className="text-sm text-gray-500 hover:text-white transition-colors"
          >
            Careers
          </Link>
          <Link
            href="/contact"
            className="text-sm text-gray-500 hover:text-white transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
