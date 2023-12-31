import React from 'react';
import AboutHeader from './AboutHeader';
import Skills from './Skills';

function AboutLayout() {
  return (
    <>
        <div id='Abouts' className=" sticky top-[-5%] w-full flex-col  bg-dark-1 border-t-[1px] border-white  flex items-center justify-center  text-white text-[350%] pb-[15%]  pt-[15%]">
            <div  className="  relative w-full  text-cneter flex justify-center after:z-[-1] after:absolute after:w-full after:h-[100rem] after:bg-dark-1 after:content-['_']"> 
                <label className='z-[10]' htmlFor="">
                    About
                </label> 
            </div>
        </div>
        <div className='z-[10] px-[5%]'>
            <AboutHeader></AboutHeader>
            <Skills></Skills>
        </div>
    </>
  )
}

export default AboutLayout
