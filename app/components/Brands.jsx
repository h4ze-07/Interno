'use client';

import { brands } from "../utils/links"
import { motion } from "framer-motion"
import { generateDuration, generateVariant, viewportFalse } from "../utils/motion";

const Brands = () => {
  return (
    <section className="max-w-[1200px] w-full mt-[140px] mb-[100px]">

        <div className="flex flex-wrap items-center gap-3 justify-center mx-[10px] lg:mx-[55px]">
            {brands.map( (i, ind) => (
                <motion.img key={i.id} src={i.photo} alt={i.alt} loading="lazy"
                  variants={generateVariant('bottom')}
                  initial='initial'
                  whileInView='view'
                  transition={generateDuration(undefined, ind * 0.09)}
                  viewport={viewportFalse}                
                />
            ))}
        </div>


    </section>
  )
}

export default Brands