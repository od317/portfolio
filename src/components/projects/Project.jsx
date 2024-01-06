import React from 'react'
import { Link } from 'react-router-dom'
function Project({project}) {
  return (
        <div className=' relative w-full flex flex-col'>
          <Link to={project.link} className='w-full pb-[55%] relative overflow-hidden'>
            <img className='w-full min-h-full transition-all duration-200 absolute' src={project.img}  alt="" />
          </Link>  
            <div className="flex flex-row text-white capitalize py-[3%] px-[2%] bg-dark-1 border-b-[1px] border-b-theme">{project.name}</div>
        </div>
  )
}

export default Project