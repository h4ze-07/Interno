import SectionButton from "./SectionButton";
import Image from "next/image";

const ContactUs = () => {
  return (
    <section className="lg:mt-[100px] lg:mb-[140px] max-w-[1200px] flex flex-col lg:flex-row justify-between">
        <article className="flex flex-col md:flex-row lg:block md:items-center gap-4 px-5">

            <div className="">
                <h2 className="text-heading text-[25px] lg:text-[50px] md:leading-[65px] text-darkBlue my-[31px] max-w-[450px]">We Tackle The Most Challenging Designs</h2>
                <p className="max-w-[410px] lg:max-w-[531px] text-[18px] lg:text-[22px] text-darkGrey leading-[33px]">The world needs innovators and problem solvers who turn challenges into greater opportunities. We have</p>
                <p className="max-w-[400px] lg:max-w-[492px] text-[18px] lg:text-[22px] text-darkGrey leading-[33px] lg:mb-[30px]">an insatiable curiosity about transformative trends challenging the status.</p>
            </div>

            <div className="hidden lg:flex gap-[20px] pt-[12px]">
                <div className="flex justify-center items-center w-[93px] h-[93px] bg-[#FFECD9] rounded-full mb-[50px]">
                    <img src="/icons/phone.svg" alt="phone icon" />
                </div>

                <div>
                    <p className="text-darkGrey text-[24px] leading-[36px]">012345678</p>
                    <p className="text-darkGrey text-[22px] leading-[33px]">Call Us Anytime</p>
                </div>
            </div>

            <div className="hidden lg:block mb-[36px]">
                <SectionButton text='Get Free Estimate' />
            </div>
            
            



            <div className="lg:hidden mb-[45px]">
                <div className="flex gap-[20px] pt-[12px]">
                    <div className="flex justify-center items-center w-[53px] h-[53px] bg-[#FFECD9] rounded-full mb-[10px]">
                        <img src="/icons/phone.svg" alt="phone icon" width={25} height={25} />
                    </div>

                    <div>
                        <p className="text-darkGrey text-[16px] md:text-[22px] leading-[36px]">012345678</p>
                        <p className="text-darkGrey text-[16px] md:text-[20px] leading-[33px]">Call Us Anytime</p>
                    </div>
                </div>

                <div className="mb-[10px]">
                    <SectionButton text='Get Free Estimate' />
                </div>
            </div>



        </article>
        
        <div className="contactBg w-[592px] rounded-[0px 326px 0px 123px] hidden lg:block">
            
        </div>

    </section>
  )
}

export default ContactUs