const BackgroundEffects = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-green-500/10 rounded-full blur-3xl"></div>
    </div>
  );
};
export default BackgroundEffects;
