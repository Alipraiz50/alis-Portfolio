// eslint-disable-next-line no-unused-vars
import React from "react";
import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "./ShinyEffect";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";
import {
  DiCss3,
  DiHtml5,
  DiJavascript1,
  DiNodejsSmall,
  DiReact,
} from "react-icons/di";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="mt-24 max-w-[1200px] mx-auto relative flex flex-col justify-center items-center h-screen text-center">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <TypeAnimation
          sequence={[
            "Frontend Dev",
            1000,
            "Web Developer",
            1000,
            "Consultant",
            1000,
          ]}
          speed={50}
          repeat={Infinity}
          className="font-bold text-gray-400 text-lg md:text-5xl italic mb-4"
        />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-gray-200 md:text-5xl text-3xl tracking-tight mb-4"
        >
          HEY, I AM <br />
          <span className="text-purple-500">Ali Praise Oluwafemi</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          className="text-gray-300 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg mb-6"
        >
         Driven by a love for open source and automation, I continuously explore new 
         technologies and trends in the web development landscape. my commitment to creativity 
         and innovation allows me to craft solutions that not only meet client needs 
         but also inspire users.
        </motion.p>

       <motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 1, delay: 1.5 }}
  className="flex flex-row items-center gap-6 my-4 md:mb-0 justify-center"
>
  <motion.a
    href="https://drive.google.com/drive/my-drive?dmr=1&ec=wgc-drive-globalnav-goto" // Add your CV link here
    target="_blank" // Open in new tab
    rel="noopener noreferrer" // Security feature
    whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)" }}
    className="z-10 cursor-pointer font-bold text-gray-200 md:w-auto p-4 border
    border-purple-400 rounded-xl text-center"
  >
  Download Cv
  </motion.a>

  <div className="flex gap-6 flex-row text-4xl md:text-6xl text-purple-400 z-20">
    <motion.a 
      whileHover={{ scale: 1.2 }} 
      href="https://github.com/Alipraiz50" // GitHub link here
      target="_blank" // Open in new tab
      rel="noopener noreferrer" // Security feature
    >
      <AiOutlineGithub />
    </motion.a>

    <motion.a 
      whileHover={{ scale: 1.2 }} 
      href="#" // Add LinkedIn link here
      target="_blank"
      rel="noopener noreferrer"
    >
      <AiOutlineLinkedin />
    </motion.a>

    <motion.a 
      whileHover={{ scale: 1.2 }} 
      href="#" // Add Instagram link here
      target="_blank"
      rel="noopener noreferrer"
    >
      <AiOutlineInstagram />
    </motion.a>
  </div>
</motion.div>

      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 2 }}
        className="flex flex-row text-7xl px-12 md:px-0 w-full justify-center items-center py-24"
      >
        <p className="text-gray-200 mr-6">My Tech Stack</p>
        <DiHtml5 className="text-orange-600 mx-2" />
        <DiCss3 className="text-blue-600 mx-2" />
        <DiJavascript1 className="text-yellow-500 mx-2" />
        <DiReact className="text-blue-500 mx-2" />
        <DiNodejsSmall className="text-green-500 mx-2" />
      </motion.div>

      <div className="absolute inset-0 hidden md:block">
        <ShinyEffect left={0} top={0} size={1400} />
      </div>
    </div>
  );
};

export default Hero;

