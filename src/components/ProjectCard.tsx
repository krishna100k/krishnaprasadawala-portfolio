
const ProjectCard : React.FC = () => {
  return (
    <div className="w-[45%] h-[25rem] bg-[url('/background-2.jpg')] bg-cover border border-gray-800 relative overflow-hidden">
      <div className="w-full h-14 hover:h-full  bg-black/55 backdrop-blur-lg absolute bottom-0 transition-all duration-500 border-t border-gray-800 cursor-pointer">
        <p className="mt-4 ml-5 mr-5">Project Name</p>
        <p className="mt-5 ml-5 mr-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde iste doloremque fugit mollitia libero iure accusamus, quisquam repudiandae temporibus asperiores fugiat sunt eveniet, at assumenda fuga eius facere nemo, ratione culpa dolor esse porro laborum. Possimus doloremque quas officiis porro eaque, qui tempora optio adipisci cupiditate vitae fugiat aspernatur ullam!</p>
      </div>
    </div>
  )
}

export default ProjectCard