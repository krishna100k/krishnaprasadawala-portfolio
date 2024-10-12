"use client"

import UserFolder from "@/components/UserFolder";
import { useState } from "react";

export default function Home() {

  const [clicked, setClicked] = useState("")
  const [isOpen, setIsOpen] = useState<string[]>([])

  const shortcuts = [
    {
      id: '1',
      name: "Krishna",
      image: "/icons/folder.png",
    },
    {
      id: '2',
      name: "Projects",
      image: "/icons/projects.png",
    },
    {
      id: '3',
      name: "Work Experience",
      image: "/icons/work-experience.png",
    },
    {
      id: '4',
      name: "Blogs",
      image: "/icons/blog.png",
    }
  ];

  const closeWindow = (windowName : string) => {
    setIsOpen(isOpen.filter(openWindow => openWindow !== windowName))
  }
  
  return (
    <>
    <div className="flex flex-col gap-7 mt-5">
      {
        shortcuts.map((shortcut) => {
          return (
            <div onClick={() => setClicked(shortcut.name)}
            onDoubleClick={()=> setIsOpen([...isOpen, shortcut.name])}
             className=" w-20 h-auto flex flex-col gap-2 text-center text-wrap justify-center items-center hover:bg-blue-200/20 " 
             key={shortcut.id}
             style={{background : clicked == shortcut.name ? "#2E2D49" : ""

             }}
             >
              <img className="w-10 select-none" src={shortcut.image} alt="Icon" />
              <p className="select-none text-sm">{shortcut.name}</p>
            </div>
          )
        })
      }
    </div>
    {
      isOpen.includes("Krishna") && <UserFolder closeWindow = {closeWindow} />
    }
    </>
  );
}
