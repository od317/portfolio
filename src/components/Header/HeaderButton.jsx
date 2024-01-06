import React,{useRef,useEffect, useState} from 'react'
import {gsap} from "gsap"

function HeaderButton({ p }) {
    const projectButton = useRef(null)
    const projectButtonText = useRef(null)
    const hoveredButton = useRef(null)
    const [permission,setPermission] = useState(false)
    const circleSvg = useRef(null)

    let mouseOverFun = ()=>{
        if(!permission)
           return
        projectButton.current.style.zIndex = "10"
        projectButton.current.style.backgroundColor = "#121212"
        projectButtonText.current.style.transform = "translateY(0%)"
    }
    let mouseLeaveFun = ()=>{
        if(!permission)
            return
        projectButton.current.style.zIndex = "-10"
        projectButton.current.style.backgroundColor = "transparent"
        projectButtonText.current.style.transform = "translateY(20%)"
    }

    useEffect(()=>{
       setTimeout(()=>{
        setPermission(true)
        projectButtonText.current.style.transform = 'translateY(20%)'
       },2200)
       setTimeout(()=>{
          circleSvg.current.style.strokeDashoffset=0
       },1900)
    })

    return (
        <div className="w-full h-screen  items-center flex justify-center absolute">
            <div  ref={projectButton} className=" w-[22%] pb-[22%] md:w-[10%] md:pb-[10%] translate-y-[120%] transition-all rounded-full duration-300 -z-20 relative  overflow-hidden  ">
                <label ref={projectButtonText} className="w-full h-full absolute flex md:translate-y-[100%] items-center transition-all duration-300 justify-center text-[100%]  rounded-full text-theme">projects</label>
                <svg className=' absolute ' viewBox="0 0 140 140" preserveAspectRatio="xMinYMin meet">
                        <circle className=' transition-all ease-linear duration-[300ms]' ref={circleSvg} cx="50%" cy="50%" r="69" strokeDashoffset="432.8393859863281" strokeDasharray="432.8393859863281" stroke="#0E8388" strokeWidth="1" fill="none" />
                </svg>    
            </div>

            <button
                ref={hoveredButton}
                onMouseOver={mouseOverFun}
                onMouseLeave={mouseLeaveFun}
                onClick={() => {
                    window.scrollTo({ top: p, behavior: 'smooth' })
                }}

                className="w-[22%] pb-[22%] md:w-[10%] md:pb-[10%]  translate-y-[122%]  absolute z-20  rounded-full">
                
            </button>
                
        </div>
    )
}

export default HeaderButton;
