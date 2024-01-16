import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


function LinkToTop() {
    const { pathname } = useLocation(); //Url변경될때마다 스크롤 탑

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
  return null
}

export default LinkToTop;
