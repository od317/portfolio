import React, {useState,useEffect} from 'react'
function NavLayout({h,p,a,c}) {
  const [ty,setTy] = useState(false)
  const [page,setP] = useState("Home")
  useEffect(()=>{
       let s = ()=>{
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

   useEffect(()=>{
//      const options = {root:null,rootMargin:"0px",threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]}

//      const io = new IntersectionObserver((entries)=>{
//                 const [entry] = entries
//                 if(entry.boundingClientRect.top>200){
//                     setP(entry.target.id)
//                 }
//      },options)
// ``
//      io.observe(document.getElementById("Home"))
//      io.observe(document.getElementById("Projects"))
//      io.observe(document.getElementById("Abouts"))
//      io.observe(document.getElementById("Contact"))
     

   },[])

  return (<>    
    <div className={`text-white text-center  w-[97%] fixed bg-dark1 
    before:translate-x-[-48.5%] ${ !ty? "before:translate-y-[-120%]":"" } 
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
                    window.scrollTo({top:p,behavior: 'smooth'})
               }}>Projects</button>
               <button className={` outline-none  ${page == "Contact" ? ' text-theme ':' text-white ' } transition-all duration-200 `} onClick={()=>{
                    document.getElementById('Contact').scrollIntoView({ block: 'end',  behavior: 'smooth' })
               }}>Contact</button>
          </div> 
    </div>
    </>
  )
}

export default NavLayout