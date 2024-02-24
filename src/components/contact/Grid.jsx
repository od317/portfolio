import React, { useRef,useEffect} from 'react'
import gsap from 'gsap'

function Grid({title,text}) {
  const ref = useRef(null)
  useEffect(()=>{
      const options = {rootMargin:'0px',root:null,threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]}
      const io = new IntersectionObserver((entries)=>{
            const [entry] = entries
            if(entry.isIntersecting){
               gsap.fromTo(ref.current,{translateX: title==='Gmail' ?'-50%':'50%',opacity:'0%'},{translateX:'0%',opacity:"100%",duration:1,delay:.3})
               ref.current = null
            }
      },options)
      if(ref.current) io.observe(ref.current)
      return()=>{
             io.unobserve(ref.current)
      }
  },[])
  return (
    <div 
    ref={ref}
    style={{opacity:'0%'}}
    className='md:w-[40%] p-[20%] md:p-[10%] overflow-hidden group flex flex-col items-center relative mt-[10%]
               md:mt-[0%] justify-center border-theme border-[1px] bg-dark-1
               '>
       <label className='text-[130%] text-theme' htmlFor="">{title}</label>
       <label className='text-[100%]' htmlFor="">{text}</label>           
    </div>
  )
}

export default Grid
