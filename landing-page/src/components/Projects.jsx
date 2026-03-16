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
    ]
    return (
        <div>
            <div>
                <div>
                    <h1 className='font-mono font-medium text-6xl text-[#f6f6f6]'>Recent Projects<br /> and <span className='text-amber-500'>Achievements</span></h1>
                </div>

                <div className="grid grid-cols-2 justify-items-center gap-5 rounded-xl mt-5 shrink-0">
                    {cards.map((card) => (
                        <div key={card.id} className="rounded-2xl">
                            <img className="w-90 rounded-tl-2xl rounded-tr-2xl" src={card.image} alt="project work" />
                            <div className="bg-[#292a2b] rounded-bl-2xl rounded-br-2xl px-5 py-7">
                                <h1 className="text-mono text-[#f6f6f6] font-mono text-4xl">{card.title}</h1>
                                <p className="text-mono text-[#f6f6f6]">{card.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects