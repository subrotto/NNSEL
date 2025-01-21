

import Form from '@/Components/Form';
import Light4 from '../../../public/light4.svg'
import Image from 'next/image';

export const metadata = {
    title: 'Contact',
    description: "Contact ",
    keywords:['example1','example2','example3']
  };

const page = () => {



    return (
        <div style={{backgroundColor:'#1A1A1A'}} className="pt-32 relative">
            <section className='md:ml-48 pb-16 md:pb-32'>
                                  
                                    <h2 className='text-white text-6xl ml-16 md:ml-0'>Contact Me</h2>
                                    <p style={{color:'#E5E6EB'}} className='mt-4 ml-16 md:ml-0'>For Any Project Knock Us</p>
                                    <div className="hidden md:block md:absolute top-2 -left-2 z-0"><Light4></Light4></div>
                                  </section>
                                  <hr className='w-4/5 mx-auto' />
                                  <section className='py-32 md:flex justify-evenly gap-4'>
                                    <div className='my-16 md:my-0'>
                                    <h2 className='text-white text-6xl ml-4 md:ml-0'>Get in <br /> Touch With <br /> Us</h2>
                                    </div>
                                    <div className='text-white'>
                                        
                                        
                                        <Form></Form>
                                       
                                    </div>
                                  </section>
                                  <section className='mx-4 md:mx-0'>
                                    
                                        <Image className='mx-auto' src='/images/contact1.png' height={900} width={1020} alt='image'></Image>
                                    
                                  </section>
                                  <section className='py-16 md:py-32 flex flex-col items-center md:flex-row md:justify-center gap-8 md:gap-32 text-white'>
                                    <div >
                                        <h2>Street Avenue 21, CA</h2>
                                    </div>
                                    <div>
                                    <h2>+9 0283353</h2>
                                    </div>
                                    <div>
                                    <h2><u>info@aaronn.com</u></h2>
                                    </div>
                                  </section>
        </div>
    );
};

export default page;