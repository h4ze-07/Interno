import { brands } from "../utils/links"


const Brands = () => {
  return (
    <section className="max-w-[1200px] w-full mt-[140px] mb-[100px]">

        <div className="flex items-center justify-between mx-[55px]">
            {brands.map( i => (
                <img key={i.id} src={i.photo} alt={i.alt} className="" />
            ))}
        </div>


    </section>
  )
}

export default Brands