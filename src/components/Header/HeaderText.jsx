import { document } from 'postcss'
import React , { useRef,useEffect } from 'react'
import v from '../../assets/v.mp4'

function HeaderText() {
  const r1 = useRef(null)
  const r11 = useRef(null)
  const r2 = useRef(null)
  const r3 = useRef(null)
  const r4 = useRef(null)
  const textRef = useRef(null)
  useEffect(()=>{

    anime({
      targets: ' #od  path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 1000,
      delay: function(el, i) { return i * 250 },
      direction: 'alternate',
      loop: false
    })
    setTimeout(()=>{
      anime({
        targets: ' #od  path',
        easing: 'easeInOutSine',
        duration: 500,
        fill: '#0174BE',
        strokeWidth:'0px',
        delay: function(el, i) { return i * 0 },
        direction: 'alternate',
        loop: false
      })
    },2500)
    setTimeout(()=>{
      r11.current.style.transform = 'rotateX(0deg)'
      setTimeout(()=>{
          r1.current.classList.remove('translate-y-[100%]')
          r1.current.classList.add('translate-y-[0%]')
      },900)
      setTimeout(()=>{
          r2.current.style.transform = 'rotateX(0deg)'
      },1300)
      setTimeout(()=>{
        r4.current.style.transform = 'rotateX(0deg)'
        console.log(r4.current)
      },1800)
    },500)

    window.addEventListener('mousemove',(e)=>{
          // const x = (window.innerWidth - e.pageX*10)/100
          // const y = (window.innerHeight - e.pageY*10)/100
          // textRef.current.style.transform = `translateX(${x}px) translateY(${y}px)`
    }) 

    },[])
    

  
  return (
    <>
    <div ref={r4} style={{transform:'rotateX(-90deg)'}} className=' transition-all duration-[500ms]  h-screen w-screen absolute t3  flex items-center justify-center'>
      <video  autoPlay loop muted className='w-[25%]  translate-x-[50%]  translate-y-[50%]  ' src={v}></video>
    </div>
    <div className='w-screen h-screen sticky  top-0 text-[400%] flex flex-col items-center justify-center'>
    <div ref={r1}  className='flex flex-row  z-[3]  translate-y-[100%] transition-all duration-[400ms]  text-white  items-center justify-center text-center w-full'>
        <div  ref={r11} style={{transform:'rotateX(-90deg)'}} className='w-full transition-all duration-[900ms] items-center justify-center '>
            <div   className=' w-full items-center justify-center flex flex-row'>
              <div className='mr-[.5%]'>Hello, I'm</div>
              {/* <svg id="od" width="229" height="35" viewBox="0 0 230 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21.2054 28.1312L21.2022 28.1332C19.7161 29.04 17.9949 29.5 16.0227 29.5C14.0785 29.5 12.3556 29.0406 10.8399 28.1313C9.31634 27.2171 8.11099 25.9749 7.21958 24.3969C6.35887 22.8262 5.92266 21.0315 5.92266 19C5.92266 16.9685 6.35888 15.1738 7.21961 13.6031C8.11102 12.025 9.31636 10.7829 10.8399 9.86875C12.3556 8.95936 14.0785 8.50001 16.0227 8.50001C17.9949 8.50001 19.7161 8.96 21.2022 9.86683L21.2054 9.86875C22.7286 10.7826 23.9197 12.024 24.7843 13.6004L24.7842 13.6004L24.7873 13.6058C25.6737 15.1762 26.1227 16.9698 26.1227 19C26.1227 21.0302 25.6737 22.8239 24.7873 24.3942L24.7872 24.3942L24.7843 24.3996C23.9197 25.9761 22.7286 27.2174 21.2054 28.1312ZM2.39989 13.1307L2.39988 13.1307L2.39842 13.1343C1.67921 14.9323 1.32266 16.8894 1.32266 19C1.32266 21.0849 1.67953 23.0408 2.39746 24.8633L2.39742 24.8633L2.39989 24.8693C3.14339 26.6868 4.17844 28.2752 5.50548 29.6299L5.50547 29.6299L5.50911 29.6336C6.83577 30.9602 8.39591 32.0086 10.1849 32.7792L10.1848 32.7793L10.1909 32.7818C11.9897 33.529 13.9355 33.9 16.0227 33.9C18.1355 33.9 20.0825 33.5293 21.857 32.7807L21.8605 32.7792C23.6494 32.0086 25.2096 30.9602 26.5362 29.6336L26.5362 29.6336L26.5399 29.6299C27.8675 28.2746 28.8897 26.6851 29.6067 24.8663C30.352 23.0432 30.7227 21.0861 30.7227 19C30.7227 16.8887 30.3525 14.9309 29.6062 13.1325C28.8893 11.3142 27.8668 9.73755 26.5381 8.40829C25.2112 7.0543 23.6499 6.00471 21.8588 5.26005C20.0839 4.48429 18.1362 4.10001 16.0227 4.10001C13.9342 4.10001 11.9873 4.48486 10.1878 5.25952C8.39617 6.0042 6.83444 7.05397 5.50729 8.40827C4.17886 9.7372 3.1434 11.3132 2.39989 13.1307Z" stroke="white"/>
                      <path d="M36.0002 27.0827L35.7321 26.6804L35.321 26.9349L32.801 28.4949L32.4186 28.7316L32.6137 29.1369C32.9875 29.9132 33.5277 30.6626 34.2238 31.3866L34.2237 31.3866L34.2307 31.3936C34.9702 32.1331 35.8607 32.7389 36.8955 33.2143L36.8954 33.2145L36.9058 33.2189C37.9633 33.6763 39.1389 33.9 40.4242 33.9C42.4149 33.9 44.0652 33.3367 45.3227 32.1681C46.5999 31.006 47.2442 29.5385 47.2442 27.8C47.2442 26.6269 46.9576 25.6199 46.3443 24.8201C45.7888 24.0617 45.0383 23.4317 44.1088 22.9238C43.208 22.4056 42.2158 21.9303 41.1333 21.4971C40.5045 21.235 39.9027 20.9602 39.3278 20.6728C38.7781 20.3979 38.3452 20.0939 38.0178 19.7664C37.7279 19.4766 37.6042 19.1735 37.6042 18.84C37.6042 18.3819 37.769 18.0997 38.0849 17.9066C38.473 17.6695 38.9524 17.54 39.5442 17.54C40.4221 17.54 41.1839 17.7462 41.8447 18.1474L41.8447 18.1474L41.8514 18.1514C42.5683 18.5716 43.156 19.0994 43.6205 19.735L43.898 20.1147L44.2939 19.861L46.8539 18.221L47.2442 17.971L47.0244 17.5629C46.6166 16.8056 46.0513 16.1413 45.3366 15.5696C44.6241 14.9996 43.8027 14.5477 42.8774 14.211C41.9642 13.8688 40.985 13.7 39.9442 13.7C38.8976 13.7 37.8787 13.8841 36.8901 14.2513L36.8901 14.2513L36.8857 14.253C35.9011 14.6294 35.0811 15.2132 34.4366 16.0042L34.4365 16.0041L34.4295 16.013C33.7885 16.8373 33.4842 17.8583 33.4842 19.04C33.4842 20.1928 33.7739 21.196 34.3824 22.0176L34.3887 22.026L34.3953 22.0342C34.996 22.7779 35.7248 23.3917 36.5777 23.875L36.5862 23.8798L36.5949 23.8843C37.4347 24.3177 38.2626 24.6978 39.0785 25.0242L39.0785 25.0244L39.0906 25.0289C39.7948 25.2897 40.458 25.5759 41.0806 25.8872L41.0882 25.891L41.0959 25.8945C41.6827 26.1635 42.1426 26.4978 42.4893 26.8908L42.4996 26.9025L42.5107 26.9136C42.8374 27.2403 43.0042 27.6437 43.0042 28.16C43.0042 28.737 42.7998 29.1626 42.3932 29.4885C42.0043 29.7949 41.4222 29.98 40.5842 29.98C39.9031 29.98 39.2796 29.8595 38.7083 29.6234C38.1508 29.3551 37.6546 29.0033 37.2178 28.5664C36.7608 28.1095 36.3552 27.615 36.0002 27.0827Z" stroke="white"/>
                      <path d="M59.9066 25.0027C60.3067 25.1108 60.7035 25.252 61.097 25.4267V25.8C61.097 26.6723 60.8804 27.4302 60.4564 28.0896L60.4564 28.0896L60.4539 28.0936C60.0518 28.7322 59.496 29.2315 58.7734 29.5928L58.7734 29.5927L58.7673 29.5959C58.074 29.9545 57.2745 30.14 56.357 30.14C55.6409 30.14 55.015 30.0298 54.4718 29.8193C53.9728 29.5901 53.5846 29.2657 53.2949 28.8453C53.036 28.4319 52.897 27.9302 52.897 27.32C52.897 26.7363 53.036 26.263 53.2931 25.8773C53.5476 25.4956 53.9403 25.1792 54.506 24.9429C55.0931 24.7088 55.8764 24.58 56.877 24.58C57.953 24.58 58.958 24.7208 59.8945 24.9993L59.8945 24.9994L59.9066 25.0027ZM58.7278 33.3099C59.636 32.9836 60.4278 32.5117 61.097 31.8929V33V33.5H61.597H64.797H65.297V33V19.8C65.297 18.5131 64.967 17.392 64.2817 16.4663C63.6315 15.5521 62.7102 14.8726 61.5457 14.4169C60.4057 13.9337 59.0855 13.7 57.597 13.7C55.8428 13.7 54.308 13.9602 53.0062 14.4979L53.0062 14.4979L53.0026 14.4994C51.7832 15.0142 50.7982 15.5384 50.062 16.0763L49.6769 16.3578L49.9399 16.7557L51.4999 19.1157L51.7883 19.5519L52.2111 19.2444C52.4846 19.0455 52.868 18.8019 53.3676 18.5127C53.8315 18.2441 54.4056 18.005 55.0967 17.8001C55.7914 17.6019 56.5702 17.5 57.437 17.5C57.9652 17.5 58.4639 17.5503 58.934 17.6493C59.3909 17.7455 59.7722 17.8985 60.0866 18.1006L60.0931 18.1048L60.0998 18.1087C60.4163 18.2987 60.658 18.56 60.8298 18.9036L60.8297 18.9037L60.8359 18.9153C60.998 19.2192 61.097 19.6503 61.097 20.24V22.0614C60.7185 21.8802 60.2985 21.7159 59.8394 21.567C58.8883 21.2227 57.7219 21.06 56.357 21.06C54.013 21.06 52.1104 21.6258 50.7126 22.8195C49.3375 23.99 48.657 25.5611 48.657 27.48C48.657 28.8134 48.9701 29.981 49.621 30.9573C50.2567 31.9109 51.0968 32.6489 52.1334 33.1672L52.1408 33.1709L52.1483 33.1743C53.2025 33.6587 54.3273 33.9 55.517 33.9C56.5924 33.9 57.6635 33.7018 58.7278 33.3099Z" stroke="white"/>
                      <path d="M95.4148 33.5H95.9148V33V21.4C95.9148 19.8326 95.6681 18.4676 95.1538 17.3216C94.6667 16.15 93.9393 15.2393 92.9633 14.6182C91.9882 13.9976 90.8239 13.7 89.4948 13.7C88.1866 13.7 87.0029 14.0136 85.9585 14.6507C85.1518 15.1222 84.4582 15.7781 83.8739 16.6063C83.4223 15.822 82.8137 15.184 82.048 14.7011C81.0468 14.0261 79.8542 13.7 78.4948 13.7C77.2725 13.7 76.1815 13.9708 75.2396 14.5301L75.2395 14.53L75.2336 14.5337C74.7474 14.8316 74.3084 15.2096 73.9148 15.663V14.6V14.1H73.4148H70.2148H69.7148V14.6V33V33.5H70.2148H73.4148H73.9148V33V21.8C73.9148 20.8995 74.0774 20.1529 74.3821 19.5436C74.686 18.9357 75.1092 18.4942 75.653 18.1996L75.6599 18.1959L75.6668 18.1919C76.2171 17.8709 76.8867 17.7 77.6948 17.7C78.7869 17.7 79.4954 18.0341 79.9348 18.62L79.9347 18.6201L79.9417 18.6289C80.4266 19.2461 80.7148 20.2712 80.7148 21.8V33V33.5H81.2148H84.4148H84.9148V33V21.8C84.9148 20.8995 85.0774 20.1529 85.3821 19.5436C85.686 18.9357 86.1092 18.4942 86.653 18.1996L86.6599 18.1959L86.6668 18.1919C87.2171 17.8709 87.8867 17.7 88.6948 17.7C89.7869 17.7 90.4954 18.0341 90.9348 18.62L90.9347 18.6201L90.9417 18.6289C91.4266 19.2461 91.7148 20.2712 91.7148 21.8V33V33.5H92.2148H95.4148Z" stroke="white"/>
                      <path d="M110.375 25.0027C110.775 25.1108 111.172 25.252 111.566 25.4267V25.8C111.566 26.6723 111.349 27.4302 110.925 28.0896L110.925 28.0896L110.923 28.0936C110.521 28.7322 109.965 29.2315 109.242 29.5928L109.242 29.5927L109.236 29.5959C108.543 29.9545 107.743 30.14 106.826 30.14C106.11 30.14 105.484 30.0298 104.941 29.8193C104.442 29.5901 104.053 29.2657 103.764 28.8453C103.505 28.4319 103.366 27.9302 103.366 27.32C103.366 26.7363 103.505 26.263 103.762 25.8773C104.016 25.4956 104.409 25.1792 104.975 24.9429C105.562 24.7088 106.345 24.58 107.346 24.58C108.422 24.58 109.427 24.7208 110.363 24.9993L110.363 24.9994L110.375 25.0027ZM109.197 33.3099C110.105 32.9836 110.897 32.5117 111.566 31.8929V33V33.5H112.066H115.266H115.766V33V19.8C115.766 18.5131 115.436 17.392 114.75 16.4663C114.1 15.5521 113.179 14.8726 112.014 14.4169C110.874 13.9337 109.554 13.7 108.066 13.7C106.312 13.7 104.777 13.9602 103.475 14.4979L103.475 14.4979L103.471 14.4994C102.252 15.0142 101.267 15.5384 100.531 16.0763L100.146 16.3578L100.409 16.7557L101.969 19.1157L102.257 19.5519L102.68 19.2444C102.953 19.0455 103.337 18.8019 103.836 18.5127C104.3 18.2441 104.874 18.005 105.565 17.8001C106.26 17.6019 107.039 17.5 107.906 17.5C108.434 17.5 108.933 17.5503 109.403 17.6493C109.86 17.7455 110.241 17.8985 110.555 18.1006L110.562 18.1048L110.569 18.1087C110.885 18.2987 111.127 18.56 111.299 18.9036L111.298 18.9037L111.305 18.9153C111.467 19.2192 111.566 19.6503 111.566 20.24V22.0614C111.187 21.8802 110.767 21.7159 110.308 21.567C109.357 21.2227 108.191 21.06 106.826 21.06C104.482 21.06 102.579 21.6258 101.181 22.8195C99.8063 23.99 99.1258 25.5611 99.1258 27.48C99.1258 28.8134 99.4389 29.981 100.09 30.9573C100.725 31.9109 101.566 32.6489 102.602 33.1672L102.61 33.1709L102.617 33.1743C103.671 33.6587 104.796 33.9 105.986 33.9C107.061 33.9 108.132 33.7018 109.197 33.3099Z" stroke="white"/>
                      <path d="M132.876 4.5H132.376V5V33V33.5H132.876H134.256H134.756H136.276H136.776H141.276C144.07 33.5 146.569 32.8967 148.759 31.6768C150.944 30.4597 152.663 28.7685 153.909 26.6099L153.91 26.6075C155.159 24.4144 155.776 21.8732 155.776 19C155.776 16.1276 155.16 13.5989 153.91 11.4314C152.665 9.24636 150.946 7.54103 148.759 6.32318C146.569 5.10334 144.07 4.5 141.276 4.5H136.776H136.276H134.756H134.256H132.876ZM136.776 29.1V8.9H141.276C142.795 8.9 144.173 9.14444 145.415 9.62618L145.415 9.62625L145.423 9.62933C146.666 10.0857 147.723 10.7543 148.602 11.6336L148.602 11.6336L148.607 11.6386C149.485 12.4914 150.167 13.5359 150.65 14.7808C151.131 16.0213 151.376 17.4254 151.376 19C151.376 20.5746 151.131 21.9787 150.65 23.2192C150.167 24.464 149.485 25.5233 148.605 26.404C147.725 27.2582 146.665 27.9285 145.419 28.4122C144.176 28.8684 142.796 29.1 141.276 29.1H136.776Z" stroke="white"/>
                      <path d="M163.563 14.6V14.1H163.063H159.863H159.363V14.6V33V33.5H159.863H163.063H163.563V33V22.3V21.8C163.563 20.9532 163.64 20.2083 163.788 19.5614C163.955 18.9491 164.229 18.4971 164.594 18.1749C164.93 17.8786 165.425 17.7 166.143 17.7C166.631 17.7 166.993 17.7738 167.254 17.894L167.269 17.9008L167.284 17.9067C167.573 18.018 167.919 18.2167 168.323 18.52L168.746 18.8371L169.039 18.3973L170.799 15.7573L171.02 15.4256L170.746 15.1361C170.216 14.5767 169.61 14.1902 168.928 14.0013C168.315 13.7986 167.652 13.7 166.943 13.7C165.95 13.7 165.003 14.0904 164.109 14.8108C163.92 14.9638 163.738 15.128 163.563 15.3032V14.6Z" stroke="white"/>
                      <path d="M177.074 1.79999V1.29999H176.574H173.374H172.874V1.79999V33V33.5H173.374H176.574H177.074V33V31.3668C177.51 31.8617 177.996 32.2916 178.535 32.6545L178.535 32.6546L178.539 32.6575C179.801 33.489 181.245 33.9 182.854 33.9C184.614 33.9 186.219 33.4943 187.66 32.6757C189.128 31.8561 190.299 30.6832 191.168 29.1689C192.046 27.64 192.474 25.8442 192.474 23.8C192.474 21.7317 192.047 19.9342 191.167 18.4294C190.298 16.9159 189.128 15.7436 187.66 14.9243C186.219 14.1057 184.614 13.7 182.854 13.7C181.245 13.7 179.801 14.1109 178.539 14.9425L178.539 14.9425L178.535 14.9455C177.996 15.3084 177.51 15.7383 177.074 16.2332V1.79999ZM187.419 20.4468L187.419 20.4468L187.424 20.4555C187.956 21.3488 188.234 22.4559 188.234 23.8C188.234 25.1441 187.956 26.2511 187.424 27.1445L187.424 27.1444L187.419 27.1532C186.904 28.0608 186.212 28.7378 185.341 29.1978L185.341 29.1978L185.336 29.2006C184.481 29.6643 183.524 29.9 182.454 29.9C181.616 29.9 180.779 29.6733 179.938 29.2035C179.116 28.7442 178.431 28.0637 177.884 27.1445C177.353 26.2511 177.074 25.1441 177.074 23.8C177.074 22.4559 177.353 21.3488 177.884 20.4555C178.431 19.5363 179.116 18.8558 179.938 18.3965C180.779 17.9267 181.616 17.7 182.454 17.7C183.524 17.7 184.481 17.9356 185.336 18.3994L185.336 18.3994L185.341 18.4022C186.212 18.8622 186.904 19.5392 187.419 20.4468Z" stroke="white"/>
                      <path d="M205.336 25.0027C205.736 25.1108 206.133 25.252 206.527 25.4267V25.8C206.527 26.6723 206.31 27.4302 205.886 28.0896L205.886 28.0896L205.884 28.0936C205.482 28.7322 204.926 29.2315 204.203 29.5928L204.203 29.5927L204.197 29.5959C203.504 29.9545 202.704 30.14 201.787 30.14C201.071 30.14 200.445 30.0298 199.901 29.8193C199.402 29.5901 199.014 29.2657 198.725 28.8453C198.466 28.4319 198.327 27.9302 198.327 27.32C198.327 26.7363 198.466 26.263 198.723 25.8773C198.977 25.4956 199.37 25.1792 199.936 24.9429C200.523 24.7088 201.306 24.58 202.307 24.58C203.383 24.58 204.388 24.7208 205.324 24.9993L205.324 24.9994L205.336 25.0027ZM204.158 33.3099C205.066 32.9836 205.857 32.5117 206.527 31.8929V33V33.5H207.027H210.227H210.727V33V19.8C210.727 18.5131 210.397 17.392 209.711 16.4663C209.061 15.5521 208.14 14.8726 206.975 14.4169C205.835 13.9337 204.515 13.7 203.027 13.7C201.272 13.7 199.738 13.9602 198.436 14.4979L198.436 14.4979L198.432 14.4994C197.213 15.0142 196.228 15.5384 195.492 16.0763L195.107 16.3578L195.37 16.7557L196.93 19.1157L197.218 19.5519L197.641 19.2444C197.914 19.0455 198.298 18.8019 198.797 18.5127C199.261 18.2441 199.835 18.005 200.526 17.8001C201.221 17.6019 202 17.5 202.867 17.5C203.395 17.5 203.894 17.5503 204.364 17.6493C204.821 17.7455 205.202 17.8985 205.516 18.1006L205.523 18.1048L205.529 18.1087C205.846 18.2987 206.088 18.56 206.26 18.9036L206.259 18.9037L206.266 18.9153C206.428 19.2192 206.527 19.6503 206.527 20.24V22.0614C206.148 21.8802 205.728 21.7159 205.269 21.567C204.318 21.2227 203.152 21.06 201.787 21.06C199.443 21.06 197.54 21.6258 196.142 22.8195C194.767 23.99 194.087 25.5611 194.087 27.48C194.087 28.8134 194.4 29.981 195.051 30.9573C195.686 31.9109 196.526 32.6489 197.563 33.1672L197.57 33.1709L197.578 33.1743C198.632 33.6587 199.757 33.9 200.947 33.9C202.022 33.9 203.093 33.7018 204.158 33.3099Z" stroke="white"/>
                      <path d="M216.821 27.0827L216.552 26.6804L216.141 26.9349L213.621 28.4949L213.239 28.7316L213.434 29.1369C213.808 29.9132 214.348 30.6626 215.044 31.3866L215.044 31.3866L215.051 31.3936C215.79 32.1331 216.681 32.7389 217.716 33.2143L217.716 33.2145L217.726 33.2189C218.784 33.6763 219.959 33.9 221.245 33.9C223.235 33.9 224.885 33.3367 226.143 32.1681C227.42 31.006 228.065 29.5385 228.065 27.8C228.065 26.6269 227.778 25.6199 227.165 24.8201C226.609 24.0617 225.859 23.4317 224.929 22.9238C224.028 22.4056 223.036 21.9303 221.954 21.4971C221.325 21.235 220.723 20.9602 220.148 20.6728C219.598 20.3979 219.165 20.0939 218.838 19.7664C218.548 19.4766 218.425 19.1735 218.425 18.84C218.425 18.3819 218.589 18.0997 218.905 17.9066C219.293 17.6695 219.773 17.54 220.365 17.54C221.242 17.54 222.004 17.7462 222.665 18.1474L222.665 18.1474L222.672 18.1514C223.389 18.5716 223.976 19.0994 224.441 19.735L224.718 20.1147L225.114 19.861L227.674 18.221L228.065 17.971L227.845 17.5629C227.437 16.8056 226.872 16.1413 226.157 15.5696C225.444 14.9996 224.623 14.5477 223.698 14.211C222.784 13.8688 221.805 13.7 220.765 13.7C219.718 13.7 218.699 13.8841 217.71 14.2513L217.71 14.2513L217.706 14.253C216.721 14.6294 215.901 15.2132 215.257 16.0042L215.257 16.0041L215.25 16.013C214.609 16.8373 214.305 17.8583 214.305 19.04C214.305 20.1928 214.594 21.196 215.203 22.0176L215.209 22.026L215.216 22.0342C215.816 22.7779 216.545 23.3917 217.398 23.875L217.407 23.8798L217.415 23.8843C218.255 24.3177 219.083 24.6978 219.899 25.0242L219.899 25.0244L219.911 25.0289C220.615 25.2897 221.278 25.5759 221.901 25.8872L221.909 25.891L221.916 25.8945C222.503 26.1635 222.963 26.4978 223.31 26.8908L223.32 26.9025L223.331 26.9136C223.658 27.2403 223.825 27.6437 223.825 28.16C223.825 28.737 223.62 29.1627 223.213 29.4885C222.825 29.7949 222.243 29.98 221.405 29.98C220.723 29.98 220.1 29.8595 219.529 29.6234C218.971 29.3551 218.475 29.0033 218.038 28.5664C217.581 28.1095 217.175 27.615 216.821 27.0827Z" stroke="white"/>
              </svg> */}
              <span className='text-blue-500'>Osama Drbas</span>
              .
          </div>
        </div>
      </div>
     <div ref={r3} className="w-full text-center  text-white  transition-all duration-[400ms]  ">
        <div ref={r2} id='r2' style={{transform:'rotateX(-90deg)'}} className='w-full text-center  text-white  transition-all duration-[500ms]   '>I'm frontend developer</div>  
     </div>
     </div>
     </>
  )
}

export default HeaderText
