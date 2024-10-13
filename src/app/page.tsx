"use client"

import UserFolder from "@/components/UserFolder";
import { useState } from "react";
import { shortcuts } from "@/lib/data";
import { useDispatch, UseDispatch, useSelector, UseSelector  } from "react-redux";
import { FolderInitialState, openFolders } from "@/redux/folderSlice";
import Projects from "@/components/Projects";
import WorkExperience from "@/components/WorkExperience";
import Blogs from "@/components/Blogs";

export interface Shortcut{
  id : string;
  name : string;
  image : string;
}

export default function Home() {

  const dispatch = useDispatch();
  const isOpen = useSelector((state : {folder : FolderInitialState}) => state.folder.openFolder)
  const [clicked, setClicked] = useState("")

  const openFolder = (shortcut : Shortcut) => {
   let alreadyExists = isOpen.find((open : Shortcut) => {
     return open.name === shortcut?.name
    })
    if(!alreadyExists){
      dispatch(openFolders(shortcut))
    }
  }
  
  return (
    <>
    <div className="flex flex-col gap-7 mt-5">
      {
        shortcuts.map((shortcut) => {
          return (
            <div onClick={() => setClicked(shortcut.name)}
            onDoubleClick={() => openFolder(shortcut)}
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
      isOpen?.find(open => open.name == "Krishna") && (<UserFolder />) 
    }
    {
      isOpen?.find(open => open.name == "Projects") && (<Projects />) 
    }
    {
      isOpen?.find(open => open.name == "Work Experience") && (<WorkExperience />) 
    }
    {
      isOpen?.find(open => open.name == "Blogs") && (<Blogs />) 
    }
    </>
  );
}
