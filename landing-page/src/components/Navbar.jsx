import { Home, File, Hammer, Award, Zap, Mail } from "lucide-react";
import { useState } from "react";
import { NavLinks } from "../constants";

const icons = {
    Home: Home,
    File: File,
    Hammer: Hammer,
    Award: Award,
    Zap: Zap,
    Mail: Mail,
};


const Navbar = () => {
    const [active, setActive] = useState("Home");
    return (
        <div className="flex justify-center items-center w-full h-full py-10 px-20">
            <ul className="flex justify-center items-center gap-3 px-5 py-2 bg-[#292a2b] rounded-xl">
                {NavLinks.map((nav) => {
                    const Icon = icons[nav.icon];
                    return (
                        <li key={nav.id} className="flex justify-center items-center flex-col relative group">
                            <a href="#" className={`text-white rounded-sm p-2
                                ${active === nav.title ? "bg-amber-500" : "hover:bg-amber-500"}
                            `}
                              onClick={() => setActive(nav.title)}
                            > 
                                <Icon className="w-6 h-6" />
                            </a>
                            <span className="font-mono text-sm absolute top-13 hidden group-hover:block text-white">{nav.title}</span>
                        </li>
                    );
                })}
            </ul>
        </div>

    )
}

export default Navbar