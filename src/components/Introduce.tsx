import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useRecoilState } from "recoil";
import { refState } from "../atom";
function Introduce() {
  const [introRef, setIntroRef] = useRecoilState(refState);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  if (isInView && window.scrollY < 1000) {
    setIntroRef("true");
  } else {
    setIntroRef("false");
  }
  return (
    <>
      <motion.div
        initial={{ opacity: 0.3, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0.3 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        ref={ref}
        className="mt-1 h-[100dvh] hidden lg:flex justify-center items-center gap-14"
      >
        <div>
          <h1 className="text-4xl text-left">Welcome to 두빛나래!</h1>
          <h3 className="text-lg text-gray-600 text-left">
            #만렙길드 #친목길드 #매너길드
          </h3>
          <div className="p-5 flex flex-col justify-center items-start gap-2">
            <span className="flex justify-center items-center gap-3">
              <img src="https://res.cloudinary.com/dgmgeotyk/image/upload/v1705467843/Wings/w4tw9kj2gqkliovpvi7n.png" alt="" className="w-8 h-8" />
              <p>노블레스 포인트 49P</p>
            </span>
            <span className="flex justify-center items-center gap-3">
              <img src="https://res.cloudinary.com/dgmgeotyk/image/upload/v1705467843/Wings/crxzujkz6kpfjbezr0pg.png" alt="" className="w-8 h-8"/>
              <p>부캐길드 (노블레스 45P)</p>
            </span>
            <span className="flex justify-center items-center gap-3">
              <img src="https://res.cloudinary.com/dgmgeotyk/image/upload/v1705467843/Wings/pgebev6hj6e8amorrbtc.png" alt="" className="w-8 h-8" />
              <p>활발한 길드 내 보스 파티</p>
            </span>
            <span className="flex justify-center items-center gap-3">
              <img
                src="https://res.cloudinary.com/dgmgeotyk/image/upload/v1705467844/Wings/dvrz4f506ykve1vfaijs.png"
                alt=""
                className="w-8 h-8 border border-gray-600 rounded-[0.275rem]"
              />
              <p>시끌벅적한 단톡방 & 디코방</p>
            </span>
            <p className="text-xs text-gray-600 mt-4">
              2013년부터 운영중인 길드이며, <br />
              길드 컨텐츠에 대한 주간 보상 및 템셋팅 코칭도 해드립니다!
            </p>
          </div>
        </div>
        <img
          src="https://res.cloudinary.com/dgmgeotyk/image/upload/v1705467844/Wings/bfv8y7zswj3syemf0l0t.avif"
          alt=""
          className="rounded-xl shadow-xl w-[26rem] h-[21rem]"
        />
      </motion.div>
      <div className="mt-1 h-[80dvh] flex lg:hidden flex-col justify-center items-center gap-14">
        <div>
          <h1 className="text-2xl text-center">Welcome to 두빛나래!</h1>
          <h3 className="text-sm text-gray-600 text-center">
            #만렙길드 #친목길드 #매너길드
          </h3>
          <div className="p-5 flex flex-col justify-center items-start gap-2">
            <span className="flex justify-center items-center gap-3">
              <img src="https://res.cloudinary.com/dgmgeotyk/image/upload/v1705467843/Wings/w4tw9kj2gqkliovpvi7n.png" alt="" className="w-8 h-8" />
              <p>노블레스 포인트 49P</p>
            </span>
            <span className="flex justify-center items-center gap-3">
              <img src="https://res.cloudinary.com/dgmgeotyk/image/upload/v1705467843/Wings/crxzujkz6kpfjbezr0pg.png" alt="" className="w-8 h-8" />
              <p>부캐길드 (노블레스 45P)</p>
            </span>
            <span className="flex justify-center items-center gap-3">
              <img src="https://res.cloudinary.com/dgmgeotyk/image/upload/v1705467843/Wings/pgebev6hj6e8amorrbtc.png" alt="" className="w-8 h-8" />
              <p>활발한 길드 내 보스 파티</p>
            </span>
            <span className="flex justify-center items-center gap-3">
              <img
                src="https://res.cloudinary.com/dgmgeotyk/image/upload/v1705467844/Wings/dvrz4f506ykve1vfaijs.png"
                alt=""
                className="w-8 h-8 border border-gray-600 rounded-[0.275rem]"
              />
              <p>시끌벅적한 단톡방 & 디코방</p>
            </span>
            <p className="text-xs text-gray-600 mt-4">
              2013년부터 운영중인 길드이며, <br />
              길드 컨텐츠에 대한 주간 보상 및 템셋팅 코칭도 해드립니다!
            </p>
          </div>
        </div>
      </div>
      <div
        className="flex flex-col justify-center items-center py-3"
      >
        <div className="grid lg:grid-cols-6 grid-cols-1 lg:gap-7 gap-3 mt-5 lg:text-sm text-xs">
          <h1 className="lg:text-2xl text-lg lg:col-span-6">
            가입조건
          </h1>
          <div className="flex flex-col  items-center shadow-lg lg:p-10 lg:pb-5 p-3 pb-2 lg:gap-5 gap-3 bg-white rounded-xl lg:col-span-2">
            <div className="flex lg:justify-center justify-start items-center px-5 w-full gap-5">
              <span className="border-2 border-pink-700 lg:p-5 p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="rgb(190 24 93)"
                  className="lg:w-10 lg:h-10 w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                  />
                </svg>
              </span>
              <p className="text-pink-700">
                남성: 군필자 이상 <br />
                여성: 20세 이상
              </p>
            </div>
            <span className="rounded-full px-5 py-1 bg-pink-700 text-white">
              성인 ( 20세 이상 )
            </span>
          </div>
          <div className="flex flex-col  items-center shadow-lg lg:p-10 lg:pb-5 p-3 pb-2 lg:gap-5 gap-3 bg-white rounded-xl lg:col-span-2">
            <div className="flex lg:justify-center justify-start items-center px-5 w-full gap-5">
              <span className="border-2 border-green-500 lg:p-5 p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="rgb(34 197 94)"
                  className="lg:w-10 lg:h-10 w-6 h-6"
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
              <p className="text-green-500">
                부캐 X <br />
                2중 길드 X
              </p>
            </div>
            <span className="rounded-full px-5 py-1 bg-green-500 text-white">
              Lv.240 이상
            </span>
          </div>
          <div className="flex flex-col  items-center shadow-lg lg:p-10 lg:pb-5 p-3 pb-2 lg:gap-5 gap-3 bg-white rounded-xl lg:col-span-2">
            <div className="flex lg:justify-center justify-start items-center px-5 w-full gap-5">
              <span className="border-2 border-orange-500 lg:p-5 p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="rgb(249 115 22)"
                  className="lg:w-10 lg:h-10 w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
              </span>
              <p className="text-orange-500">
                게임 캐릭터 인증 <br />
                생년 인증
              </p>
            </div>
            <span className="rounded-full px-5 py-1 bg-orange-500 text-white">
              본인인증
            </span>
          </div>
          <div className="flex flex-col  items-center shadow-lg lg:p-10 lg:pb-5 p-3 pb-2 lg:gap-5 gap-3 bg-white rounded-xl lg:col-span-3">
            <div className="flex lg:justify-center justify-start items-center px-5 w-full gap-5">
              <span className="border-2 border-blue-500 lg:p-5 p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="rgb(59 130 246)"
                  className="lg:w-10 lg:h-10 w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5"
                  />
                </svg>
              </span>
              <p className="text-blue-500">
                샤레니안의 지하 수로 <br />
                플래그 레이스
              </p>
            </div>
            <span className="rounded-full px-5 py-1 bg-blue-500 text-white">
              길드 컨텐츠 필수 참여
            </span>
          </div>
          <div className="flex flex-col  items-center shadow-lg lg:p-10 lg:pb-5 p-3 pb-2 lg:gap-5 gap-3 bg-white rounded-xl lg:col-span-3">
            <div className="flex lg:justify-center justify-start items-center px-5 w-full gap-5">
              <span className="border-2 border-yellow-600 lg:p-5 p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="rgb(202 138 4)"
                  className="lg:w-10 lg:h-10 w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
                  />
                </svg>
              </span>
              <p className="text-yellow-600">
                오픈 카카오톡 <br/>
                "두빛나래 길드 공지방"
              </p>
            </div>
            <span className="rounded-full px-5 py-1 bg-yellow-600 text-white">
                길드 공지방 필수 참여
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Introduce;
