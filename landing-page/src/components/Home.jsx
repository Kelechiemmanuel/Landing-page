import Talk from "./Talk"
import Work from "./Work"
import Projects from "./Projects"
import Tools from "./Tools"
import Experience from "./Experience"
import Thoughts from "./Thoughts"
import Contact from "./Contact"
import Sponsors from "./Sponsors"
import Testimony from "./Testimony"
import portfolio from "../assets/portfolio.avif"
import Dell from "../assets/Dell.png"
import Amazon from "../assets/Amazon.png"
import icon1 from "../assets/icon1.png"
import icon2 from "../assets/icon2.png"
import icon3 from "../assets/icon3.png"
// import icon4 from "../assets/icon4.png"
import icon5 from "../assets/icon5.png"
import icon6 from "../assets/icon6.png"
import icon7 from "../assets/icon7.png"
import Spinner from "./Spinner"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"


const Home = () => {
  const slides = [portfolio, Dell, Amazon];
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate("/tools", { state: { id } });
  };

  const cards = [
    {
      id: 1,
      name: "SiteFlow",
      image: icon2,
      description: "Website Builder",
    },
    {
      id: 2,
      name: "Pixelo",
      image: icon1,
      description: "Design Tool",
    },
    {
      id: 3,
      name: "JuiceBox",
      image: icon3,
      description: "Payment Provider",
    },
    {
      id: 4,
      name: "TalkAI",
      image: icon5,
      description: "AI Assistant",
    },
    {
      id: 5,
      name: "NoteSpace",
      image: icon6,
      description: "Productivity Tool",
    },
    {
      id: 6,
      name: "WebCraft",
      image: icon7,
      description: "React Framework",

    }
  ];

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  // }, [])

  // if (loading) return <Spinner />
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.98 }}
      animate={{ opacity: 3, y: -12, scale: 1 }}
      exit={{ opacity: 0, y: -50, scale: 0.98 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}

    >
      <div className="w-full">
        <div className="mb-10 text-center lg:text-left">
          <h1 className="font-semibold text-4xl md:text-5xl lg:text-6xl text-[#f6f6f6] mb-5">Transforming Your
            Ideas into<span className="text-amber-500"> Reality</span>
          </h1>
          <p className="text-[#f6f6f6] text-sm lg:text-[15px]">
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
          <Work />
        </div>

        <div className="w-full mb-10">
          <p className="text-[#f6f6f6] text-sm text-center lg:text-left">
            Relied on by companies near,far, and worldwide
          </p>
        </div>
        <div className="mb-30">
          <Sponsors />
        </div>

        <div>
          <Projects />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-5 rounded-xl mt-5">
          {cards.map((card) => (
            <div key={card.id} className='flex flex-wrap bg-[#2c2d2e] w-full px-2 pr-6 py-4 hover:bg-amber-500 transition-all duration-500 ease-in-out rounded-[10px]'
              onClick={() => handleClick(card.id)}
            >
              <div className='flex justify-start gap-3 w-full cursor-pointer'>
                <div className='flex shrink-0'>
                  <img src={card.image} alt="Tools" className='w-13 shrink-0' />
                </div>
                <div className='w-full'>
                  <h1 className='font-semibold text-[15px] text-white'>{card.name}</h1>
                  <p className='text-[12px] text-white w-full'>{card.description}</p>
                </div>
              </div>
            </div>
          ))}
          {/* <Tools /> */}
        </div>
        <div>
          <Testimony slides={slides} />
        </div>
        {/* <div>
          <Experience />
        </div> */}
        <div>
          <Thoughts />
        </div>
        {/* <div>
          <Contact />
        </div> */}
      </div>
    </motion.div>
  )
}

export default Home