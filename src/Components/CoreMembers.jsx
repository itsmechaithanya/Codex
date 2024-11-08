import React from 'react'
import inner from '../assets/inner1.png'

function CoreMembers() {
  return (
    <div className='bg-black text-white'>
      <div className='h-screen w-screen pt-[15vh] pl-[7vw] relative'>
        <h1 className='text-[8vw] font-extrabold h-[45vh] leading-[7.5vw] mt-[5vh]'>Core <br /> Members </h1>
        <p className='font-extralight text-[2vw] w-[85vw] capitalize absolute z-10'>Core Members focus on creating impactful university projects and advancing their own personal tech projects. They dive deep into hands-on experience, developing advanced technical skills, problem-solving abilities, and innovation through real-world applications. Core Members are encouraged to push boundaries, take on challenging tasks, and create impressive portfolio pieces that showcase their expertise.</p>
        <img className=' absolute h-[150vh] top-[5vh] left-[-35vw] z-0' src={inner} alt="" />
      </div>
      <div className='h-screen w-screen bg-zinc-00'></div>
    </div>
  )
}

export default CoreMembers
