
import SectionButton from "./SectionButton";

const Intro = () => {
  return (
    <section className="mainBg mt-[18px] w-full h-[831px] rounded-bl-[290px]">
        <article className=" flex flex-col max-w-[600px] mt-[195px] ml-[120px]">
            <h1 className="text-[80px] leading-[96px] font-heading text-darkBlue">Let's Create Your Dream Interior</h1>
            <p className="text-[22px] leading-[33px] text-darkGrey mt-[19px]">The world needs innovators and problem solvers who turn</p>
            <p className="text-[22px] leading-[33px] text-darkGrey">challenges into greater opportunities.</p>
            <SectionButton text='Get Started' />
        </article>
    </section>
  )
}

export default Intro