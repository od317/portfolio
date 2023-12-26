import React, { useRef, useState,useEffect,useLayoutEffect} from 'react'
import Blobs from '../blobs/Blobs'
import { useWindowScroll } from "@uidotdev/usehooks"
import HeaderText from './HeaderText.Jsx'


function Header({p}) {
    
    return (<>

      <HeaderText p={p}></HeaderText> 
      </>
    )
}

export default Header