import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useRecoilState } from 'recoil';
import { refState } from '../atom';

const scrollGIF = '/Scroll-Down-white.gif';

function Banner() {
  const [introRef] = useRecoilState(refState);
  const containerRef = useRef<any | undefined>(0);
    if (introRef === "true") {
      const currentScroll = containerRef.current.scrollTop;
      window.scrollTo({
        top: currentScroll + window.innerHeight,
        behavior: "smooth",
      });
    }
  return (
    <>
      <div
        ref={containerRef}
        className='bg-cover bg-fixed w-full h-[100dvh] flex flex-col justify-center items-center text-white gap-10 relative'
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 1)), url('/bgImage.png')` }}>
        <div className='w-[80vw] flex flex-col lg:justify-start justify-center lg:items-start items-center'>
          <p className='lg:text-xl text-sm mb-3'>Open API</p>
          <p className='lg:text-5xl text-lg mb-10 lg:ml-10'>길드 공식 홈페이지</p>
        </div>
        <div className='flex justify-center items-center lg:gap-40 gap-10'>
          <Link to="/">
            <motion.div 
            initial={{
              color: "rgb(134,239,172)"
            }}
            whileHover={{
              y: -5,
              backgroundColor: "rgba(134,239,172,0.1)",
            }}
            className='border border-green-300 flex flex-col justify-center items-center lg:px-24 lg:py-10 px-14 py-5 lg:gap-5 gap-3'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="0.5" stroke="rgb(134,239,172)" className="lg:w-24 lg:h-24 w-12 h-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
              <h2 className='lg:text-2xl text-lg'>가입</h2>
            </motion.div>
          </Link>
          <Link to="/">
            <motion.div 
             initial={{
              color: "rgb(147,197,253)"
            }}
            whileHover={{
              y: -5,
              backgroundColor: "rgba(147,197,253,0.1)",
            }}
            className='border border-blue-300 flex flex-col justify-center items-center lg:px-24 lg:py-10 px-14 py-5 lg:gap-5 gap-3'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="0.5" stroke="rgb(147,197,253)" className="lg:w-24 lg:h-24 w-12 h-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
              </svg>

              <h2 className='lg:text-2xl text-lg text-blue-300'>문의</h2>
            </motion.div>
          </Link>
        </div>
        <div className='hidden lg:flex flex-col justify-center items-center gap-1 absolute bottom-0'>
          <h2 className='font-thin text-sm'>scroll</h2>
          <img src={scrollGIF} alt="" className='lg:w-9 w-5' />
        </div>
      </div>

    </>

  );
}

export default Banner;
