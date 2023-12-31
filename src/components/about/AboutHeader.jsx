import React from 'react';

function AboutHeader() {
  return (
            <div className='w-full text-white z-[10] bg-transparent 
               md:flex md:flex-row md:items-center md:justify-between md:pb-[10%]
               grid grid-cols-2 gap-y-[15%] gap-x-[10%] pb-[40%]'>
                    
            <div className=' md:w-[18%]  relative text-center text-[300%] flex flex-col items-center'>
                <ion-icon name="timer-outline"></ion-icon>
                <label className='text-[70%]' htmlFor="">
                    Fast
                </label>
                <label className='text-[32%]' htmlFor="">
                    Fast load times and lag free interaction, my highest priority.
                </label>
            </div>

            <div className=' md:w-[18%]  relative text-center text-[300%] flex flex-col items-center'>
                <ion-icon name="phone-portrait-outline"></ion-icon>
                <label className='text-[70%]' htmlFor="">
                    Responsive
                </label>
                <label className='text-[32%]' htmlFor="">
                    My layouts will work on any device, big or small.
                </label>
            </div>

            <div className=' md:w-[18%]  relative text-center text-[300%] flex flex-col items-center'>
                <ion-icon name="bulb-outline"></ion-icon>
                <label className='text-[70%]' htmlFor="">
                        Intuitive
                </label>
                <label className='text-[32%]' htmlFor="">
                        Strong preference for easy to use, intuitive UX/UI.
                </label>
            </div>

            <div className=' md:w-[18%]  relative text-center text-[300%] flex flex-col items-center'>
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
