import { Link } from "react-router-dom"
import { useState } from "react"

const Talk = () => {
  return (
    <div className="flex shrink-0 justify-start items-center">
      <Link to="/contact">
         <button className="bg-amber-500 text-[#f6f6f6]  py-3 px-12 cursor-pointer rounded-sm">Let's Talk</button>
      </Link>
         
    </div>
  )
}

export default Talk