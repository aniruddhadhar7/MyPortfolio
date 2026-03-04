import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaJava,
  FaGitAlt,
} from "react-icons/fa";
import { SiDjango, SiCplusplus, SiBootstrap } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "React", icon: <FaReact /> },
  { name: "Bootstrap", icon: <SiBootstrap /> },
  { name: "Python", icon: <FaPython /> },
  { name: "Django", icon: <SiDjango /> },
  { name: "Java", icon: <FaJava /> },
  { name: "C++", icon: <SiCplusplus /> },
  { name: "Git", icon: <FaGitAlt /> },
];

const Skills = () => {
  return (
    <section className="w-full min-h-screen bg-slate-900 text-white px-6 md:px-20 py-16">

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold text-center mb-16"
      >
        <span className="text-lime-400">My</span> Skills
      </motion.h2>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">

        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{
              y: -10,
              scale: 1.05,
              boxShadow: "0px 0px 40px rgba(34,211,238,0.4)",
            }}
            className="
              flex flex-col items-center justify-center
              bg-white/10 backdrop-blur-lg
              p-6 rounded-2xl
              border border-white/20
              transition duration-300
            "
          >
            <div className="text-5xl text-lime-400 mb-4">
              {skill.icon}
            </div>

            <p className="text-lg font-semibold">
              {skill.name}
            </p>
          </motion.div>
        ))}

      </div>
    </section>
  );
};

export default Skills;