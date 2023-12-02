import React, {useState,useEffect} from 'react'

function NavLayout() {
  const [ty,setTy] = useState(101)
  
  useEffect(()=>{
       let s = ()=>{
          if(window.scrollY>10){
            setTy(0)
          }
          else{
            setTy(101)
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
    before:translate-x-[-48.5%] before:z-[-1] before:absolute before:content-['_'] before:w-full  before:h-full  before:bg-dark-1 
    before:border-b-[1px] before:border-b-white px-[2%] z-[9] before:transition-all before:duration-200 before:translate-y-[-${ty}%]`}>
          <div className="  text-white  pt-[1.5%] pb-[1.5%] z-[10]  ">
              nav  
          </div> 
    </div>
    </>
  )
}

export default NavLayout