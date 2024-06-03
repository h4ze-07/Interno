'use client';

import Image from "next/image"
import { headerLinks } from "../utils/links"
import Link from "next/link"
import { IoIosMenu, IoMdClose  } from "react-icons/io";
import { useState } from "react";


const Header = () => {

  const [navMenu, setNavMenu] = useState(false);

  const handleBurgerClick = _ => setNavMenu(prev => !prev);

  return (
    <header className="max-w-[1200px] w-full flex items-center justify-between mt-[26px] my-[0px] mx-auto px-2">
        <Link href='/'>
            <Image 
                src='/images/logo.png'
                width={177}
                height={50}
                alt="logo"
                />
        </Link>

        <nav className="hidden md:flex items-center justify-center gap-[40px] text-darkBlue text-[19px] leading-[30px]">
            {headerLinks.map(link => (
                <Link key={link.name} href={link.link} className="mt-[12px] mb-[20px] hover:text-lightBrown">{link.name}</Link>
            ))}
        </nav>

        <nav className="md:hidden relative">
            <button onClick={handleBurgerClick}>
              {
                !navMenu ?
                  <IoIosMenu className="w-[32px] h-[32px]" />
                :
                  <IoMdClose className="w-[32px] h-[32px]" />
              }
            </button>
            <div className={`${navMenu ? "flex" : "hidden"} absolute justify-center top-[60px] -right-[8px] gap-2 bg-[#FFF] px-5 py-4 rounded-bl-[30px]`}>
              {headerLinks.map(link => (
                  <Link key={link.name} href={link.link} className="hover:text-lightBrown whitespace-nowrap">{link.name}</Link>
              ))}
            </div>
        </nav>
    </header>
  )
}

export default Header