import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const Question = () => {
    const [active, setActive] = useState(null);

    const handleClick = (id) => {
        setActive(active === id ? null : id);
    };
    const questions = [
        {
            id: 1,
            question: "what services do you offer?",
            explanation: "How to Create an Effective Design PortfolioHow to Create an Effective Design Portfolio"
        },
        {
            id: 2,
            question: "what services do you offer?",
            explanation: "How to Create an Effective Design PortfolioHow to Create an Effective Design Portfolio"
        },
        {
            id: 3,
            question: "what services do you offer?",
            explanation: "How to Create an Effective Design PortfolioHow to Create an Effective Design Portfolio"
        },
        {
            id: 4,
            question: "what services do you offer?",
            explanation: "How to Create an Effective Design PortfolioHow to Create an Effective Design Portfolio"
        },
        {
            id: 5,
            question: "what services do you offer?",
            explanation: "How to Create an Effective Design PortfolioHow to Create an Effective Design Portfolio"
        },
    ]
    return (
        <motion.div className="my-25"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            <div className="text-center md:text-center lg:text-left">
                <h1 className='font-bold text-3xl md:text-5xl text-[#f6f6f6]'>Frequently <br /> Asked <span className='text-amber-500'>Questions</span></h1>
            </div>
            {questions.map((item, index) => (
                <div key={item.id} className={`flex w-full justify-between flex-col bg-[#2c2d2e] my-2 p-5 rounded-[10px]
                 
                `} onClick={() => handleClick(item.id)}>
                    <div className="flex w-full justify-between mb-5 cursor-pointer">
                        <p className="font-bold text-white">{item.question}</p>
                        <ChevronDown className={`w-6 h-6 
                            ${active === item.id ? "rotate-180 text-amber-500" : "text-white"}`} />
                    </div>

                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${active === item.id ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"}`}>
                        <p className="text-white">
                            {item.explanation}
                        </p>
                    </div>

                </div>
            ))}
        </motion.div>
    )
}

export default Question