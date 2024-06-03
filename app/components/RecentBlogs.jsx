import { recentProjects } from "../utils/links"


const RecentBlogs = () => {
  return (
    <section className="max-w-[1220px] pb-[40px] mb-[100px]">

        <h2 className="mt-[13px] mb-[21px] text-[32px] sm:text-[48px] font-heading leading-[62.4px] text-center text-darkBlue">Recent Blogs</h2>
        <p className="text-[16px] sm:text-[22px] leading-[33px] text-darkGrey text-center">Get updates about our latest trends and techniques used in</p>
        <p className="text-[16px] sm:text-[22px] leading-[33px] text-darkGrey text-center">interior design project works.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 mt-[70px] px-[10px] gap-x-[20px] gap-y-[60px]">
            {recentProjects.map(i => (
                <div key={i.id}>

                    <img src={i.photo} alt={i.title} loading="lazy" className="rounded-tr-[80px]" />

                    <div className="flex justify-between mt-[25px]">

                        <div>
                            <h3 className="text-darkBlue text-[24px] font-heading leading-[37.5px]">{i.title}</h3>
                            <p className="text-[22px] leading-[33px] text-darkGrey">{i.subtitle}</p>
                        </div>

                        <div className="flex items-center justify-center w-[70px] h-[70px] rounded-full bg-[#FFECD9] cursor-pointer">
                            <img src="/icons/smArrowRight.svg" alt="small arrow right" />
                        </div>
                    </div>

                </div>
            ))}
        </div>

    </section>
  )
}

export default RecentBlogs