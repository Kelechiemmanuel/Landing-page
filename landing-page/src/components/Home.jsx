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
const Home = () => {
  const slides = [ portfolio, Dell, Amazon ];
  return (
    <div>
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
        <div>
          <Tools />
        </div>
        <div>
          <Testimony slides={slides}/>
        </div>
        <div>
          <Experience />
        </div>
        <div>
          <Thoughts />
        </div>
        <div>
          <Contact />
        </div>
      </div>
    </div>
  )
}

export default Home