import { Shortcut } from "@/app/page";

export interface MajorProject {
  id: string;
  image: string;
  projectName: string;
  projectDescription: string[];
  github: string;
  liveLink: string;
}

export interface MiniProject {
  id : string;
  projectName : string;
  projectDescription : string;
  liveLink: string;
}

export const shortcuts : Shortcut[] = [
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


  export const MajorProjectsData : MajorProject[] = [
    {
      id : '1',
      image : "/projects/Flicksphere.png",
      projectName : "Flicksphere",
      projectDescription : ["Built a full stack Movie Streaming Web Application using next js where users can watch their favourite movies and TV Shows.", "The Data is getting fetched from TMDB api.", "An API called VidSrc is being used to fetch the requested movies."],
      github : "https://github.com/krishna100k/flicksphere",
      liveLink : "https://flicksphere.vercel.app/"
    },
    {
      id : '2',
      image : "/projects/Quillhub.png",
      projectName : "Quillhub",
      projectDescription : ["Built a full stack Blog Application using next js where users can add, edit and delete their blog posts and view other users posts.", "Good looking UI and working blog content writing feature using React-Quill library.", "Implemented secure user authentication to ensure privacy and user data protection using JWT Authentiation.", "Achieved server-side rendering using Next js"],
      github : "https://github.com/krishna100k/QuillHub---Blog",
      liveLink : "https://quillhub.vercel.app/"
    },
    {
      id : '3',
      image : "/projects/HibernationCave.png",
      projectName : "Hibernation Cave",
      projectDescription : ["Developed an E-Commerce Clothing Website with Typescript, React JS, Redux, Node JS, Express JS, and MongoDB.", "This project includes an admin portal for admins to manage thier orders and products.", "Used Multer to allow users to upload Images to the backend and access it in the frontend.", "Features - Login System, Cart System, Filtering System, Payment System, Admin Panel, Image Upload", ],
      github : "https://github.com/krishna100k/Verve---Ecommerce",
      liveLink : "https://hibernationcave.vercel.app/"
    },
    {
      id : '4',
      image : "/projects/QrBites.png",
      projectName : "Qr Bites",
      projectDescription : ["Created a QR Based Food Ordering System for restaurants using Javascript, React JS, Recoil JS, Socket.io, Node JS, MongoDB", "Overview- Restaurants can stick a particular QR code for one table and users can order by scanning that table and the admin will recieve the order immediately with the table no.", "Used Socket.io for understand when a user is ordering so that the admin Panel can be immediately updated and a alarm is played to notify the admin."],
      github : "https://github.com/krishna100k/restaurantOrdering",
      liveLink : "https://qrbites.vercel.app/"
    },
  ]

  export const miniProject : MiniProject[] = [
    {
      id : "1",
      projectName : "TrustedTalks",
      projectDescription : "Built a simple chat application which stores chats in DB.",
      liveLink : "https://trustedtalks.vercel.app/"
    },
    {
      id : "2",
      projectName : "SmokingIsInjurious",
      projectDescription : "Built a simple jump game.",
      liveLink : "https://smokingisinjurious.netlify.app/"
    },
    {
      id : "3",
      projectName : "To do Application",
      projectDescription : "Built a simple To Do Application.",
      liveLink : "https://anothernewtodoapp.netlify.app/"
    },
    {
      id : "4",
      projectName : "Static Youtube",
      projectDescription : "Static youtube is a simple youtube UI build in HTML, CSS",
      liveLink : "https://staticyoutube.netlify.app/"
    }
  ]