import React, {useState,useEffect} from 'react'
function NavLayout({h,p,a,c}) {
  const [ty,setTy] = useState(false)
  const [page,setP] = useState("Home")


  const inter = ()=>{
        if(window.pageYOffset>=document.getElementById('Contact').offsetTop){
           setP("Contact") 
        }
       else if(window.pageYOffset>=document.getElementById('Projects').offsetTop){
          setP("Projects") 
       }
      else if(window.pageYOffset>=document.getElementById('Abouts').offsetTop){
          setP("Abouts") 
       }
       else{
          setP("Home") 
       }
       
  }

  useEffect(()=>{
       let s = ()=>{
          inter()
          if(window.scrollY>330){
            setTy(true)
          }
          else{
            setTy(false)
          }
       }
       window.addEventListener('scroll',s)
       return()=>{
       window.removeEventListener('scroll',s)
       }
   },[ty])



  return (<>    
    <div className={`text-white text-center  w-[97%] fixed bg-dark1 
    before:translate-x-[-48.5%] ${ !ty? "sm:before:translate-y-[-120%]":"" } 
    before:z-[-1] before:absolute before:content-['_'] before:w-full  before:h-full before:bg-dark-1  
    before:border-b-[1px] before:border-b-theme px-[2%] z-[20] before:transition-all before:duration-200 `}>
          <div className="  text-white flex flex-row justify-evenly items-center pt-[3%] pb-[3%] sm:pt-[1.5%] sm:pb-[1.5%] z-[10]  ">
               <button className={` outline-none  ${page == "Home" ? ' text-theme ':' text-white ' } transition-all duration-200 `} onClick={()=>{
                    window.scrollTo({top:h,behavior: 'smooth'})
               }}>Home</button>
               <button className={` outline-none  ${page == "Abouts" ? ' text-theme ':' text-white ' } transition-all duration-200 `} onClick={()=>{
                    window.scrollTo({top:a,behavior: 'smooth'})
               }}>About</button>
               <button className={` outline-none  ${page == "Projects" ? ' text-theme ':' text-white ' } transition-all duration-200 `} onClick={()=>{
                    window.scrollTo({top:window.innerWidth>=0 ? p+100:p,behavior: 'smooth'})
               }}>Projects</button>
               <button className={` outline-none  ${page == "Contact" ? ' text-theme ':' text-white ' } transition-all duration-200 `} onClick={()=>{
                    window.scrollTo({top:window.innerWidth>=0 ? c+100:c,behavior: 'smooth'})
               }}>Contact</button>
          </div> 
    </div>
    </>
  )
}

export default NavLayout