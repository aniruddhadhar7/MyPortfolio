import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import img from "../../assets/images/img.png";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-white flex flex-col md:flex-row items-center justify-center w-full md:min-h-screen px-6 md:px-20 py-10 md:py-16 bg-slate-900 gap-12"
    >
      
      {/* Left Side */}
      <div className="space-y-6 text-center md:text-left md:w-1/2">

  <h1 className="sm: mt-10 text-2xl sm:text-4xl md:text-6xl font-bold text-center md:text-left">
  <span className="text-white">
    Hello,{" "}
  </span>

  <span className="text-cyan-400">
    <Typewriter
      words={["I am Aniruddha"]}
      loop={false}
      cursor
      cursorStyle="|"
      typeSpeed={80}
    />
  </span>
</h1>

        <p className="text-sm sm:text-lg md:text-2xl text-gray-300">
          Frontend Developer | React Learner | CSE Student
        </p>

        <motion.a
          href="#projects"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-6 py-3 bg-cyan-500 text-black font-semibold rounded-lg hover:bg-cyan-400 transition duration-300"
        >
          View My Work
        </motion.a>

      </div>

      {/* Right Side Image */}
      <div className="md:w-1/2 flex justify-center">
        <motion.img
          src={img}
          alt="Aniruddha"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="
            w-40 
            sm:w-52 
            md:w-80 
            lg:w-96 
            aspect-square
            rounded-full 
            object-cover 
            border-4 border-cyan-400 
            shadow-[0_0_25px_#22d3ee] 
          "
        />
      </div>

    </motion.div>
  );
};

export default Home;