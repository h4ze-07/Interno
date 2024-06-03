'use client';

import SectionButton from "./SectionButton"
import { motion } from "framer-motion"
import { generateDuration, generateVariant, viewportFalse } from "../utils/motion";

const Connect = () => {
  return (
    <section className="max-w-[1200px] w-full rounded-[70px] bg-darkBlue flex flex-col items-center py-[50px] lg:py-[95px]">

      <motion.h2 className="text-[#FFFFFF] text-center text-[25px] md:text-[50px] md:leading-[75px] font-heading"
            variants={generateVariant('top')}
            initial='initial'
            whileInView='view'
            transition={generateDuration()}
            viewport={viewportFalse}      
      >Wanna join the interno?</motion.h2>

      <motion.p className="sm:text-[22px] text-[#FFFFFF] text-center sm:leading-[33px] mt-[9px] mb-[4px]"
            variants={generateVariant('top')}
            initial='initial'
            whileInView='view'
            transition={generateDuration()}
            viewport={viewportFalse}      
      >Contact Us & Get a Free Consultation</motion.p>

      <SectionButton text='Connect With us' customArrowColor='#292F36' customBg='bg-lightBrown' animatePosition='bottom' />

    </section>
  )
}

export default Connect