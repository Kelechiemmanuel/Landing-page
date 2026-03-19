import {ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

const Collaboration = () => {
  return (
    <div>
        <div className='bg-[#2c2d2e] p-5 rounded-[10px] hover:bg-amber-500 transition-all duration-500 ease-in-out group w-full'>
            <div className='flex justify-between w-full'>
                <h1 className='text-white font-bold text-5xl'>Let's <br /> <span className='text-amber-500 group-hover:text-white transition-all duration-500 ease-in-out'>Collaborate</span></h1>
                <div className='flex justify-center items-center w-15 h-15 rounded-full bg-amber-500 group-hover:bg-white transition-all duration-500 ease-in-out relative group'>
                    <ArrowRight className="text-white rotate-300 group-hover:translate-x-20 group-hover:hidden"/>
                    <ArrowRight className="absolute left-0 top-0 hidden group-hover:top-[30%] group-hover:block text-amber-500 rotate-300 transition-all duration-500 group-hover:translate-x-4"/>
                    <Link to="/contact"></Link>
                </div>
            </div>
            <div className="w-[90%]">
                <p className='text-white'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Voluptatibus doloremque consequatur a magni, quos perferendis 
                     ratione harum voluptatum animi maiores?
                </p>
            </div>
        </div>
    </div>
  )
}

export default Collaboration