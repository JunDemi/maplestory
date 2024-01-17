import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import { Link } from "react-router-dom";

function Ending() {
  const ending = useRef(null);
  const endingInview = useInView(ending);
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-32 bg-white h-[80dvh] relative lg:gap-16 gap-10" ref={ending}>
        <motion.h1 
        initial={{opacity: 0, y: 20}}
        animate={endingInview ? {opacity: 1, y: 0} : {opacity: 0}}
        transition={{duration: 0.8, delay: 0.3}}
        className="lg:text-4xl text-xl text-center">저희 두빛나래 길드와 함께<br/> 성장해 나가실 길드원을 모집합니다!</motion.h1>
        <img src="https://res.cloudinary.com/dgmgeotyk/image/upload/v1697623233/competition-uploads/vnqzfrwlegxadvmpu3uf.jpg" alt="" className="lg:w-24 w-16 rounded-lg"/>
        <Link to="https://open.kakao.com/o/gwtzR8N" target="_blank">
          <span className="bg-gray-800 text-white px-10 py-4 rounded-full hover:bg-gray-600 transition lg:text-base text-sm">문의하기</span>
        </Link>
      </div>
    </>
  );
}

export default Ending;
