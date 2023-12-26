import React from 'react';
import { Helmet } from "react-helmet";

const bannerImage = '/bgImage.png';

function Home() {
  return (
    <>
      <Helmet>
        <title>Maple | Home</title>
        </Helmet>
    <div 
      className='bg-cover w-full h-[100dvh] flex justify-center items-center text-white'
      style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 1)), url('${bannerImage}')`}}>
        <div className='w-[80vw] font-bold flex flex-col lg:justify-start justify-center lg:items-start items-center'>
          <p className='lg:text-xl text-sm mb-10'>MapleStory Open API</p>
          <p className='lg:text-5xl text-lg mb-10 ml-10'>인게임 정보 검색 사이트</p>
        </div>
    </div>
    <div>Hello</div>
    <div>Hello</div>
    <div>Hello</div>
    <div>Hello</div>
    <div>Hello</div>
    </>
  
  );
}

export default Home;
