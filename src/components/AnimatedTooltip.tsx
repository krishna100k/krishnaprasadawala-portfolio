"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";

const people = [
  {
    id: 1,
    name: "HTML",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
  },
  {
    id: 2,
    name: "CSS",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
  },
  {
    id: 3,
    name: "React JS",
    image:
      "https://miro.medium.com/v2/resize:fit:1400/1*MF5V_dkybUTcfzwHFh0VSw.jpeg",
  },
  {
    id: 4,
    name: "Node Js",
    image:
      "https://i.pinimg.com/564x/79/c5/1d/79c51d0e3a3f60b504da6bcc20ab1afc.jpg",
  },
  {
    id: 5,
    name: "Express Js",
    image:
      "https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png",
  },
  {
    id: 6,
    name: "MongoDB",
    image:
      "https://logowik.com/content/uploads/images/mongodb9740.logowik.com.webp",
  },
  {
    id: 7,
    name: "PostgresSQL",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHhYIgLQICyLdxxt1uEcA4mTUM8-kNrMMMQA&s",
  },
  {
    id: 8,
    name: "My SQL",
    image:
      "https://www.shutterstock.com/image-vector/mysql-icon-simple-flat-on-260nw-2424305041.jpg",
  },
  {
    id: 9,
    name: "Typescript",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/800px-Typescript_logo_2020.svg.png",
  },
  {
    id: 10,
    name: "Next JS",
    image:
      "https://i.pinimg.com/736x/4a/2b/e7/4a2be73b1e2efb44355436c40bf496dd.jpg",
  },
  {
    id: 11,
    name: "Tailwind CSS",
    image:
      "https://picperf.io/https://laravelnews.s3.amazonaws.com/images/tailwindcss-1633184775.jpg",
  },
  {
    id: 12,
    name: "Angular JS",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMqzMqxo3FdmgI207Z1QuXm6ndnJxp7QGm_g&s",
  },
  {
    id: 13,
    name: "C#",
    image:
      "https://images.javatpoint.com/csharp/images/c-sharp.png",
  },
  {
    id: 14,
    name: "ASP.Net",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9HkBbOX7Z5teksASHqThMIa4xal1fmuJh5g&s",
  },
];

export default function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row flex-wrap items-center sm:justify-center justify-start mt-14 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
