import React from 'react'
import Grid from './Grid'

function ContactLayout() {
  const t1 = "osamadrbas31@gmail.com"
  const t2 = "0994307669"
  return (
    
    <>
    <div id="Contact" className=" relative after:z-[-1] after:absolute after:w-full after:h-[100%] after:bg-dark-1 after:content-['_'] text-[350%] pb-[2%] mt-[30%] pt-[15%] z-[7] sm:sticky top-[-5%] text-theme mb-[10%] w-full flex items-start justify-center bg-dark-1 border-t-[1px] border-theme">
          Contact
    </div>

    <div className='  flex md:flex-row flex-col w-full z-[8] pb-[10%] text-white justify-evenly '>

              <Grid title="Gmail" text={t1} ></Grid>
              <Grid title="phone" text={t2} ></Grid>

    </div>

    </>
  )
}

export default ContactLayout
