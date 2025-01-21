'use client'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '../../public/Logo.svg'
import React, { useState } from 'react';

const Navbar = () => {
    const pathName=usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
const routes=[
  {
    title:'Home',
    path:'/'
  },
  {
    title:'About Me',
    path:'/About'
  },
  {
    title:'My Works',
    path:'/Works'
  },
  {
    title:'Contact',
    path:'/Contact'
  }
]






return (
  <div
    style={{ backgroundColor: '#1A1A1A', color: '#E5E6EB' }}
    className="p-6 bg-transparent relative z-20 "
  >
   
    <nav className="flex justify-around items-center">
     
      <Link href="/">
        <Logo />
      </Link>

      
      <div
        className="lg:hidden cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6h16.5M3.75 12h16.5m-16.5 6h16.5"
          />
        </svg>
      </div>

     
      <ul className="hidden lg:flex">
        {routes?.map((route) => (
          <Link
            className="mr-8"
            href={route.path}
            key={route.path}
          >
            <button className="px-6 py-2 hover:border hover:border-white hover:border-2 hover:rounded-full text-xs hover:text-white hover:bg-black">
              {route.title}
            </button>
          </Link>
        ))}
      </ul>
    </nav>

    
    {isMenuOpen && (
      <div
        className="absolute top-0 left-0 w-full h-screen bg-black bg-opacity-90 z-20 flex flex-col items-center justify-center text-center"
      >
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-4 right-4 text-white text-2xl"
        >
          &times;
        </button>

        <ul className="flex flex-col space-y-6">
          {routes?.map((route) => (
            <Link
              href={route.path}
              key={route.path}
              onClick={() => setIsMenuOpen(false)}
            >
              <button className="px-6 py-2 hover:border hover:border-white hover:border-2 hover:rounded-full text-xl text-white">
                {route.title}
              </button>
            </Link>
          ))}
        </ul>
      </div>
    )}
  </div>
);
};

export default Navbar;