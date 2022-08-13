import { useState } from 'react';
import logo from '../../assets/images/logo.svg';
import Button from '../Ui/Button';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuOpenHandler = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <nav className="flex justify-between mb-20 gap-x-4">
      <ul className="flex items-center gap-x-6 text-GrayishViolet font-bold">
        <li>
          <img src={logo} />
        </li>
        <li className="hidden md:block hover:text-black transition-colors duration-300 cursor-pointer">
          Features
        </li>
        <li className="hidden md:block hover:text-black transition-colors duration-300 cursor-pointer">
          Pricing
        </li>
        <li className="hidden md:block hover:text-black transition-colors duration-300 cursor-pointer">
          Resources
        </li>
      </ul>

      <div className=" gap-x-5 hidden md:flex">
        <button className="text-GrayishViolet font-bold hover:text-black transition-colors">
          Login
        </button>
        <Button>Sign Up</Button>
      </div>

      <div
        onClick={menuOpenHandler}
        className="block cursor-pointer md:hidden text-GrayishViolet"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>

      {isOpen && (
        <ul className="flex flex-col gap-y-4 items-center rounded-xl w-1/2 absolute text-white h-1/2 top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 bg-DarkViolet">
          <li className="transition-colors duration-300 cursor-pointer mt-10">
            Features
          </li>
          <li className="transition-colors duration-300 cursor-pointer">
            Pricing
          </li>
          <li className="transition-colors duration-300 cursor-pointer">
            Resources
          </li>
          <hr className="border w-2/3 opacity-40 border-GrayishViolet" />
          <div className="flex flex-col gap-y-2 w-3/4">
            <button>Login</button>
            <Button>Sign up</Button>
          </div>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
