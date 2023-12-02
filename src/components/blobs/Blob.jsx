import React, { useState,useEffect } from 'react'

function Blob({ds}) {
    let [i,setI] = useState(0)
    const [d,setD] = useState(null)
    
    useEffect(()=>{
         let s = setInterval(()=>{
            setI(p=>
                p>=ds.length-1 ? 0 : p+1
             )
            setD(ds[i])
            console.log(i)
         },1900)
         setD(ds[i])         
         return ()=>{
         clearInterval(s)
         }
        },[i,d])
    return (
        <div className=''>
            <svg id="visual" viewBox="0 0 900 600" width="750" height="250" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
                <g transform="translate(461.6493261929061 306.586734046579)">
                    <path className=' transition-all animate-bspin  ease-linear duration-[2100ms]' d={d?d:"M180 -173C228 -132 258 -66 246 -12C234 42 179.9 83.9 131.9 117.9C83.9 151.9 42 178 1.5 176.4C-38.9 174.9 -77.8 145.8 -102.8 111.8C-127.8 77.8 -138.9 38.9 -154.8 -15.9C-170.7 -70.7 -191.4 -141.4 -166.4 -182.4C-141.4 -223.4 -70.7 -234.7 -2.4 -232.4C66 -230 132 -214 180 -173"} fill="#BB004B">
                    </path>
                </g>
            </svg>
        </div>
    )
}

export default Blob
