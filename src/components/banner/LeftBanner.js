import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Professional Coder.", "Full Stack Developer.", "UI Designer."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h2 className=" text-lg font-normal">जय श्री राम</h2>
        <h1 className="text-6xl font-bold text-white">
          I'm <span className="text-designColor capitalize">Nikhil Dubey</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        I am a passionate B.Tech Computer Science Engineering student,
        skilled in a diverse array of programming languages including 
        Python, Java, HTML, CSS, SQL, and MongoDB.


        </p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner