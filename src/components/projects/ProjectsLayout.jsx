import React,{useLayoutEffect,useState,useEffect,useRef} from 'react'
import { Parallax } from 'react-scroll-parallax'
import { gsap} from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Project from "./Project"

const projects = [
  {img:"https://hitmanforum-v6-s3-uploads.s3.dualstack.us-west-1.amazonaws.com/original/3X/c/9/c966f7639be7ac0114d6a871876dbc9769e49b9e.jpeg"},
  {img:"https://images.purexbox.com/0c5c9b5424e0f/hitman3-agent.large.jpg"},
  {img:"https://cdn.vox-cdn.com/thumbor/vhS6l1zxQfFVCCQevQfN_zhXoHk=/0x0:1920x1080/1200x0/filters:focal(0x0:1920x1080):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/22394266/hitman_3_berlin_47_gas_station_1920.jpg"},
  {img:"https://static1.thegamerimages.com/wordpress/wp-content/uploads/2021/03/Hitman-3-Dartmoor-Agent-47-At-Dartmoor-Mansion.jpg"}
]

import { useParallax } from 'react-scroll-parallax'
function ProjectsLayout() {
  const {ref} = useParallax({speed:15})
  const [ypos,setYpos] = useState(0)
  const svg = useRef()
   
  // useLayoutEffect(()=>{
  //   new IntersectionObserver((entries, observer) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         gsap.fromTo('.typ2',{
  //           rotateX:90,
  //           transformOrigin:'bottom',
  //         },
  //         {      
  //           scrollTrigger:{
  //              trigger:'.typ2',  
  //           },
  //           rotateX:0,
  //           duration:2,
  //         })        }
  //     })
  //   },{}).observe(document.querySelector('.typ2'))

  // },[])

  function handleScroll(){
      setYpos(window.scrollY)
  }

  function handleAnimation(){
      let diff = window.scrollY - document.getElementById('svg1').getBoundingClientRect().top
      let val = diff >=120 ? 900 - ((diff-100)*1.5) : 900
      val = Math.max(val,0)
      svg.current.style.strokeDashoffset=val
  }

  useEffect(()=>{
          ref.current.style.visibility= 'hidden'
          setTimeout(()=>{
            ref.current.style.visibility= 'visible'
          },200)
  },[])


  useEffect(()=>{
    // console.log("svg top is "+document.getElementById('svg1').getBoundingClientRect().top," window is "+ypos)
    window.addEventListener('scroll', handleScroll)
    handleAnimation()
    return () => {
        window.removeEventListener('scroll', handleScroll)
    }

  },[ypos])

  
  return (
    <>
        
        <div id='Projects' className=" sticky top-[-5%] w-full flex-col  bg-dark-1 border-t-[1px] border-white  flex items-center justify-center  text-white text-[350%] pb-[15%]  pt-[15%]">
                              <div  className="  relative w-full  text-cneter flex justify-center after:z-[-1] after:absolute after:w-full after:h-[100rem] after:bg-dark-1 after:content-['_']"> 
                                <label id='svg1' className='z-[10]' htmlFor="">
                                   Projects
                                </label> 
                                <div  className=' absolute translate-y-[-27%] ' >
                                    <svg  className=" relative w-full  text-cneter flex items-cneter  justify-center " width="300" height="200">
                                        <polygon ref={svg} className=" " points="10,20 290,20  290,190 10,190" fill="transparent" stroke="white" strokeWidth="5" strokeDashoffset="900" strokeDasharray="900"  fillRule="evenodd"/>
                                    </svg>
                                </div>
                              </div>

        </div>
        <div className='translate-y-[-10%]  pt-[2%] '>
        <div  className='flex flex-row justify-evenly z-[6]  translate-y-[20%]  pb-[30%]   w-screen'>
                    <Parallax speed={-10} className='  z-[6] w-[40%]' >
                      <div onMouseOver={()=>{
                      }}   className="   h-[25rem] w-full"> 
                           <Project project={projects[0]}></Project>
                      </div>
                    </Parallax>
                      <div ref={ref} className="   h-[25rem] z-[6] translate-y-[-100%] w-[40%] ">
                          <Project project={projects[1]}></Project>
                      </div>
                      
        </div>
        <div  className='flex flex-row justify-evenly  z-[6] w-screen'>
                      <div  className="   h-[25rem] z-[6] w-[40%] ">
                           <Project project={projects[2]}></Project>
                      </div>
                      <Parallax speed={-15} className='  w-[40%] z-[6] ' >
                      <div  className="   h-[25rem] w-full"> 
                           <Project project={projects[3]}></Project>
                      </div>
                    </Parallax>
        </div>
        </div>
    </>
    )
}

export default ProjectsLayout
