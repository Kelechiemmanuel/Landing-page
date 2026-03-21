import { ArrowRight } from "lucide-react"

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "PixelForge Studios",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus doloremque consequatur a magni, quos perferendisratione harum voluptatum animi maiores"
    },
    {
      id: 2,
      title: "PixelForge Studios",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus doloremque consequatur a magni, quos perferendisratione harum voluptatum animi maiores"
    },
    {
      id: 3,
      title: "PixelForge Studios",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus doloremque consequatur a magni, quos perferendisratione harum voluptatum animi maiores"
    },
    {
      id: 4,
      title: "PixelForge Studios",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus doloremque consequatur a magni, quos perferendisratione harum voluptatum animi maiores"
    },
  ]
  return (
    <div>
      <div className="">
        <div className="text-center md:text-center lg:text-left mb-5">
          <h1 className='font-bold text-3xl md:text-5xl text-[#f6f6f6]'>Over 12 Years of<br /> Design <span className='text-amber-500'> Expertise</span></h1>
        </div>

        <div className=" flex flex-col justify-center items-center gap-5">
          {experiences.map((experience, index) => (
            <div className='bg-[#2c2d2e] py-10 px-5 rounded-[10px] hover:bg-amber-500 transition-all duration-500 ease-in-out group w-full'>
              <div key={experience.id} className='flex justify-between w-full'>
                <h1 className='text-white font-bold text-3xl'>{experience.title}</h1>
                <div className='flex justify-center items-center w-15 h-15 rounded-full bg-amber-500 group-hover:bg-white transition-all duration-500 group'>
                  <ArrowRight className="text-white rotate-300 group-hover:text-amber-500" />
                </div>
              </div>
              <div className="w-[90%]">
                <p className='text-white text-sm pr-20'>
                  {experience.description}
                </p>
              </div>
            </div>
          ))}
        </div>


      </div>
    </div>
  )
}

export default Experience