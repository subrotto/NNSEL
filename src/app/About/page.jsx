
import Light4 from '../../../public/light4.svg'
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
    title: 'About',
    description: "About ",
    keywords:['example1','example2','example3']
  };

const page = () => {
    return (
        <div style={{backgroundColor:'#1A1A1A'}} className="pt-32 relative ">
             <section className='ml-8 md:ml-48 justify-around pb-16 md:pb-32'>
                      
                        <h2 className='text-white text-6xl'>About Me</h2>
                        <p style={{color:'#E5E6EB'}} className='mt-4'>Little Brief About Myself</p>
                        <div className="hidden md:block md:absolute top-2 -left-2 z-0"><Light4></Light4></div>
                      </section>
                      <hr className='w-4/5 mx-auto' />
                      <section className='py-16 md:py-32 md:flex justify-evenly'>
                        <div>
            <h2 className='text-white text-6xl text-center md:text-left'>My mission <br /> is to make <br /> design <br />easier.</h2>
                        </div>
                        <div>
                        <p style={{color:'#E5E6EB'}} className='text-xl mt-16 md:mt-0 text-center md:text-left'>Create custom Designs with AARONN that converts <br /> more visitors than any website. With lots of unique <br /> design, you can easily select a logo without hassle. <br /> Create custom landing logos with AARONN that <br /> converts more visitors than any website. With lots <br /> of revisions, you can easily build a logo without <br /> problem.</p>
                        </div>
                      </section>
                      <section>
                        <div className='md:flex gap-8 justify-center mt-16'>
                                       
                                        <div>
                                            <Image className='mx-auto my-4 md:my-0' src='/images/About1.png' height={400} width={300} alt='img1'></Image>
                                            
                                        </div>
                                        <div className='mx-4 md:mx-0'>
                                            <Image className='mt-16 md:mt-0 ' src='/images/About2.png' height={500} width={625} alt='img2'></Image>
                                            
                                        </div>
                                    </div>
                      </section>
                      <section className='py-16 md:py-32'>
                        <h2 className='text-white  ml-32 pb-8 text-3xl'>Follow me on:</h2>
                        <div className=" flex justify-around " style={{color:'#E5E6EB'}}>
  <Link href=''><div>DRIBBLE</div></Link>
  <Link  href=''><div>TWITTER</div></Link>
  <Link href=''><div>FACEBOOK</div></Link>
 <Link href=''> <div>INSTAGRAM</div></Link>
</div>
                      </section>
        </div>
    );
};

export default page;