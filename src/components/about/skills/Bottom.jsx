import React,{useEffect,useRef} from 'react'
import Icons from './Icons'

function Bottom() {

  const d = useRef(null)

  useEffect(()=>{

    const ob = new IntersectionObserver((entries)=>{
        const[entry] = entries
        if(entry.isIntersecting&&d.current){
         d.current.style.transform = ""
         d.current = null 
      }
    },
    {rootMargin:'0px',root:null,threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]})
    if(d.current) ob.observe(d.current)

  },[])

  return (
    <div className='w-full flex bg-dark-1 justify-end'>
      <div className='  lg:w-[70%] flex sm:flex-row flex-col md:border-t-[1px] border-theme'>
        
        <div style={{transform:'rotateX(90deg)',transformOrigin:'top'}} ref={d} className=' sm:w-[40%] w-[100%] pb-[40%] relative transition-all duration-[1000ms] bg-cover bg-dark-1  text-[90%]  '>
        
          <Icons></Icons>

        </div>

        <div className='sm:w-[60%] w-[100%] text-[60%] px-[0%] md:text-[70%] flex items-center justiy-center'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda totam debitis accusamus omnis molestiae dignissimos necessitatibus eveniet quos aut fugiat obcaecati magnam laudantium voluptate, velit suscipit consequuntur ullam asperiores possimus.
        </div>



      </div>
        
    </div>
  )
}

export default Bottom