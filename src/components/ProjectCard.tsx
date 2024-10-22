import { MajorProject } from "@/lib/data";
import { useState } from "react";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

const ProjectCard: React.FC<{ projectData: MajorProject }> = ({projectData}) => {

  const [isHovering, setIsHovering] = useState(false)

  const mouseEnterHandler = () => {
    setIsHovering(true)
  }

  const mouseLeaveHandler = () => {
    setIsHovering(false)
  }

  return (
    <div className={` w-full md:w-[48%] h-[25rem] bg-cover bg-no-repeat border border-gray-800 relative overflow-hidden`} style={{ backgroundImage: `url(${projectData.image})` }}>
      <div onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} className="w-full h-14 hover:h-full  bg-black/55 backdrop-blur-lg absolute bottom-0 transition-all duration-500 border-t border-gray-800 cursor-pointer">
        <div className="flex items-center">
          <p className="mt-4 ml-5 mr-2 font-bold ">{projectData.projectName}</p>
          {isHovering ? <FaChevronDown className="mt-4 mr-5 text-sm " /> : <FaChevronUp className="mt-4 mr-5 text-sm " />}
        </div>
        <ul className="mt-5 ml-8 mr-5 list-disc text-sm flex flex-col gap-1">
          {projectData.projectDescription.map((list) => (
            <li>{list}</li>
          ))}
        </ul>
        <div className="flex w-full gap-3 mt-5 ml-5">
          <a href={projectData.github} target="_blank">
            <button className="bg-[#ededed] text-black p-2 rounded-sm hover:bg-[#121212] hover:text-[#ededed] transition-all ease-in-out duration-300 ">
              Github
            </button>
          </a>
          <a href={projectData.liveLink} target="_blank">
            <button className="bg-[#121212] text-[#ededed] p-2 rounded-sm hover:text-[#09090B] hover:bg-[#ededed] border transition-all ease-in-out duration-300">
              Live
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
