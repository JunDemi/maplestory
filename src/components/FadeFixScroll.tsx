import React, { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";

function FadeFixScroll() {
  const [introChange, set_introChange] = useState(false);
  const { scrollY } = useScroll();
  //2800스크롤까지 내려가면 화면 전환
  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.get() > 2800) {
        set_introChange(true);
      } else {
        set_introChange(false);
      }
    });
  }, [scrollY, introChange]);
  return (
    <>
      <div className="hidden lg:flex justify-center items-start w-full h-[350dvh] pt-28">
        <div 
        className="sticky top-32 w-full flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={!introChange ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center items-start"
          >
            <h1 className="text-2xl">본인인증 1</h1>
            <h2 className="text-base text-gray-600">
              메이플 핸즈 혹은 캐릭터 선택창 인증 (택 1)
            </h2>
            <div className="flex justify-center items-center gap-5 my-5">
              <img src="https://res.cloudinary.com/dgmgeotyk/image/upload/v1705467845/Wings/fgddiefytfpcjjlpi67j.png" alt="" className="h-[22rem]" />
              <img src="https://res.cloudinary.com/dgmgeotyk/image/upload/v1705468436/Wings/n0i01xmci34k5y8weygi.png" alt="" className="h-[22rem]" />
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-gray-600 flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                  />
                </svg>
                메이플핸즈는 단일 캐릭터 보기가 아닌 전체보기로 캡쳐해주세요.
              </span>
              <span className="text-gray-600 flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
                  />
                </svg>
                캐릭터 선택창은 첫 페이지 전체를 캡쳐해주세요.
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={introChange ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute top-0"
          >
            <h1 className="text-2xl">본인인증 2</h1>
            <h2 className="text-base text-gray-600">
              주민등록증, 면허증, 전역증, 기타 인증 수단 (택 1)
            </h2>
            <div className="flex justify-center items-center my-5 gap-5">
              <img src="https://res.cloudinary.com/dgmgeotyk/image/upload/v1705467845/Wings/uqmqin6lw5czeliaopa8.png" alt="" className="h-[21rem]" />
              <img src="https://res.cloudinary.com/dgmgeotyk/image/upload/v1705467844/Wings/sssskr8ffmwr40vuxcnf.png" alt="" className="h-[21rem]" />
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-gray-600 flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
                주민등록증, 면허증은 주민번호 앞 2자리만 공개해주세요.
              </span>
              <span className="text-gray-600 flex items-center gap-3">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
                전역증은 전역일 / 학생증은 '대학교' / 사원증은 입사일 혹은 발급일을 공개해주세요
              </span>
              <span className="text-gray-600 flex items-center gap-3">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
                기타 인증 수단 - 카카오 인증서, coov, 명함 등 (생년이 공개되어야 합니다.)
              </span>
              <p className="text-xs text-gray-500">본인 인증을 하는 이유는 오직 성인이 맞는지 확인하기 위함입니다.</p>
              <p className="text-xs text-gray-500">허가 없는 개인정보 수집 및 도용은 위법행위입니다. 인증이 확인되면 전달받은 사진은 모두 삭제합니다.</p>
            </div>
          </motion.div>
        </div>
      </div>

    </>
  );
}
export default FadeFixScroll;
