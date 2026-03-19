import React from 'react'
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jpg";


const Thoughts = () => {
  const cards = [
    {
      id: 1,
      title: "Starting and Growing a Career in Web Design",
      date: "Apr 10 2023",
      image: image1
    },
    {
      id: 2,
      title: "Create a Landing Page That Performs Great",
      date: "Mar 15, 2022",
      image: image2
    },
    {
      id: 3,
      title: "How Can Designers Prepare for the Future?",
      date: "Aug 20, 2024",
      image: image3
    },
    {
      id: 4,
      title: "How to Create an Effective Design Portfolio",
      date: "Sep 04, 2024",
      image: image4
    },
    {
      id: 5,
      title: "Building a Navigation Component with Variables",
      date: "Oct 05 2022",
      image: image5
    },
    {
      id: 6,
      title: "How to Create an Effective Design Portfolio",
      date: "Nov 30 2025",
      image: image1
    },
  ]
  return (
    <div>
      <div className="text-center md:text-center lg:text-left my-5">
        <h1 className='font-bold text-3xl md:text-5xl text-[#f6f6f6]'>Design Thoughts<br /> and <span className='text-amber-500'>Perspectives</span></h1>
      </div>

      <div className="grid grid-cols-1 justify-items-center gap-5 rounded-xl mt-5
                md:grid-cols-2 md:px-20 
                lg:px-0 lg:grid-cols-2
                ">
        {cards.map((card) => (
          <div key={card.id} className="rounded-2xl w-full group overflow-hidden">
            <div className="overflow-hidden">
              <img className="w-full h-60 rounded-tl-2xl rounded-tr-2xl object-cover transition-transform duration-500 group-hover:scale-110 flex shrink-0" src={card.image} alt="project work" />
            </div>
            <div className="rounded-bl-2xl rounded-br-2xl px-5 py-7 bg-[#292a2b]">
              <p className="text-[#f6f6f6]">{card.date}</p>
              <h1 className="font-bold text-[#f6f6f6] text-[18px] group-hover:text-amber-500 transition-all duration-500 ease-in-out">{card.title}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Thoughts