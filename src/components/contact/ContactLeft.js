import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Nikhil Dubey</h3>
        <p className="text-lg font-normal text-gray-400">
          MERN Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
        "Connect with me to discuss collaboration opportunities or to learn more about my work - I'm just a message away!".
"Let's chat! Reach out via email or social media to start a conversation about your project or any inquiries."
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 9098309221</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">dubeynikhil818@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <a href='https://www.facebook.com/profile.php?id=100074787368971' target='__blank' className="bannerIcon">
            <FaFacebookF />
          </a>
          <a href='https://www.instagram.com/officialnikhildubey/' target='__blank' className="bannerIcon">
            <FaInstagram />
          </a>
          <a href='https://www.linkedin.com/in/nikhil-dubey-b3210a240' target='__blank' className="bannerIcon">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft