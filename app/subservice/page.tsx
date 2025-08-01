import Footer2 from '@/components/Footer2'
import Navbar2 from '@/components/Navbar2'
import Topnav from '@/components/Topnav'
import React from 'react'
import demo from "@/public/images/demo2.png"
import demo3 from "@/public/images/demo3.png"
import Image from 'next/image'


export default function Hello() {
    return (
        <>
            <Topnav />
            <Navbar2 />

            {/* Hero Section  */}
            <section
                className="bg-cover bg-no-repeat h-[70vh]"
                style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${demo.src})`, }}>
                <div className="container flex flex-col justify-center items-center h-full">
                    <p className='text-white text-[30px] lg:text-[40px] font-bold'>Custom Software Development Solutions</p>
                </div>
            </section>

            {/* Title  */}

            <div className="container">
                <div className=" my-[60px]">
                    <p className='text-[40px] lg:text-[40px] w-full lg:w-[65%]'>Tailored technology that suits your unique business needs</p>
                </div>
                <Image src={demo3} className='w-full' alt='img' />
                <div className='my-[60px] w-full lg:w-[65%]'>
                    <p >At DOOR3, we design and build custom software that solves complex challenges, supports growth, and enhances digital experiences. Whether you’re a global enterprise or a growing startup, we bring cross-disciplinary expertise to deliver scalable, secure, and user-centric solutions tailored to your organization.</p>
                    <br />
                    <p>We don’t believe in off-the-shelf thinking. Every custom software engagement begins with understanding your unique needs—from operational requirements to customer expectations—so we can build a product that drives real business value.</p>
                </div>

            </div>



            <Footer2 />
        </>
    );
}
