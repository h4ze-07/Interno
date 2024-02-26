import { peopleReviews } from "../utils/links"


const Testimonials = () => {
  return (
    <section className="max-w-[1200px] flex flex-col pt-[103px] pb-[120px] rounded-[70px] bg-[#FFECD9]">

        <h2 className="text-darkBlue font-heading leading-[58.5px] text-[45px] text-center">What the People Thinks</h2>
        <h2 className="text-darkBlue font-heading leading-[58.5px] text-[45px] text-center">About Interno</h2>

        <div className="flex gap-[16px] mx-[50px] mt-[45px]">
            {peopleReviews.map(review => (
                <div key={review.id} className="flex flex-col gap-[25px] bg-[#FFFFFF] rounded-[30px] pt-[50px]">

                    <div className="flex items-center gap-[20px] ml-[35px] mr-[35px] min-w-[289px]">
                        <img src={review.photo} alt={review.name} />

                        <div>
                            <h3 className="font-heading text-[25px] leading-[37.5px] text-darkBlue">{review.name}</h3>
                            <p className="text-[18px] leading-[27px] text-darkGrey">{review.location}</p>
                        </div>
                    </div>

                    <p className="max-w-[244px] ml-[35px] mb-[45px] text-[20px] leading-[30px] text-darkGrey">{review.text}</p>
                </div>
            ))}
        </div>

    </section>
  )
}

export default Testimonials