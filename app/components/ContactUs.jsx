import SectionButton from "./SectionButton";
import Image from "next/image";

const ContactUs = () => {
  return (
    <section className="mt-[100px] mb-[140px] max-w-[1200px] flex justify-between">
        <article>
            <h2 className="text-heading text-[50px] leading-[65px] text-darkBlue my-[31px] max-w-[450px]">We Tackle The Most Challenging Designs</h2>
            <p className="max-w-[531px] text-[22px] text-darkGrey leading-[33px]">The world needs innovators and problem solvers who turn challenges into greater opportunities. We have</p>
            <p className="max-w-[492px] text-[22px] text-darkGrey leading-[33px] mb-[30px]">an insatiable curiosity about transformative trends challenging the status.</p>

            <div className="flex gap-[20px] pt-[12px]">
                <div className="flex justify-center items-center w-[93px] h-[93px] bg-[#FFECD9] rounded-full mb-[50px]">
                    <img src="/icons/phone.svg" alt="phone icon" />
                </div>

                <div>
                    <p className="text-darkGrey text-[24px] leading-[36px]">012345678</p>
                    <p className="text-darkGrey text-[22px] leading-[33px]">Call Us Anytime</p>
                </div>
            </div>

            <div className="mb-[36px]">
                <SectionButton text='Get Free Estimate' />
            </div>
        </article>
        
        <div className="contactBg w-[592px] rounded-[0px 326px 0px 123px]">
            
        </div>

    </section>
  )
}

export default ContactUs