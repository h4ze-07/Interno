import { recentProjects } from "../utils/links"


const RecentProjects = () => {
  return (
    <section className="max-w-[1220px] pb-[60px] mb-[80px]">

        <h2 className="mt-[15px] mb-[20px] text-[47px] font-heading leading-[62.4px] text-center text-darkBlue">Recent Projects</h2>
        <p className="text-[22px] leading-[33px] text-darkGrey text-center">With tools to make every part of your process more human and a support team</p>
        <p className="text-[22px] leading-[33px] text-darkGrey text-center">excited to help you, getting started with us never been easier.</p>

        <div className="grid grid-cols-2 grid-rows-2 mt-[70px] px-[10px] gap-x-[20px] gap-y-[60px]">
            {recentProjects.map(i => (
                <div key={i.id}>

                    <img src={i.photo} alt={i.title} className="rounded-tr-[80px]" />

                    <div className="flex justify-between mt-[25px]">

                        <div>
                            <h3 className="text-darkBlue text-[24px] font-heading leading-[37.5px]">{i.title}</h3>
                            <p className="text-[22px] leading-[33px] text-darkGrey">{i.subtitle}</p>
                        </div>

                        <div className="flex items-center justify-center w-[70px] h-[70px] rounded-full bg-[#F4F0EC] cursor-pointer">
                            <img src="/icons/smArrowRight.svg" alt="small arrow right" />
                        </div>
                    </div>

                </div>
            ))}
        </div>

    </section>
  )
}

export default RecentProjects