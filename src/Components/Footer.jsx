import React from 'react'
import footer from '../assets/footer.png'

function Footer() {
  return (
    <div className='w-screen h-[60vh] overflow-hidden relative'>
      <div className=' absolute bottom-[-40vh] left-[-35vh]'><img className='h-[100vh]' src={footer} alt="" /></div>
      <div className='h-[50vh] w-screen flex justify-center items-center '><h1 className='text-[2vw]'>Code the future to create impact and craft innovation</h1></div>
      <div className='flex justify-center'>
        <div className='border-[.5px] w-[90vw]'></div>
      </div>
      <div className='h-[10vh] flex justify-center items-center'>
        <h1>© 2024 Copyright: CodeX - The Programming Club, Woxsen University</h1>
      </div>
    </div>
  )
}

export default Footer
