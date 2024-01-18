import React, {useState,useEffect, useContext} from 'react'
import { posContext } from '../../context/PositionContext'

function NavLayout() {
  const [ty,setTy] = useState(false)
  const [page,setP] = useState("Home")
  const pc = useContext(posContext)

  const inter = ()=>{
        if(window.pageYOffset>=document.getElementById('Contact').offsetTop-100){
           setP("Contact") 
        }
       else if(window.pageYOffset>=document.getElementById('Projects').offsetTop-100){
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
               {/* website icon */}
               {/* <svg  width="100" height="100" viewBox="0 0 1024 1024" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M941.564523 304.377147h-818.218139a469.043548 469.043548 0 1 0 818.218139 0z" fill="#FFFFFF" />
                    <path d="M311.741111 523.455054m-130.710348 0a130.710348 130.710348 0 1 0 261.420695 0 130.710348 130.710348 0 1 0-261.420695 0Z" fill="#F5BF1F" />
                    <path d="M720.85018 523.455054m-130.710348 0a130.710348 130.710348 0 1 0 261.420695 0 130.710348 130.710348 0 1 0-261.420695 0Z" fill="#F5BF1F" />
                    <path d="M133.574111 255.284059s63.002797-85.912905 127.437475-119.255294c0 0-10.84139-32.524171 54.411506-59.320815a305.195366 305.195366 0 0 0 135.619657-51.138633c76.70795-48.479425 76.70795 20.455453 76.70795 20.455453S655.597283 18.000799 694.053536 102.277267c25.364762 23.728326 51.138634-56.661606 135.619656 94.70875a288.831003 288.831003 0 0 0 71.594087 89.594886l-751.737914-2.454654z" fill="#EA5D5C" />
                    <path d="M943.610068 274.307631a20.455453 20.455453 0 0 0-18.205354-10.84139h-17.182581a10.227727 10.227727 0 0 1-8.795845-4.909309c-3.068318-5.318418-7.568518-12.682381-9.409508-15.34159s-4.909309-6.7503-7.568518-10.023173-6.341191-7.568518-9.818618-11.250499l-7.977626-7.773072c-2.2501-2.045545-4.295645-4.5002-6.7503-6.545745s-2.454654-6.136636-3.477427-9.204954a170.803036 170.803036 0 0 0-10.023172-22.296445l-1.636437-2.863763a171.621254 171.621254 0 0 0-11.659608-18.000799l-3.681982-4.704755a172.030364 172.030364 0 0 0-12.068717-13.705153l-6.545745-6.341191c-3.681982-3.272873-7.363963-6.545745-11.2505-9.614063l-10.023172-7.159409-9.818618-5.932081c-4.5002-2.659209-9.0004-4.909309-13.705153-7.159409l-7.773073-3.272873a169.1666 169.1666 0 0 0-17.59169-5.932081l-5.318418-1.227327a169.984818 169.984818 0 0 0-20.455453-3.886536 148.915701 148.915701 0 0 0-172.848582-57.479825 119.868957 119.868957 0 0 0-174.485018 20.455454 119.664403 119.664403 0 0 0-141.551738 84.071914 172.439473 172.439473 0 0 0-59.11626 40.910906c-2.2501 2.2501-4.091091 4.704754-6.136636 7.159409l-4.704754 5.318418a171.4167 171.4167 0 0 0-32.319617 68.11666 10.227727 10.227727 0 0 1-9.818618 8.182181h-13.500599a20.455453 20.455453 0 0 0-18.205353 10.841391 527.34159 527.34159 0 0 0-8.591291 467.81622 466.998002 466.998002 0 0 0 332.605673 271.034759c335.673991 66.684778 598.935677-184.099081 598.935677-500.544946a508.931682 508.931682 0 0 0-59.525369-237.896924z m-756.851778-63.002797c2.659209-3.272873 5.318418-6.341191 8.182181-9.409508l2.659209-2.863764 5.932082-5.522972 7.363963-6.136636 2.045545-1.636437a132.142229 132.142229 0 0 1 25.978426-14.523372l9.409509-3.886536a129.48302 129.48302 0 0 1 110.05034 12.477827 20.455453 20.455453 0 0 0 26.592089-4.704754 20.455453 20.455453 0 0 0-5.113863-30.069517 171.007591 171.007591 0 0 0-90.003996-25.569317h-15.546144a78.548941 78.548941 0 0 1 81.821814-31.296844l12.886935 2.863764a20.455453 20.455453 0 0 0 20.455454-7.773072l7.977627-10.636836a79.162605 79.162605 0 0 1 86.117459-29.251299 181.644427 181.644427 0 0 1 36.001598 24.34199 27.819417 27.819417 0 0 0 24.341989 4.5002 270.421095 270.421095 0 0 1 44.18378-9.818618 108.413903 108.413903 0 0 1 70.571314 26.18298 170.393927 170.393927 0 0 0-32.728725 10.432282 20.455453 20.455453 0 0 0 16.568917 37.228925 128.460248 128.460248 0 0 1 50.52497-10.432281h14.318818a130.914902 130.914902 0 0 1 35.592489 9.000399h2.659208c3.272873 1.431882 6.545745 3.272873 9.818618 4.909309a131.73312 131.73312 0 0 1 40.910907 34.978826 170.803036 170.803036 0 0 0-46.229325-6.7503 167.939273 167.939273 0 0 0-67.093887 14.114263 20.455453 20.455453 0 0 0 16.568917 37.228925 128.460248 128.460248 0 0 1 50.52497-10.432281 130.505793 130.505793 0 0 1 96.95885 42.956452l1.227327 1.431882c1.636436 1.840991 3.068318 3.886536 4.5002 5.727527H616.118258a10.432281 10.432281 0 0 1-10.227727-12.273272 78.344387 78.344387 0 0 1 26.796644-46.842989 20.455453 20.455453 0 0 0 5.727527-25.773871 20.455453 20.455453 0 0 0-30.274071-7.159409 120.073512 120.073512 0 0 0-43.979225 81.821814 10.227727 10.227727 0 0 1-10.227726 9.614063h-61.366361a10.023172 10.023172 0 0 1-8.59129-15.546144 119.664403 119.664403 0 0 0 9.614063-106.777468 20.455453 20.455453 0 0 0-29.864962-8.795845 20.455453 20.455453 0 0 0-7.773072 25.160208 79.367159 79.367159 0 0 1-31.296844 94.299641 77.935278 77.935278 0 0 1-30.274071 11.455054H162.007191a130.505793 130.505793 0 0 1 24.34199-49.297643z m325.446265 771.988814c-252.420296 0-450.019976-206.60008-450.019976-470.47543a470.475429 470.475429 0 0 1 48.27487-208.441071h802.671993A470.475429 470.475429 0 0 1 961.815421 512.818218c0 263.670795-196.781462 470.475429-450.019976 470.47543z" fill="#3F4651" />
                    <path d="M445.724331 542.478626a143.188174 143.188174 0 1 0-112.504994 112.504994 143.188174 143.188174 0 0 0 112.504994-112.504994z m-112.709549 70.571314a102.277267 102.277267 0 0 1-126.414702-126.414702 100.845386 100.845386 0 0 1 70.775869-70.775869 102.277267 102.277267 0 0 1 126.414702 126.414702 100.845386 100.845386 0 0 1-70.775869 70.775869zM742.328406 374.539353a143.188174 143.188174 0 1 0 112.504994 112.504994 143.188174 143.188174 0 0 0-112.504994-112.504994z m0 239.124251a102.277267 102.277267 0 0 1-126.414702-126.414703 100.845386 100.845386 0 0 1 70.775869-70.775869 102.277267 102.277267 0 0 1 126.414702 126.414703 100.845386 100.845386 0 0 1-70.980424 70.162205z" fill="#3F4651" />
                    <path ref={leftEye} d="M285.967239 473.543748m-40.910907 0a40.910907 40.910907 0 1 0 81.821814 0 40.910907 40.910907 0 1 0-81.821814 0Z" fill="#3F4651" />
                    <path d="M735.373552 534.910108m-40.910907 0a40.910907 40.910907 0 1 0 81.821814 0 40.910907 40.910907 0 1 0-81.821814 0Z" fill="#3F4651" />
                    <path d="M448.588094 695.485417l40.910907 0 0 102.277268-40.910907 0 0-102.277268Z" fill="#3F4651" />
                    <path d="M550.865362 695.485417l40.910906 0 0 102.277268-40.910906 0 0-102.277268Z" fill="#3F4651" />
                </svg> */}

    <div className={`text-white text-center  w-[97%] fixed bg-dark1 
    before:translate-x-[-48.5%] ${ !ty? "sm:before:translate-y-[-120%]":"" } 
    before:z-[-1] before:absolute before:content-['_'] before:w-full  before:h-full before:bg-dark-1  
    before:border-b-[1px] before:border-b-theme px-[2%] z-[20] before:transition-all before:duration-200 `}>
          <div className="  text-white flex flex-row justify-evenly items-center pt-[3%] pb-[3%] sm:pt-[1.5%] sm:pb-[1.5%] z-[10]  ">
               <button className={` outline-none md:hover:text-theme  ${page == "Home" ? ' text-theme ':' text-white ' } transition-all duration-200 `} onClick={()=>{
                    window.scrollTo({top:pc.h,behavior: 'smooth'})
               }}>Home</button>
               <button className={` outline-none md:hover:text-theme  ${page == "Abouts" ? ' text-theme ':' text-white ' } transition-all duration-200 `} onClick={()=>{
                    window.scrollTo({top:pc.a,behavior: 'smooth'})
               }}>About</button>
               <button className={` outline-none md:hover:text-theme  ${page == "Projects" ? ' text-theme ':' text-white ' } transition-all duration-200 `} onClick={()=>{
                    window.scrollTo({top:pc.p,behavior: 'smooth'})
               }}>Projects</button>
               <button className={` outline-none md:hover:text-theme  ${page == "Contact" ? ' text-theme ':' text-white ' } transition-all duration-200 `} onClick={()=>{
                    window.scrollTo({top:pc.c,behavior: 'smooth'})
               }}>Contact</button>
          </div> 
    </div>
    </>
  )
}

export default NavLayout