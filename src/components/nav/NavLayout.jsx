import React, {useState,useEffect} from 'react'
function NavLayout({h,p,a,c}) {
  const [ty,setTy] = useState(false)
  useEffect(()=>{
       let s = ()=>{
          if(window.scrollY>10){
            setTy(true)
          }
          else{
            setTy(false)
          }
       }
       window.addEventListener('scroll',s)
       return()=>{
        console.log('listener removed')
        window.removeEventListener('scroll',s)
       }
   },[ty])

  return (<>    
    <div className={`text-white text-center  w-[97%] fixed bg-dark1 
    before:translate-x-[-48.5%] before:z-[-1] before:absolute before:content-['_'] before:w-full  before:h-full before:bg-dark-1  
    before:border-b-[1px] before:border-b-white px-[2%] z-[20] before:transition-all before:duration-200 `}>
          <div className="  text-white flex flex-row justify-evenly items-center pt-[1.5%] pb-[1.5%] z-[10]  ">
               <button className=' outline-none ' onClick={()=>{
                    window.scrollTo({top:h,behavior: 'smooth'})
               }}>Home</button>
               <button className=' outline-none ' onClick={()=>{
                    window.scrollTo({top:a,behavior: 'smooth'})
               }}>About</button>
               <button className=' outline-none ' onClick={()=>{
                    window.scrollTo({top:p,behavior: 'smooth'})
               }}>Projects</button>
               <button className=' outline-none ' onClick={()=>{
                    document.getElementById('Contact').scrollIntoView({ block: 'end',  behavior: 'smooth' })
               }}>Contact</button>
          </div> 
    </div>
    </>
  )
}

export default NavLayout