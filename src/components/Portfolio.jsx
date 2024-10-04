/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import { AiFillGithub, AiOutlineGithub } from 'react-icons/ai';

const projects = [
  {
    img: project1,
    title: "Nft Pay",
    description: "Nft Pay is an innovative web application designed to buy or sell nfts using next js and typescript.",
    links: {
      site: "https://nft-pay-da22.vercel.app/",
      github: "https://github.com/Alipraiz50/Nft-pay",
    },
  },
  {
    img: project2,
    title: "Dream World",
    description: "Dream world is an imagination brought to life, it helps end users to play games and also wacth movies in 3D dimension.",
    links: {
      site: "https://dream-world-422w.vercel.app/",
      github: "https://github.com/Alipraiz50/Dream-World",
    },
  },
  {
    img: project3,
    title: "Savxe",
    description: "This is an e-commerce landing page of an upcoming brand savxe store which represents class and style",
    links: {
      site: "https://savxe.vercel.app/",
      github: "https://github.com/Alipraiz50/Savxe",
    },
  },
];

const Portfolio = () => {
  return (
    <div className='max-w-[1000px] mx-auto p-6 md:my-20' id="portfolio">
      <h2 className='text-3xl font-bold text-gray-200 mb-8'>Portfolio</h2>
      {projects.map((project, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, y: 20 }} // Start off-screen and transparent
          animate={{ opacity: 1, y: 30 }} // Animate to on-screen and opaque
          transition={{ duration: 9.5 }} // Animation duration
          className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-12`}
        >
          <div className='w-full md:w-1/2 p-4'>
            <img
              src={project.img}
              alt={project.title}
              className='w-full h-full object-cover rounded-lg shadow-lg'
            />
          </div>
          <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
            <h3 className='text-2xl font-semibold text-gray-200 mb-4'>{project.title}</h3>
            <p className='text-gray-300 mb-4'>{project.description}</p>
            <div className='flex space-x-4'>
              <a href={project.links.site}
                className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300'>
                View Site
              </a>
              <a href={project.links.github}
                className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300'>
                <AiOutlineGithub />
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default Portfolio;
