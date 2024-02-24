import React, { useContext, useRef,useState } from 'react'
import {useEffect} from 'react'
import Header from './components/Header/Header'
import { ParallaxProvider } from 'react-scroll-parallax'
import ProjectsLayout from './components/projects/ProjectsLayout'
import ContactLayout from './components/contact/ContactLayout'
import NavLayout from './components/nav/NavLayout'
import AboutLayout from './components/about/AboutLayout'
import { posContext } from './context/PositionContext'

function App() {
 const [pos,setPos] = useState(null)
 const [he,setHe] = useState(window.innerWidth)
 const pro = useRef(null)
 
 const handleR = ()=>{
    setHe(window.innerWidth)
    setPos(
    {
            h:document.getElementById('Home').offsetTop,
            a:document.getElementById('Abouts').offsetTop,
            p:document.getElementById('Projects').offsetTop,
            c:document.getElementById('Contact').offsetTop,
        }
   )
 }

 useEffect(()=>{
     window.addEventListener('resize',handleR)
     return ()=>{
             window.removeEventListener('resize',handleR)
     }
 },[he])

 useEffect(()=>{
            window.scrollTo({top:0})
            setPos({
                    h:document.getElementById('Home').offsetTop,
                    a:document.getElementById('Abouts').offsetTop,
                    p:document.getElementById('Projects').offsetTop,
                    c:document.getElementById('Contact').offsetTop,
                  })
 },[])

 return(<>
    <posContext.Provider value={pos}>
     <NavLayout></NavLayout>
     <div className=' px-[2%] flex flex-col items-center'>
          <ParallaxProvider>
               <Header></Header>
               <AboutLayout></AboutLayout>
               <ProjectsLayout></ProjectsLayout>
               <ContactLayout></ContactLayout>
          </ParallaxProvider>
     </div>
     </posContext.Provider>
     </>)
}

export default App
