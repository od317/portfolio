import {useEffect,useState} from 'react'

export default function draw(svg,v,id){
    const [ypos,setYpos] = useState(0)

    function handleAnimation(){
        let diff = window.scrollY - document.getElementById(id).getBoundingClientRect().top*3
        diff = id === "svg2" || id === "svg4" ? diff/3 : diff
        let val = diff >=50 ? v - ((diff-50)) : v
        val = Math.max(val,0)
        svg.current.style.strokeDashoffset=val
    }

    function handleScroll(){
        setYpos(window.scrollY)
    }
    
    useEffect(()=>{
        if(svg.current)
           handleAnimation()
        window.addEventListener('scroll', handleScroll)
           return () => {
               window.removeEventListener('scroll', handleScroll)
           }
        },[ypos])

}