import { achievs } from "../utils/links"


const Achievments = () => {
  return (
    <section className="max-w-[1440px] w-full bg-[#FFECD9] mb-[140px] hidden lg:block">
      
      <div className="max-w-[1200px] mx-auto my-[140px] flex justify-center">
        {achievs.map(item => (
          <div key={item.id} className={`text-center ${item.styles}`}>
            <h3 className="text-[85px] leading-[127.5px] font-heading text-lightBrown">{item.quantity}</h3>
            <p className="my-[10px] text-darkGrey leading-[33px] text-[22px]">{item.subtitle}</p>
          </div>
        ))}
      </div>

    </section>
  )
}

export default Achievments