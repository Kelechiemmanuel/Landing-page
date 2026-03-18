import { Mail, Dribbble, Twitter, Instagram } from "lucide-react"
import portfolio from "../assets/portfolio.avif"
import { Outlet } from "react-router-dom"
import Talk from "./Talk"
import Work from "./Work"
import Projects from "./Projects"
import Tools from "./Tools"
import Experience from "./Experience"
import { useState } from "react"
import Thoughts from "./Thoughts"

const Hero = () => {
      const [activeComponent, setActiveComponent] = useState("home"); 
    return (
        <div>
            <div className="flex justify-center gap-20 w-full
            flex-col px-5
            lg:flex-row
            md:px-30
            ">
                <div className="flex flex-col justify-center items-center py-10 px-20 my-10 bg-[#292a2b]  text-center rounded-2xl top-10 h-full 
                md:px-60 
                lg:px-7 lg:sticky
                ">
                    <img src={portfolio} alt="profile-picture" className="w-60 h-70 object-top rounded-xl" />
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
                    <div className="my-20">
                        <Projects />
                        <Thoughts />run 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero