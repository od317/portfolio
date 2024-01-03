import React,{useLayoutEffect,useState,useEffect,useRef} from 'react'
import { Parallax } from 'react-scroll-parallax'
import { gsap} from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Project from "./Project"
import NordStrom from "../../assets/imgs/NordStrom.jpg"
import PhotosWeb from "../../assets/imgs/PhotosWeb.jpg"
import WeatherWeb from "../../assets/imgs/WeatherWeb.jpg"


const projects = [
  {
    name:'nordstrom',
    img:NordStrom,
    link:"https://nordstromcloneod317.netlify.app/"
  },
  {
    name:'photos',
    img:PhotosWeb,
    link:"https://photoswebsite.netlify.app/"
  },
  {
    name:'Weather',
    img:WeatherWeb,
    link:"https://comforting-twilight-2c2f14.netlify.app/"
  },
  {
    name:'nordstrom',
    img:"https://static1.thegamerimages.com/wordpress/wp-content/uploads/2021/03/Hitman-3-Dartmoor-Agent-47-At-Dartmoor-Mansion.jpg",
    link:"https://nordstromcloneod317.netlify.app/"
  }
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
      let val = diff >=800 ? 900 - ((diff-800)*1) : 900
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

        <div className='translate-y-[-10%]  pt-[2%] hidden lg:block '>
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

        <div className='grid grid-cols-1 pb-[30%] gap-y-[5%] gap-x-[2%] 
         md:pb-[15%] md:grid-cols-2 md:gap-y-[15%] w-full lg:hidden'>
        <Project project={projects[0]}></Project>
        <Project project={projects[1]}></Project>
        <Project project={projects[2]}></Project>
        <Project project={projects[3]}></Project>

        </div>

    </>
    )
}

export default ProjectsLayout
