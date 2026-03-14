import Hero from "./components/Hero"
import Navbar from "./components/Navbar"

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