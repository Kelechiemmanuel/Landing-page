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

            <div>
                <div>
                    <div>
                        {cards.map((card) => (
                            <div key={card.id}>
                                <img className="w-50" src={card.image} alt="project work" />
                                <h1>{card.title}</h1>
                                <p>{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects