import React from 'react'

function ContactLayout() {
  return (
    
    <>
    <div id="Contact" className=" relative after:z-[-1] after:absolute after:w-full after:h-[100rem] after:bg-dark-1 after:content-['_'] text-[350%] pb-[2%] mt-[30%] pt-[20%] z-[7] sm:sticky top-[-5%] text-theme mb-[10%] w-full flex items-start justify-center bg-dark-1 border-t-[1px] border-theme">
          Contact
    </div>

    <div className='  flex md:flex-row flex-col w-full z-[8] text-white justify-evenly pb-[10%]'>
           <div className='md:w-[40%] p-[20%] md:p-[10%]  flex items-center justify-center border-theme border-[1px] bg-dark-1'>
                  Gmail           
           </div>
           <div className='md:w-[40%] p-[20%] md:p-[10%] mt-[10%] md:mt-[0%] flex items-center justify-center border-theme border-[1px] bg-dark-1'>
                  Phone         
           </div>
    </div>

    </>
  )
}

export default ContactLayout
