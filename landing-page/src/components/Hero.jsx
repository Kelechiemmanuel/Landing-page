import { Mail, Dribbble, Twitter, Instagram, Contact } from "lucide-react"
import portfolio from "../assets/portfolio.avif"
import { Outlet, useLocation } from "react-router-dom"
import Talk from "./Talk"
import Question from "./Question"
import Collaboration from "./Collaboration"
import { motion } from "framer-motion"
import Spinner from "./Spinner"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"




const Hero = ({ activeComponent }) => {
    const location = useLocation();
    const isHome = location.pathname === "/";
    const isContact = location.pathname === "/contact"
    const getHighlightClass = (componentName) =>
        activeComponent === componentName ? "border-4 border-amber-500 rounded-xl p-3" : "";

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        setLoading(true);
        const timer = setTimeout(() => {
            setLoading(false)
        }, 500);
        return () => clearTimeout(timer);
    }, [location.pathname]);
    if (loading) return <Spinner />
    return (
        <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.98 }}
            animate={{ opacity: 2, y: -12, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.98 }}
            transition={{ duration: 2, ease: "easeOut" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <div className="flex justify-center gap-20 w-full shrink-0 
            flex-col px-5
            lg:flex-row
            md:px-30
            ">
                <div className={`flex flex-col justify-center items-center  ${isHome ? "flex" : "hidden"} py-10 px-20 my-10 bg-[#292a2b] text-center rounded-2xl top-14 h-full
                md:px-20 md:flex
                lg:px-7 lg:sticky  lg:flex
    `}>
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

                <motion.div className="py-10 h-full w-full md:w-full lg:w-[45%]"
                >
                    {loading ? (
                        <Spinner />
                    ) : (
                        <motion.div
                            key={location.pathname}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                type: "spring",
                                stiffness: 120,
                                damping: 14
                            }}
                        >
                            <div>
                                <Outlet />
                            </div>

                            <div className={getHighlightClass("Question")}>
                                <Question />
                            </div>

                            {!isContact && (
                                <div className={getHighlightClass("Collaboration")}>
                                    <Link to="contact">
                                        <Collaboration />
                                    </Link>
                                </div>
                            )}
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Hero