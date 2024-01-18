import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React,{useEffect,useRef} from 'react'
import Icons from './Icons'

function Bottom() {
  gsap.registerPlugin(ScrollTrigger)
  const d = useRef(null)

  useEffect(()=>{
        gsap.to(d.current,{scrollTrigger:d.current,rotateX:'0deg',ease:'linear',duration:.5,delay:.2})
  },[])

  return (
    <div className='w-full flex bg-dark-1 justify-end'>
      <div className='  lg:w-[70%] flex sm:flex-row flex-col md:border-t-[1px] border-theme'>
        
        <div style={{transform:'rotateX(90deg)',transformOrigin:'top'}} ref={d} className=' sm:w-[40%] w-[100%] pb-[60%] relative  bg-cover bg-dark-1  text-[90%]  '>
        
          <Icons></Icons>

        </div>

        <div className='sm:w-[60%] w-[100%] text-[60%]  px-[0%] md:text-[70%] flex items-center justiy-center text-center'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda totam debitis accusamus omnis molestiae dignissimos necessitatibus eveniet quos aut fugiat obcaecati magnam laudantium voluptate, velit suscipit consequuntur ullam asperiores possimus.
        </div>



      </div>
        
    </div>
  )
}

export default Bottom