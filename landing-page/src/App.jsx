
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Tools from "./components/Tools";
import Experience from "./components/Experience";
import Thoughts from "./components/Thoughts";
import Contact from "./components/Contact";
import Home from "./components/Home";
import { motion } from "framer-motion";

const App = () => {
  return (
    <BrowserRouter> 
      <motion.div className="flex flex-col bg-[#131415] min-h-screen w-full py-10"
          initial={{ opacity: 0, y: 50, scale: 0.98 }}
            animate={{ opacity: 3, y: -12, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.98 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Navbar />
        <Routes >
        <Route path="/" element={<Hero />}>
          <Route index element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/experiences" element={<Experience />} />
          <Route path="/thoughts" element={<Thoughts />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        </Routes>

      </motion.div>
    </BrowserRouter>
  );
};

export default App;