// import Amazon from "../assets/Amazon.png"
// import Dell from "../assets/Dell.png"
// import harvard from "../assets/harvard.png"
import Health from "../assets/Health.png"
import Lending from "../assets/Lending.png"
import southwest from "../assets/southwest.png"

const Sponsors = () => {
     const slide = [Health, Lending, southwest]
  return (
    <div className="">
        <div className="relative overflow-hidden">
            <div className="flex gap-8 slide-track">
                {slide.concat(slide).map((logo, index) => (
                    <div key={index} className="flex shrink-0 w-50 justify-center items-center">
                        <img src={logo} alt="sponsors" className="h-20 w-full bg-white px-10 rounded-sm"/>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Sponsors