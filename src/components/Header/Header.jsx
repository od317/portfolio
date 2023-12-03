import React, { useRef, useState,useEffect,useLayoutEffect} from 'react'
import Blobs from '../blobs/Blobs'
import { useWindowScroll } from "@uidotdev/usehooks"
import HeaderText from './HeaderText.Jsx'


function Header() {
    
    return (<>

      <HeaderText></HeaderText> 
      </>
    )
}

export default Header