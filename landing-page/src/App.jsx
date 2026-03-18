import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Tools from "./components/Tools"

const App = () => {
  return (
    <div className="bg-[#131415]">
      <div>
        <Navbar />
        <Hero />
      </div>
    </div>
    
  )
}

export default App