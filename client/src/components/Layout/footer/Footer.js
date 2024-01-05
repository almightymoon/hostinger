// src/components/Footer.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCcVisa,
  faCcMastercard,
  faCcJcb,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPaypal,
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Divider } from "antd";

const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white mt-4 py-2'>
      <div className='container mx-auto flex flex-wrap justify-between items-center'>
        <div className='mb-4'>
          <h1 className='text-xl font-bold'>IMAN TILES</h1>
        </div>

        {/* Left side */}
        <div className='flex flex-wrap text-white justfiy-center mb-4 sm:mb-0'>
          <span className='text-lg font-bold mr-2'>Store Location</span>
          <span className='text-lg mr-2'>|</span>
          <span className='text-lg'>Opening Hours</span>
          <span className='ml-2 text-lg'>|</span>
          <span className='text-lg'>Privacy Policy</span>
        </div>

        {/* Social Icons */}
        <div className='flex space-x-4 mb-4 sm:mb-0'>
          {/* <FontAwesomeIcon
            className='p-2 rounded-full'
            icon={faTwitter}
            style={{ height: "30px" }}
          /> */}
          <FontAwesomeIcon
            className='p-2 rounded-full'
            icon={faFacebook}
            style={{ height: "30px" }}
          />
          {/* <FontAwesomeIcon
            className='p-2 rounded-full'  
            icon={faInstagram}
            style={{ height: "30px" }}
          />
          <FontAwesomeIcon
            className='p-2 rounded-full'
            icon={faLinkedin}
            style={{ height: "30px" }}
          /> */}
        </div>
      </div>

      {/* Divider */}
      <Divider className='bg-white'></Divider>

      <div className='bg-gray-800 text-white py-4 sm:py-8'>
        <div className='container mx-auto flex flex-wrap justify-between items-center'>
          <div className='text-sm'>&copy; 2020 IMAN TILES</div>

          <div className='flex space-x-4'>
            <FontAwesomeIcon icon={faPaypal} style={{ height: "30px" }} />
            <FontAwesomeIcon icon={faCcVisa} style={{ height: "30px" }} />
            <FontAwesomeIcon icon={faCcMastercard} style={{ height: "30px" }} />
            <FontAwesomeIcon icon={faCcJcb} style={{ height: "30px" }} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
