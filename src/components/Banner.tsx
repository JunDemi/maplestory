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
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 1)), url('https://res.cloudinary.com/dgmgeotyk/image/upload/v1705467844/Wings/rm2rvkfabuukt1zida0x.png')` }}>
        <div className='w-[80vw] flex flex-col lg:justify-start justify-center lg:items-start items-center'>
          <p className='lg:text-xl text-sm mb-3'>Open API</p>
          <p className='lg:text-5xl text-lg mb-10 lg:ml-10'>길드 공식 홈페이지</p>
        </div>
        <div className='flex justify-center items-center'>
          <Link to="https://open.kakao.com/o/gwtzR8N">
            <motion.div
            initial={{outline: "1px solid rgba(134,239,172,0.3)", outlineOffset: "0", backgroundColor: "rgba(134,239,172,0.3)"}}
            whileHover={{outline: "1px solid rgb(134,239,172)",outlineOffset: "60px", scale: 0.90, backgroundColor: "rgba(134,239,172,0.5)"}}
            transition={{duration: 0.25}}
            className='flex flex-col justify-center items-center lg:p-16 p-10 lg:gap-5 gap-3 aspect-square rounded-full'>
              <h2 className='lg:text-xl text-lg'>문의하기</h2>
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
