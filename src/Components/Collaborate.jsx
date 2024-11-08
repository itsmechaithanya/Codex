import React from 'react'
import inner from '../assets/inner1.png'

function Collaborate() {
  return (
    <div className='bg-black text-white'>
      <div className='h-screen w-screen pt-[15vh] pl-[7vw] relative'>
        <h1 className='text-[8vw] font-extrabold h-[45vh] leading-[7.5vw] mt-[5vh]'>Collaborate <br /> Plus</h1>
        <p className='font-extralight text-[2vw] w-[85vw] capitalize absolute z-10'>This exclusive platform for Woxsen members provides access to job opportunities and connects students for real-world projects. It offers hands-on experience, valuable networking, and a chance to apply skills practically, helping members get career-ready.</p>
        <img className=' absolute h-[150vh] top-[5vh] left-[-35vw] z-0' src={inner} alt="" />
      </div>
      <div className='h-screen w-screen flex flex-col items-center justify-center'>
        <h1 className='text-[1.5vw]'>Something exciting is coming soon!</h1>
        <h1 className='text-[2vw]'>Stay tuned for a whole new way to connect, collaborate, and grow! 🌟</h1>
      </div>
    </div>
  )
}

export default Collaborate
