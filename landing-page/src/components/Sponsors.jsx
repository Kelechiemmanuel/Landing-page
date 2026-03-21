// import Amazon from "../assets/Amazon.png"
// import Dell from "../assets/Dell.png"
// import harvard from "../assets/harvard.png"
import Health from "../assets/Health.png"
import Lending from "../assets/Lending.png"
import southwest from "../assets/southwest.png"
import { motion } from "framer-motion"

const Sponsors = () => {
    const slide = [Health, Lending, southwest]
    return (
        <motion.div className=""
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            <div className="relative overflow-hidden">
                <div className="flex gap-8 slide-track">
                    {slide.concat(slide).map((logo, index) => (
                        <div key={index} className="flex shrink-0 w-50 justify-center items-center">
                            <img src={logo} alt="sponsors" className="h-20 w-full bg-white px-10 rounded-sm" />
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

export default Sponsors