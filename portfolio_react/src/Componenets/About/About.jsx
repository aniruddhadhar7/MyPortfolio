import img from "../../assets/images/ava.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="w-full min-h-screen flex items-center justify-center px-6 md:px-20 py-20 bg-slate-900">

      <motion.div
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        whileHover={{
          y: -15,
          scale: 1.02,
          boxShadow: "0px 0px 60px rgba(34,211,238,0.4)",
        }}
        transition={{ duration: 0.6 }}
        className="
          w-full max-w-6xl
          p-8 md:p-16
          rounded-3xl
          bg-white/10
          backdrop-blur-xl
          border border-white/20
          shadow-2xl
          text-white
        "
      >

        {/* 🔥 IMPORTANT FLEX CONTAINER */}
        <div className="flex flex-col md:flex-row items-center gap-12">

          {/* Avatar Section */}
          <div className="relative flex justify-center md:w-1/2">

            {/* Glow Background */}
            <div className="absolute w-80 h-80 bg-cyan-500/20 blur-3xl rounded-full"></div>

            <motion.img
              src={img}
              alt="Developer Avatar"
              className="
                relative
                w-72 md:w-105
                object-contain
                drop-shadow-[0_10px_40px_rgba(0,0,0,0.6)]
              "
              whileHover={{ y: -10, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 120 }}
            />
          </div>

          {/* Text Section */}
          <div className="md:w-1/2 text-center md:text-left">

            <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
              <span className="text-cyan-400">About</span>{" "}
              <span className="text-white">Me</span>
            </h2>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
              I am <span className="text-white font-semibold">Aniruddha Dhar</span>, 
              currently pursuing <span className="text-cyan-400 font-semibold">B.Tech in Computer Science & Engineering</span> 
              (3rd Year) from <span className="text-white font-semibold">Narula Institute of Technology</span>.
            </p>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
              I am passionate about building modern, responsive and scalable web applications. 
              My focus is on becoming a strong Full Stack Developer and building 
              real-world projects that solve practical problems.
            </p>

            {/* Skills Section */}
            <div className="space-y-4 text-lg md:text-xl">

              <div className="flex items-start gap-4">
                <span className="text-cyan-400 text-2xl">•</span>
                <div>
                  <p className="font-semibold text-white">
                    Frontend Development
                  </p>
                  <p className="text-gray-400 text-sm md:text-base">
                    HTML, CSS, JavaScript, React, Bootstrap
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-cyan-400 text-2xl">•</span>
                <div>
                  <p className="font-semibold text-white">
                    Backend Development
                  </p>
                  <p className="text-gray-400 text-sm md:text-base">
                    Python, Django, REST APIs
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-cyan-400 text-2xl">•</span>
                <div>
                  <p className="font-semibold text-white">
                    Currently Learning
                  </p>
                  <p className="text-gray-400 text-sm md:text-base">
                    Advanced React, Full Stack Development, SAP Modules
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-cyan-400 text-2xl">•</span>
                <div>
                  <p className="font-semibold text-white">
                    Programming & DSA
                  </p>
                  <p className="text-gray-400 text-sm md:text-base">
                    C++, Java, Python, Data Structures & Algorithms
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>

      </motion.div>
    </section>
  );
};

export default About;