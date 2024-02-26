import Image from "next/image"
import { headerLinks } from "../utils/links"
import Link from "next/link"



const Header = () => {
  return (
    <header className="max-w-[1200px] w-full flex justify-between mt-[26px] my-[0px] mx-auto">
        <Link href='/'>
            <Image 
                src='/images/logo.png'
                width={177}
                height={50}
                alt="logo"
                />
        </Link>

        <nav className="flex items-center justify-center gap-[40px] text-darkBlue text-[19px] leading-[30px]">
            {headerLinks.map(link => (
                <Link key={link.name} href={link.link} className="mt-[12px] mb-[20px] hover:text-lightBrown">{link.name}</Link>
            ))}
        </nav>
    </header>
  )
}

export default Header