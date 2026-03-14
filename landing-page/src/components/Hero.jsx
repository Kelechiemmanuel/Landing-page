import { Mail, Dribbble, Twitter, Instagram } from "lucide-react"
import portfolio from "../assets/portfolio.avif"
import Talk from "./Talk"

const Hero = () => {
    return (
        <div>
            <div className="flex justify-center gap-20 bg-[#131415]">
                <div className="py-10 px-10 bg-[#292a2b] min-w-20] text-center rounded-xl">
                    <img src={portfolio} alt="profile-picture" className="w-60 h-55 object-cover rounded-xl" />
                    <div>
                        <h1 className="font-mono font-bold text-2xl text-[#f6f6f6]">Joshua Emmanuel</h1>
                        <p className="font-mono text-[#f6f6f6]">Product Designer & Developer <br /> Lagos, Nigeria</p>
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
                    <div className="mt-20">
                       <Talk />
                    </div>
                </div>

                <div className="py-10 px-10 bg-[#292a2b]">
                    <div>
                        <div className="mb-10">
                            <h1 className="font-mono font-bold text-7xl text-[#f6f6f6] ">Transforming Your<br /> 
                            Ideas into<span className="text-amber-500"> Reality</span>
                            </h1>
                            <p className="text-[#f6f6f6] text-xl">
                                Passionate about creating intuitive and engaging user experiences.<br />
                                 Specialize in transforming ideas into beautifully crafted products.
                            </p>
                        </div>
                        <div className="grid grid-cols-3">
                            <div>
                                <h1 className="font-bold text-[#f6f6f6] text-7xl">+12</h1>
                                <p className="text-[#f6f6f6] text-xl">YEARS OF <br />EXPERIENCE</p>
                            </div>
                            <div>
                                <h1 className="font-bold text-[#f6f6f6] text-7xl">+46</h1>
                                <p className="text-[#f6f6f6] text-xl">PROJECTS  <br />COMPLETED</p>
                            </div>
                            <div>
                                <h1 className="font-bold text-[#f6f6f6] text-7xl">+20</h1>
                                <p className="text-[#f6f6f6] text-xl">WORLDWIDE  <br />CLIENTS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero