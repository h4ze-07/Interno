import { blogs } from "../utils/links"


const Blogs = () => {
  return (
    <section className="max-w-[1220px] pb-[40px] mb-[100px]">

        <h2 className="mt-[15px] mb-[20px] text-[47px] font-heading leading-[62.4px] text-center text-darkBlue">Recent Projects</h2>
        <p className="text-[22px] leading-[33px] text-darkGrey text-center">With tools to make every part of your process more human and a support team</p>
        <p className="text-[22px] leading-[33px] text-darkGrey text-center">excited to help you, getting started with us never been easier.</p>

        <div className="grid grid-cols-3 grid-rows-2 mt-[70px] px-[10px] gap-x-[20px] gap-y-[40px]"> 

          {blogs.map(item => (
            <article key={item.id} className="rounded-[62px] px-[21px] pt-[21px] border-[1px] border-[#E7E7E7]">
              
              <div className="relative">

                <img src={item.photo} alt={item.photoTitle} loading="lazy" className="rounded-t-[45px]" />

                <p className="absolute bottom-[29px] left-[24px] text-darkGrey leading-[24px] p-[10px] bg-[#FFFFFF] rounded-[8px] rounded-bl-none">{item.photoTitle}</p>

              </div>

              <h3 className="font-heading text-[25px] leading-[35px] mt-[15px] pt-[10px] mb-[10px] text-darkBlue">{item.title}</h3>

              <div className="flex justify-between items-center mb-[41px]">
                <p className="text-darkGrey leading-[24px]">{item.date}</p>

                <div className="flex items-center justify-center w-[52px] h-[52px] rounded-full bg-[#FFECD9] cursor-pointer">
                  <img src="/icons/smArrowRight.svg" alt="small arrow right" />
                </div>
              </div>

            </article>
          ))}
        
        </div>
      

    </section>
  )
}

export default Blogs