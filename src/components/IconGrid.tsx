import React from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaNode,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiRedux,
  SiNextdotjs,
  SiExpress,
  SiSequelize,
  SiTailwindcss,
  SiStyledcomponents,
  SiTypescript,
} from "react-icons/si";
import { BiLogoMongodb, BiLogoPostgresql, BiCloudUpload } from "react-icons/bi";
import { motion } from "framer-motion";

interface Item {
  name: string;
  icon: React.ReactElement;
}

const items: Item[] = [
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <IoLogoJavascript /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "React.js", icon: <FaReact /> },
  { name: "Redux", icon: <SiRedux /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Bootstrap", icon: <FaBootstrap /> },
  { name: "TailwindCSS", icon: <SiTailwindcss /> },
  { name: "Styled Components", icon: <SiStyledcomponents /> },
  { name: "Node.js", icon: <FaNode /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "MongoDB", icon: <BiLogoMongodb /> },
  { name: "PostgreSQL", icon: <BiLogoPostgresql /> },
  { name: "Sequelize", icon: <SiSequelize /> },
  { name: "Cloudinary", icon: <BiCloudUpload /> },
];

const IconGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {items.map((item, index) => (
        <div key={index} className="flex flex-col p-1 items-center">
          <motion.span initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 1 }} className="text-5xl text-pink">{item.icon}</motion.span>
          <motion.span initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.5 }} className="text-sm text-center pt-1">{item.name}</motion.span>
        </div>
      ))}
    </div>
  );
};

export default IconGrid;
