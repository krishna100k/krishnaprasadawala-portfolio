import { MiniProject } from "@/lib/data"


const MiniProjectCard : React.FC<{projectData : MiniProject}> = ({projectData}) => {
  return (
    <div onClick={() => window.open(projectData.liveLink, "_blank")} className="md:w-[98%] w-full h-14 flex items-center pl-5 bg-[url('/background-2.jpg')] bg-cover border border-gray-800 cursor-pointer">
        <p ><span className="font-bold"> {projectData.projectName} </span> - {projectData.projectDescription}</p>
    </div>
  )
}

export default MiniProjectCard