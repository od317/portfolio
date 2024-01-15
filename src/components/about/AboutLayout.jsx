import React,{useRef,useEffect} from 'react'
import AboutHeader from './AboutHeader'
import Skills from './Skills'
import Dsh from '../../hooks/DrawingSvgHook'
function AboutLayout() {
  
  const svg = useRef()
  
  return (
    <>
        <div id='Abouts' className=" sm:sticky sm:top-[0%]  w-full flex-col  bg-dark-1 border-t-[1px] border-theme  flex items-center justify-center  text-white text-[350%] pb-[15%]  pt-[15%]">
            <div  className="  relative w-full  text-cneter flex justify-center after:z-[-1] after:absolute after:w-full after:h-[100rem] after:bg-dark-1 after:content-['_']"> 
                <label id='svg1' className='z-[10] bg-dark-1 w-[100%] text-center text-theme' htmlFor="">
                    About
                </label> 
                {/* <div  className=' hidden sm:block absolute translate-y-[-27%] ' >
                                    <svg  className=" relative w-full  text-cneter flex items-cneter  justify-center " width="300" height="200">
                                        <polygon ref={svg} className="" points="51,20 250,20  150,190 50,20" fill="transparent" stroke="#FF004D" strokeWidth="5" strokeDashoffset="900" strokeDasharray="900"  fillRule="evenodd"/>
                                    </svg>
                </div> */}
            </div>
        </div>
        <div className='z-[10] pb-[25%] sm:pb-[0%]'>
            <AboutHeader></AboutHeader>
            <Skills></Skills>
        </div>
    </>
  )
}

export default AboutLayout
