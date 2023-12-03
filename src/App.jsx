import React, { useRef,useState } from 'react'
import {useEffect} from 'react'
import Blobs from './components/blobs/Blobs'
import Header from './components/Header/Header'
import { ParallaxProvider } from 'react-scroll-parallax'
import ProjectsLayout from './components/projects/ProjectsLayout'
import ContactLayout from './components/contact/ContactLayout'
import NavLayout from './components/nav/NavLayout'

function App() {
 const [p,setP] = useState(0)
 const pro = useRef(null)
 useEffect(()=>{
     setP(document.getElementById('Projects').offsetTop)
 })
 return(<>
     <NavLayout p={p} ></NavLayout>
     <div className=' px-[2%] flex flex-col items-center'>
          <ParallaxProvider>
               <Header></Header>
               <ProjectsLayout pro={pro} ></ProjectsLayout>
               <ContactLayout></ContactLayout>
          </ParallaxProvider>
     </div>
     </>)
}

export default App
