import CustomSvg from "/public/icons/CustomSvg";

const SectionButton = ({text, customBg, customTextColor, customArrowColor}) => {



  return (
    <button type="button" className={`flex rounded-[18px] mt-[15px] md:mt-[35px] ${customBg ? customBg : 'bg-darkBlue'} py-[10px] pl-[15px] pr-[8px] text-[14px] md:py-[18px] md:pl-[34px] md:pr-[18px] md:text-[18px] md:leading-[27px] w-fit items-center gap-[17px]`}>
        <p className={customTextColor ? customTextColor : 'text-[#FFFFFF]'}>{text}</p>
        <CustomSvg color={customArrowColor ? customArrowColor : '#CDA274'} />
    </button>
  )
}

export default SectionButton