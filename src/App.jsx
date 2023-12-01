import React, { useRef } from 'react'
import {useEffect} from 'react'
import Blobs from './components/blobs/Blobs'
import Header from './components/Header/Header'
import { ParallaxProvider } from 'react-scroll-parallax'
import ProjectsLayout from './components/projects/ProjectsLayout'
import ContactLayout from './components/contact/ContactLayout'

function App() {
   
   
 
 return(<>
          <ParallaxProvider>
               <Header></Header>
               <ProjectsLayout></ProjectsLayout>
               <ContactLayout></ContactLayout>
          </ParallaxProvider>
     </>)
}

export default App
