import React from 'react'
function Project({project}) {
  return (
        <div className=' relative '>
            <img className='w-full transition-all duration-200 object-cover h-full' src={project.img}  alt="" />
            <div className="flex flex-row text-white py-[3%] px-[2%] bg-dark-1 border-b-[1px] border-b-white">{project.name}</div>
        </div>
  )
}

export default Project