import Link from "next/link";
import HackerText from "@/components/HackerText";

export default function CareersPage() {
  return (
    <div className="h-screen bg-black text-white flex items-center justify-center p-6 overflow-hidden">
      <div className="max-w-2xl w-full text-center space-y-12">
        <div className="space-y-6">
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight">
            We&apos;ll be Hiring! 🎉
          </h3>

          <p className="text-xl text-gray-400">
            You&apos;d have to wait a lil bit tho.
          </p>
        </div>

        <div className="space-y-6">
          <p className="text-gray-400">Meanwhile,</p>

          {/* <div className="border border-gray-800 rounded-lg p-6 bg-black"> */}
          <div className="text-green-400">
            <HackerText />
          </div>
          {/* </div> */}
        </div>

        {/* <div>
          <Link
            href="/"
            className="inline-block px-6 py-3 border-gray-800 rounded-lg hover:border-gray-700 transition-colors"
          >
            Back to Home
          </Link>
        </div> */}
      </div>
    </div>
  );
}
