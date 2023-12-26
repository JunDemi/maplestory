import React from 'react';
import { motion, useAnimation, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"

const navVarient = {
    top: {
        backgroundColor: "rgba(12,16,25,0)",
        padding: "3rem 0",
        borderBottom: "0.5px solid #00000000"
    },
    scroll: {
        backgroundColor: "rgba(12,16,25,0.9)",
        padding: "1.5rem 0",
        borderBottom: "0.3px solid #353b48",
        
    },
};

function Header() {
    const { scrollY } = useScroll();
    const navAnimation = useAnimation();
    const [toggleMenu, set_toggleMenu] = useState<boolean>(false);
    const mobileMenu = () => {
        set_toggleMenu((prev) => !prev);
    };
    useEffect(() => {
        scrollY.onChange(() => {
          if (scrollY.get() > 30) {
            navAnimation.start("scroll");
          } else {
            navAnimation.start("top");
          }
        });
      }, [scrollY, navAnimation]);
    return (
        <>
                <motion.nav
                    variants={navVarient}
                    animate={navAnimation}
                    transition={{ duration: 0.1 }}
                    initial={"top"}
                    className="fixed top-0 w-full z-20 flex flex-col"
                >
                    <div className="flex justify-between items-center lg:px-24 px-5 text-white">
                        <Link to="/">
                            <span className='tracking-wide text-2xl'>MapleStory</span>
                        </Link>
                        <div className="lg:flex hidden justify-between text-sm items-center space-x-10 ">
                            <Link
                                to=""
                                className="hover:text-red-400 transition-colors"
                            >
                                <span>MENU</span>
                            </Link>
                            <Link
                                to=""
                                className="hover:text-red-400 transition-colors"
                            >
                                <span>MENU</span>
                            </Link>
                            <Link
                                to=""
                                className="hover:text-red-400 transition-colors"
                            >
                                <span>MENU</span>
                            </Link>
                        </div>

                        <button className="text-white lg:hidden block" onClick={mobileMenu}>
                            {toggleMenu ? (
                                <motion.svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-8 h-8"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </motion.svg>
                            ) : (
                                <motion.svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-8 h-8"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                    />
                                </motion.svg>
                            )}
                        </button>
                    </div>
                    {toggleMenu ? (
                        <motion.div className="text-white lg:hidden flex flex-col text-xs justify-start items-end px-10 gap-10">
                            <Link
                                to=""
                                className="hover:text-red-400 transition-colors"
                            >
                                <span>MENU</span>
                            </Link>
                            <Link
                                to=""
                                className="hover:text-red-400 transition-colors"
                            >
                                <span>MENU</span>
                            </Link>
                            <Link
                                to=""
                                className="hover:text-red-400 transition-colors"
                            >
                                <span>MENU</span>
                            </Link>

                        </motion.div>
                    ) : null}
                </motion.nav>
        </>
    );
}

export default Header;
