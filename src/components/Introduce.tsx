import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useRecoilState } from "recoil";
import { refState } from "../atom";
function Introduce() {
  const [introRef, setIntroRef] = useRecoilState(refState);
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});
  if (isInView && window.scrollY < 1000) {
    setIntroRef("true");
  } else {
    setIntroRef("false");
  }
  return (
    <motion.div
      initial={{ opacity: 0.3, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0} : { opacity: 0.3 }}
      transition={{ delay: 0.5, duration: 0.7 }}
      ref={ref}
      className="mt-1 h-[100dvh] flex lg:flex-row flex-col justify-center items-center gap-14"
    >
      <div>
        <h1 className="lg:text-4xl text-2xl lg:text-left text-center">Welcome to 두빛나래!</h1>
        <h3 className="lg:text-lg text-sm text-gray-600 lg:text-left text-center">
          #만렙길드 #친목길드 #매너길드
        </h3>
        <div className="p-5 flex flex-col justify-center items-start gap-2">
          <span className="flex justify-center items-center gap-3">
            <img src="/intro1.png" alt="" className="w-8 h-8" />
            <p>노블레스 포인트 49P</p>
          </span>
          <span className="flex justify-center items-center gap-3">
            <img src="/intro2.png" alt="" className="w-8 h-8" />
            <p>부캐길드 (노블레스 45P)</p>
          </span>
          <span className="flex justify-center items-center gap-3">
            <img src="/intro3.png" alt="" className="w-8 h-8" />
            <p>활발한 길드 내 보스 파티</p>
          </span>
          <span className="flex justify-center items-center gap-3">
            <img
              src="/intro4.png"
              alt=""
              className="w-8 h-8 border border-gray-600 rounded-[0.275rem]"
            />
            <p>시끌벅적한 단톡방 & 디코방</p>
          </span>
          <p className="text-xs text-gray-600 mt-4">2013년부터 운영중인 길드이며, <br/>길드 컨텐츠에 대한 주간 보상 및 템셋팅 코칭도 해드립니다!</p>
        </div>
      </div>
      <img
        src="/purpleSpace.png"
        alt=""
        className="hidden lg:block rounded-xl shadow-xl w-[26rem] h-[21rem]"
      />
    </motion.div>
  );
}

export default Introduce;
