import icon6 from "../assets/icon6.png"

const Note = () => {
    return (
        <div>

            <div className="flex gap-4 items-center">
                <img src={icon6} alt={icon6} className="w-25" />
                <h1 className="font-bold text-5xl text-white">SiteFlow</h1>
            </div>
            <div className="text-white">
                <h2 className="my-10 font-semibold text-3xl">Overview</h2>
                <p>
                    WebCraft is a powerful React framework that enhances web development with server-side rendering, static site generation, and dynamic routing. It allows me to build fast,
                    scalable web applications with ease and flexibility, streamlining both development and deployment.coding.
                </p>
            </div>
            <div className="text-white">
                <h2 className="my-10 font-semibold text-3xl">How I Use WebCraft</h2>
                <p className="my-5">
                    I use WebCraft to create optimized, high-performance websites and applications. Its server-side rendering ensures faster load times, improving user experience and SEO. The static
                    site generation feature allows me to build fast, pre-rendered pages that are perfect for content-driven sites
                </p>
                <p className="my-5">
                    WebCraft serves as the backbone for my projects, enabling seamless navigation with dynamic routing. The built-in API routes allow me to handle back-end functionality within the
                    same framework, simplifying development and reducing the need for external APIs.
                </p>
                <p className="my-5">
                    For client projects, WebCraft enables me to deliver tailored, high-quality solutions. Whether it's building e-commerce platforms, marketing websites, or complex web applications,
                    WebCraft offers the flexibility and scalability needed to meet a variety of requirements.
                </p>
                <p className="my-5">
                    In terms of collaboration, WebCraft integrates easily with other tools and platforms, making it a great choice for team projects. Its robust ecosystem and strong community support
                    ensure that I can stay on top of the latest best practices and trends in web development.
                </p>
                <h2 className="my-10 font-semibold text-3xl">Why WebCraft?</h2>
                <p className="my-5">
                    Beyond professional use, I leverage WebCraft for personal projects and experiments, utilizing its powerful features to quickly prototype and test new ideas.
                </p>
            </div>
        </div>
    )
}

export default Note