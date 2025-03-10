"use client";

import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaDatabase, FaDocker, FaGitAlt, FaAws } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiJenkins } from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  { name: "React", icon: <FaReact className="text-blue-500" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500" /> },
  { name: "Database", icon: <FaDatabase className="text-gray-500" /> },
];

const devOpsTools = [
  { name: "Docker", icon: <FaDocker className="text-blue-600" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-600" /> },
  { name: "Jenkins", icon: <SiJenkins className="text-red-500" /> },
  { name: "AWS", icon: <FaAws className="text-red-500" /> },
];

export default function Skills() {
  return (
    <div className="py-15 bg-[#222222] dark:bg-gray-900 motion-preset-slide-right motion-duration-2000" id="skills">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-amber-300 dark:text-white mb-6">My Skills</h2>
        <h2 className="text-3xl font-bold text-white dark:text-white mb-6">Front-End</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 ml-5">
          {skills.map((skill, index) => (
            <motion.div key={index} className="p-4 bg-gray-200 dark:bg-gray-800 rounded-xl shadow-md flex flex-col items-center" whileHover={{ scale: 1.1 }}>
              <div className="text-5xl mb-2">{skill.icon}</div>
              <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">{skill.name}</p>
            </motion.div>
          ))}
        </div>

        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mt-12 mb-6"></h2>
        <h2 className="text-3xl font-bold text-white dark:text-white mt-12 mb-6">Back-End</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 ml-5 ">
          {devOpsTools.map((tool, index) => (
            <motion.div key={index} className="p-4 bg-gray-200 dark:bg-gray-800 rounded-xl shadow-md flex flex-col items-center" whileHover={{ scale: 1.1 }}>
              <div className="text-5xl mb-2">{tool.icon}</div>
              <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">{tool.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
