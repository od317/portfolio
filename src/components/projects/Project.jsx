import React,{useRef,useEffect} from 'react'
import { Link } from 'react-router-dom'
function Project({project}) {
  const v = useRef(null)
  useEffect(()=>{

  },[v])
  return (
        <div className=' relative w-full flex flex-col'>
          <Link to={project.link} className='w-full pb-[55%] relative overflow-hidden'>
            <img className='w-full min-h-full transition-all duration-200 absolute' src={project.img}  alt="" />
            <video onMouseOver={()=>{
                v.current.play()
                v.current.style.opacity="100%"
              }} 
              onMouseLeave={()=>{
                v.current.pause()
                v.current.style.opacity="0%"
              }}
              ref={v} className='min-w-full w-[200%] min-h-full absolute opacity-0 transition-all object-fill ' src={project.video}  type='video/mp4'  />
          </Link>  
            <div className="flex flex-row text-white capitalize py-[3%] px-[2%] bg-dark-1 border-b-[1px] border-b-theme">{project.name}</div>
        </div>
  )
}

export default Project