import React from 'react';
import Logo from '../../public/Logo.svg'
import Fb from '../../public/fb.svg'
import Twitter from '../../public/twitter.svg'
import Insta from '../../public/insta.svg'
import Link from 'next/link';
const Footer = () => {
    return (
        <div style={{backgroundColor:'#0B0A0F'}} className=' p-4'>
            <h2 style={{color:'#FF9143'}} className='p-2 text-center mt-6 text-xl'>Get in Touch With Us</h2>
            <h1 className='text-white text-4xl text-center mb-24'> <u>info@aaronn.com</u> </h1>
            <div className='md:flex justify-around mb-8'>
                <Link  href='/'><Logo></Logo></Link>
                <div className='text-white mt-4 md:mt-0'>
                    <h2>Street Avenue 21, CA</h2>
                    <h2>0-8-00-888- <br />000</h2>
                </div>
                <div className='text-white pt-4 md:pt-0'>
                    <h2>+9 0283353</h2>
                    <div className='flex gap-2 mt-4 md:mt-0'>
                        <a href=""><Fb></Fb></a>
                        <a href=""><Twitter></Twitter></a>
                        <a href=""><Insta></Insta></a>
                    </div>
                </div>
            </div>
            <hr />
            <h2 className='text-white mt-4 text-center'>© 2023. Ideapeel. All rights reserved. </h2>
        </div>
    );
};

export default Footer;