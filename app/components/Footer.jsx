import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { footerLinks } from '../utils/links'

const Footer = () => {
  return (
    <footer className='max-w-[1400px] mt-[130px] mb-[50px]'>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px] max-w-[1200px] mx-auto pb-[110px] px-4 '>

        <div>
          <Link href='/'>
              <Image 
                  src='/images/logo.png'
                  width={177}
                  height={50}
                  alt="logo"
                  />
          </Link>
          <p className='max-w-[326px] text-[22px] leading-[33px] text-darkGrey mt-[25px]'>We are the leading architect and interior design firm in the world.</p>

          <div className='flex gap-[40px] mt-[29px]'>
            {footerLinks.social.items.map(item => (
              <Link href={item.link}>
                <img src={item.icon} alt={item.name} key={item.name} loading='lazy' />
              </Link>
            ))}
          </div>
        </div>
        
        {/* PAGES */}
        <article className='order-3'>
            <h4 className='font-heading text-[25px] leading-[37.5px] text-darkBlue mb-[22px]'>{footerLinks.pages.title}</h4>
            <div className='flex flex-col gap-[30px]'>
              {footerLinks.pages.items.map(item => (
                <Link key={item.id} href={item.link} className='text-[22px] text-darkGrey leading-[33px] hover:text-lightBrown hover:font-semibold'>{item.name}</Link>
              ))}
            </div>
        </article>
        {/* PAGES */}

        {/* EXPLORE */}
        <article className='order-4'>
            <h4 className='font-heading text-[25px] leading-[37.5px] text-darkBlue mb-[22px]'>{footerLinks.explore.title}</h4>
            <div className='flex flex-col gap-[30px]'>
              {footerLinks.explore.items.map(item => (
                <Link key={item.id} href={item.link} className='text-[22px] text-darkGrey leading-[33px] hover:text-lightBrown hover:font-semibold'>{item.name}</Link>
              ))}
            </div>
        </article>
        {/* EXPLORE */}
        
        {/* CONTACT */}
        <article className='order-2 lg:order-4'>
            <h4 className='font-heading text-[25px] leading-[37.5px] text-darkBlue mb-[22px]'>{footerLinks.contact.title}</h4>
            <p className='text-[22px] text-darkGrey leading-[33px] mb-[30px] max-w-[321px]'>{footerLinks.contact.location}</p>
            <p className='text-[22px] text-darkGrey leading-[33px] mb-[30px]'>{footerLinks.contact.email}</p>
            <p className='text-[22px] text-darkGrey leading-[33px]'>{footerLinks.contact.phone}</p>
        </article>
        {/* CONTACT */}

      </div>
      
      <div className='w-full border-t-[1px] border-[#E5E5E5] py-[35px]'>
        <p className='text-center text-[22px] text-darkGrey leading-[33px]'>Copyright © Interno | Created by  
          <Link href={'https://github.com/h4ze-07'} target='_blank' className='text-lightBrown text-[24px]'> Haze</Link>
        </p>
        
      </div>

    </footer>
  )
}

export default Footer