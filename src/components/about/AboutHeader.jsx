import React,{useEffect,useRef} from 'react'
import gsap from 'gsap'

function AboutHeader() {
  
    const s1 = useRef(null)
    const s2 = useRef(null)
    const s3 = useRef(null)
    const s4 = useRef(null)
  
    useEffect(()=>{
        
        const options = {rootMargin:'0px',root:null,threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]}

        const ob = new IntersectionObserver((entries)=>{
              const [entry] = entries
              if(entry.intersectionRatio>0){
                 entry.target.classList.remove = "skillsContainer"
                 if(s1.current)
                 gsap.fromTo(s1.current,{transform:'translateY(100%)',opacity:"0%"},{transform:'translateY(0%)',duration:.7,opacity:"100%",delay:0})
                 s1.current = null
                 if(s2.current)
                 gsap.fromTo(s2.current,{transform:'translateY(100%)',opacity:"0%"},{transform:'translateY(0%)',duration:.7,opacity:"100%",delay:.3})
                 s2.current = null
                 if(s3.current)
                 gsap.fromTo(s3.current,{transform:'translateY(100%)',opacity:"0%"},{transform:'translateY(0%)',duration:.7,opacity:"100%",delay:.6})
                 s3.current = null
                 if(s4.current)
                 gsap.fromTo(s4.current,{transform:'translateY(100%)',opacity:"0%"},{transform:'translateY(0%)',duration:.7,opacity:"100%",delay:.9})
                 s4.current = null
                }
        },options)

        if(s1.current&&s2.current&&s3.current&&s4.current)
           ob.observe(document.querySelector('.skillsContainer'))

    },[])

    return (
            <div id="" className='w-full skillsContainer text-white z-[10] bg-transparent 
               md:flex md:flex-row md:items-center md:justify-between md:pb-[20%]
               grid grid-cols-2 gap-y-[15%] gap-x-[10%] pb-[60%]'>
                    
            <div style={{transform:"translateY(100%)",opacity:'0%'}} ref={s1} className=' md:w-[18%]  relative text-center text-[300%] flex flex-col items-center'>
                <ion-icon name="timer-outline"></ion-icon>
                <label className='text-[70%]' htmlFor="">
                    Fast
                </label>
                <label className='text-[32%]' htmlFor="">
                    Fast load times and lag free interaction, my highest priority.
                </label>
            </div>

            <div style={{transform:"translateY(100%)",opacity:'0%'}} ref={s2} className=' md:w-[18%]  relative text-center text-[300%] flex flex-col items-center'>
                <ion-icon name="phone-portrait-outline"></ion-icon>
                <label className='text-[70%]' htmlFor="">
                    Responsive
                </label>
                <label className='text-[32%]' htmlFor="">
                    My layouts will work on any device, big or small.
                </label>
            </div>

            <div style={{transform:"translateY(100%)",opacity:'0%'}} ref={s3} className=' md:w-[18%]  relative text-center text-[300%] flex flex-col items-center'>
                <ion-icon name="bulb-outline"></ion-icon>
                <label className='text-[70%]' htmlFor="">
                        Intuitive
                </label>
                <label className='text-[32%]' htmlFor="">
                        Strong preference for easy to use, intuitive UX/UI.
                </label>
            </div>

            <div style={{transform:"translateY(100%)",opacity:'0%'}} ref={s4} className=' md:w-[18%]  relative text-center text-[300%] flex flex-col items-center'>
                <ion-icon name="rocket-outline"></ion-icon>
                <label className='text-[70%]' htmlFor="">
                    Dynamic
                </label>
                <label className='text-[32%]' htmlFor="">
                    Websites don't have to be static, I love making pages come to life.
                </label>
            </div>

            </div>
  )
}

export default AboutHeader
