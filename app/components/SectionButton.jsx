import CustomSvg from "/public/icons/CustomSvg";

const SectionButton = ({text, customBg, customTextColor, customArrowColor}) => {



  return (
    <button type="button" className={`flex rounded-[18px] mt-[35px] ${customBg ? customBg : 'bg-darkBlue'} py-[18px] pl-[34px] pr-[18px] text-[18px] leading-[27px] w-fit items-center gap-[17px]`}>
        <p className={customTextColor ? customTextColor : 'text-[#FFFFFF]'}>{text}</p>
        <CustomSvg color={customArrowColor ? customArrowColor : '#CDA274'} />
    </button>
  )
}

export default SectionButton