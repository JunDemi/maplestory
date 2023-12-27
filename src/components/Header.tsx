import React from 'react';
import { motion, useAnimation, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navVarient = {
    top: {
        backgroundColor: "rgba(12,16,25,0)",
        padding: "3rem 0",
        borderBottom: "0.5px solid #00000000"
    },
    scroll: {
        backgroundColor: "rgba(12,16,25,0.9)",
        padding: "1rem 0",
        borderBottom: "0.3px solid #353b48",

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

function Header() {
    const location = useLocation();
    const { scrollY } = useScroll();
    const navAnimation = useAnimation();
    const buttonAnimation = useAnimation();
    const [toggleMenu, set_toggleMenu] = useState<boolean>(false);
    const mobileMenu = () => {
        set_toggleMenu((prev) => !prev);
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
            } else {
                navAnimation.start("top");
                buttonAnimation.start("top");
            }
        });
    }, [scrollY, navAnimation, buttonAnimation]);
    return (
        <>
            <motion.nav
                variants={navVarient}
                animate={navAnimation}
                transition={{ duration: 0.1 }}
                initial={"top"}
                className='fixed top-0 w-full z-20 flex flex-col'
            >
                <div className="flex justify-between items-center lg:px-24 px-5 text-white">
                    <Link to="/">
                        <span className='tracking-wide text-2xl'>Wings</span>
                    </Link>
                    <div className="lg:flex hidden justify-between text-sm items-center gap-8 font-thin text-center">
                        <Link className='w-12 space-y-2'
                            to="/"
                        >
                            <div>홈</div>
                            {location.pathname === '/' ? <motion.hr layoutId="menuChange" /> : <hr className='border-[#00000000]' />}

                        </Link>
                        <Link className='w-12 space-y-2'
                            to="/member"
                        >
                            <div>멤버</div>
                            {location.pathname === '/member' ? <motion.hr layoutId="menuChange" /> : <hr className='border-[#00000000]' />}
                        </Link>
                        <Link className='w-12 space-y-2'
                            to="/search"
                        >
                            <div>검색</div>
                            {location.pathname === '/search' ? <motion.hr layoutId="menuChange" /> : <hr className='border-[#00000000]' />}
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
                    <motion.div
                        style={{ background: "linear-gradient(rgba(0, 0, 0, 0), rgba(12,16,25,0.9))" }}
                        className="text-white lg:hidden flex flex-col text-xs justify-start items-end px-10 gap-10 font-thin py-10"
                    >
                        <Link
                            to="/"
                        >
                            <span>홈</span>
                        </Link>
                        <Link
                            to="/member"
                        >
                            <span>멤버</span>
                        </Link>
                        <Link
                            to="/search"
                        >
                            <span>검색</span>
                        </Link>

                    </motion.div>
                ) : null}
            </motion.nav>
            <motion.button
                onClick={scrollToTop}
                variants={ScrollUp}
                initial={{ opacity: 0 }}
                animate={buttonAnimation}
                transition={{ duration: 0.1 }}
                className="fixed bottom-4 right-4 bg-white lg:p-5 p-3 rounded-full hover:bg-gray-300 shadow-xl z-30 transition"
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
