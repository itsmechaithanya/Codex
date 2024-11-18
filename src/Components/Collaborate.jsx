import React from 'react'
import inner from '../assets/inner1.png'

function Collaborate() {
  return (
    <div className='bg-black text-white w-full'>
      <div className='h-screen w-full pt-[15vh] pl-[7vw] relative'>
        <h1 className='lg:text-[8vw] text-[7vh] font-extrabold lg:h-[45vh] h-[40vh] lg:leading-[7.5vw] leading-[7.5vh] mt-[5vh] '>Collaborate <br /> Plus</h1>
        <p className='font-extralight lg:text-[2vw] text-[2vh] w-[85vw] capitalize absolute z-10'>This exclusive platform for Woxsen members provides access to job opportunities and connects students for real-world projects. It offers hands-on experience, valuable networking, and a chance to apply skills practically, helping members get career-ready.</p>
        <img className=' absolute lg:h-[150vh] object-cover lg:top-[5vh] lg:left-[-35vw] left-[-35vw] top-[40vh] h-[70vh] z-0' src={inner} alt="" />
      </div>
      <div className='h-screen w-screen flex flex-col items-center justify-center text-center'>
        <h1 className='lg:text-[1.5vw] text-[1.5vh]'>Something exciting is coming soon!</h1>
        <h1 className='lg:text-[2vw] text-[2vh]'>Stay tuned for a whole new way to connect, collaborate, and grow! 🌟</h1>
      </div>
    </div>
  )
}

export default Collaborate
