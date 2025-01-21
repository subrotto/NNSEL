'use client'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '../../public/Logo.svg'
import React from 'react';

const Navbar = () => {
    const pathName=usePathname();

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
  className="p-6 bg-transparent relative z-10"
>
  <nav className="flex items-center justify-between">
    
    <Link href="/">
      <Logo />
    </Link>

    
    <div className="md:hidden">
      <button
        id="menu-toggle"
        className="focus:outline-none text-white"
        onClick={() =>
          document.getElementById('mobile-menu').classList.toggle('hidden')
        }
      >
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
    </div>

    
    <ul
      id="mobile-menu"
      className="hidden absolute top-16 right-6 bg-[#1A1A1A] rounded-lg   p-4 md:static md:flex flex-col md:flex-row md:items-center md:space-x-6 space-y-4 md:space-y-0"
    >
      {routes?.map((route) => (
        <li key={route.path}>
          <Link href={route.path}>
            <button className="px-6 py-2 hover:border hover:border-white hover:rounded-full text-xs hover:text-white hover:bg-black">
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