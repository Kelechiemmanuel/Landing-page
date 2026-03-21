import React from 'react'
import icon1 from "../assets/icon1.png"
import icon2 from "../assets/icon2.png"
import icon3 from "../assets/icon3.png"
import icon7 from "../assets/icon7.png"
import icon5 from "../assets/icon5.png"
import icon6 from "../assets/icon6.png"
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import SiteFlow from './SiteFlow'
import Pixelo from './Pixelo'
import Juice from './Juice'
import TalkAi from './TalkAi'
import Note from './Note'
import Web from './Web'

const Tools = () => {
  const [active, setActive] = useState(null);

  const handleClick = (id) => {
    setActive(active === id ? null : id);
  };

  const cards = [
    {
      id: 1,
      name: "SiteFlow",
      image: icon2,
      description: "Website Builder",
      explanation: SiteFlow

    },
    {
      id: 2,
      name: "Pixelo",
      image: icon1,
      description: "Design Tool",
      explanation: Pixelo
    },
    {
      id: 3,
      name: "JuiceBox",
      image: icon3,
      description: "Payment Provider",
      explanation: Juice

    },
    {
      id: 4,
      name: "TalkAI",
      image: icon5,
      description: "AI Assistant",
      explanation: TalkAi

    },
    {
      id: 5,
      name: "NoteSpace",
      image: icon6,
      description: "Productivity Tool",
      explanation: Note

    },
    {
      id: 6,
      name: "WebCraft",
      image: icon7,
      description: "React Framework",
      explanation: Web

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
      <div className="grid grid-cols-1 justify-items-center gap-5 rounded-xl mt-5 md:grid-cols-2 md:px-20 lg:px-0 lg:grid-col-2 cursor-pointer">
        {cards.map((card) => {
          return (
            <div key={card.id} className='flex flex-col bg-[#2c2d2e] w-full px-5 py-4 hover:bg-amber-500 transition-all duration-500 ease-in-out justify-center items-center gap-5 rounded-[10px]'
              onClick={() => handleClick(card.id)}
            >
              <div className='w-full flex gap-2 px-2 '>
                <div>
                  <img src={card.image} alt="Tools" className='w-15' />
                </div>
                <div className='w-full'>
                  <h1 className='font-semibold text-2xl text-white'>{card.name}</h1>
                  <p className='text-[12px] text-white w-full'>{card.description}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className="col-span-full mt-5">
        <AnimatePresence mode="wait">
          {cards.map((card) => {
            const ActiveComponent = card.explanation;
            return (
              active === card.id && (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                  className="bg-[#2c2d2e] p-5 rounded-xl"
                >
                  <ActiveComponent />
                </motion.div>
              )
            )
          })}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default Tools