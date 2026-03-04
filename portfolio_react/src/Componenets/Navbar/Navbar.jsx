import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-slate-900 text-white px-8 md:px-20 py-5 fixed w-full z-50">
      <div className="flex justify-between items-center">

        {/* Logo */}
        <a href="#home" className="text-2xl font-bold text-cyan-400">
          Portfolio
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg">
          <li>
            <a href="#about" className="hover:text-pink-400">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-purple-400">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-green-400">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-yellow-400">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Button */}
        <div
          className="md:hidden text-3xl cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="flex flex-col items-center mt-6 space-y-6 text-lg md:hidden">
          <li>
            <a href="#about" onClick={() => setOpen(false)}>
              About
            </a>
          </li>
          <li>
            <a href="#skills" onClick={() => setOpen(false)}>
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => setOpen(false)}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setOpen(false)}>
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;