// import React from "react";

// export default function Home() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white px-4">
//       <div className="max-w-4xl w-full text-center">
//         <div className="flex items-center justify-center gap-2 mb-6">
//           <span className="text-2xl md:text-4xl font-bold">Tensor Base</span>
//         </div>

//         {/* <div className="inline-block px-4 py-2 rounded-full text-gray-300 mb-4 text-3xl font-medium">
//           ⌛
//         </div> */}
//         <div className="inline-block px-4 py-2 rounded-full text-gray-300 mb-4 text-sm font-medium">
//           ⚡ Coming Soon
//         </div>
//         <h1 className="text-4xl md:text-6xl font-bold mb-2 leading-tight">
//           Unobtrusive AI/ML development
//         </h1>

//         <p className="text-gray-400 mb-8 text-base md:text-lg">
//           We&apos;re building the easiest, most reliable platform for deploying
//           your AI/ML applications. Get ready to ship at the speed of thought.
//         </p>

//         <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
//           <input
//             type="email"
//             placeholder="Enter your email"
//             className="w-full sm:w-auto px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-white transition"
//           />
//           <button className="px-6 py-3 rounded-lg bg-white text-black font-semibold hover:bg-gray-300 transition flex items-center gap-2">
//             Get Notified
//             <span>→</span>
//           </button>
//         </div>
//       </div>
//     </main>
//   );
// }

import React from "react";
import { Mail, Bell } from "lucide-react";

const ComingSoonPage = () => {
  // const [email, setEmail] = useState("");
  // const [isSubscribed, setIsSubscribed] = useState(false);

  // const handleNotifyMe = (e) => {
  //   e.preventDefault();
  //   if (email) {
  //     setIsSubscribed(true);
  //     setEmail("");
  //     setTimeout(() => setIsSubscribed(false), 3000);
  //   }
  // };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 relative z-10">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            {/* <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
              <span className="text-black font-bold text-lg">▲</span>
            </div> */}
            <span className="text-xl font-semibold">Tensor Base</span>
          </div>
          {/* <div className="hidden md:flex items-center space-x-6 text-gray-400">
            <span className="opacity-50 cursor-not-allowed">Docs</span>
            <span className="opacity-50 cursor-not-allowed">Product</span>
            <span className="opacity-50 cursor-not-allowed">Pricing</span>
            <a href="#" className="hover:text-white transition-colors">
              About
            </a>
          </div> */}
        </div>
        {/* <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-gray-300">
            <Github size={18} />
            <span className="text-sm">Github</span>
          </div>
        </div> */}
      </nav>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center px-6 py-12 max-w-6xl mx-auto relative z-10 text-center min-h-[80vh]">
        {/* Coming Soon Badge */}
        {/* <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-900/50 to-blue-900/50 border border-purple-500/30 rounded-full px-6 py-3 mb-8 backdrop-blur-sm">
          <Sparkles size={16} className="text-purple-400" />
          <span className="text-sm text-purple-300 font-medium">
            Something amazing is coming
          </span>
        </div> */}

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
          Unobtrusive AI/ML development
        </h1>

        {/* Action Words */}
        {/* <div className="flex flex-wrap items-center justify-center gap-4 text-3xl md:text-4xl font-bold mb-8">
          <div className="flex items-center space-x-3 bg-blue-900/20 border border-blue-500/20 rounded-xl px-6 py-3 backdrop-blur-sm">
            <span className="text-blue-400">📱</span>
            <span className="text-blue-400">Simple</span>
          </div>
          <div className="flex items-center space-x-3 bg-orange-900/20 border border-orange-500/20 rounded-xl px-6 py-3 backdrop-blur-sm">
            <span className="text-orange-400">⚡</span>
            <span className="text-orange-400">Fast</span>
          </div>
          <span className="text-gray-400">&</span>
          <div className="flex items-center space-x-3 bg-green-900/20 border border-green-500/20 rounded-xl px-6 py-3 backdrop-blur-sm">
            <span className="text-green-400">🚀</span>
            <span className="text-green-400">Powerful</span>
          </div>
        </div> */}

        {/* Description */}
        <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl">
          A next-gen platform for deploying your AI/ML applications. Ship at the
          speed of thought.
        </p>

        {/* Email Signup */}
        <div className="w-full max-w-md mb-8">
          <form
            // onSubmit={handleNotifyMe}
            className="flex items-center space-x-3"
          >
            <div className="flex-1 relative">
              <Mail
                size={18}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
              <input
                type="email"
                placeholder="Enter your email"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-gray-900/50 border border-gray-600 rounded-lg pl-12 pr-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 backdrop-blur-sm"
                required
              />
            </div>
            {/* bg-gradient-to-r from-blue-600 to-purple-600 */}
            <button
              type="submit"
              className="flex items-center space-x-2  hover:from-blue-700 hover:to-purple-700 px-6 py-4 bg-white text-black rounded-lg transition-all duration-200 font-semibold whitespace-nowrap transform hover:scale-105"
            >
              <Bell size={18} />
              <span>Get Notified</span>
            </button>
          </form>

          {/* {isSubscribed && (
            <div className="mt-4 p-4 bg-green-900/20 border border-green-500/30 rounded-lg backdrop-blur-sm">
              <p className="text-green-400 text-sm">
                ✅ Thanks! We'll notify you when we launch.
              </p>
            </div>
          )} */}
        </div>

        {/* Status */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center space-x-2 text-gray-400">
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
            <span className="text-sm">Currently in development</span>
          </div>
          <p className="text-sm text-gray-500">
            Join <span className="text-blue-400 font-semibold">100+</span>{" "}
            developers already on the waitlist
          </p>
        </div>

        {/* Features Preview */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 w-full max-w-4xl">
          <div className="bg-gray-900/30 border border-gray-700/50 rounded-xl p-6 backdrop-blur-sm hover:border-blue-500/30 transition-colors">
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🛠️</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Smart Development</h3>
            <p className="text-gray-400 text-sm">
              AI-powered tools that understand your code and help you build
              faster.
            </p>
          </div>

          <div className="bg-gray-900/30 border border-gray-700/50 rounded-xl p-6 backdrop-blur-sm hover:border-orange-500/30 transition-colors">
            <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🔄</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Seamless Workflow</h3>
            <p className="text-gray-400 text-sm">
              From development to deployment in one unified platform.
            </p>
          </div>

          <div className="bg-gray-900/30 border border-gray-700/50 rounded-xl p-6 backdrop-blur-sm hover:border-green-500/30 transition-colors">
            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🌍</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Global Scale</h3>
            <p className="text-gray-400 text-sm">
              Deploy anywhere, scale everywhere with our global infrastructure.
            </p>
          </div>
        </div> */}
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-green-500/10 rounded-full blur-3xl"></div>

        {/* Animated particles */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full opacity-20 animate-pulse"></div>
        <div
          className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full opacity-30 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-32 left-1/3 w-1.5 h-1.5 bg-green-400 rounded-full opacity-25 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/3 w-1 h-1 bg-orange-400 rounded-full opacity-20 animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      {/* Footer */}
      {/* <footer className="absolute bottom-0 w-full p-6 text-center text-gray-500 text-sm border-t border-gray-800/50">
        <p>© 2025 Tensor Base. Building the future of AI development.</p>
      </footer> */}
    </div>
  );
};

export default ComingSoonPage;
