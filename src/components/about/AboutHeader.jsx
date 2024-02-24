import React,{useEffect,useRef} from 'react'
import gsap from 'gsap'

function AboutHeader() {
    
    const themeColor = '#00ADB5'

    const s1 = useRef(null)
    const s2 = useRef(null)
    const s3 = useRef(null)
    const s4 = useRef(null)


    const responsive = useRef(null)

    const r1 = 'M7 21C7 21 8.5 20 12 20M12 20C15.5 20 17 21 17 21M12 20V17M6.2 17H17.8C18.9201 17 19.4802 17 19.908 16.782C20.2843 16.5903 20.5903 16.2843 20.782 15.908C21 15.4802 21 14.9201 21 13.8V6.2C21 5.0799 21 4.51984 20.782 4.09202C20.5903 3.71569 20.2843 3.40973 19.908 3.21799C19.4802 3 18.9201 3 17.8 3H6.2C5.0799 3 4.51984 3 4.09202 3.21799C3.71569 3.40973 3.40973 3.71569 3.21799 4.09202C3 4.51984 3 5.07989 3 6.2V13.8C3 14.9201 3 15.4802 3.21799 15.908C3.40973 16.2843 3.71569 16.5903 4.09202 16.782C4.51984 17 5.07989 17 6.2 17Z'
    const r2 = 'M10 3V4.4C10 4.96005 10 5.24008 10.109 5.45399C10.2049 5.64215 10.3578 5.79513 10.546 5.89101C10.7599 6 11.0399 6 11.6 6H12.4C12.9601 6 13.2401 6 13.454 5.89101C13.6422 5.79513 13.7951 5.64215 13.891 5.45399C14 5.24008 14 4.96005 14 4.4V3M9.2 21H14.8C15.9201 21 16.4802 21 16.908 20.782C17.2843 20.5903 17.5903 20.2843 17.782 19.908C18 19.4802 18 18.9201 18 17.8V6.2C18 5.0799 18 4.51984 17.782 4.09202C17.5903 3.71569 17.2843 3.40973 16.908 3.21799C16.4802 3 15.9201 3 14.8 3H9.2C8.0799 3 7.51984 3 7.09202 3.21799C6.71569 3.40973 6.40973 3.71569 6.21799 4.09202C6 4.51984 6 5.07989 6 6.2V17.8C6 18.9201 6 19.4802 6.21799 19.908C6.40973 20.2843 6.71569 20.5903 7.09202 20.782C7.51984 21 8.07989 21 9.2 21Z'


  

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
            
           
           // let mobile = gsap.timeline({repeat:-1,yoyo:true})
            // mobile.
            // fromTo(responsive.current,{attr:{d:r2}},{attr:{d:r1},duration:2,ease:'linear',yoyo:true})

            
        return ()=>{
            ob.unobserve(document.querySelector('.skillsContainer'))
        }
},[])

    return (
            <div id="" className='w-full skillsContainer text-theme z-[10] bg-transparent 
               md:flex md:flex-row md:items-center md:justify-between md:pb-[20%]
               grid grid-cols-2 gap-y-[20%] gap-x-[10%] pb-[35%]'>

            <Fast s1={s1}></Fast>

            {/* responsive */}

            <Mobile s2={s2}></Mobile>

            {/* lamp */}

            <Lamp s3={s3}></Lamp>

            {/* rocket */}
            <Rocket s4={s4}></Rocket>

            </div>
  )
}

const Fast = ({s1})=>{

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


    useEffect(()=>{
            let gtl = gsap.timeline({repeat:-1})
            gtl.
            fromTo(sline.current,{attr:{d:sl1}},{attr:{d:sl2},duration:.1,ease:'linear'})
            .fromTo(dsand.current,{attr:{d:sd1}},{attr:{d:sd2},duration:3,ease:'linear'})
            .fromTo(usand.current,{attr:{d:ud1}},{attr:{d:ud2},duration:3,ease:'linear'},'<')
            .fromTo(glass.current,{rotateZ:'0deg'},{rotateZ:'180deg',duration:.5})


        return ()=>{
            gtl.revert()
        }
    },[])

        return(
            <div style={{transform:"translateY(100%)",opacity:'0%'}} ref={s1} className=' md:w-[18%]  relative text-center text-[300%] flex flex-col items-center'>
            <svg ref={glass} width="50" height="50" viewBox="0 0 24 24" className='' fill="none" xmlns="http://www.w3.org/2000/svg">
                
                <path ref={usand} fill='#00ADB5' strokeLinejoin="round" strokeLinecap="round" strokeWidth="1.5" d="m12.74741,23.25l-1.49481,0c-0.86737,0 -0.93426,-0.03093 -0.46598,-0.04777l1.20682,-0.04525l1.21995,0.04525c0.46828,0.01684 0.40139,0.04777 -0.46598,0.04777z"/>
                <path ref={dsand} fill='#00ADB5' strokeLinejoin="round" strokeLinecap="round" strokeWidth="1.5" d="m17.25998,21.63021c2.03,0.00615 1.74,0.01744 -2.02,0.01744l-6.47996,0c-3.76,0 -4.05,-0.01129 -2.02,-0.01744l5.1082,-0.01229l5.41176,0.01229z"/>
                <path fill='#00ADB5' d="m18.01724,14.05172" opacity="NaN" strokeWidth="1.5" stroke="#00ADB5"/>
                <path ref={sline} fill='#00ADB5' d="m11.91379,12.82759c0,8.62069 0,8.62069 -0.01724,8.55172" opacity="NaN" strokeWidth="1.5" stroke="#00ADB5"/>
                
                <path d="M15.24 2H8.76004C5.00004 2 4.71004 5.38 6.74004 7.22L17.26 16.78C19.29 18.62 19 22 15.24 22H8.76004C5.00004 22 4.71004 18.62 6.74004 16.78L17.26 7.22C19.29 5.38 19 2 15.24 2Z" stroke="#00ADB5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>

            </svg>

                <label className='text-[70%] text-white ' htmlFor="">
                    Fast
                </label>
                <label className='text-[32%] text-white ' htmlFor="">
                    Fast load times and lag free interaction, my highest priority.
                </label>
            </div>
        )
}


const Mobile = ({s2})=>{

    const r = useRef(null)
    
    const d1 = 'm14.76121,41.16375l20.47758,0m-22.11579,-7.18389l23.754,0c2.29369,0 3.44064,0 4.31667,-0.39152c0.77057,-0.34429 1.39719,-0.89386 1.78974,-1.56968c0.44641,-0.76832 0.44641,-1.77424 0.44641,-3.78591l0,-13.64938c0,-2.01167 0,-3.01752 -0.44641,-3.78587c-0.39256,-0.67588 -1.01917,-1.22537 -1.78974,-1.56973c-0.87603,-0.3915 -2.02298,-0.3915 -4.31667,-0.3915l-23.754,0c-2.29369,0 -3.44056,0 -4.31663,0.3915c-0.77063,0.34436 -1.39717,0.89386 -1.7898,1.56973c-0.44639,0.76835 -0.44639,1.77419 -0.44639,3.78587l0,13.64938c0,2.01167 0,3.01759 0.44639,3.78591c0.39264,0.67582 1.01917,1.22539 1.7898,1.56968c0.87607,0.39152 2.02292,0.39152 4.31663,0.39152z'
    // const d2 = 'M7 21C7 21 8.5 20 12 20M12 20C15.5 20 17 21 17 21M12 20V17M6.2 17H17.8C18.9201 17 19.4802 17 19.908 16.782C20.2843 16.5903 20.5903 16.2843 20.782 15.908C21 15.4802 21 14.9201 21 13.8V6.2C21 5.0799 21 4.51984 20.782 4.09202C20.5903 3.71569 20.2843 3.40973 19.908 3.21799C19.4802 3 18.9201 3 17.8 3H6.2C5.0799 3 4.51984 3 4.09202 3.21799C3.71569 3.40973 3.40973 3.71569 3.21799 4.09202C3 4.51984 3 5.07989 3 6.2V13.8C3 14.9201 3 15.4802 3.21799 15.908C3.40973 16.2843 3.71569 16.5903 4.09202 16.782C4.51984 17 5.07989 17 6.2 17Z'
    const d2 = 'm18.75784,4.9896l12.51787,0m-13.53608,43.40091l14.52073,0c1.40213,0 2.10325,0 2.63877,-0.39152c0.47105,-0.34429 0.85409,-0.89386 1.09406,-1.56968c0.27289,-0.76832 0.27289,-1.77424 0.27289,-3.78591l0,-35.28681c0,-2.01167 0,-3.01752 -0.27289,-3.78587c-0.23997,-0.67588 -0.62301,-1.22537 -1.09406,-1.56973c-0.53551,-0.3915 -1.23664,-0.3915 -2.63877,-0.3915l-14.52073,0c-1.40213,0 -2.1032,0 -2.63874,0.3915c-0.47109,0.34436 -0.85408,0.89386 -1.0941,1.56973c-0.27288,0.76835 -0.27288,1.77419 -0.27288,3.78587l0,35.28681c0,2.01167 0,3.01759 0.27288,3.78591c0.24002,0.67582 0.62301,1.22539 1.0941,1.56968c0.53554,0.39152 1.2366,0.39152 2.63874,0.39152z'
    useEffect(()=>{
        const tl = gsap.timeline({repeat:-1,yoyo:true})
        tl.fromTo(r.current,{attr:{d:d1}},{attr:{d:d2},duration:2,ease:'elastic.inOut'})
        return ()=>{
               tl.revert()
        }
    },[])

      return(<>
            <div style={{transform:"translateY(100%)",opacity:'0%'}} ref={s2} className=' md:w-[18%]  relative text-center text-[300%] flex flex-col items-center'>
                {/* <ion-icon name="phone-portrait-outline"></ion-icon> */}
                <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" fill="none">
                    <path ref={r} stroke="#00ADB5" d="m14.76121,41.16375l20.47758,0m-22.11579,-7.18389l23.754,0c2.29369,0 3.44064,0 4.31667,-0.39152c0.77057,-0.34429 1.39719,-0.89386 1.78974,-1.56968c0.44641,-0.76832 0.44641,-1.77424 0.44641,-3.78591l0,-13.64938c0,-2.01167 0,-3.01752 -0.44641,-3.78587c-0.39256,-0.67588 -1.01917,-1.22537 -1.78974,-1.56973c-0.87603,-0.3915 -2.02298,-0.3915 -4.31667,-0.3915l-23.754,0c-2.29369,0 -3.44056,0 -4.31663,0.3915c-0.77063,0.34436 -1.39717,0.89386 -1.7898,1.56973c-0.44639,0.76835 -0.44639,1.77419 -0.44639,3.78587l0,13.64938c0,2.01167 0,3.01759 0.44639,3.78591c0.39264,0.67582 1.01917,1.22539 1.7898,1.56968c0.87607,0.39152 2.02292,0.39152 4.31663,0.39152z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" id="svg_1"/>
                </svg>
                <label className='text-[70%] text-white' htmlFor="">
                    Responsive
                </label>
                <label className='text-[32%] text-white' htmlFor="">
                    My layouts will work on any device, big or small.
                </label>
            </div>
      </>)
}


const Lamp =({s3})=>{

       const p = useRef(null)

       const d1 = 'm14.627,14.82l-0.2437,-0.4366l0.2437,0.4366zm-4.9714,1.6966l-0.49321,0.0822l0.49321,-0.0822zm4.6887,0l-0.4932,-0.0821l0,0l0.4932,0.0821zm1.39614,-1.44873c-0.1968,-0.1937 -0.5133,-0.1913 -0.707,0.0055c-0.1938,0.1968 -0.1913,0.5134 0.0055,0.7071l0.7015,-0.7126zm0.1874,1.5876c-0.187,0.40692 0.5134,0.1913 0.7071,-0.0055c0.1937,-0.1968 0.1912,-0.5134 -0.0056,-0.7071l-0.7015,0.7126zm-2.48838,-7.84364c-0.2761,0 -0.5,0.22386 -0.5,0.5c0,0.2761 0.2239,0.5 0.5,0.5l0,-1zm0.8889,1c0.2761,0 0.5,-0.2239 0.5,-0.5c0,-0.27614 -0.2239,-0.5 -0.5,-0.5l0,1zm0.98451,-4.20788c-0.1968,0.19372 -0.1993,0.5103 -0.0056,0.70709c0.1937,0.19679 0.5103,0.19928 0.7071,0.00557l-0.7015,-0.71266zm1.5904,-0.16234c0.1968,-0.19372 0.1993,-0.5103 0.0055,-0.70709c-0.1937,-0.19679 -0.5103,-0.19928 -0.707,-0.00557l0.7015,0.71266zm-8.6191,0.875c0.41001,0.10842 0.34279,0.10593 0.70708,-0.00557c0.36429,-0.1115 1.1294,-0.93981 -0.00556,-0.70709l-0.70152,0.71266zm-0.18737,-1.58766c0.187,-0.19371 -0.51337,-0.19122 -0.70709,0.00557c-0.19372,0.19679 -0.19122,0.51337 0.00557,0.70709l0.70152,-0.71266zm2.59167,5.12552c0.27614,0 0.5,-0.2239 0.5,-0.5c0,-0.27614 -0.22386,-0.5 -0.5,-0.5l0,1zm-0.88889,-1c-0.27614,0 -0.5,0.22386 -0.5,0.5c0,0.2761 0.22386,0.5 0.5,0.5l0,-1zm-0.88118,7.09657c0.19679,-0.1937 0.19929,-0.5103 0.00557,-0.7071c-0.19372,-0.1968 -0.51029,-0.1992 -0.70709,-0.0055l0.70152,0.7126zm-1.59041,0.1624c-0.19679,0.1937 -0.19928,0.5103 -0.00556,0.7071c0.19372,0.1968 0.51029,0.1992 0.70708,0.0055l-0.70152,-0.7126zm3.33871,2.38655c-0.2762,0 -0.5,0.2239 -0.5,0.5c0,0.2761 0.2238,0.5 0.5,0.5l0,-1zm2.6666,1c0.2762,0 0.5,-0.2239 0.5,-0.5c0,-0.2761 -0.2238,-0.5 -0.5,-0.5l0,1zm-6.16663,-9.25c0,-2.61596 2.1565,-4.75 4.83333,-4.75l0,-1c-3.21421,0 -5.83333,2.56697 -5.83333,5.75l1,0zm4.83333,-4.75c2.6768,0 4.8333,2.13404 4.8333,4.75l1,0c0,-3.18303 -2.6191,-5.75 -5.8333,-5.75l0,1zm4.8333,4.75c0,1.7681 -0.9833,3.3147 -2.45,4.1334l0.4875,0.8732c1.7653,-0.9855 2.9625,-2.8561 2.9625,-5.0066l-1,0zm-2.45,4.1334c-0.7026,0.3922 -1.5154,0.6166 -2.3833,0.6166l0,1c1.0423,0 2.0225,-0.2699 2.8708,-0.7434l-0.4875,-0.8732zm-2.3833,0.6166c-0.8679,0 -1.6807,-0.2244 -2.38335,-0.6166l-0.48742,0.8732c0.84829,0.4735 1.82847,0.7434 2.87077,0.7434l0,-1zm-2.38335,-0.6166c-1.46661,-0.8187 -2.44998,-2.3653 -2.44998,-4.1334l-1,0c0,2.1505 1.19727,4.0211 2.96256,5.0066l0.48742,-0.8732zm0.53215,2.051l-0.28265,-1.6966l-0.98641,0.1643l0.28265,1.6967l0.98641,-0.1644zm3.985,-1.6966l-0.2827,1.6967l0.9864,0.1643l0.2827,-1.6966l-0.9864,-0.1644zm0.90514,1.04267l0.8889,0.875l0.7015,-0.7126l-0.8889,-0.875l-0.7015,0.7126zm-1.59948,-5.96864l0.8889,0l0,-1l-0.8889,0l0,1zm2.57491,-3.49522l0.8889,-0.875l-0.7015,-0.71266l-0.8889,0.875l0.7015,0.71266zm-7.02868,-0.71266l-0.88889,-0.875l-0.70152,0.71266l0.88889,0.875l0.70152,-0.71266zm1.70278,3.25052l-0.88889,0l0,1l0.88889,0l0,-1zm-2.47159,6.38397l-0.88889,0.875l0.70152,0.7126l0.93153,-0.96029l-0.74416,-0.62731zm5.25032,1.51155l-2.9344,0l0,1l2.9344,0l0,-1zm-2.8005,2.75l2.6666,0l0,-1l-2.6666,0l0,1zm3.1844,-3.0655c-0.0293,0.1762 -0.1873,0.3155 -0.3839,0.3155l0,1c0.6741,0 1.2587,-0.4816 1.3703,-1.1512l-0.9864,-0.1643zm-4.68871,0.1643c0.11156,0.6696 0.69624,1.1512 1.37041,1.1512l0,-1c-0.1967,0 -0.3546,-0.1393 -0.384,-0.3156l-0.98641,0.1644z'
       const d2 = 'm14.627,14.82l-0.2437,-0.4366l0.2437,0.4366zm-4.9714,1.6966l-0.49321,0.0822l0.49321,-0.0822zm4.6887,0l-0.4932,-0.0821l0,0l0.4932,0.0821zm3.7842,-2.6854c-0.1968,-0.1937 -0.5133,-0.1913 -0.707,0.0055c-0.1938,0.1968 -0.1913,0.5134 0.0055,0.7071l0.7015,-0.7126zm0.1874,1.5876c0.1968,0.1937 0.5134,0.1913 0.7071,-0.0055c0.1937,-0.1968 0.1912,-0.5134 -0.0056,-0.7071l-0.7015,0.7126zm0.7952,-5.6688c-0.2761,0 -0.5,0.22386 -0.5,0.5c0,0.2761 0.2239,0.5 0.5,0.5l0,-1zm0.8889,1c0.2761,0 0.5,-0.2239 0.5,-0.5c0,-0.27614 -0.2239,-0.5 -0.5,-0.5l0,1zm-2.1285,-5.23133c-0.1968,0.19372 -0.1993,0.5103 -0.0056,0.70709c0.1937,0.19679 0.5103,0.19928 0.7071,0.00557l-0.7015,-0.71266zm1.5904,-0.16234c0.1968,-0.19372 0.1993,-0.5103 0.0055,-0.70709c-0.1937,-0.19679 -0.5103,-0.19928 -0.707,-0.00557l0.7015,0.71266zm-14.03488,0.875c0.19679,0.19371 0.51337,0.19122 0.70708,-0.00557c0.19372,-0.19679 0.19123,-0.51337 -0.00556,-0.70709l-0.70152,0.71266zm-0.18737,-1.58766c-0.1968,-0.19371 -0.51337,-0.19122 -0.70709,0.00557c-0.19372,0.19679 -0.19122,0.51337 0.00557,0.70709l0.70152,-0.71266zm-0.35076,6.10633c0.27614,0 0.5,-0.2239 0.5,-0.5c0,-0.27614 -0.22386,-0.5 -0.5,-0.5l0,1zm-0.88889,-1c-0.27614,0 -0.5,0.22386 -0.5,0.5c0,0.2761 0.22386,0.5 0.5,0.5l0,-1zm2.57298,4.7938c0.19679,-0.1937 0.19929,-0.5103 0.00557,-0.7071c-0.19372,-0.1968 -0.51029,-0.1992 -0.70709,-0.0055l0.70152,0.7126zm-1.59041,0.1624c-0.19679,0.1937 -0.19928,0.5103 -0.00556,0.7071c0.19372,0.1968 0.51029,0.1992 0.70708,0.0055l-0.70152,-0.7126zm5.68413,3.7938c-0.2762,0 -0.5,0.2239 -0.5,0.5c0,0.2761 0.2238,0.5 0.5,0.5l0,-1zm2.6666,1c0.2762,0 0.5,-0.2239 0.5,-0.5c0,-0.2761 -0.2238,-0.5 -0.5,-0.5l0,1zm-6.16663,-9.25c0,-2.61596 2.1565,-4.75 4.83333,-4.75l0,-1c-3.21421,0 -5.83333,2.56697 -5.83333,5.75l1,0zm4.83333,-4.75c2.6768,0 4.8333,2.13404 4.8333,4.75l1,0c0,-3.18303 -2.6191,-5.75 -5.8333,-5.75l0,1zm4.8333,4.75c0,1.7681 -0.9833,3.3147 -2.45,4.1334l0.4875,0.8732c1.7653,-0.9855 2.9625,-2.8561 2.9625,-5.0066l-1,0zm-2.45,4.1334c-0.7026,0.3922 -1.5154,0.6166 -2.3833,0.6166l0,1c1.0423,0 2.0225,-0.2699 2.8708,-0.7434l-0.4875,-0.8732zm-2.3833,0.6166c-0.8679,0 -1.6807,-0.2244 -2.38335,-0.6166l-0.48742,0.8732c0.84829,0.4735 1.82847,0.7434 2.87077,0.7434l0,-1zm-2.38335,-0.6166c-1.46661,-0.8187 -2.44998,-2.3653 -2.44998,-4.1334l-1,0c0,2.1505 1.19727,4.0211 2.96256,5.0066l0.48742,-0.8732zm0.53215,2.051l-0.28265,-1.6966l-0.98641,0.1643l0.28265,1.6967l0.98641,-0.1644zm3.985,-1.6966l-0.2827,1.6967l0.9864,0.1643l0.2827,-1.6966l-0.9864,-0.1644zm3.2932,-0.194l0.8889,0.875l0.7015,-0.7126l-0.8889,-0.875l-0.7015,0.7126zm1.6841,-3.7938l0.8889,0l0,-1l-0.8889,0l0,1zm-0.5381,-4.51867l0.8889,-0.875l-0.7015,-0.71266l-0.8889,0.875l0.7015,0.71266zm-12.44446,-0.71266l-0.88889,-0.875l-0.70152,0.71266l0.88889,0.875l0.70152,-0.71266zm-1.23965,4.23133l-0.88889,0l0,1l0.88889,0l0,-1zm0.98257,4.0812l-0.88889,0.875l0.70152,0.7126l0.88889,-0.875l-0.70152,-0.7126zm7.59574,2.9188l-2.9344,0l0,1l2.9344,0l0,-1zm-2.8005,2.75l2.6666,0l0,-1l-2.6666,0l0,1zm3.1844,-3.0655c-0.0293,0.1762 -0.1873,0.3155 -0.3839,0.3155l0,1c0.6741,0 1.2587,-0.4816 1.3703,-1.1512l-0.9864,-0.1643zm-4.68871,0.1643c0.11156,0.6696 0.69624,1.1512 1.37041,1.1512l0,-1c-0.1967,0 -0.3546,-0.1393 -0.384,-0.3156l-0.98641,0.1644z'
      
       useEffect(()=>{
           const tl = gsap.timeline({repeat:-1,yoyo:true})
           tl.fromTo(p.current,{attr:{d:d1}},{attr:{d:d2},duration:2,ease:'elastic.inOut'})
           return ()=>{
                  tl.revert()
           }
       },[])
      
      return(<>
        <div style={{transform:"translateY(100%)",opacity:'0%'}} ref={s3} className=' md:w-[18%]  relative text-center text-[300%] flex flex-col items-center'>
                    <svg width="60" height="60" viewBox="0 0 24 24"  fill="none" xmlns="http://www.w3.org/2000/svg">
                             <path ref={p} d="m14.627,14.82l-0.2437,-0.4366l0.2437,0.4366zm-4.9714,1.6966l-0.49321,0.0822l0.49321,-0.0822zm4.6887,0l-0.4932,-0.0821l0,0l0.4932,0.0821zm3.7842,-2.6854c-0.1968,-0.1937 -0.5133,-0.1913 -0.707,0.0055c-0.1938,0.1968 -0.1913,0.5134 0.0055,0.7071l0.7015,-0.7126zm0.1874,1.5876c0.1968,0.1937 0.5134,0.1913 0.7071,-0.0055c0.1937,-0.1968 0.1912,-0.5134 -0.0056,-0.7071l-0.7015,0.7126zm0.7952,-5.6688c-0.2761,0 -0.5,0.22386 -0.5,0.5c0,0.2761 0.2239,0.5 0.5,0.5l0,-1zm0.8889,1c0.2761,0 0.5,-0.2239 0.5,-0.5c0,-0.27614 -0.2239,-0.5 -0.5,-0.5l0,1zm-2.1285,-5.23133c-0.1968,0.19372 -0.1993,0.5103 -0.0056,0.70709c0.1937,0.19679 0.5103,0.19928 0.7071,0.00557l-0.7015,-0.71266zm1.5904,-0.16234c0.1968,-0.19372 0.1993,-0.5103 0.0055,-0.70709c-0.1937,-0.19679 -0.5103,-0.19928 -0.707,-0.00557l0.7015,0.71266zm-14.03488,0.875c0.19679,0.19371 0.51337,0.19122 0.70708,-0.00557c0.19372,-0.19679 0.19123,-0.51337 -0.00556,-0.70709l-0.70152,0.71266zm-0.18737,-1.58766c-0.1968,-0.19371 -0.51337,-0.19122 -0.70709,0.00557c-0.19372,0.19679 -0.19122,0.51337 0.00557,0.70709l0.70152,-0.71266zm-0.35076,6.10633c0.27614,0 0.5,-0.2239 0.5,-0.5c0,-0.27614 -0.22386,-0.5 -0.5,-0.5l0,1zm-0.88889,-1c-0.27614,0 -0.5,0.22386 -0.5,0.5c0,0.2761 0.22386,0.5 0.5,0.5l0,-1zm2.57298,4.7938c0.19679,-0.1937 0.19929,-0.5103 0.00557,-0.7071c-0.19372,-0.1968 -0.51029,-0.1992 -0.70709,-0.0055l0.70152,0.7126zm-1.59041,0.1624c-0.19679,0.1937 -0.19928,0.5103 -0.00556,0.7071c0.19372,0.1968 0.51029,0.1992 0.70708,0.0055l-0.70152,-0.7126zm5.68413,3.7938c-0.2762,0 -0.5,0.2239 -0.5,0.5c0,0.2761 0.2238,0.5 0.5,0.5l0,-1zm2.6666,1c0.2762,0 0.5,-0.2239 0.5,-0.5c0,-0.2761 -0.2238,-0.5 -0.5,-0.5l0,1zm-6.16663,-9.25c0,-2.61596 2.1565,-4.75 4.83333,-4.75l0,-1c-3.21421,0 -5.83333,2.56697 -5.83333,5.75l1,0zm4.83333,-4.75c2.6768,0 4.8333,2.13404 4.8333,4.75l1,0c0,-3.18303 -2.6191,-5.75 -5.8333,-5.75l0,1zm4.8333,4.75c0,1.7681 -0.9833,3.3147 -2.45,4.1334l0.4875,0.8732c1.7653,-0.9855 2.9625,-2.8561 2.9625,-5.0066l-1,0zm-2.45,4.1334c-0.7026,0.3922 -1.5154,0.6166 -2.3833,0.6166l0,1c1.0423,0 2.0225,-0.2699 2.8708,-0.7434l-0.4875,-0.8732zm-2.3833,0.6166c-0.8679,0 -1.6807,-0.2244 -2.38335,-0.6166l-0.48742,0.8732c0.84829,0.4735 1.82847,0.7434 2.87077,0.7434l0,-1zm-2.38335,-0.6166c-1.46661,-0.8187 -2.44998,-2.3653 -2.44998,-4.1334l-1,0c0,2.1505 1.19727,4.0211 2.96256,5.0066l0.48742,-0.8732zm0.53215,2.051l-0.28265,-1.6966l-0.98641,0.1643l0.28265,1.6967l0.98641,-0.1644zm3.985,-1.6966l-0.2827,1.6967l0.9864,0.1643l0.2827,-1.6966l-0.9864,-0.1644zm3.2932,-0.194l0.8889,0.875l0.7015,-0.7126l-0.8889,-0.875l-0.7015,0.7126zm1.6841,-3.7938l0.8889,0l0,-1l-0.8889,0l0,1zm-0.5381,-4.51867l0.8889,-0.875l-0.7015,-0.71266l-0.8889,0.875l0.7015,0.71266zm-12.44446,-0.71266l-0.88889,-0.875l-0.70152,0.71266l0.88889,0.875l0.70152,-0.71266zm-1.23965,4.23133l-0.88889,0l0,1l0.88889,0l0,-1zm0.98257,4.0812l-0.88889,0.875l0.70152,0.7126l0.88889,-0.875l-0.70152,-0.7126zm7.59574,2.9188l-2.9344,0l0,1l2.9344,0l0,-1zm-2.8005,2.75l2.6666,0l0,-1l-2.6666,0l0,1zm3.1844,-3.0655c-0.0293,0.1762 -0.1873,0.3155 -0.3839,0.3155l0,1c0.6741,0 1.2587,-0.4816 1.3703,-1.1512l-0.9864,-0.1643zm-4.68871,0.1643c0.11156,0.6696 0.69624,1.1512 1.37041,1.1512l0,-1c-0.1967,0 -0.3546,-0.1393 -0.384,-0.3156l-0.98641,0.1644z" 
                             fill='#00ADB5' id="svg_1"/>
                    </svg>
                    <label className='text-[70%] text-white' htmlFor="">
                            Intuitive
                    </label>
                    <label className='text-[32%] text-white' htmlFor="">
                            Strong preference for easy to use, intuitive UX/UI.
                    </label>
        </div>
      </>)
}

const Rocket = ({s4})=>{
    const r1 = useRef(null)
    const r2 = useRef(null)
    const r3 = useRef(null)
    const r4 = useRef(null)
    const r5 = useRef(null)
    
    const d11 = 'm25.00031,40.19765c-13.96853,0 -20.34825,-13.21021 -21.22811,-15.19834c0.87844,-1.99089 7.24113,-15.19696 21.22811,-15.19696c13.96853,0 20.34825,13.21021 21.22811,15.19834c-0.87844,1.99089 -7.24113,15.19696 -21.22811,15.19696z'
    const d12 = 'm47.65962,24.75201c-0.01064,-0.02556 -0.18165,-0.44626 -0.52508,-1.13844c-1.84275,-3.70961 -8.63827,-15.19281 -22.13423,-15.19281c-16.01351,0 -22.59403,16.16753 -22.65931,16.33125c-0.06315,0.15958 -0.06315,0.33642 0,0.49669c0.06528,0.16303 6.6458,16.33056 22.65931,16.33056c13.48887,0 20.28439,-11.47077 22.13068,-15.1859c0.34485,-0.69564 0.51727,-1.1191 0.52792,-1.14466c0.06315,-0.16027 0.06315,-0.33711 0.00071,-0.49669zm-22.65931,15.44564c-13.96853,0 -20.34825,-13.21021 -21.22811,-15.19834c0.87844,-1.99089 7.24113,-15.19696 21.22811,-15.19696c13.96853,0 20.34825,13.21021 21.22811,15.19834c-0.87844,1.99089 -7.24113,15.19696 -21.22811,15.19696z'
    const d13 = 'm25.00031,13.94993c-6.27044,0 -11.35307,4.94822 -11.35307,11.05283s5.08263,11.05283 11.35307,11.05283s11.35307,-4.94822 11.35307,-11.05283s-5.08263,-11.05283 -11.35307,-11.05283zm0,20.72406c-5.48637,0 -9.93394,-4.32995 -9.93394,-9.67123s4.44757,-9.67123 9.93394,-9.67123s9.93394,4.32995 9.93394,9.67123s-4.44757,9.67123 -9.93394,9.67123z'
    const d14 = 'm25.00031,19.47635c-3.13487,0 -5.67654,2.47445 -5.67654,5.52642s2.54167,5.52642 5.67654,5.52642s5.67654,-2.47445 5.67654,-5.52642s-2.54167,-5.52642 -5.67654,-5.52642zm0,9.67123c-2.3508,0 -4.2574,-1.85619 -4.2574,-4.14481s1.90661,-4.14481 4.2574,-4.14481s4.2574,1.85619 4.2574,4.14481s-1.90661,4.14481 -4.2574,4.14481z'
    const d15 = 'm25.00031,22.2368c-0.39239,0 -0.70957,0.30879 -0.70957,0.6908s0.31718,0.6908 0.70957,0.6908c0.78336,0 1.41913,0.61896 1.41913,1.3816c0,0.38201 0.31718,0.6908 0.70957,0.6908s0.70957,-0.30879 0.70957,-0.6908c0,-1.52598 -1.27083,-2.76321 -2.83827,-2.76321l0,0.00001z'

    const d21 = 'm25.00031,40.19765c-13.96853,0 -20.34825,-13.21021 -21.22811,-15.19834c0.87844,-1.99089 7.24113,-15.19696 21.22811,-15.19696c13.96853,0 20.34825,13.21021 21.22811,15.19834c-0.87844,1.99089 -7.24113,15.19696 -21.22811,15.19696z'
    const d22 = 'm47.65962,24.75201c-0.01064,-0.02556 -0.18165,-0.44626 -0.52508,-1.13844c-1.84275,-3.70961 -8.63827,-15.19281 -22.13423,-15.19281c-16.01351,0 -22.59403,16.16753 -22.65931,16.33125c-0.06315,0.15958 -0.06315,0.33642 0,0.49669c0.06528,0.16303 6.6458,16.33056 22.65931,16.33056c13.48887,0 20.28439,-11.47077 22.13068,-15.1859c0.34485,-0.69564 0.51727,-1.1191 0.52792,-1.14466c0.06315,-0.16027 0.06315,-0.33711 0.00071,-0.49669zm-22.24409,-0.1253c-13.96853,0 -21.87074,-0.40744 -21.64333,0.3726c0.11719,0.77728 7.65635,-0.38727 21.64333,-0.38727c13.96853,0 20.90188,1.23789 20.81289,0.38865c-0.04799,-0.50046 -6.82591,-0.37398 -20.81289,-0.37398z'
    const d23 = 'm25.00031,13.94993c-6.27044,0 -11.35307,4.94822 -11.35307,11.05283s5.08263,11.05283 11.35307,11.05283s11.35307,-4.94822 11.35307,-11.05283s-5.08263,-11.05283 -11.35307,-11.05283zm0,20.72406c-5.48637,0 -9.93394,-4.32995 -9.93394,-9.67123s4.44757,-9.67123 9.93394,-9.67123s9.93394,4.32995 9.93394,9.67123s-4.44757,9.67123 -9.93394,9.67123z'
    const d24 = 'm25.00031,19.47635c-3.13487,0 -5.67654,2.47445 -5.67654,5.52642s2.54167,5.52642 5.67654,5.52642s5.67654,-2.47445 5.67654,-5.52642s-2.54167,-5.52642 -5.67654,-5.52642zm0,9.67123c-2.3508,0 -4.2574,-1.85619 -4.2574,-4.14481s1.90661,-4.14481 4.2574,-4.14481s4.2574,1.85619 4.2574,4.14481s-1.90661,4.14481 -4.2574,4.14481z'
    const d25 = 'm25.00031,22.2368c-0.39239,0 -0.70957,0.30879 -0.70957,0.6908s0.31718,0.6908 0.70957,0.6908c0.78336,0 1.41913,0.61896 1.41913,1.3816c0,0.38201 0.31718,0.6908 0.70957,0.6908s0.70957,-0.30879 0.70957,-0.6908c0,-1.52598 -1.27083,-2.76321 -2.83827,-2.76321l0,0.00001z'

    useEffect(()=>{

        const tl = gsap.timeline({repeat:-1,yoyo:true})

        tl.fromTo(r1.current,{attr:{d:d21}},{attr:{d:d11},duration:.2,ease:'circ.inOut'})
        .fromTo(r2.current,{attr:{d:d22}},{attr:{d:d12},duration:.2,ease:'circ.inOut'},'<')
        .fromTo(r3.current,{attr:{d:d13}},{attr:{d:d23},duration:1,ease:'back.inOut'})

        return ()=>{
               tl.revert()
        }

    },[])

    return(<>
            <div style={{transform:"translateY(100%)",opacity:'0%'}} ref={s4} className=' md:w-[18%]  relative text-center text-[300%] flex flex-col items-center'>
            <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" version="1.0" enableBackground="new 0 0 64 64" xmlSpace="preserve">
           
                <path ref={r3} fill="#00ADB5" d="m25.00031,13.94993c-6.27044,0 -11.35307,4.94822 -11.35307,11.05283s5.08263,11.05283 11.35307,11.05283s11.35307,-4.94822 11.35307,-11.05283s-5.08263,-11.05283 -11.35307,-11.05283zm0,20.72406c-5.48637,0 -9.93394,-4.32995 -9.93394,-9.67123s4.44757,-9.67123 9.93394,-9.67123s9.93394,4.32995 9.93394,9.67123s-4.44757,9.67123 -9.93394,9.67123z" id="svg_7" stroke="null"/>
                <path ref={r4} fill="#00ADB5" d="m25.00031,19.47635c-3.13487,0 -5.67654,2.47445 -5.67654,5.52642s2.54167,5.52642 5.67654,5.52642s5.67654,-2.47445 5.67654,-5.52642s-2.54167,-5.52642 -5.67654,-5.52642zm0,9.67123c-2.3508,0 -4.2574,-1.85619 -4.2574,-4.14481s1.90661,-4.14481 4.2574,-4.14481s4.2574,1.85619 4.2574,4.14481s-1.90661,4.14481 -4.2574,4.14481z" id="svg_8" stroke="null"/>
                <path ref={r5} fill="#00ADB5" d="m25.00031,22.2368c-0.39239,0 -0.70957,0.30879 -0.70957,0.6908s0.31718,0.6908 0.70957,0.6908c0.78336,0 1.41913,0.61896 1.41913,1.3816c0,0.38201 0.31718,0.6908 0.70957,0.6908s0.70957,-0.30879 0.70957,-0.6908c0,-1.52598 -1.27083,-2.76321 -2.83827,-2.76321l0,0.00001z" id="svg_9" stroke="null"/>
     

                <path ref={r1} fill="none" d="m25.00031,40.19765c-13.96853,0 -20.34825,-13.21021 -21.22811,-15.19834c0.87844,-1.99089 7.24113,-15.19696 21.22811,-15.19696c13.96853,0 20.34825,13.21021 21.22811,15.19834c-0.87844,1.99089 -7.24113,15.19696 -21.22811,15.19696z" id="svg_2" stroke="null"/>
                <path ref={r2} fill="#00ADB5" d="m47.65962,24.75201c-0.01064,-0.02556 -0.18165,-0.44626 -0.52508,-1.13844c-1.84275,-3.70961 -8.63827,-15.19281 -22.13423,-15.19281c-16.01351,0 -22.59403,16.16753 -22.65931,16.33125c-0.06315,0.15958 -0.06315,0.33642 0,0.49669c0.06528,0.16303 6.6458,16.33056 22.65931,16.33056c13.48887,0 20.28439,-11.47077 22.13068,-15.1859c0.34485,-0.69564 0.51727,-1.1191 0.52792,-1.14466c0.06315,-0.16027 0.06315,-0.33711 0.00071,-0.49669zm-22.65931,15.44564c-13.96853,0 -20.34825,-13.21021 -21.22811,-15.19834c0.87844,-1.99089 7.24113,-15.19696 21.22811,-15.19696c13.96853,0 20.34825,13.21021 21.22811,15.19834c-0.87844,1.99089 -7.24113,15.19696 -21.22811,15.19696z" id="svg_6" stroke="null"/>
          
     

            </svg>
                <label className='text-[70%] text-white' htmlFor="">
                    Dynamic
                </label>
                <label className='text-[32%] text-white' htmlFor="">
                    Websites don't have to be static, I love making pages come to life.
                </label>
            </div>
    </>)
}


export default AboutHeader
