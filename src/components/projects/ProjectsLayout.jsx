import React,{useLayoutEffect,useState,useEffect,useRef} from 'react'
import { Parallax } from 'react-scroll-parallax'
import Project from "./Project"
import NordStrom from "../../assets/imgs/NordStrom.jpg"
import PhotosWeb from "../../assets/imgs/PhotosWeb.jpg"
import WeatherWeb from "../../assets/imgs/WeatherWeb.jpg"
import Dsh from "../../hooks/DrawingSvgHook"
import nordstromVideo from "../../assets/videos/nordstrom.mp4"

const projects = [
  {
    name:'nordstrom',
    img:NordStrom,
    video:nordstromVideo,
    link:"https://nordstromcloneod317.netlify.app/"
  },
  {
    name:'photos',
    img:PhotosWeb,
    video:nordstromVideo,
    link:"https://photoswebsite.netlify.app/"
  },
  {
    name:'Weather',
    img:WeatherWeb,
    video:nordstromVideo,
    link:"https://comforting-twilight-2c2f14.netlify.app/"
  },
  {
    name:'nordstrom',
    img:"https://static1.thegamerimages.com/wordpress/wp-content/uploads/2021/03/Hitman-3-Dartmoor-Agent-47-At-Dartmoor-Mansion.jpg",
    video:nordstromVideo,
    link:"https://nordstromcloneod317.netlify.app/"
  }
]

import { useParallax } from 'react-scroll-parallax'
function ProjectsLayout() {
  const {ref} = useParallax({speed:15})
  const [ypos,setYpos] = useState(0)
  const svg1 = useRef()
  const svg2 = useRef()
   
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



  Dsh(svg1,900,"svg2")
  Dsh(svg2,900,"svg2")

  useEffect(()=>{
          ref.current.style.visibility= 'hidden'
          setTimeout(()=>{
            ref.current.style.visibility= 'visible'
          },200)
  },[])




  
  return (
    <>
        
        <div id='Projects' className=" sm:sticky sm:top-[0%] w-full flex-col  bg-dark-1 border-t-[1px] border-theme  flex items-center justify-center  text-white text-[350%] md:pb-[15%] pb-[30%] pt-[15%]">           
                              <div  className=" relative text-theme w-full  text-cneter flex justify-center after:z-[-1] after:absolute after:w-full after:h-[100rem] after:bg-dark-1 after:content-['_']"> 
                                <label id='svg2' className='z-[10] bg-dark-1 px-[.2%]' htmlFor="">
                                   Projects
                                </label> 
                                {/* <div  className=' hidden sm:block absolute translate-y-[0%] translate-x-[20%] ' >
                                    <svg  className=" relative w-full  text-cneter flex items-cneter  justify-center " width="300" height="200">
                                        <polygon ref={svg1} className=" " points=" 151,191 50,20 250,20  " fill="transparent" stroke="#FF004D" strokeWidth="5" strokeDashoffset="900" strokeDasharray="900"  fillRule="evenodd"/>
                                    </svg>
                                </div> */}
                                {/* <div  className=' hidden sm:block absolute translate-y-[-57%] translate-x-[-20%]' >
                                    <svg  className=" relative w-full text-cneter flex items-cneter  justify-center " width="300" height="200">
                                        <polygon ref={svg2} className=" " points="  151,20 250,190 51,190 50,190" fill="transparent" stroke="#FF004D" strokeWidth="5" strokeDashoffset="900" strokeDasharray="900"  fillRule="evenodd"/>
                                    </svg>
                                </div> */}
                                <div  className=' hidden sm:block absolute translate-y-[-57%] translate-x-[-20%] ' >
                                    <svg  className=" relative w-full rotate-180  text-cneter flex items-cneter  justify-center " width="300" height="200">
                                        <polygon ref={svg1} className="" points="51,20 250,20  150,190 50,20" fill="transparent" stroke="#FF004D" strokeWidth="5" strokeDashoffset="900" strokeDasharray="900"  fillRule="evenodd"/>
                                    </svg>
                                </div>
                                <div  className=' hidden sm:block absolute translate-y-[0%] translate-x-[20%] ' >
                                    <svg  className=" relative w-full  text-cneter flex items-cneter  justify-center " width="300" height="200">
                                        <polygon ref={svg2} className="" points="51,20 250,20  150,190 50,20" fill="transparent" stroke="#FF004D" strokeWidth="5" strokeDashoffset="900" strokeDasharray="900"  fillRule="evenodd"/>
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
