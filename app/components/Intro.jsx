'use client';

import { motion } from "framer-motion";
import SectionButton from "./SectionButton";
import { generateDuration, generateVariant, generateVariat, viewportFalse } from "../utils/motion";

const Intro = () => {
  return (
    <motion.section className="mainBg mt-[18px] w-full h-[300px] md:h-[540px] lg:h-[831px] lg:rounded-bl-[290px]"
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      viewport={viewportFalse}
    >
        <article className=" flex flex-col max-w-[600px] mt-16 md:mt-[100px] ml-5 lg:mt-[195px] lg:ml-[120px]">
            <motion.h1 className="text-[34px] sm:text-[40px] lg:text-[80px] leading-8 lg:leading-[96px] font-heading text-darkBlue"
              variants={generateVariant('top')}
              initial='initial'
              whileInView='view'
              transition={generateDuration()}
              viewport={viewportFalse}
            >Let's Create Your Dream Interior</motion.h1>
            <motion.p className="text-[14px] md:text-[18px] lg:text-[22px] lg:leading-[33px] text-darkGrey mt-[19px]"
              variants={generateVariant('bottom')}
              initial='initial'
              whileInView='view'
              transition={generateDuration(undefined, 0.4)}
              viewport={viewportFalse}
            >The world needs innovators and problem solvers who turn</motion.p>
            <motion.p className="text-[14px] md:text-[18px] lg:text-[22px] leading-[33px] text-darkGrey"
              variants={generateVariant('bottom')}
              initial='initial'
              whileInView='view'
              transition={generateDuration(undefined, 0.5)}
              viewport={viewportFalse}
            >challenges into greater opportunities.</motion.p>
              <SectionButton text='Get Started' animatePosition='bottom' />
        </article>
    </motion.section>
  )
}

export default Intro