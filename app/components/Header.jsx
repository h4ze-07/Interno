'use client';

import Image from "next/image"
import { headerLinks } from "../utils/links"
import Link from "next/link"
import { IoIosMenu, IoMdClose  } from "react-icons/io";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { generateDuration, generateVariant, generateVariat, viewportFalse } from "../utils/motion";

const Header = () => {

  const [navMenu, setNavMenu] = useState(false);

  const handleBurgerClick = _ => setNavMenu(prev => !prev);

  return (
    <header className="max-w-[1200px] w-full flex items-center justify-between mt-[26px] my-[0px] mx-auto px-2">
        <motion.div
          variants={generateVariant('top')}
          initial='initial'
          whileInView='view'
          transition={generateDuration()}
          viewport={viewportFalse}
        >
          <Link href='/'>
              <Image 
                  src='/images/logo.png'
                  width={177}
                  height={50}
                  alt="logo"
                  className="w-[115px] md:w-[177px]"
                  />
          </Link>
        </motion.div>

        <nav className="hidden md:flex items-center justify-center lg:gap-[40px] text-darkBlue text-[19px] leading-[30px]">
            {headerLinks.map((link, ind) => (
                <motion.span
                  variants={generateVariant('top')}
                  initial='initial'
                  whileInView='view'
                  transition={generateDuration(0.2, 0.1* ++ind)}
                  viewport={viewportFalse}
                  key={link.name}
                >
                  <Link href={link.link} className="mx-[20px] whitespace-nowrap hover:text-lightBrown">{link.name}</Link>
                </motion.span>
            ))}
        </nav>
        
        {/* MOBILE NAV */}
        <nav className="md:hidden relative">
            <motion.button onClick={handleBurgerClick}
              variants={generateVariant('top')}
              initial='initial'
              whileInView='view'
              transition={generateDuration()}
              viewport={viewportFalse}
            >
              {
                !navMenu ?
                  <IoIosMenu className="w-[32px] h-[32px]" />
                :
                  <IoMdClose className="w-[32px] h-[32px]" />
              }
            </motion.button>
            <AnimatePresence>
              {navMenu &&
                <motion.div className={`flex absolute justify-center top-[50px] -right-[8px] gap-2 bg-[#FFF] px-5 py-4 rounded-bl-[30px]`}
                  initial={{opacity: 0, x: '-70'}}
                  animate={{opacity: 1, x: '0'}}
                  transition={{duration: 0.2}}
                  exit={{opacity: 0, x: '-70'}}
                >
                  {headerLinks.map(link => (
                      <Link key={link.name} href={link.link} className="hover:text-lightBrown whitespace-nowrap">{link.name}</Link>
                  ))}
                </motion.div>
              }
            </AnimatePresence>
        </nav>
        {/* MOBILE NAV */}
    </header>
  )
}

export default Header