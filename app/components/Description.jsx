'use client';

import { descriptionItems } from "../utils/links"
import Link from "next/link"
import { motion } from "framer-motion"
import { generateDuration, generateVariant, viewportFalse } from "../utils/motion";

const Description = () => {
  return (
    <section className="mt-[30px] lg:mt-[100px] flex py-[20px] md:py-[75px] flex-col gap-5 md:flex-row md:gap-2">
      {descriptionItems.map((item, ind) => (
        <motion.div key={item.id} className="flex flex-col items-center max-w-[400px]"
          variants={generateVariant('left')}
          initial='initial'
          whileInView='view'
          transition={generateDuration(undefined, ind * 0.1)}
          viewport={viewportFalse}
        >
          <h2 className="font-heading text-[25px] leading-[39px] text-darkBlue">{item.heading}</h2>
          <p className="text-center text-[17px] md:text-[22px] text-darkGrey mt-[17px] mx-[40px] mb-[25px] md:mb-[48px]">{item.text}</p>
          <Link href={item.link} className="text-[18px] leading-[27px] text-darkGrey flex items-center justify-center gap-[6px] hover:text-lightBrown">
            <p className="">View more</p>
            <img src="/icons/arrowRight.svg" alt="arrow right" />
          </Link>
        </motion.div>
      ))}
    </section>
  )
}

export default Description