import React from 'react'
import logo from '../assets/logo.png'

function Navbar() {
  return (
    <div className='pl-[5vw] pt-[3vh] fixed z-30'>
      <div className='w-[90vw] h-[8vh] rounded-full flex justify-between items-center px-[1vw] backdrop-blur-md bg-[#0000003b]  text-white border'>
        <img className='ml-[1.3vw] h-[6vh]' src={logo} alt="" />
        <div className='bg-white text-black px-[2vw] py-[1vh] rounded-full text-[1.1vw]'>Menu</div>
      </div>
    </div>
  )
}

export default Navbar
