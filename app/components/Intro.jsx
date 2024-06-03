
import SectionButton from "./SectionButton";

const Intro = () => {
  return (
    <section className="mainBg mt-[18px] w-full h-[300px] md:h-[540px] lg:h-[831px] lg:rounded-bl-[290px]">
        <article className=" flex flex-col max-w-[600px] mt-16 md:mt-[100px] ml-5 lg:mt-[195px] lg:ml-[120px]">
            <h1 className="text-[34px] sm:text-[40px] lg:text-[80px] leading-8 lg:leading-[96px] font-heading text-darkBlue">Let's Create Your Dream Interior</h1>
            <p className="text-[14px] md:text-[18px] lg:text-[22px] lg:leading-[33px] text-darkGrey mt-[19px]">The world needs innovators and problem solvers who turn</p>
            <p className="text-[14px] md:text-[18px] lg:text-[22px] leading-[33px] text-darkGrey">challenges into greater opportunities.</p>
              <SectionButton text='Get Started' />
        </article>
    </section>
  )
}

export default Intro