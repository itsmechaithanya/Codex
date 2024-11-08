import React from 'react'
import inner from '../assets/inner1.png'

function ExecutiveMembers() {
  return (
    <div className='bg-black text-white'>
      <div className='h-screen w-screen pt-[15vh] pl-[7vw] relative'>
        <h1 className='text-[8vw] font-extrabold h-[45vh] leading-[7.5vw] mt-[5vh] '>Executive <br /> Members</h1>
        <p className='font-extralight text-[2vw] w-[85vw] capitalize absolute z-10'>Executive Members focus on organizing events, workshops, and collaborative learning sessions, building a solid foundation in various tech domains. This group is perfect for those who are new to tech or seeking to strengthen their basics within a supportive, team-oriented environment. Through learning from scratch and actively participating in events, Executive Members gain confidence, practical knowledge, and valuable teamwork experience.</p>
        <img className=' absolute h-[150vh] top-[5vh] left-[-35vw] z-0' src={inner} alt="" />
      </div>
      <div className='h-screen w-screen bg-zinc-00'></div>
    </div>
  )
}

export default ExecutiveMembers
