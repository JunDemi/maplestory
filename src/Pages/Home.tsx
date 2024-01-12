import React from "react";
import { Helmet } from "react-helmet";
import Banner from "../components/Banner";
import Member from "./Member"; //메인화면에 미리 렌더링하여 api호출 쿼리를 캐시에 저장
import FadeFixScroll from "../components/FadeFixScroll";
import Introduce from "../components/Introduce";

function Home() {
  return (
    <>
      <Helmet>
        <title>Wings | Home</title>
      </Helmet>
      <Banner />
      <div className="hidden">
        <Member />
      </div>
      <Introduce/>
      <FadeFixScroll/>
    </>
  );
}

export default Home;
