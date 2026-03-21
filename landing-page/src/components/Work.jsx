import { Link } from "react-router-dom"

const Work = () => {
  return (
    <div>
      <div className='group'>
        <Link to="/projects">
          <button className='text-white cursor-pointer'>My Work
            <span className='group-hover:text-amber-500'> &#8594;</span>
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Work