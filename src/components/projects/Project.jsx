import gsap from 'gsap'
import React,{useRef,useEffect} from 'react'
import { Link } from 'react-router-dom'
function Project({project}) {
  const v = useRef(null)
  const l = useRef(null)

  useEffect(()=>{
    const tl = gsap.timeline({repeat:-1})
    tl.fromTo('#'+project.name+5,{translateX:'0%'},{translateX:'100%',duration:4,ease:'linear'},)
    .fromTo('#'+project.name+4,{translateX:'0%'},{translateX:'100%',duration:4,ease:'linear'},'<')
    .fromTo('#'+project.name+3,{translateX:'0%'},{translateX:'100%',duration:4,ease:'linear'},'<')
    .fromTo('#'+project.name+2,{translateX:'0%'},{translateX:'100%',duration:4,ease:'linear'},'<')
    .fromTo('#'+project.name+1,{translateX:'0%'},{translateX:'100%',duration:4,ease:'linear'},'<')
    .fromTo('#'+project.name+0,{translateX:'0%'},{translateX:'100%',duration:4,ease:'linear'},'<')
    if(window.innerWidth<768)
       tl.revert()
    return()=>{
      tl.revert()
    }
  },[])

  return (
        <div
        onMouseOver={()=>{
          v.current.play()
          v.current.style.opacity="100%"
        }} 
        onMouseLeave={()=>{
          v.current.pause()
          v.current.style.opacity="0%"
        }} className=' relative w-full flex flex-col group cursor-pointer'>
          <Link to={project.link} className='w-full bg-zinc-900 outline-none pb-[55%] relative overflow-hidden'>
            <img className='w-full min-h-full transition-all duration-200 absolute' src={project.img}  alt="" />
            <video
              ref={v} className='min-w-[130%]  absolute opacity-0 transition-all ' src={project.video}  type='video/mp4'  />
          </Link>  
            <div className="flex flex-row relative text-white overflow-hidden  capitalize  bg-dark-1 border-b-[1px] border-b-theme">
                   
                        <label className='w-full opacity-100 transition-all py-[2%] px-[2%]  md:group-hover:opacity-0 duration-[100ms]'  htmlFor="">
                            {project.name}
                        </label>

                        {[...Array(6)].map((v,i)=>{
                             return(
                                  <label key={i} id={`${project.name+i}`} style={{marginLeft:`${30*(i-1)}%`}} className={` py-[2%] px-[2%] opacity-0 md:group-hover:opacity-100 text-center w-[30%] absolute`} htmlFor="">
                                    {project.name}
                                  </label>
                             )
                        })}


            </div>
        </div>
  )
}

export default Project