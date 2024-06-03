'use client';

import { peopleReviews } from "../utils/links";
import { motion } from "framer-motion";
import { generateDuration, generateVariant, viewportFalse } from "../utils/motion";


const Testimonials = () => {
  return (
    <section className="max-w-[1200px] flex flex-col mt-[60px] lg:mt-0 py-[70px] px-[15px] lg:pt-[103px] lg:pb-[120px] rounded-[70px] bg-[#FFECD9]">

        <motion.h2 className="text-darkBlue font-heading lg:leading-[58.5px] text-[28px] md:text-[45px] text-center"
            variants={generateVariant('top')}
            initial='initial'
            whileInView='view'
            transition={generateDuration()}
            viewport={viewportFalse}
        >What the People Thinks</motion.h2>
        <motion.h2 className="text-darkBlue font-heading lg:leading-[58.5px] text-[28px] md:text-[45px] text-center"
            variants={generateVariant('top')}
            initial='initial'
            whileInView='view'
            transition={generateDuration(undefined, 0.6)}
            viewport={viewportFalse}
        >About Interno</motion.h2>

        <div className="flex flex-col md:flex-row flex-wrap lg:flex-nowrap justify-center gap-[16px] mx-[50px] mt-[45px]">
            {peopleReviews.map((review, ind) => (
                <motion.div key={review.id} className="flex flex-col gap-[25px] bg-[#FFFFFF] rounded-[30px] pt-[50px]"
                    variants={generateVariant('right')}
                    initial='initial'
                    whileInView='view'
                    transition={generateDuration(undefined, ind * 0.15)}
                    viewport={viewportFalse}
                >

                    <div className="flex items-center gap-[20px] mx-[8px] sm:ml-[35px] sm:mr-[35px] sm:min-w-[289px]">
                        <img src={review.photo} alt={review.name} />

                        <div>
                            <h3 className="font-heading text-[18px] sm:text-[25px] sm:leading-[37.5px] text-darkBlue">{review.name}</h3>
                            <p className="text-[14px] sm:text-[18px] leading-[27px] text-darkGrey">{review.location}</p>
                        </div>
                    </div>

                    <p className="max-w-[244px] mx-[8px] sm:ml-[35px] mb-[45px] sm:text-[20px] leading-[30px] text-darkGrey">{review.text}</p>
                </motion.div>
            ))}
        </div>

    </section>
  )
}

export default Testimonials