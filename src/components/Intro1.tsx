import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

function Intro1() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <>
      <div className="flex flex-col justify-start items-center w-full h-[250dvh] pt-28">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0 }}
          transition={{ duration: 0.5}}
          className="sticky top-32"
        >
          <h1>Welcome</h1>
          <img src="/bgImage.png" alt="" className="w-[800px] h-[500px]" />
          <hr ref={ref}/>
        </motion.div>
      </div>
    </>
  );
}
export default Intro1;
