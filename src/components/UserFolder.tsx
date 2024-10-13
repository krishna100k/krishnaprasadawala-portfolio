"use client";

import { useState } from "react";
import { FaRegWindowMaximize } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { FaMinus } from "react-icons/fa6";

const UserFolder = ({closeWindow} : any) => {
  const [posX, setPosX] = useState(1000);
  const [posY, setPosY] = useState(200);
  const [isMaximized, setIsMaximized] = useState(false);


  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {

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

  return (
    <div
      style={{
        width : isMaximized ? "100vw" : "60vw",
        height : isMaximized ? "100vh" : "60vh",
        top: isMaximized ? 0 :  `${posY - 10}px`,
        left: isMaximized ? 0 : `${posX - 550}px`,
        position: "fixed",
        transition: isMaximized ? "top 0.3s ease, left 0.3s ease, width 0.3s ease, height 0.3s ease" : "none",
      }}
      className="bg-[#0A0919] rounded-md"
      onDragOver={handleDragOver}
    >
        <div draggable onDragStart={handleDragStart} onDrag={(e) => moveFolder(e)} onDragEnd={(e) => finalizePosition(e)}   className="w-full h-10 bg-gray-800/50 backdrop-blur-sm relative top-0 rounded-t-md flex justify-end">
            <div className="w-10 hover:bg-gray-500 h-full flex justify-center items-center"><FaMinus size={10} /></div>
            <div className="w-10 hover:bg-gray-500 h-full flex justify-center items-center" onClick={() => setIsMaximized(!isMaximized)}>< FaRegWindowMaximize size={10}/></div>
            <div className="w-10 hover:bg-red-500 h-full flex justify-center items-center" onClick={() => closeWindow("Krishna")} ><IoCloseSharp /></div>
        </div>
        <h1>Hi! I am Krishna</h1>
    </div>
  );
};

export default UserFolder;
