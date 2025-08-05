const Actions = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 text-2xl md:text-2xl mb-8 sm:text-1xl">
      <div className="flex items-center space-x-3 bg-blue-900/20 border border-blue-500/20 rounded-xl px-6 py-3 backdrop-blur-sm">
        <span className="text-blue-400">👨‍💻</span>
        <span className="text-blue-400">Develop</span>
      </div>
      <div className="flex items-center space-x-3 bg-orange-900/20 border border-orange-500/20 rounded-xl px-6 py-3 backdrop-blur-sm">
        <span className="text-orange-400">✨</span>
        <span className="text-orange-400">Optimize</span>
      </div>
      <span className="text-gray-400">&</span>
      <div className="flex items-center space-x-3 bg-green-900/20 border border-green-500/20 rounded-xl px-6 py-3 backdrop-blur-sm">
        <span className="text-green-400">🚀</span>
        <span className="text-green-400">Deploy</span>
      </div>
    </div>
  );
};

export default Actions;
