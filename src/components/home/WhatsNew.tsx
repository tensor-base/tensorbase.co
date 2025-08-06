import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

const WhatsNew = () => {
  return (
    <Link
      href="/changelog"
      className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-900/50 to-blue-900/50 border border-purple-500/30 rounded-full px-3 py-1 mb-8 backdrop-blur-sm"
    >
      <Sparkles size={16} className="text-purple-400" />
      <span className="text-sm text-purple-300 font-medium">
        Learn what&apos;s new
      </span>
      <ArrowRight className="ml-2" size={16} />
    </Link>
  );
};

export default WhatsNew;
