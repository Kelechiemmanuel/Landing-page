import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

const Collaboration = () => {
    return (
        <div>
        <Link to="/contact">
            <div className='bg-[#2c2d2e] p-5 rounded-[10px] hover:bg-amber-500 transition-all duration-500 ease-in-out group w-full cursor-pointer'>
                <div className='flex justify-between w-full'>
                    <h1 className='text-white font-bold text-5xl'>Let's <br /> <span className='text-amber-500 group-hover:text-white transition-all duration-500 ease-in-out'>Collaborate</span></h1>
                    <div className='flex justify-center items-center w-15 h-15 rounded-full bg-amber-500 group-hover:bg-white transition-all duration-500 group'>
                        <ArrowRight className="text-white rotate-300 group-hover:text-amber-500" />
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
        </Link>
        </div>
    )
}

export default Collaboration