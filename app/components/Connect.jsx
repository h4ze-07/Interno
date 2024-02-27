import SectionButton from "./SectionButton"

const Connect = () => {
  return (
    <section className="max-w-[1200px] w-full rounded-[70px] bg-darkBlue flex flex-col items-center pb-[95px]">

      <h2 className="text-[#FFFFFF] text-[50px] leading-[75px] font-heading mt-[100px]">Wanna join the interno?</h2>

      <p className="text-[22px] text-[#FFFFFF] leading-[33px] mt-[9px] mb-[4px]">Contact Us & Get a Free Consultation</p>

      <SectionButton text='Connect With us' customArrowColor='#292F36' customBg='bg-lightBrown' />

    </section>
  )
}

export default Connect