'use client';

import { blogs } from "../utils/links"
import { motion } from "framer-motion"
import { generateDuration, generateVariant, viewportFalse } from "../utils/motion";

const RecentProjects = () => {
  return (
    <section className="max-w-[1220px] pb-[40px] mb-[100px]">

        <motion.h2 className="mt-[15px] mb-[20px] text-[32px] sm:text-[47px] font-heading leading-[62.4px] text-center text-darkBlue"
            variants={generateVariant('top')}
            initial='initial'
            whileInView='view'
            transition={generateDuration()}
            viewport={viewportFalse}        
        >Recent Projects</motion.h2>
        <motion.p className="sm:text-[22px] leading-[33px] text-darkGrey text-center"
            variants={generateVariant('bottom')}
            initial='initial'
            whileInView='view'
            transition={generateDuration()}
            viewport={viewportFalse}        
        >With tools to make every part of your process more human and a support team</motion.p>
        <motion.p className="sm:text-[22px] leading-[33px] text-darkGrey text-center"
            variants={generateVariant('bottom')}
            initial='initial'
            whileInView='view'
            transition={generateDuration(undefined, 0.6)}
            viewport={viewportFalse}        
        >excited to help you, getting started with us never been easier.</motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto mt-[70px] px-[10px] gap-x-[20px] gap-y-[40px] max-w-[500px] md:max-w-[unset]"> 

          {blogs.map((item, ind) => (
            <motion.article key={item.id} className="rounded-[62px] px-[21px] pt-[21px] border-[1px] border-[#E7E7E7]"
              variants={generateVariant('right')}
              initial='initial'
              whileInView='view'
              transition={generateDuration(undefined, ind * 0.08)}
              viewport={viewportFalse}            
            >
              
              <div className="relative max-w-[500px]">

                <img src={item.photo} alt={item.photoTitle} loading="lazy" className="rounded-t-[45px]" />

                <p className="absolute bottom-[29px] left-[24px] text-darkGrey leading-[24px] p-[10px] bg-[#FFFFFF] rounded-[8px] rounded-bl-none">{item.photoTitle}</p>

              </div>

              <h3 className="font-heading text-[25px] max-w-[500px] leading-[35px] mt-[15px] pt-[10px] mb-[10px] text-darkBlue">{item.title}</h3>

              <div className="flex justify-between items-center mb-[41px]">
                <p className="text-darkGrey leading-[24px]">{item.date}</p>

                <div className="flex items-center justify-center w-[52px] h-[52px] rounded-full bg-[#FFECD9] cursor-pointer">
                  <img src="/icons/smArrowRight.svg" alt="small arrow right" />
                </div>
              </div>

            </motion.article>
          ))}
        
        </div>
      

    </section>
  )
}

export default RecentProjects