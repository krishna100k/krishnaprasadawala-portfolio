const Taskbar = () => {
  return (
    <div className="w-full h-12 bg-[#0E022F]/70 fixed bottom-0 backdrop-blur-lg flex justify-between items-center border-t border-gray-600">
      <div></div>
      <div>
        {/* Windows Logo */}
        <div className="hover:bg-white/10 p-2 rounded-sm transition-all ease">
          <div className=" w-6 h-6 grid grid-cols-2 grid-rows-2 gap-[1px] rounded-[1px] overflow-hidden   ">
            <div className="bg-blue-400 w-full"></div>
            <div className="bg-blue-400 w-full"></div>
            <div className="bg-blue-400 w-full"></div>
            <div className="bg-blue-400 w-full"></div>
          </div>
        </div>
        {/* Windows Logo */}
      </div>
      <div></div>
    </div>
  );
};

export default Taskbar;
