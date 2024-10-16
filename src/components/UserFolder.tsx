"use client";

import { useEffect, useState } from "react";
import { FaRegWindowMaximize } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { FaMinus } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { closeFolder, FolderInitialState } from "@/redux/folderSlice";
import { minimizeFolder } from "@/redux/folderSlice";
import AnimatedTooltipPreview from "./AnimatedTooltip";

const UserFolder = () => {
  const [posX, setPosX] = useState(1000);
  const [posY, setPosY] = useState(200);
  const [isMaximized, setIsMaximized] = useState(false);
  const [isMinimized, setisMinimized] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isMobile, setisMobile] = useState(false);
  const folderName = "Krishna";

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
      <div
        draggable
        onDragStart={handleDragStart}
        onDrag={(e) => moveFolder(e)}
        onDragEnd={(e) => finalizePosition(e)}
        className="w-full h-10 bg-[#1B1B1B] backdrop-blur-sm top-0 rounded-t-md flex justify-end sticky "
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
      <div className="md:w-[50rem] w-full m-auto my-20">
      <div className="w-full flex md:flex-row flex-col-reverse items-center md:items-start gap-20">
        <div className=" w-[95%] sm:w-[25rem] rounded-md ">
          <h1 className=" font-extrabold text-3xl">
            Hello! I'm Krishna, a developer based in India.
          </h1>
          <p className="mt-5">
            I love building software which is user friendly, simple and
            delightful.
          </p>
          <p className="mt-3">
            I graduated in 2024 with a bachelors in Technology in Computer
            science from MIT ADT School of Engineering, here i studied CS
            fundamentals, Web dev and much more.
          </p>
          <p className="mt-3">
            I have also worked at Onekaizen, a metallurgical consultancy based
            in India, where i helped them build their online presence by
            building a web application. Currently I am working at Neilsoft as
            Full stack .Net Angular Developer.{" "}
          </p>
          <div className="flex w-full gap-3 mt-5 ">
            <a
              href="https://www.linkedin.com/in/krishnaprasad-awala-24142a1b1/"
              target="_blank"
            >
              <button className="bg-[#ededed] text-black p-2 rounded-sm hover:bg-[#121212] hover:text-[#ededed] transition-all ease-in-out duration-300 ">
                Linkedin
              </button>
            </a>
            <a href="https://github.com/krishna100k" target="_blank">
              <button className="bg-[#121212] text-[#ededed] p-2 rounded-sm hover:text-[#09090B] hover:bg-[#ededed] border transition-all ease-in-out duration-300">
                Github
              </button>
            </a>
          </div>
        </div>
        <div className="bg-[#27272A] w-[95%] sm:w-[25rem] h-[35rem] rounded-lg bg-[url('/profile-pic.jpg')] bg-no-repeat bg-cover"></div>
      </div>
      <div className="md:w-full w-[95%] ml-2 mt-20  flex flex-col md:block items-center">
        <h1 className=" w-full sm:w-[25rem] md:w-auto font-black text-6xl md:text-center">Skills</h1>
        <AnimatedTooltipPreview />
      </div>
      </div>
    </div>
  );
};

export default UserFolder;
