import React from 'react';
import logo from '../../assets/images/logo.svg';
const Navbar = () => {
  return (
    <nav className="flex justify-between">
      <ul className="flex items-center gap-x-6 text-GrayishViolet font-bold">
        <li>
          <img src={logo} />
        </li>
        <li className="hover:text-black transition-colors cursor-pointer">
          Features
        </li>
        <li className="hover:text-black transition-colors cursor-pointer">
          Pricing
        </li>
        <li className="hover:text-black transition-colors cursor-pointer">
          Resources
        </li>
      </ul>
      <div className="flex gap-x-5 ">
        <button className="text-GrayishViolet font-bold hover:text-black transition-colors">
          Login
        </button>
        <button className="bg-Cyan text-white rounded-full px-6 py-2">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
