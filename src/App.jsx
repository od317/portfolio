import React, { useRef,useState } from 'react'
import {useEffect} from 'react'
import Blobs from './components/blobs/Blobs'
import Header from './components/Header/Header'
import { ParallaxProvider } from 'react-scroll-parallax'
import ProjectsLayout from './components/projects/ProjectsLayout'
import ContactLayout from './components/contact/ContactLayout'
import NavLayout from './components/nav/NavLayout'
import AboutLayout from './components/about/AboutLayout'

function App() {
 const [p,setP] = useState(0)
 const [a,setA] = useState(0)
 const [h,setH] = useState(0)
 const pro = useRef(null)



 useEffect(()=>{
     window.scrollTo({top:0})
     setP(document.getElementById('Projects').offsetTop)
     setH(document.getElementById('Home').offsetTop)
     setA(document.getElementById('Abouts').offsetTop)
 })
 return(<>
     <NavLayout p={p} h={h} a={a}></NavLayout>
     <div className=' px-[2%] flex flex-col items-center'>
          <ParallaxProvider>
               <Header p={p}></Header>
               <AboutLayout></AboutLayout>
               <ProjectsLayout></ProjectsLayout>
               <ContactLayout></ContactLayout>
          </ParallaxProvider>
     </div>
     </>)
}

export default App
