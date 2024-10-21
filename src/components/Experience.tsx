import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function Experience() {
  const data = [
    {
      title: "January 24 - June 24",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xl md:text-3xl font-bold mb-5">
            Onekaizen
          </p>
          <ul className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8 list-disc flex flex-col gap-1">
            <li>Assisted in the development of the front end of a Web Application built with HTML, CSS, JS, and PHP.</li>
            <li>Worked with client-side Javascript and Document Object Model to create highly dynamic webpages</li>
            <li>Collaborated with team members using version control systems such as Git to organize modifications and assign tasks.</li>
            <li><a href="https://onekaizen.com" target="_blank">Onekaizen.com</a></li>
          </ul>
          <div className="">
            <Image
              src="/companies/onekaizen.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-44 lg:h-60 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "July 2024 - Present",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xl md:text-3xl font-bold mb-5">
            Neilsoft
          </p>
          <ul className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8 list-disc flex flex-col gap-1">
            <li>Building full stack web appliactions in angular JS and CS Dot Net.</li>
            <li>Worked with client-side Javascript and Document Object Model to create highly dynamic webpages</li>
            <li><a href="https://neilsoft.com" target="_blank">Neilsoft.com</a></li>
          </ul>
          <div className="">
            <img
              src="/companies/Neilsoft.webp"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-44 lg:h-60  shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    }
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
