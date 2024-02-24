import React,{useState,useRef,useEffect} from 'react'

function BottomText() {
  const [ypos,setYpos] = useState(0)
  // useEffect(()=>{
  //       const scroll = ()=>{
  //             setYpos(window.pageYOffset)
  //             console.log(window.pageYOffset)
  //       }
  //       window.addEventListener('scroll',scroll)
  //       return()=>{
  //         window.removeEventListener('scroll',scroll)
  //       }
  // },[ypos])
  return (
    <div className=' relative md:w-[70%] w-[100%] text-[80%] md:px-[5%] mb-[5%] px-[0%] md:text-[70%] flex items-center justiy-center text-center'>
           <label className=' relative ' htmlFor=""> 
           I have a great passion for web development. I mainly work with React but I always step out of my comfort zone to learn new things, encounter new problems and figure out the best way to solve them.                 {/* <svg className=' absolute translate-y-[-70%] ' height="200%" width="100%">
                       <polygon points="400,0 300,200 500,200" fill='none' stroke='#00ADB5' />
                 </svg> */}
           </label>
    </div>
  )
}

export default BottomText