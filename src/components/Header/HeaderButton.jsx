import React,{useRef,useEffect, useState} from 'react'
import {gsap} from "gsap"

function HeaderButton({ p }) {
    const projectButton = useRef(null)
    const projectButtonText = useRef(null)
    const hoveredButton = useRef(null)
    const [permission,setPermission] = useState(false)


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
       


       },1900)
    })

    return (
        <div className="w-full h-screen flex items-center  justify-center absolute">
            <div  ref={projectButton} className="w-[10%] pb-[10%] translate-y-[70%] transition-all duration-300 -z-20 relative  overflow-hidden border-white border-[1px] rounded-full">
                <label ref={projectButtonText} className="w-full h-full absolute flex translate-y-[100%] items-center transition-all duration-300 justify-center text-[100%]  rounded-full text-white">projects</label>

            </div>

            <button
                ref={hoveredButton}
                onMouseOver={mouseOverFun}
                onMouseLeave={mouseLeaveFun}
                onClick={() => {
                    window.scrollTo({ top: p, behavior: 'smooth' })
                }}

                className="w-[10%] pb-[10%]  translate-y-[70%]  absolute z-20    rounded-full">
            </button>



        </div>
    )
}

export default HeaderButton;
