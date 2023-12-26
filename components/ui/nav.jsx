"use client";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = (e) => {
    e.stopPropagation(); 
    setIsOpen(!isOpen);
  };




  return (
    <nav className="bg-[#2A2A2A] text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="text-xl font-bold text-[#FF7A00] ">Web</div>
          <div className="text-xl font-bold">Chips</div>

        </div>
        <div className="hidden md:block text-xl">
          <ul className="flex gap-8">
            <li>
              <Link href="/" className="hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gray-300">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-gray-300">
                Services
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="hover:text-gray-300">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-300">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:hidden">
          <button
            id="menu-icon"
            className="focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        id="menu-list"
        className={`bg-[#2A2A2A] text-white md:hidden ${
          isOpen ? "block" : "hidden"
        } transition duration-300 ease-in-out `}
        ref={menuRef}
      >
        <ul className="flex flex-col gap-2 p-4">
          <li>
            <Link href="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-300">
              About
            </Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-gray-300">
              Services
            </Link>
          </li>
          <li>
            <Link href="/portfolio" className="hover:text-gray-300">
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-300">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
