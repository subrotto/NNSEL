
import Image from 'next/image';
import Light4 from '../../../public/light4.svg'
import Link from 'next/link';

export const metadata = {
    title: 'Project',
    description: "Project ",
    keywords:['example1','example2','example3']
  };

const page = () => {
    return (
        <div style={{backgroundColor:'#1A1A1A'}} className="pt-32 relative">
             <section className='ml-16 md:ml-48 justify-around pb-16 md:pb-32'>
                                  
                                    <h2 className='text-white text-6xl'>Project Detail</h2>
                                    <p style={{color:'#E5E6EB'}} className='mt-4'>Details About The Project</p>
                                    <div className="hidden md:block md:absolute top-2 -left-2 z-0"><Light4></Light4></div>
                                  </section>
                                  <hr className='w-4/5 mx-auto' />
                                  <section className='py-32 '>
                                    <div className='mx-4 md:mx-0'>
                                    <Image className='mx-auto' src='/images/Projectdetails/img1.png' height={900} width={1020} alt='image1'></Image>
                                    </div>
                                    <div className='mt-32 mx-auto flex flex-col items-center '>
                    <div className='mx-auto flex flex-col items-start mx-8 md:mx-0'>
                    <p className='text-white text-4xl'>Project Story</p>
                    <p style={{color:'#E5E6EB'}} className='mt-8 text-sm'>The fact that photography has different meanings to different people is one of the many components <br /> of its appeal. Photography is such an important part of our life that it is now very difficult to imagine <br /> the world without it. <br /><br />
We cannot imagine a wedding without the opportunity to capture it on film, we would not be able to <br /> remember the growing up of children or the holidays if we did not have pictures.</p>
                    </div>
                                    </div>
                                  </section>
                                  <section>
                                    <div className='flex flex-col md:flex-row  gap-4 justify-evenly pt-16'>
                                                   
                                                    <div className='mx-4 md:mx-0'>
                                                        <Image src='/images/Projectdetails/img2.png' height={100} width={500} alt='img2'></Image>
                                                        
                                                    </div>
                                                    <div className='mx-4 md:mx-0'>
                                                        <Image src='/images/Projectdetails/img3.png' height={100} width={500} alt='img3'></Image>
                                                        
                                                    </div>
                                                </div>

                                                <div className='mt-32 mx-auto flex flex-col items-center '>
                    <div className='mx-auto flex flex-col items-start mx-8 md:mx-0'>
                    <p className='text-white text-4xl'>Day One</p>
                    <p style={{color:'#E5E6EB'}} className='mt-8 text-sm'>Everywhere we are haunted by photography in newspapers, magazines, advertisements on <br /> television on the Internet, but we still crave even more. <br /> <br />
And what helps to achieve a good result? We will look at these issues and some of the possibilities of <br />photography and explain that it is a combination of thought imagination, visual design, technical <br /> skills and organizational skills</p>
                    </div>
                                    </div>
                    <div className='flex justify-between'>
                    <div className="flex items-center justify-center mt-8 relative z-10 pb-8" >
      <button  className="py-4 px-8 rounded-full text-white  bg-transparent ">
        <Link href="/dashboard">
          <div className="flex items-center">
          <span className="ml-2">
              <Image src="/images/Arrow left.png" width={20} height={5} alt="Arrow" />
            </span>
            PREVIOUS WORK
            
          </div>
        </Link>
      </button>
    </div>
    <div className="flex items-center justify-center mt-8 relative z-10 pb-8" >
      <button  className="py-4 px-8 rounded-full text-white  bg-transparent ">
        <Link href="/dashboard">
          <div className="flex items-center">
            NEXT WORK
            <span className="ml-2">
              <Image src="/images/Arrow right.png" width={20} height={5} alt="Arrow Right" />
            </span>
          </div>
        </Link>
      </button>
    </div>
                    </div>
                                  </section>


                                  <section className='py-16'>
                                    <h2 className='text-white text-6xl text-center'>Other Projects</h2>
                                     <div className='grid grid-cols-2 gap-4 md:flex md:justify-evenly mt-16'>
                                                    <div>
                                                        <Image src='/images/Projectdetails/img4.png' height={100} width={300} alt='img4'></Image>
                                                        <div className='mt-4  flex flex-col items-center '>
                    <div className='mx-auto flex flex-col items-start'>
                    <p className='text-white text-xl'>Logo Project 1</p>
                    <p style={{color:'#E5E6EB'}} className=' text-sm'>Branding</p>
                    </div>
                                    </div>
                                                        
                                                    </div>
                                                    <div>
                                                        <Image src='/images/Projectdetails/img5.png' height={100} width={300} alt='img5'></Image>
                                                        <div className='mt-4 mx-auto flex flex-col items-center '>
                    <div className='mx-auto flex flex-col items-start'>
                    <p className='text-white text-xl'>Logo Project 2</p>
                    <p style={{color:'#E5E6EB'}} className=' text-sm'>Branding</p>
                    </div>
                                    </div>
                                                    </div>
                                                    <div>
                                                        <Image src='/images/Projectdetails/img6.png' height={100} width={300} alt='img6'></Image>
                                                        <div className='mt-4 mx-auto flex flex-col items-center '>
                    <div className='mx-auto flex flex-col items-start'>
                    <p className='text-white text-xl'>Logo Project 3</p>
                    <p style={{color:'#E5E6EB'}} className=' text-sm'>Branding</p>
                    </div>
                                    </div>
                                                    </div>
                                                </div>
                                  </section>
        </div>
    );
};

export default page;