import React,{useEffect,useRef} from 'react'
import { gsap } from "gsap"

function Bottom() {

  const d = useRef(null)

  useEffect(()=>{

    const ob = new IntersectionObserver((entries)=>{
        const[entry] = entries
        if(entry.isIntersecting&& d.current){
         gsap.fromTo(d.current,{rotateX:90},{rotateX:0, duration:.5,transformOrigin:'top'})
         d.current = null 
      }
    },
    {rootMargin:'0px',root:null,threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]})
   if(d.current) ob.observe(d.current)

  },[])

  return (
    <div className='w-full flex justify-center'>
        <div style={{transfrom:'rotateX(90deg)'}} ref={d} className='w-[30%] bg-dark-1 bg-[url("https://hitmanforum-v6-s3-uploads.s3.dualstack.us-west-1.amazonaws.com/original/3X/c/9/c966f7639be7ac0114d6a871876dbc9769e49b9e.jpeg")] text-[90%] mt-[5%] border-t-[1px] border-white'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo ipsa asperiores qui consequatur labore quisquam, harum ad deleniti atque ab enim earum nesciunt eligendi quibusdam accusantium. Beatae earum sed fugiat.
        </div>
    </div>
  )
}

export default Bottom