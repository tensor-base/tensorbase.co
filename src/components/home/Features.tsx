const Features = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 w-full max-w-4xl mb-10">
      <div className="bg-[#111111] border border-gray-700/50 rounded-xl p-6 backdrop-blur-sm hover:border-blue-500/30 transition-colors">
        <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4  mx-auto">
          <span className="text-2xl">🛠️</span>
        </div>
        <h3 className="text-lg font-semibold mb-2">Smart Development</h3>
        <p className="text-gray-400 text-sm">
          AI-powered tools that understand your code and help you build faster.
        </p>
      </div>

      <div className="bg-[#111111] border border-gray-700/50 rounded-xl p-6 backdrop-blur-sm hover:border-orange-500/30 transition-colors">
        <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4  mx-auto">
          <span className="text-2xl">🔄</span>
        </div>
        <h3 className="text-lg font-semibold mb-2">Seamless Workflow</h3>
        <p className="text-gray-400 text-sm">
          From development to deployment in one unified platform.
        </p>
      </div>

      <div className="bg-[#111111] border border-gray-700/50 rounded-xl p-6 backdrop-blur-sm hover:border-green-500/30 transition-colors">
        <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4  mx-auto">
          <span className="text-2xl">🌍</span>
        </div>
        <h3 className="text-lg font-semibold mb-2">Global Scale</h3>
        <p className="text-gray-400 text-sm">
          Deploy anywhere, scale everywhere with our global infrastructure.
        </p>
      </div>
    </div>
  );
};

export default Features;
