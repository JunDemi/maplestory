import React from "react";
import { motion } from "framer-motion";

function MobileRegister() {
  return (
    <>
      <div className="lg:hidden flex flex-col justify-center items-center gap-16 my-28 px-4">
        <motion.div className="flex flex-col justify-center items-start w-full">
          <h1 className="text-xl">본인인증 1</h1>
          <h2 className="text-sm text-gray-600">
            메이플 핸즈 혹은 캐릭터 선택창 인증 (택 1)
          </h2>
          <div className="flex justify-center items-center my-2 w-full gap-2">
            <img src="/hands.png" alt="" className="h-[9.5rem]" />
            <img src="/slots.png" alt="" className="h-[9.5rem]" />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-gray-600 flex items-center gap-1 text-xs">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                />
              </svg>
              메이플핸즈는 단일 캐릭터 보기가 아닌 전체보기로 캡쳐해주세요.
            </span>
            <span className="text-gray-600 flex items-center gap-1 text-xs">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4"
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

        <motion.div className="flex flex-col justify-center items-start w-full">
          <h1 className="text-xl">본인인증 2</h1>
          <h2 className="text-sm text-gray-600">
            주민등록증, 면허증, 전역증, 기타 인증 수단 (택 1)
          </h2>
          <div className="flex justify-center items-center my-2 gap-2 w-full">
            <img src="/license.png" alt="" className="h-[9.5rem]" />
            <img src="/c_license.png" alt="" className="h-[9.5rem]" />
          </div>
          <div className="flex flex-col gap-2 text-xs">
            <span className="text-gray-600">
              - 주민등록증, 면허증은 주민번호 앞 2자리만 공개해주세요.
            </span>
            <span className="text-gray-600">
              - 전역증은 전역일을 공개해주세요.
            </span>
            <span className="text-gray-600">
              - 학생증은 '대학교'라는 단어가 나오게 해주세요.
            </span>
            <span className="text-gray-600">
              - 사원증은 입사일 혹은 발급일을 공개해주세요
            </span>
            <span className="text-gray-600 ">
              - 기타 인증 수단: 카카오 인증서, coov, 명함 등 (생년 공개)
            </span>
            <p className="text-xs text-gray-500 mt-10">
              본인 인증을 하는 이유는 오직 성인이 맞는지 확인하기 위함입니다.
            </p>
            <p className="text-xs text-gray-500">
              허가 없는 개인정보 수집 및 도용은 위법행위입니다. 인증이 확인되면
              전달받은 사진은 곧바로 삭제해드립니다.
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
}
export default MobileRegister;
