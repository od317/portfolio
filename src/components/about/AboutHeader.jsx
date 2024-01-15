import React,{useEffect,useRef} from 'react'
import gsap from 'gsap'

function AboutHeader() {
     
    const s1 = useRef(null)
    const s2 = useRef(null)
    const s3 = useRef(null)
    const s4 = useRef(null)

    const glass = useRef(null)
    const usand = useRef(null)
    const dsand = useRef(null)
    const sline = useRef(null)

    const ud1= "m14.76134,2.48077l-5.52268,0c-3.20454,0 -3.4517,2.96434 -1.72159,4.57807l4.45866,4.33655l4.5072,-4.33655c1.73011,-1.61372 1.48295,-4.57807 -1.72159,-4.57807z"
    const ud2 = "m12.11718,11.39643l-0.23435,0c-0.13598,0 -0.14647,-0.00035 -0.07306,-0.00054l0.1892,-0.00051l0.19126,0.00051c0.07342,0.00019 0.06293,0.00054 -0.07306,0.00054z"


    const sd1= "m17.25998,21.63021c2.03,0.00615 1.74,0.01744 -2.02,0.01744l-6.47996,0c-3.76,0 -4.05,-0.01129 -2.02,-0.01744l5.1082,-0.01229l5.41176,0.01229z"
    const sd2= "m17.25998,16.42765c2.03,1.84 1.74,5.22 -2.02,5.22l-6.47996,0c-3.76,0 -4.05,-3.38 -2.02,-5.22l5.1082,-3.67765l5.41176,3.67765z"

    const sl1 = 'm11.91379,12.82759c0,0.28867 0,0.28867 -0.01724,0.28636'
    const sl2 = 'm12,12.35897c-0.01509,9.03785 -0.01509,9.03785 -0.00906,9.01101c-0.00604,0.02684 0.00906,-9.01101 0.00906,-9.01101z'


    const testAnimation = ()=>{
          if(usand.current){
               let ul = gsap.timeline({repeat:-1})
               let dl = gsap.timeline({repeat:-1})
               
               dl.
               fromTo(sline.current,{attr:{d:sl1}},{attr:{d:sl2},duration:.1,ease:'linear'})
               .fromTo(dsand.current,{attr:{d:sd1}},{attr:{d:sd2},duration:3,ease:'linear'})
               .fromTo(usand.current,{attr:{d:ud1}},{attr:{d:ud2},duration:3,ease:'linear'},'<')
               .fromTo(glass.current,{rotateZ:'0deg'},{rotateZ:'180deg',duration:.5})

          }
          if(dsand.current){

       }
    }

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

        testAnimation()

    },[])

    return (
            <div id="" className='w-full skillsContainer text-theme z-[10] bg-transparent 
               md:flex md:flex-row md:items-center md:justify-between md:pb-[20%]
               grid grid-cols-2 gap-y-[15%] gap-x-[10%] pb-[30%]'>
                    
            <div style={{transform:"translateY(100%)",opacity:'0%'}} ref={s1} className=' md:w-[18%]  relative text-center text-[300%] flex flex-col items-center'>
            {/* sand hour */}
            <svg ref={glass} width="50" height="50" viewBox="0 0 24 24" className='' fill="none" xmlns="http://www.w3.org/2000/svg">
                
                <path ref={usand} fill='#f5b642' strokeLinejoin="round" strokeLinecap="round" strokeWidth="1.5" d="m12.74741,23.25l-1.49481,0c-0.86737,0 -0.93426,-0.03093 -0.46598,-0.04777l1.20682,-0.04525l1.21995,0.04525c0.46828,0.01684 0.40139,0.04777 -0.46598,0.04777z"/>
                <path ref={dsand} fill='#f5b642' strokeLinejoin="round" strokeLinecap="round" strokeWidth="1.5" d="m17.25998,21.63021c2.03,0.00615 1.74,0.01744 -2.02,0.01744l-6.47996,0c-3.76,0 -4.05,-0.01129 -2.02,-0.01744l5.1082,-0.01229l5.41176,0.01229z"/>
                <path fill='#f5b642' d="m18.01724,14.05172" opacity="NaN" stroke-width="1.5" stroke="#f5b642"/>
                <path ref={sline} fill='#f5b642' d="m11.91379,12.82759c0,8.62069 0,8.62069 -0.01724,8.55172" opacity="NaN" stroke-width="1.5" stroke="#f5b642"/>
                
                <path  d="M15.24 2H8.76004C5.00004 2 4.71004 5.38 6.74004 7.22L17.26 16.78C19.29 18.62 19 22 15.24 22H8.76004C5.00004 22 4.71004 18.62 6.74004 16.78L17.26 7.22C19.29 5.38 19 2 15.24 2Z" stroke="#00ADB5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>

            </svg>

                <label className='text-[70%] text-white ' htmlFor="">
                    Fast
                </label>
                <label className='text-[32%] text-white ' htmlFor="">
                    Fast load times and lag free interaction, my highest priority.
                </label>
            </div>

            <div style={{transform:"translateY(100%)",opacity:'0%'}} ref={s2} className=' md:w-[18%]  relative text-center text-[300%] flex flex-col items-center'>
                <ion-icon name="phone-portrait-outline"></ion-icon>
                <label className='text-[70%] text-white' htmlFor="">
                    Responsive
                </label>
                <label className='text-[32%] text-white' htmlFor="">
                    My layouts will work on any device, big or small.
                </label>
            </div>

            <div style={{transform:"translateY(100%)",opacity:'0%'}} ref={s3} className=' md:w-[18%]  relative text-center text-[300%] flex flex-col items-center'>
                <ion-icon name="bulb-outline"></ion-icon>
                <label className='text-[70%] text-white' htmlFor="">
                        Intuitive
                </label>
                <label className='text-[32%] text-white' htmlFor="">
                        Strong preference for easy to use, intuitive UX/UI.
                </label>
            </div>

            <div style={{transform:"translateY(100%)",opacity:'0%'}} ref={s4} className=' md:w-[18%]  relative text-center text-[300%] flex flex-col items-center'>
                <ion-icon name="rocket-outline"></ion-icon>
                <label className='text-[70%] text-white' htmlFor="">
                    Dynamic
                </label>
                <label className='text-[32%] text-white' htmlFor="">
                    Websites don't have to be static, I love making pages come to life.
                </label>
            </div>

            </div>
  )
}

export default AboutHeader
