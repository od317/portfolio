import React, { useRef, useState,useEffect,useLayoutEffect} from 'react'
import HeaderText from './HeaderText'
import Blobs from '../blobs/Blobs'
import { useWindowScroll } from "@uidotdev/usehooks"


function Header({p}) {
    
    return (<>

      <HeaderText p={p}></HeaderText> 
      
      </>
    )
}

export default Header