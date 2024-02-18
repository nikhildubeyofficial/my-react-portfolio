import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Tic Tac Toe Game"
          des=" A classic tic-tac-toe game implementation showcasing fundamental programming concepts and interactive gameplay."
          src={projectOne}
        />
        <ProjectsCard
          title="File Compressor"
          des="A file compressor utilizing Huffman coding algorithm for efficient data compression, reducing file sizes while preserving data integrity."
          src={projectTwo}
        />
        <ProjectsCard
          title="Hotel Booking Website"
          des="A comprehensive hotel booking website facilitating seamless reservations, showcasing available accommodations, and offering user-friendly features for an enhanced booking experience."
          src={projectThree}
        />
      </div>
    </section>
  );
}

export default Projects