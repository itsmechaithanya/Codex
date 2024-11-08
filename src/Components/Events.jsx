import React from 'react'
import inner from '../assets/inner1.png'

function Events() {
  return (
    <div className='bg-black text-white w-screen overflow-hidden h-fit'>
      <div className='h-screen w-screen pt-[15vh] pl-[7vw] relative'>
        <h1 className='text-[8vw] font-extrabold h-[50vh] mt-[1vh]'>Events</h1>
        <p className='font-extralight text-[2vw] w-[85vw] capitalize absolute z-10'>From workshops and hackathons to tech talks and collaborative sessions, each event is entirely student-led, giving members valuable hands-on experience in planning and execution. This approach reflects the club's commitment to fostering a dynamic learning environment through engaging, member-driven activities.</p>
        <img className=' absolute h-[150vh] top-[5vh] left-[-35vw] z-0' src={inner} alt="" />
      </div>
      <div className='h-screen w-screen bg-zinc-00'></div>
    </div>
  )
}

export default Events
