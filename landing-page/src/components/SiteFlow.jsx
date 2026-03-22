import { useState, useEffect } from "react";
import Spinner from "./Spinner";
import icon2 from "../assets/icon2.png";


const SiteFlow = () => {
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, [])

    if (loading) return <Spinner />
    return (
        <div>

            <div className="flex gap-4 items-center">
                <img src={icon2} alt={icon2} className="w-25" />
                <h1 className="font-bold text-5xl text-white">SiteFlow</h1>
            </div>
            <div className="text-white">
                <h2 className="my-10 font-semibold text-3xl">Overview</h2>
                <p>
                    SiteFlow is a cutting-edge website builder that combines intuitive design tools with powerful features for creating responsive, interactive websites. It allows me to
                    bring my ideas to life quickly and efficiently, offering flexibility without the need for extensive coding.
                </p>
            </div>
            <div className="text-white">
                <h2 className="my-10 font-semibold text-3xl">How I Use SiteFlow</h2>
                <p className="my-5">
                    I use SiteFlow to design and build fully responsive websites, leveraging its visual editor to craft stunning layouts, animations, and interactions. The drag-and-drop
                    interface lets me create complex designs effortlessly, while SiteFlow's code components enable deeper customization when needed.
                </p>
                <p className="my-5">
                    SiteFlow is my go-to for prototyping and iterating on website designs. I can rapidly test different layouts and interactions, preview them in real-time, and make instant
                    adjustments, ensuring the final product is polished and user-friendly.
                </p>
                <p className="my-5">
                    For client projects, SiteFlow helps me deliver high-quality, professional websites. Its collaboration features allow me to share prototypes with clients, gather feedback,
                    and make changes on the fly. The ability to export clean, production-ready code streamlines the handoff process.
                </p>
                <p className="my-5">
                    SiteFlow's integration with popular tools like Figma enhances my workflow, enabling seamless transitions between design and development. It's perfect for building everything
                    from portfolio websites to marketing pages with advanced animations and dynamic content.
                </p>
                <h2 className="my-10 font-semibold text-3xl">Why SiteFlow?</h2>
                <p className="my-5">
                    I use SiteFlow to design and build fully responsive websites, leveraging its visual editor to craft stunning layouts, animations, and interactions. The drag-and-drop
                    interface lets me create complex designs effortlessly, while SiteFlow's code components enable deeper customization when needed.
                </p>
            </div>
        </div>
    )
}

export default SiteFlow