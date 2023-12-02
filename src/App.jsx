import React, { useRef } from 'react'
import {useEffect} from 'react'
import Blobs from './components/blobs/Blobs'
import Header from './components/Header/Header'
import { ParallaxProvider } from 'react-scroll-parallax'
import ProjectsLayout from './components/projects/ProjectsLayout'
import ContactLayout from './components/contact/ContactLayout'
import NavLayout from './components/nav/NavLayout'

function App() {
   
   
 
 return(<>
     <NavLayout></NavLayout>
     <div className='px-[2%]'>
          <ParallaxProvider>
               <Header></Header>
               <ProjectsLayout></ProjectsLayout>
               <ContactLayout></ContactLayout>
          </ParallaxProvider>
     </div>
     </>)
}

export default App
