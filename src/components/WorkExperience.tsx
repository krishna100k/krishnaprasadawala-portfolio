"use client";

import { useEffect, useState } from "react";
import { FaRegWindowMaximize } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { FaMinus } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { closeFolder, FolderInitialState } from "@/redux/folderSlice";
import { minimizeFolder } from "@/redux/folderSlice";
import ProjectCard from "./ProjectCard";
import MiniProjectCard from "./MiniProjectCard";
import { Experience } from "./Experience";

const WorkExperience = () => {
  const [posX, setPosX] = useState(1000);
  const [posY, setPosY] = useState(200);
  const [isMaximized, setIsMaximized] = useState(false);
  const [isMinimized, setisMinimized] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isMobile, setisMobile] = useState(false);
  const folderName = "Work Experience";

  const dispatch = useDispatch();
  const minimizedFolders: string[] = useSelector(
    (state: { folder: FolderInitialState }) => state.folder.minimizedFolders
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1012) {
        setisMobile(true);
        setIsMaximized(true);
      }else{
        setisMobile(false);
        setIsMaximized(false);
      }
    };
  
    window.addEventListener("resize", handleResize);
  
    handleResize();
  
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); 
  
  useEffect(() => {
    if (minimizedFolders.includes(folderName)) {
      setisMinimized(true);
    } else {
      setisMinimized(false);
    }
  }, [minimizedFolders, folderName]);

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    setIsDragging(true);
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
    setIsDragging(false);
    if (e.clientY <= 0) {
      setPosX(e.clientX);
      setPosY(0);
    } else if (e.clientY >= 560) {
      setPosX(e.clientX);
      setPosY(800);
    } else {
      setPosX(e.clientX);
      setPosY(e.clientY);
    }
  };

  const minimizeHandler = () => {
    dispatch(minimizeFolder(folderName));
  };

  return (
    <div
      style={{
        width: isMaximized || isMobile ? "100vw" : "60vw",
        height: isMaximized || isMobile ? "100vh" : "60vh",
        top:
          isMaximized && !isMinimized
            ? 0
            : isMinimized
            ? "200vh"
            : `${posY - 10}px`,
        left: isMaximized || isMobile ? 0 : `${posX / 2}px`,
        position: "fixed",
        transition:
          isMaximized || isMinimized
            ? "top 0.5s ease, left 0.5s ease, width 0.5s ease, height 0.5s ease"
            : !isMinimized && !isDragging
            ? "top 0.5s ease, left 0.5s ease,"
            : "",
        zIndex: isMaximized ? "1000" : "",
      }}
      className="bg-[#121212] rounded-md overflow-auto"
      onDragOver={handleDragOver}
    >

      {/* Topbar */}
      <div
        draggable
        onDragStart={handleDragStart}
        onDrag={(e) => moveFolder(e)}
        onDragEnd={(e) => finalizePosition(e)}
        className="w-full h-10 bg-[#1B1B1B] backdrop-blur-sm top-0 rounded-t-md flex justify-end sticky z-50"
      >
        <div
          className="w-10 hover:bg-gray-500 h-full flex justify-center items-center"
          onClick={minimizeHandler}
        >
          <FaMinus size={10} />
        </div>
        <div
          className="w-10 hover:bg-gray-500 h-full flex justify-center items-center"
          onClick={() => setIsMaximized(!isMaximized)}
        >
          <FaRegWindowMaximize size={10} />
        </div>
        <div
          className="w-10 hover:bg-red-500 h-full flex justify-center items-center"
          onClick={() => dispatch(closeFolder(folderName))}
        >
          <IoCloseSharp />
        </div>

      </div>
      {/* Topbar Ends */}

      <div className="w-[70%] h-max m-auto ">
        <div className="text-start mt-16 mb-24">
        <h1 className="font-extrabold text-6xl">Work Experience</h1>
        <p className="mt-5">Here is a summary of my professional experience, demonstrating my ability to contribute effectively across various roles and industries.</p>
        <Experience />
        </div>
      </div>

    </div>
  );
};

export default WorkExperience;
