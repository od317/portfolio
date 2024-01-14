import React, { useRef,useEffect} from 'react'
import gsap from 'gsap'

function Grid() {
  const ref = useRef(null)
  useEffect(()=>{
      const options = {rootMargin:'0px',root:null,threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]}
      const io = new IntersectionObserver((entries)=>{
            const [entry] = entries
            if(entry.isIntersecting){
               gsap.fromTo(ref.current,{scale:0},{scale:1.13,duration:.35})
               gsap.to(ref.current,{scale:1,duration:.35,delay:.35})
               ref.current = null
            }
      },options)
      if(ref.current) io.observe(ref.current)
  },[])
  return (
    <div 
    onMouseOver={()=>{
      // gsap.to(ref.current,{scale:1})
    }}
    ref={ref}
    style={{scale:0}}
    className='md:w-[40%] p-[20%] md:p-[10%] overflow-hidden group flex items-center relative mt-[10%]
               sm:mt-[0%] justify-center border-theme border-[1px] bg-dark-1'>
       Gmail           
    </div>
  )
}

export default Grid
