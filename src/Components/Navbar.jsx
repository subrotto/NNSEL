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
        <div style={{backgroundColor:'#1A1A1A',color:'#E5E6EB'}} className='p-6   bg-transparent relative z-10'>
             <nav className='md:flex justify-around '>
          <Link href='/'><Logo></Logo></Link>
          <ul className='mt-8 md:mt-0'>
            {routes?.map(route=><Link className={`md:mr-8 `} href={route.path} key={route.path}> <button className='px-6 py-2 hover:border hover:border-white hover:border-2 hover:rounded-full  text-xs hover:text-white hover:bg-black'>{route.title}</button> </Link>)}
            
          </ul>
          
        </nav>
        </div>
    );
};

export default Navbar;