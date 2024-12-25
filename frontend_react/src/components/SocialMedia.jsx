import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { AiFillCode, AiOutlineFileSearch } from 'react-icons/ai'; // Example icons
import { SiCodingninjas } from 'react-icons/si'; // For Coding Ninjas

const SocialMedia = () => (
  <div className="app__social">
    {/* LinkedIn */}
    <div>
      <a href="https://www.linkedin.com/in/pramod-katta-7a8b0121a/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
    </div>
    {/* Naukri */}
    <div>
      <a href="https://www.naukri.com/mnjuser/profile?id=&altresid" target="_blank" rel="noopener noreferrer">
        <AiOutlineFileSearch />
      </a>
    </div>
    {/* LeetCode */}
    <div>
      <a href="https://leetcode.com/u/pramodkatta1/" target="_blank" rel="noopener noreferrer">
        <AiFillCode />
      </a>
    </div>
    {/* Coding Ninjas */}
    <div>
      <a href="https://www.naukri.com/code360/profile/pramodkatta1" target="_blank" rel="noopener noreferrer">
        <SiCodingninjas />
      </a>
    </div>
  </div>
);

export default SocialMedia;
