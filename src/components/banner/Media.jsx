import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaReact, FaInstagram } from "react-icons/fa";
import { SiPython, SiCplusplus, SiJavascript } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <a href='https://www.facebook.com/profile.php?id=100074787368971' className="bannerIcon" target='__blank'>
              <FaFacebookF />
            </a>
            <a href='https://www.instagram.com/officialnikhildubey/' className="bannerIcon" target='__blank'>
              <FaInstagram />
            </a>
            <a href='https://www.linkedin.com/in/nikhil-dubey-b3210a240' className="bannerIcon" target='__blank'>
              <FaLinkedinIn />
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiPython />
            </span>
            <span className="bannerIcon">
              <SiCplusplus />
            </span>
            <span className="bannerIcon">
              <SiJavascript />
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media