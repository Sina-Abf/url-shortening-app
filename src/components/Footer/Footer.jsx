import React from 'react';
import logo from '../../assets/images/logo-white.svg';
import facebook from '../../assets/images/icon-facebook.svg';
import twitter from '../../assets/images/icon-twitter.svg';
import pintrest from '../../assets/images/icon-pinterest.svg';
import instagram from '../../assets/images/icon-instagram.svg';
const Footer = () => {
  return (
    <footer className="bg-VeryDarkBlue flex justify-center items-center flex-col lg:flex-row lg:justify-between pb-10 lg:px-10">
      <img className="my-10" src={logo} />
      <ul className="text-center text-GrayishViolet flex flex-col gap-y-1 mb-10">
        <h1 className="text-white text-xl mb-2">Features</h1>
        <li>Link Shortening</li>
        <li>Branded Links</li>
        <li>Analytics</li>
      </ul>
      <ul className="text-center text-GrayishViolet flex flex-col gap-y-1 mb-10">
        <h1 className="text-white text-xl mb-2">Resources</h1>
        <li>Blog</li>
        <li>Developers</li>
        <li>Support</li>
      </ul>
      <ul className="text-center text-GrayishViolet flex flex-col gap-y-1 mb-10 lg:mt-4">
        <h1 className="text-white text-xl mb-2">Company</h1>
        <li>About</li>
        <li>Our Team</li>
        <li>Careers</li>
        <li>Contact</li>
      </ul>
      <div className="flex items-center gap-x-5">
        <a href="">
          <img src={facebook} />
        </a>
        <a href="">
          <img src={twitter} />
        </a>
        <a href="">
          <img src={pintrest} />
        </a>
        <a href="">
          <img src={instagram} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
