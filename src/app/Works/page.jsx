
import Light4 from '../../../public/light4.svg'
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
    title: 'Work',
    description: "Work ",
    keywords:['example1','example2','example3']
  };

const page = () => {
    return (
        <div style={{backgroundColor:'#1A1A1A'}} className="pt-32 relative">
          <section className='ml-16 md:ml-48 justify-around pb-16 md:pb-32'>
          
            <h2 className='text-white text-6xl'>My Works</h2>
            <p style={{color:'#E5E6EB'}} className='mt-4'>Showcase About Works</p>
            <div className="hidden md:block md:absolute top-2 -left-2 z-0"><Light4></Light4></div>
          </section>
          <hr className='w-4/5 mx-auto' />
          <section className='py-32'>
            <div className='flex flex-col items-center gap-4 md:flex-row md:justify-evenly'>
                <div>
                    <Image src='/images/work1.png' height={100} width={300} alt='img1'></Image>
                    <h3 className='mt-4 text-sm text-white text-center'>BLUE</h3>
                    <p className='text-xl text-white text-center'>Orvillebury</p>
                </div>
                <div>
                    <Image src='/images/work2.png' height={100} width={300} alt='img2'></Image>
                    <h3 className='mt-4 text-sm text-white text-center'>GREEN</h3>
                    <p className='text-xl text-white text-center'>West Lavada</p>
                </div>
                <div>
                    <Image src='/images/work3.png' height={100} width={300} alt='img3'></Image>
                    <h3 className='mt-4 text-sm text-white text-center'>AQUA</h3>
                    <p className='text-xl text-white text-center'>Rempelshire</p>
                </div>
            </div>
            <div className='flex flex-col items-center gap-8 md:flex-row md:justify-evenly mt-16 mx-4 md:mx-0'>
               
                <div>
                    <Image src='/images/work4.png' height={100} width={500} alt='img4'></Image>
                    <h3 className='mt-4 text-sm text-white text-center'>LIME</h3>
                    <p className='text-xl text-white text-center'>Delfinaland</p>
                </div>
                <div>
                    <Image src='/images/work5.png' height={100} width={500} alt='img5'></Image>
                    <h3 className='mt-4 text-sm text-white text-center'>FUCHSIA</h3>
                    <p className='text-xl text-white text-center'>Buckridgeburgh</p>
                </div>
            </div>
            <div className='mt-16 flex flex-col items-center gap-4 md:flex-row md:justify-evenly'>
                <div>
                    <Image src='/images/work6.png' height={100} width={300} alt='img6'></Image>
                    <h3 className='mt-4 text-sm text-white text-center'>BLACK</h3>
                    <p className='text-xl text-white text-center'>Pfefferstad</p>
                </div>
                <div>
                    <Image src='/images/work7.png' height={100} width={300} alt='img7'></Image>
                    <h3 className='mt-4 text-sm text-white text-center'>PURPLE</h3>
                    <p className='text-xl text-white text-center'>South Adrienne</p>
                </div>
                <div>
                    <Image src='/images/work8.png' height={100} width={300} alt='img8'></Image>
                    <h3 className='mt-4 text-sm text-white text-center'>MAROON</h3>
                    <p className='text-xl text-white text-center'>Lake Trevor</p>
                </div>
            </div>
            <div className="flex items-center justify-center mt-16 relative z-10 pb-8" >
      <button style={{color:'#FF9143'}}  className="py-4 px-8 rounded-full  border  bg-transparent border-orange-400">
        <Link href="/dashboard">
          <div className="flex items-center">
            LOAD MORE WORKS
          
          </div>
        </Link>
      </button>
    </div>
          </section>
        </div>
    );
};

export default page;