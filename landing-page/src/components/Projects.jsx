import { useState } from "react";
import template1 from "../assets/template1.avif";
import template2 from "../assets/template2.avif";
import template3 from "../assets/template3.avif";
import template4 from "../assets/template4.avif";

const Projects = () => {
    const cards = [
        {
            id: 1,
            title: "NajmAi",
            desc: "Modern Framer Template",
            image: template1
        },
        {
            id: 2,
            title: "Damas",
            desc: "Modern Framer Template",
            image: template2
        },
        {
            id: 3,
            title: "Faseelh",
            desc: "Modern Framer Template",
            image: template3
        },
        {
            id: 4,
            title: "ABJAD",
            desc: "Modern Framer Template",
            image: template4
        },
        {
            id: 5,
            title: "ABJAD",
            desc: "Modern Framer Template",
            image: template4
        },
        {
            id: 6,
            title: "ABJAD",
            desc: "Modern Framer Template",
            image: template4
        },
    ]
    return (
            <div className="mb-20">
                <div className="text-center md:text-center lg:text-left">
                    <h1 className='font-bold text-3xl md:text-5xl text-[#f6f6f6]'>Recent Projects<br /> and <span className='text-amber-500'>Achievements</span></h1>
                </div>

                <div className="grid grid-cols-1 justify-items-center gap-5 rounded-xl mt-5 
                md:grid-cols-2 md:px-20 
                lg:px-0 lg:grid-cols-2
                ">
                    {cards.map((card) => (
                        <div key={card.id} className="rounded-2xl w-full group overflow-hidden">
                            <div className="overflow-hidden">
                            <img className="w-full h-60 rounded-tl-2xl rounded-tr-2xl object-cover transition-transform duration-500 group-hover:scale-110" src={card.image} alt="project work" />
                            </div>
                            <div className="rounded-bl-2xl rounded-br-2xl px-5 py-7 bg-[#292a2b]">
                                <h1 className="text-[#f6f6f6] text-4xl group-hover:text-amber-500 transition-all duration-500 ease-in-out">{card.title}</h1>
                                <p className="text-[#f6f6f6]">{card.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
    )
}

export default Projects