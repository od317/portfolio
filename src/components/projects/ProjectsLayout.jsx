import React,{useLayoutEffect,useEffect} from 'react'
import { Parallax } from 'react-scroll-parallax'
import { gsap} from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useParallax } from 'react-scroll-parallax'
function ProjectsLayout() {
  gsap.registerPlugin(ScrollTrigger);
  const {ref} = useParallax({speed:15})


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

  useEffect(()=>{
          ref.current.style.visibility= 'hidden'
          setTimeout(()=>{
            ref.current.style.visibility= 'visible'
          },200)
  })
  
  return (
    <>
        
        <div id='Projects' className=" sticky top-[-5%] w-full flex-col  bg-dark-1 border-t-[1px] border-white  flex items-center justify-center  text-white text-[350%] pb-[15%] pt-[15%]">
                              <div className="  relative w-full  text-cneter flex justify-center after:z-[-1] after:absolute after:w-full after:h-[100rem] after:bg-dark-1 after:content-['_']"> 
                                Projects
                              </div>
        </div>
        <div className='translate-y-[-10%]  pt-[2%] '>
        <div  className='flex flex-row justify-evenly z-[6]  translate-y-[20%]  pb-[30%]   w-screen'>
                    <Parallax speed={-10} className='  z-[6] w-[40%]' >
                      <div onMouseOver={()=>{
                          click()
                      }}   className="   h-[25rem] w-full"> 
                            <div className='typ1'>
                               <img className='w-full object-cover h-full' src="https://hitmanforum-v6-s3-uploads.s3.dualstack.us-west-1.amazonaws.com/original/3X/c/9/c966f7639be7ac0114d6a871876dbc9769e49b9e.jpeg"  alt="" />
                            </div>
                      </div>
                    </Parallax>
                      <div ref={ref} className="   h-[25rem] z-[6] translate-y-[-100%] w-[40%] ">
                          <div className='typ2'>
                            <img className='w-full object-cover h-full' src="https://images.purexbox.com/0c5c9b5424e0f/hitman3-agent.large.jpg"  alt="" />
                          </div>
                      </div>
                      
        </div>
        <div  className='flex flex-row justify-evenly  z-[6] w-screen'>
                      <div  className="   h-[25rem] z-[6] w-[40%] ">
                          <div className='typ3'>
                            <img className='w-full object-cover h-full' src="https://cdn.vox-cdn.com/thumbor/vhS6l1zxQfFVCCQevQfN_zhXoHk=/0x0:1920x1080/1200x0/filters:focal(0x0:1920x1080):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/22394266/hitman_3_berlin_47_gas_station_1920.jpg"  alt="" />
                          </div>
                      </div>
                      <Parallax speed={-15} className='  w-[40%] z-[6] ' >
                      <div  className="   h-[25rem] w-full"> 
                          <div className='typ4'>
                            <img className='w-full object-cover h-full' src="https://static1.thegamerimages.com/wordpress/wp-content/uploads/2021/03/Hitman-3-Dartmoor-Agent-47-At-Dartmoor-Mansion.jpg"  alt="" />
                          </div>
                      </div>
                    </Parallax>
        </div>
        </div>
    </>
    )
}

export default ProjectsLayout
