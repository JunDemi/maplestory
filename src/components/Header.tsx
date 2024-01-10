import React from "react";
import { motion, useAnimation, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Fade as Hamburger } from "hamburger-react";

function Header() {
  const location = useLocation();
  const { scrollY } = useScroll();
  const navAnimation = useAnimation();
  const buttonAnimation = useAnimation();
  const moblieMenuAnimation = useAnimation();
  const [toggleMenu, set_toggleMenu] = useState(false);

  const navVarient = {
    top: {
      backgroundColor: "rgba(12,16,25,0)",
      padding: "4rem 0 3rem 0",
    },
    scroll: {
      backgroundColor: "rgba(12,16,25,0.8)",
      padding: "1rem 0 1rem 0",
    },
  };
  const moblieMenuVarient = {
    top: {
    
      padding: "9rem 0 3rem 0"
    },
    scroll: {
      padding: "5rem 0 1rem 0"
    },
  };
  const ScrollUp = {
    top: {
      opacity: "0",
    },
    scroll: {
      opacity: "1",
    },
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.get() > 30) {
        navAnimation.start("scroll");
        buttonAnimation.start("scroll");
        moblieMenuAnimation.start("scroll");
      } else {
        navAnimation.start("top");
        buttonAnimation.start("top");
        moblieMenuAnimation.start("top");
      }
    });
  }, []);
  return (
    <>
      <motion.nav
        variants={navVarient}
        animate={navAnimation}
        transition={{ duration: 0.2 }}
        initial={"top"}
        className="fixed top-0 w-full z-[15] flex flex-col"
      >
        <div className="flex justify-between items-center lg:px-24 px-5 text-white">
          <Link to="/">
            <span className="tracking-wide text-2xl">Wings</span>
          </Link>
          <div className="lg:flex hidden justify-between text-sm items-center gap-8 font-thin text-center">
            <Link className="w-12 space-y-2" to="/">
              <div>홈</div>
              {location.pathname === "/" ? (
                <motion.hr layoutId="menuChange" />
              ) : (
                <hr className="border-[#00000000]" />
              )}
            </Link>
            <Link className="w-12 space-y-2" to="/member">
              <div>멤버</div>
              {location.pathname === "/member" ? (
                <motion.hr layoutId="menuChange" />
              ) : (
                <hr className="border-[#00000000]" />
              )}
            </Link>
            <Link className="w-12 space-y-2" to="/search">
              <div>검색</div>
              {location.pathname === "/search" ? (
                <motion.hr layoutId="menuChange" />
              ) : (
                <hr className="border-[#00000000]" />
              )}
            </Link>
          </div>

          <button className="text-white lg:hidden block">
            <Hamburger
              color="#ffffff"
              toggled={toggleMenu}
              rounded
              toggle={set_toggleMenu}
            />
          </button>
        </div>
      </motion.nav>
      <motion.div
            initial={"top"}
            variants={moblieMenuVarient}
            animate={moblieMenuAnimation}
            transition={{ duration: 0.2 }}
            className="fixed z-10 w-full lg:hidden top-0">
          <motion.div
            className="text-white lg:hidden flex flex-col text-xs justify-start items-end px-10 gap-10 py-10 w-full bg-[#0c1019cc]"
            animate={
              toggleMenu
                ? { opacity: 1, display: "flex" }
                : { opacity: 0, transitionEnd: { display: "none" } }
            }
          >
            <Link to="/">
              <span>홈</span>
            </Link>
            <Link to="/member">
              <span>멤버</span>
            </Link>
            <Link to="/search">
              <span>검색</span>
            </Link>
          </motion.div>
        </motion.div>

      <motion.button
        onClick={scrollToTop}
        variants={ScrollUp}
        initial={{ opacity: 0 }}
        animate={buttonAnimation}
        transition={{ duration: 0.1 }}
        className="fixed bottom-4 right-4 bg-white lg:p-5 p-3 rounded-full hover:bg-gray-300 shadow-xl z-10 transition"
      >
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
            d="M4.5 15.75l7.5-7.5 7.5 7.5"
          />
        </svg>
      </motion.button>
    </>
  );
}

export default Header;
