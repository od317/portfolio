import React,{useEffect,useRef} from 'react'
import { gsap } from "gsap"
import Bottom from './skills/Bottom'
import Icons from './skills/Icons'
function Skills() {


  return (
    <div className="flex w-full text-white text-[200%] flex-col">
            <Bottom></Bottom>
            {/* <Icons></Icons> */}
    </div>
  )
}

export default Skills