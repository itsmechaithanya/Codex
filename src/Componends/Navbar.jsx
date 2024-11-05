import React from 'react'
import logo from '../assets/logo.png'

function Navbar() {
  return (
    <div className='pl-[5vw] pt-[3vh] fixed z-30'>
      <div className='w-[90vw] h-[8vh] rounded-full flex justify-between items-center px-[1vw] backdrop-blur-md bg-[#0000003b]  text-white border'>
        <img className='ml-[1.3vw] h-[6vh]' src={logo} alt="" />
        <div className='bg-white text-black px-[2vw] py-[1vh] rounded-full text-[1.1vw]'>Menu</div>
      </div>
      <div className='flex justify-end'>
        <div className='hiddenmenu h-[60vh] w-[25vw] bg-red-500 mt-[2vh] rounded-[3vh] relative'> 
          <div className=' absolute right-[1vw] '><i class="ri-close-circle-fill ri-3x"></i></div>
          <div className=' absolute top-[10vh] left-[2vw] text-[1.8vw] font-light'>
            <h1>Events</h1>
            <h1>Core Members</h1>
            <h1>Executive Members</h1>
            <h1>Collaborate<i class="ri-add-line"></i></h1>
          </div>
          <div className='absolute top-[35vh] left-[2vw]'>
            <h1 className='font-bold text-[1.8vw]'>Get in touch !</h1>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Navbar
