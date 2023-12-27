import React from 'react';
import { Helmet } from "react-helmet";
import Banner from '../components/Banner';

const scrollGIF = '/Scroll-Down-white.gif';

function Home() {
  return (
    <>
      <Helmet>
        <title>Wings | Home</title>
      </Helmet>
      <Banner/>
      <div className='my-40'>
        내용 준비중..
      </div>
    </>
  );
}

export default Home;
