'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '../../public/Logo.svg';
import React, { useState } from 'react';

const Navbar = () => {
  const pathName = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const routes = [
    { title: 'Home', path: '/' },
    { title: 'About Me', path: '/About' },
    { title: 'My Works', path: '/Works' },
    { title: 'Contact', path: '/Contact' },
  ];

  return (
    <div
      style={{ backgroundColor: '#1A1A1A', color: '#E5E6EB' }}
      className="p-6 bg-transparent relative z-10"
    >
      <nav className="flex justify-around items-center">
        
        <Link href={'/'}><Logo></Logo></Link>

       
        <button
          className="block md:hidden focus:outline-none"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>

        
        <ul
          className={`absolute md:relative top-20 left-0 md:top-0 md:left-0 w-full md:w-auto bg-[#1A1A1A] md:bg-transparent flex flex-col md:flex-row items-center transition-all duration-300 ease-in-out ${
            menuOpen ? 'block' : 'hidden md:flex'
          }`}
        >
          {routes.map((route) => (
            <li key={route.path} className="w-full md:w-auto text-center">
              <Link href={route.path}>
                <button
                  className={`block w-full px-6 py-4 md:inline-block md:w-auto md:py-2 hover:border hover:border-white hover:rounded-full text-xs hover:text-white hover:bg-black ${
                    pathName === route.path ? 'text-white font-bold' : ''
                  }`}
                >
                  {route.title}
                </button>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
