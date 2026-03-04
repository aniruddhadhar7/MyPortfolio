import { motion } from "framer-motion";
import food1 from "../../assets/images/food.jpeg"
import job from "../../assets/images/picture1.jpg"
const projects = [
  {
    title: "Taskify - To Do App",
    description:
      "A modern task management app built with React featuring add, delete, edit and local storage support.",
    image: "/projects/taskify.png",
    github: "https://github.com/yourusername/taskify",
    live: "https://taskify-demo.com",
  },
  {
    title: "Movie Watchlist",
    description:
      "React-based movie watchlist app with dynamic rendering and interactive UI.",
    image: "/projects/movie.png",
    github: "https://github.com/yourusername/movie-watchlist",
    live: "https://movie-demo.com",
  },
  {
    title: "Job Portal (Django)",
    description:
      "Full-stack job portal built using Django and SQLite with authentication system.",
    image: job,
    github: "https://github.com/yourusername/jobportal",
    live: "#",
  },

  // ✅ NEW PROJECT ADDED HERE
  {
    title: "Online Food Delivery App (Django)",
    description:
      "A full-stack food delivery system built with Django featuring user authentication, dynamic food menu, add to cart functionality, order placement system, and admin dashboard.",
    image: food1,
    github: "https://github.com/yourusername/food-delivery",
    live: "#",
  },
];

const Projects = () => {
  return (
    <section className="w-full min-h-screen bg-slate-900 text-white px-6 md:px-20 py-16">

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold text-center mb-16"
      >
        <span className="text-cyan-400">My</span> Projects
      </motion.h2>

      {/* Project Grid */}
      <div className="grid md:grid-cols-3 gap-10">

        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{
              y: -12,
              scale: 1.03,
              boxShadow: "0px 0px 40px rgba(34,211,238,0.4)",
            }}
            className="
              bg-white/10 backdrop-blur-lg
              rounded-2xl
              border border-white/20
              overflow-hidden
              transition duration-300
            "
          >

            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />

            {/* Content */}
            <div className="p-6 space-y-4">

              <h3 className="text-xl font-semibold text-cyan-400">
                {project.title}
              </h3>

              <p className="text-gray-300 text-sm">
                {project.description}
              </p>

              {/* Buttons */}
              <div className="flex gap-4 pt-4">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition"
                >
                  GitHub
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-cyan-500 text-black rounded-lg hover:bg-cyan-400 transition"
                >
                  Live Demo
                </a>

              </div>

            </div>

          </motion.div>
        ))}

      </div>
    </section>
  );
};

export default Projects;