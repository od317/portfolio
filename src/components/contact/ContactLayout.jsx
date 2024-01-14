import React,{useRef} from 'react'
import draw from '../../hooks/DrawingSvgHook'
import Grid from './Grid'
import Dsh from "../../hooks/DrawingSvgHook"

function ContactLayout() {
  const svg = useRef()
  const t1 = "osamadrbas31@gmail.com"
  const t2 = "0994307669"

  Dsh(svg,900,"svg4")

  return (
    
    <>

    <div id='Contact' className=" sm:sticky sm:top-[0%] w-full flex-col  bg-dark-1 border-t-[1px] border-theme  flex items-center justify-center  text-white text-[350%] md:pb-[15%] pb-[30%] pt-[15%]">           
                              <div  className=" relative text-theme w-full  text-cneter flex justify-center after:z-[-1] after:absolute after:w-full after:h-[10rem] after:bg-dark-1 after:content-['_']"> 
                                <label id='svg4' className='z-[10] bg-dark-1 px-[.2%]' htmlFor="">
                                   Contact
                                </label> 
                                   <div  className=' hidden sm:block absolute translate-y-[-27%] ' >
                                    <svg  className=" relative w-full  text-cneter flex items-cneter  justify-center " width="300" height="200">
                                        <polygon ref={svg} className="" points="51,20 250,20  150,190 50,20" fill="transparent" stroke="#FF004D" strokeWidth="5" strokeDashoffset="900" strokeDasharray="900"  fillRule="evenodd"/>
                                    </svg>
                                   </div>
                              </div>

        </div>

    <div className='  flex md:flex-row flex-col w-full z-[8] pb-[10%] text-white justify-evenly '>
              <Grid title="Gmail" text={t1} ></Grid>
              <Grid title="phone" text={t2} ></Grid>
    </div>

    </>
  )
}

export default ContactLayout
