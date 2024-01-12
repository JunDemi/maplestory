import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll } from "framer-motion";
import { useRecoilState } from "recoil";
import { refState } from "../atom";

function FadeFixScroll() {
  const [introChange, set_introChange] = useState(false);
  const { scrollY } = useScroll();

  //1400스크롤까지 내려가면 화면 전환
  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.get() > 2000) {
        set_introChange(true);
      } else {
        set_introChange(false);
      }
    });
  }, [scrollY, introChange]);
  return (
    <>
      <div className="hidden lg:flex justify-center items-start w-full h-[300dvh] pt-28">
        <div className="sticky top-32 w-full flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={!introChange ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute top-0 flex flex-col justify-center items-start"
          >
            <h1 className="text-2xl">가입조건</h1>
            <div className="grid grid-cols-6 gap-7 mt-5">
              <div className="flex justify-start items-center gap-10 shadow-lg p-10 bg-white rounded-xl col-span-2">
                <span className="border-2 border-pink-700 p-5 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="rgb(190 24 93)"
                    className="w-10 h-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                    />
                  </svg>
                </span>
                <p className="text-sm text-pink-700">
                  성인 (20세 이상) <br />
                  <br /> 남성은 군필
                </p>
              </div>
              <div className="flex justify-start items-center gap-10 shadow-lg p-10 bg-white rounded-xl col-span-2">
                <span className="border-2 border-green-500 p-5 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="rgb(34 197 94)"
                    className="w-10 h-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 18.75 7.5-7.5 7.5 7.5"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 7.5-7.5 7.5 7.5"
                    />
                  </svg>
                </span>
                <p className="text-sm text-green-700">
                  Lv.240 이상 <br />
                  <br /> 부캐 X, 이중길드 X
                </p>
              </div>
              <div className="flex justify-start items-center gap-10 shadow-lg p-10 bg-white rounded-xl col-span-2">
                <span className="border-2 border-orange-500 p-5 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="rgb(249 115 22)"
                    className="w-10 h-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"
                    />
                  </svg>
                </span>
                <p className="text-sm text-orange-700">
                  본인 인증 <br />
                  <br /> 생년 & 캐릭터
                </p>
              </div>
              <div className="flex justify-start items-center gap-10 shadow-lg p-10 bg-white rounded-xl col-span-3">
                <span className="border-2 border-blue-500 p-5 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="rgb(59 130 246)"
                    className="w-10 h-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                    />
                  </svg>
                </span>
                <p className="text-sm text-blue-700">
                  샤레니안의 지하 수로 & 플레그 레이스 <br />
                  <br /> 길드 컨텐츠 필수 참여
                </p>
              </div>
              <div className="flex justify-start items-center gap-10 shadow-lg p-10 bg-white rounded-xl col-span-3">
                <span className="border-2 border-yellow-500 p-5 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="rgb(234 179 8)"
                    className="w-10 h-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                    />
                  </svg>
                </span>
                <p className="text-sm text-yellow-700">
                  길드 공지 오픈 카카오톡방 <br />
                  <br /> 필수 참여
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={introChange ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute top-0"
          >
            <h1>인증절차</h1>
            <img
              src="/purpleSpace.png"
              alt=""
              className="w-[800px] h-[500px]"
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}
export default FadeFixScroll;
