import Image from "next/image";
import Link from "next/link";
import Arrow from '../../public/rightarrow.svg'
import Light from '../../public/light.svg'
import Light3 from '../../public/light3.svg'
import Line from '../../public/line.svg'

export default function Home() {

  

  return (
    <div style={{backgroundColor:'#1A1A1A'}} className="pt-32 relative">
      <section className="pb-32">
      <h2 className="text-center text-white text-6xl">Adaptive Logo Design <br /> for Your Brand</h2>
     
     <div className="hidden md:block md:absolute left-96 -top-32 z-0"><Light></Light></div>
      
      
      <div className="flex items-center justify-center mt-8 relative z-10" >
      <button style={{ backgroundColor: '#FF9143' }} className="py-4 px-8 rounded-full text-white">
        <Link href="/Works">
          <div className="flex items-center">
            Explore Works
            <span className="ml-2">
              <Image src="/images/icon.png" width={20} height={5} alt="Arrow" />
            </span>
          </div>
        </Link>
      </button>
    </div>
      
     
      
      </section>
      <section className="md:flex pb-64 justify-around items-center ">
        <div className="flex flex-col items-center">
      <div>
      <h2 className="text-white text-6xl pb-4">Let’s get know <br /> about me closer</h2>
      <h2 style={{color:'#E5E6EB'}} className="text-white pb-16">Aaronn is a New York-based visual designer focusing on branding <br /> and visual identity. Her portfolio showcases her wide range of <br /> work, spanning books, posters and web design.</h2>
      <Link href='/About' style={{backgroundColor:'#FF9143'}} className="px-3 md:px-6 py-4 rounded-full relative z-10 "><button className="text-white">Discover More About Me</button></Link>
      <div className="hidden md:block md:absolute top-64 -left-64 z-0"><Light></Light></div>
      </div>
        </div>
        <div>
        <Image src='/images/Rectangle1.png' className="hidden lg:block lg:absolute md:right-40 z-0" height={50} width={80} alt="Rectangle1"></Image>
        
      
      <Image src='/images/Rectangle2.png' className="hidden lg:block lg:absolute z-0 top-110" height={50} width={40} alt="Rectangle2"></Image>
      <Image className="mx-auto py-16 md:py-0" src='/images/homepage/Rectangle 361.png' height={400} width={400} alt="Person"></Image>
      
        </div>
        
      </section>
      {/* <div className="absolute left-96  z-0"><Light2></Light2></div> */}
      <section className="mx-4 md:mx-0">
      
        <h2 className="text-6xl text-center text-white">My Projects HighLight</h2>
        
        <div className="flex items-center justify-center mt-8 relative z-10 pb-8" >
      <button  className="py-4 px-8 rounded-full text-white border border-2 bg-transparent border-orange-400">
        <Link href="/Projectdetails">
          <div className="flex items-center">
            Explore More
            <span className="ml-2">
              <Image src="/images/icon.png" width={20} height={5} alt="Arrow" />
            </span>
          </div>
        </Link>
      </button>
    </div>

      <div className="">
      <div className="md:flex md:justify-center items-center pb-16">
      <div className="mb-8 md:mb-0">
      <Image className="mx-auto py-4 md:py-16 md:py-0" src='/images/homepage/img.png' height={400} width={500} alt="Image1"></Image>
      <div className="flex items-center text-white pb-4 mt-4 text-2xl">
            Brand Journey Improvements
            <span className="ml-8">
              <Image src="/images/Line 3.png" width={30} height={5} alt="Arrow" />
            </span>
          </div>
          <div className="">
            <h2 style={{color:'#E5E6EB'}} className="text-sm">Client: <span className="text-white ml-4 ">OrganC</span></h2>
            <h2 className="text-sm" style={{color:'#E5E6EB'}}>Work: <span className="text-white ml-4">Branding  Logo Design</span></h2>
          </div>
      </div>
      <div className="md:ml-16">
      <Image className="mx-auto py-4 md:py-16 md:py-0" src='/images/homepage/img2.png' height={400} width={500} alt="Image2"></Image>
      <div className="flex items-center text-white pb-4 mt-4 text-2xl">
            Brand Grouping
            <span className="ml-8">
              <Image src="/images/Line 3.png" width={30} height={5} alt="Arrow" />
            </span>
          </div>
          <div>
            <h2 className="text-sm" style={{color:'#E5E6EB'}}>Client: <span className="text-white ml-4">FR</span></h2>
            <h2 className="text-sm" style={{color:'#E5E6EB'}}>Work: <span className="text-white ml-4">Branding  Logo Design</span></h2>
          </div>
      </div>
      </div>
      <div className="md:flex justify-center">
      <div>
      <Image className="mx-auto py-4 md:py-16 md:py-0" src='/images/homepage/img3.png' height={400} width={500} alt="Image3"></Image>
      <div className="flex items-center text-white pb-4 mt-4 text-2xl">
            NFT Glimps
            <span className="ml-8">
              <Image src="/images/Line 3.png" width={30} height={5} alt="Arrow" />
            </span>
          </div>
          <div className="pb-16 md:pb-0">
            <h2 className="text-sm" style={{color:'#E5E6EB'}}>Client: <span className="text-white ml-4">Rumanda</span></h2>
            <h2 className="text-sm" style={{color:'#E5E6EB'}}>Work: <span className="text-white ml-4">NFT Design</span></h2>
          </div>
      </div>
      <div className="md:ml-16">
      <Image className="mx-auto py-4 md:py-16 md:py-0" src='/images/homepage/img4.png' height={400} width={500} alt="Image4"></Image>
      <div className="flex items-center text-white pb-4 mt-4 text-2xl">
            Brand Suggestions
            <span className="ml-8">
              <Image src="/images/Line 3.png" width={30} height={5} alt="Arrow" />
            </span>
          </div>
          <div>
            <h2 className="text-sm" style={{color:'#E5E6EB'}}>Client: <span className="text-white ml-4">T3d</span></h2>
            <h2 className="text-sm" style={{color:'#E5E6EB'}}>Work: <span className="text-white ml-4">NFT logo</span></h2>
          </div>
      </div>
      </div>
      </div>

      </section>
      <section className="flex flex-col items-center md:flex-row md:justify-around  text-white py-16 md:py-64">
        <div >
        <div className="hidden md:block md:absolute -left-4 -bottom-1 z-0"><Light3></Light3></div>
      <div className="mx-4">
      
      <h2 className="text-6xl pb-8 md:pb-0">Testimonial</h2>
      <p style={{color:'#E5E6EB'}} className="md:my-4 text-sm">“Aaronn was fantastic to work with from start to finish. We were looking for a simple, stand-out logo and <br />he delivered. I tried designing the logo myself thinking I wouldn’t need to pay the money for a <br /> professional graphic designer but I was very wrong. Working with Aaronn was worth every penny and was <br /> surprisingly affordable! I remember him saying simplicity is key to a successful logo and boy he was right. <br /> I can’t thank Aaronn enough for his effort and professionalism. I would recommend him to anyone looking <br /> for a design!”</p>
      <h2 className="text-2xl">-Martin Lee</h2>
      
      </div>
        </div>
        <div className="py-32 md:py-0">
        <Image src='/images/homepage/umbrella.png' alt="Arrow Sign" height={50} width={100}></Image>
        </div>
      </section>
    </div>
  );
} 