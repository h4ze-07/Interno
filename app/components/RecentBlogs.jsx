'use client';

import { recentProjects } from "../utils/links"
import { motion } from "framer-motion"
import { generateDuration, generateVariant, viewportFalse } from "../utils/motion";

const RecentBlogs = () => {
  return (
    <section className="max-w-[1220px] pb-[40px] mb-[100px]">

        <motion.h2 className="mt-[13px] mb-[21px] text-[32px] sm:text-[48px] font-heading leading-[62.4px] text-center text-darkBlue"
            variants={generateVariant('top')}
            initial='initial'
            whileInView='view'
            transition={generateDuration()}
            viewport={viewportFalse}        
        >Recent Blogs</motion.h2>
        <motion.p className="text-[16px] sm:text-[22px] leading-[33px] text-darkGrey text-center"
            variants={generateVariant('bottom')}
            initial='initial'
            whileInView='view'
            transition={generateDuration()}
            viewport={viewportFalse}           
        >Get updates about our latest trends and techniques used in</motion.p>
        <motion.p className="text-[16px] sm:text-[22px] leading-[33px] text-darkGrey text-center"
            variants={generateVariant('bottom')}
            initial='initial'
            whileInView='view'
            transition={generateDuration(undefined, 0.6)}
            viewport={viewportFalse}       
        >interior design project works.</motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 mt-[70px] px-[10px] gap-x-[20px] gap-y-[60px]">
            {recentProjects.map((i, ind) => (
                <motion.div key={i.id}
                    variants={generateVariant('left')}
                    initial='initial'
                    whileInView='view'
                    transition={generateDuration(undefined, ++ind * 0.15)}                  
                >

                    <img src={i.photo} alt={i.title} loading="lazy" className="rounded-tr-[80px]" />

                    <div className="flex justify-between mt-[25px]">

                        <div>
                            <h3 className="text-darkBlue text-[24px] font-heading leading-[37.5px]">{i.title}</h3>
                            <p className="text-[22px] leading-[33px] text-darkGrey">{i.subtitle}</p>
                        </div>

                        <div className="flex items-center justify-center w-[70px] h-[70px] rounded-full bg-[#FFECD9] cursor-pointer">
                            <img src="/icons/smArrowRight.svg" alt="small arrow right" />
                        </div>
                    </div>

                </motion.div>
            ))}
        </div>

    </section>
  )
}

export default RecentBlogs