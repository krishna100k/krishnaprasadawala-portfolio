"use client";

import { useEffect, useState } from "react";
import { FaRegWindowMaximize } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { FaMinus } from "react-icons/fa6";
import { useDispatch, UseDispatch, useSelector } from "react-redux";
import { closeFolder, FolderInitialState } from "@/redux/folderSlice";
import { minimizeFolder } from "@/redux/folderSlice";

const WorkExperience = () => {
  const [posX, setPosX] = useState(1000);
  const [posY, setPosY] = useState(200);
  const [isMaximized, setIsMaximized] = useState(false);
  const [isMinimized, setisMinimized] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const folderName = "Work Experience"


  const dispatch =useDispatch()
  let minimizedFolders : string[] = useSelector((state : {folder : FolderInitialState}) => state.folder.minimizedFolders)

  useEffect(() => {
    if(minimizedFolders.includes(folderName)){
      setisMinimized(true);
    }else{
      setisMinimized(false);
    }
  }, [minimizedFolders])

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    setIsDragging(true)
    e.dataTransfer.effectAllowed = "move"; 
    e.dataTransfer.setData("text/plain", ""); 
    e.dataTransfer.setDragImage(new Image(), 0, 0); 
  };


  const moveFolder = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault(); 
    setPosX(e.clientX);
    setPosY(e.clientY);
  };


    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault(); 
      };

  const finalizePosition = (e: React.DragEvent<HTMLDivElement>) => {
    setIsDragging(false)
    if(e.clientY <= 0){
        setPosX(e.clientX);
        setPosY(0);
    }else if (e.clientY >= 560){
        setPosX(e.clientX);
        setPosY(800);
    }else {
        setPosX(e.clientX);
        setPosY(e.clientY);
    }
  };

  const minimizeHandler = () => {
    dispatch(minimizeFolder(folderName))
  }

  return (
    <div
      style={{
        width : isMaximized ? "100vw" : "60vw",
        height : isMaximized ? "100vh" : "60vh",
        top: isMaximized && !isMinimized ? 0 : isMinimized ? '200vh' : `${posY - 10}px`, 
        left: isMaximized ? 0 : `${posX - 550}px`,
        position: "fixed",
        transition: isMaximized || isMinimized ? "top 0.5s ease, left 0.5s ease, width 0.5s ease, height 0.5s ease" : !isMinimized && !isDragging ?  "top 0.5s ease, left 0.5s ease," : "",
      }}
      className="bg-[#0A0919] rounded-md"
      onDragOver={handleDragOver}
    >
        <div draggable onDragStart={handleDragStart} onDrag={(e) => moveFolder(e)} onDragEnd={(e) => finalizePosition(e)}   className="w-full h-10 bg-gray-800/50 backdrop-blur-sm relative top-0 rounded-t-md flex justify-end">
            <div className="w-10 hover:bg-gray-500 h-full flex justify-center items-center" onClick={minimizeHandler}><FaMinus size={10} /></div>
            <div className="w-10 hover:bg-gray-500 h-full flex justify-center items-center" onClick={() => setIsMaximized(!isMaximized)}>< FaRegWindowMaximize size={10}/></div>
            <div className="w-10 hover:bg-red-500 h-full flex justify-center items-center" onClick={() => dispatch(closeFolder(folderName))} ><IoCloseSharp /></div>
        </div>
        <h1>Hi! These are my Work Experience.</h1>
    </div>
  );
};

export default WorkExperience;
