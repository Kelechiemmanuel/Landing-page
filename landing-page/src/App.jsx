
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Tools from "./components/Tools";
import Experience from "./components/Experience";
import Thoughts from "./components/Thoughts";
import Contact from "./components/Contact";
import Home from "./components/Home";

const App = () => {
  return (
    <BrowserRouter> 
      <div className="bg-[#131415] min-h">
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

      </div>
    </BrowserRouter>
  );
};

export default App;