import Link from "next/link";

export default function SimpleNavbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 px-6 py-8 z-20">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-xl font-semibold text-white hover:text-gray-300 transition-colors"
        >
          Tensor Base
        </Link>
        <div className="flex gap-6">
          <Link
            href="/careers"
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            Careers
          </Link>
          <Link
            href="/contact"
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
