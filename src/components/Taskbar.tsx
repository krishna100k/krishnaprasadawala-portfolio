"use client"

import { Shortcut } from "@/app/page";
import { FolderInitialState, unMinimizeFolder } from "@/redux/folderSlice";
import { useSelector, useDispatch } from "react-redux";

const Taskbar = () => {
  const openedFolders :Shortcut[] = useSelector((state : {folder : FolderInitialState}) => state.folder.openFolder)
  const dispatch = useDispatch();


  return (
    <div className="w-full h-12 bg-[#0E022F]/70 fixed bottom-0 backdrop-blur-lg flex justify-between items-center border-t border-gray-600 z-[100000]">
      <div></div>
      <div className="flex justify-center items-center">
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
        {
            openedFolders.map((folder) => {
              return (
                <div key={folder.id} onClick={() => dispatch(unMinimizeFolder(folder.name))} className="w-auto h-9 p-2 flex justify-center items-center hover:bg-blue-200/20 transition-all ease" >
                  <img className="w-auto h-6" src={folder.image} alt={folder.name} />
                </div>
              )
            })
          }
      </div>
      <div></div>
    </div>
  );
};

export default Taskbar;
