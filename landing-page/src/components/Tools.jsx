import React from 'react'
import icon1 from "../assets/icon1.png"
import icon2 from "../assets/icon2.png"
import icon3 from "../assets/icon3.png"
import icon7 from "../assets/icon7.png"
import icon5 from "../assets/icon5.png"
import icon6 from "../assets/icon6.png"
import { motion } from 'framer-motion'

const Tools = () => {

  const cards = [
    {
      id: 1,
      name: "SiteFlow",
      image: icon2,
      description: "Website Builder"

    },
    {
      id: 2,
      name: "Pixelo",
      image: icon1,
      description: "Design Tool"

    },
    {
      id: 3,
      name: "JuiceBox",
      image: icon3,
      description: "Payment Provider"

    },
    {
      id: 4,
      name: "TalkAI",
      image: icon5,
      description: "AI Assistant"

    },
    {
      id: 5,
      name: "NoteSpace",
      image: icon6,
      description: "Productivity Tool"

    },
    {
      id: 6,
      name: "WebCraft",
      image: icon7,
      description: "React Framework"

    }
  ]
  return (
    <motion.div className=''
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="text-center md:text-center lg:text-left">
        <h1 className='font-bold text-3xl md:text-5xl text-[#f6f6f6]'>Top-Tier Tools for<br /> Exceptional <span className='text-amber-500'>Results</span></h1>
      </div>
      <div className="grid grid-cols-1 justify-items-center gap-5 rounded-xl mt-5 md:grid-cols-2 md:px-20 lg:px-0 lg:grid-cols-2">
        {cards.map((card) => (
          <div key={card.id} className='flex bg-[#2c2d2e] w-full px-5 py-4 hover:bg-amber-500 transition-all duration-500 ease-in-out justify-center items-center gap-5 rounded-[10px]'>
            <div>
              <img src={card.image} alt="Tools" className='w-15' />
            </div>
            <div className='w-full'>
              <h1 className='font-semibold text-2xl text-white'>{card.name}</h1>
              <p className='text-sm text-white'>{card.description}</p>
            </div>
          </div>
        ))}

      </div>
    </motion.div>
  )
}

export default Tools