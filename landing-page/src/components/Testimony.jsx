import { useState } from "react"
import portfolio from "../assets/portfolio.avif"

const Testimony = () => {
    const slides = [
        {
            id: 1,
            title: "Kelechi Josh",
            image: portfolio,
            description: "Passionate about creating intuitive and engaging user experiences. Specialize in transforming ideas into beautifully crafted products."
        },
        {
            id: 2,
            title: "Kelechi Josh",
            image: portfolio,
            description: "Passionate about creating intuitive and engaging user experiences. Specialize in transforming ideas into beautifully crafted products."
        },
        {
            id: 3,
            title: "Kelechi Josh",
            image: portfolio,
            description: "Passionate about creating intuitive and engaging user experiences. Specialize in transforming ideas into beautifully crafted products."
        },
        {
            id: 4,
            title: "Kelechi Josh",
            image: portfolio,
            description: "Passionate about creating intuitive and engaging user experiences. Specialize in transforming ideas into beautifully crafted products."
        }
    ]

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex(prev =>
            prev === 0 ? slides.length - 1 : prev - 1
        );
    };

    const nextSlide = () => {
        setCurrentIndex(prev =>
            prev === slides.length - 1 ? 0 : prev + 1
        );
    };

    return (
        <div className="w-full max-w-3xl mx-auto">
            <div className="text-center lg:text-left my-20">
                <h1 className='font-bold text-3xl md:text-5xl text-white'>
                    What Clients Say <br />
                    About My <span className='text-amber-500'>Work</span>
                </h1>
            </div>
            <div className="flex justify-end gap-5 my-3">
                <button onClick={prevSlide} className="h-10 w-10 flex items-center justify-center border border-amber-500 text-white rounded-full hover:bg-amber-500 transition">
                    &#8592;
                </button>

                <button
                    onClick={nextSlide}
                    className="h-10 w-10 flex items-center justify-center border border-amber-500 text-white rounded-full hover:bg-amber-500 transition">
                    &#8594;
                </button>
            </div>
            <div className="relative overflow-hidden">

                <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {slides.map((slide) => (
                        <div key={slide.id} className="w-full shrink-0 py-10 px-6 bg-[#2c2d2e] rounded-xl">
                            <div className="flex items-center gap-4 mb-4 rounded-2xl">
                                <img src={slide.image} alt="" className="w-16 h-16 rounded-full object-cover" />
                                <h1 className="text-xl font-bold text-white">
                                    {slide.title}
                                </h1>
                            </div>

                            <p className="text-white text-sm">
                                {slide.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Testimony