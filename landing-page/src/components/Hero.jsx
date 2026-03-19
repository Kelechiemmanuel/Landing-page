import { Mail, Dribbble, Twitter, Instagram, Contact } from "lucide-react"
import portfolio from "../assets/portfolio.avif"
import { Outlet } from "react-router-dom"
import Talk from "./Talk"
import Question from "./Question"
import Collaboration from "./Collaboration"
import { motion } from "framer-motion"

const Hero = ({ activeComponent }) => {
    const getHighlightClass = (componentName) =>
        activeComponent === componentName ? "border-4 border-amber-500 rounded-xl p-3" : "";
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 2, y: -12 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 2, ease: "easeOut"  }}
        >
            <div className="flex justify-center gap-20 w-full shrink-0 
            flex-col px-5
            lg:flex-row
            md:px-30
            ">
                <div className="flex flex-col justify-center items-center py-10 px-20 my-10 bg-[#292a2b]  text-center rounded-2xl top-14 h-full 
                md:px-60 
                lg:px-7 lg:sticky
                ">
                    <div className="flex shrink-0 justify-center items-center">
                        <img src={portfolio} alt="profile-picture" className="w-60 h-70 object-top rounded-xl shrink-0" />
                    </div>
                    <div className="mt-10">
                        <h1 className="font-bold text-2xl lg:text-3xl text-[#f6f6f6]">Joshua Emmanuel</h1>
                        <p className="text-[#f6f6f6] text-sm">Product Designer & Developer <br /> Lagos, Nigeria</p>
                    </div>
                    <div className="flex gap-5 justify-center items-center my-5">
                        <button className="text-[#f6f6f6] bg-none hover:bg-amber-500 p-1 rounded-sm cursor-pointer outline-0">
                            <Mail className="w-6 h-6" />
                        </button>
                        <button className="text-[#f6f6f6] bg-none hover:bg-amber-500 p-1 rounded-sm cursor-pointer outline-0">
                            <Dribbble className="w-6 h-6" />
                        </button>
                        <button className="text-[#f6f6f6] bg-none hover:bg-amber-500 p-1 rounded-sm cursor-pointer outline-0">
                            <Twitter className="w-6 h-6" />
                        </button>
                        <button className="text-[#f6f6f6] bg-none hover:bg-amber-500 p-1 rounded-sm cursor-pointer outline-0">
                            <Instagram className="w-6 h-6" />
                        </button>
                    </div>
                    <div className="mt-10">
                        <Talk />
                    </div>
                </div>

                <div className="py-10 h-full w-full md:w-full lg:w-[45%]">
                    <Outlet />

                    <div className={getHighlightClass("Question")}>
                        <Question />
                    </div>
                    <div className={getHighlightClass("Collaboration")}>
                        <Collaboration />
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Hero