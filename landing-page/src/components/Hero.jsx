import { Mail, Dribbble, Twitter, Instagram } from "lucide-react"
import portfolio from "../assets/portfolio.avif"
import Talk from "./Talk"
import Work from "./Work"
import Projects from "./Projects"

const Hero = () => {
    return (
        <div>
            <div className="flex justify-center items-center gap-10 w-full 
            flex-col px-5
            lg:flex-row
            m
            ">
                <div className="flex flex-col justify-center items-center py-10 px-20 bg-[#292a2b]  text-center  rounded-2xl shrink-0
                md:px-60
                lg:px-10 
                ">
                    <img src={portfolio} alt="profile-picture" className="w-60 h-60 object-cover rounded-xl" />
                    <div className="mt-10">
                        <h1 className="font-bold text-2xl text-[#f6f6f6]">Joshua Emmanuel</h1>
                        <p className="text-[#f6f6f6] text-sm">Product Designer & Developer <br /> Lagos, Nigeria</p>
                    </div>
                    <div className="flex gap-5 justify-center items-center my-5">
                        <button className="text-[#f6f6f6] bg-none hover:bg-amber-500 p-1 rounded-sm cursor-pointer">
                            <Mail className="w-6 h-6" />
                        </button>
                        <button className="text-[#f6f6f6] bg-none hover:bg-amber-500 p-1 rounded-sm cursor-pointer">
                            <Dribbble className="w-6 h-6" />
                        </button>
                        <button className="text-[#f6f6f6] bg-none hover:bg-amber-500 p-1 rounded-sm cursor-pointer">
                            <Twitter className="w-6 h-6" />
                        </button>
                        <button className="text-[#f6f6f6] bg-none hover:bg-amber-500 p-1 rounded-sm cursor-pointer">
                            <Instagram className="w-6 h-6" />
                        </button>
                    </div>
                    <div className="mt-5">
                       <Talk />
                    </div>
                </div>

                <div className="py-10 h-full w-full md:w-[60%] lg:w-[45%]">
                    <div className="w-full">
                        <div className="mb-10 text-center lg:text-left">
                            <h1 className="font-semibold text-4xl md:text-5xl lg:text-6xl text-[#f6f6f6] mb-5">Transforming Your
                            Ideas into<span className="text-amber-500"> Reality</span>
                            </h1>
                            <p className="text-[#f6f6f6] text-sm lg:text-[15px] w-140">
                                Passionate about creating intuitive and engaging user experiences.
                                 Specialize in transforming ideas into beautifully crafted products.
                            </p>
                        </div>
                        <div className="grid grid-cols-3 justify-items-center text-center mb-10 w-full 
                        lg:w-[80%] lg:gap-30 
                        ">
                            <div>
                                <h1 className="font-medium text-[#f6f6f6] text-3xl md:text-6xl lg:text-7xl">+12</h1>
                                <p className="text-[#f6f6f6] text-sm lg:text-[15px]">YEARS OF <br />EXPERIENCE</p>
                            </div>
                            <div>
                                <h1 className="font-medium text-[#f6f6f6] text-3xl md:text-6xl lg:text-7xl">+46</h1>
                                <p className="text-[#f6f6f6] text-sm lg:text-[15px]">PROJECTS  <br />COMPLETED</p>
                            </div>
                            <div>
                                <h1 className="font-medium text-[#f6f6f6] text-3xl md:text-6xl lg:text-7xl">+20</h1>
                                <p className="text-[#f6f6f6] text-sm lg:text-[15px]">WORLDWIDE  <br />CLIENTS</p>
                            </div>
                        </div>
                        <div className="flex gap-10 justify-center items-center lg:justify-start mb-20">
                            <Talk />
                            <Work/>
                        </div>
                        <div className="w-full">
                            <p className="text-[#f6f6f6] text-sm text-center">
                                Relied on by companies near,far, and worldwide
                            </p>
                        </div>
                    </div>
                    {/* <div className="my-20">
                        <Projects />
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Hero