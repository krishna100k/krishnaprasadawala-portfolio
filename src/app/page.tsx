"use client"

import UserFolder from "@/components/UserFolder";
import { useState } from "react";
import { shortcuts } from "@/lib/data";

export interface Shortcut{
  id : string;
  name : string;
  image : string;
}

export default function Home() {

  const [clicked, setClicked] = useState("")
  const [isOpen, setIsOpen] = useState<Shortcut[]>([])



  const closeWindow = (windowName : string) => {
    setIsOpen(isOpen.filter(openWindow => openWindow.name !== windowName))
  }
  
  return (
    <>
    <div className="flex flex-col gap-7 mt-5">
      {
        shortcuts.map((shortcut) => {
          return (
            <div onClick={() => setClicked(shortcut.name)}
            onDoubleClick={()=> setIsOpen([...isOpen, shortcut])}
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
      isOpen.find(open => open.name == "Krishna") && (<UserFolder closeWindow = {closeWindow} />)
    }
    </>
  );
}
