import React from 'react'
function Project({project}) {
  return (
        <div className=' relative '>
            <img className='w-full object-cover h-full' src={project.img}  alt="" />
        </div>
  )
}

export default Project