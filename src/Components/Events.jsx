import React from 'react'
import inner from '../assets/inner1.png'

function Events() {
  return (
    <div className='bg-black text-white w-full overflow-hidden h-fit'>
      <div className='h-screen w-full pt-[15vh] pl-[7vw] relative'>
        <h1 className='lg:text-[8vw] text-[8vh] font-extrabold lg:h-[50vh] h-[50vh] mt-[1vh]'>Events</h1>
        <p className='font-extralight lg:text-[2vw] text-[2vh] w-[85vw] capitalize absolute z-10'>From workshops and hackathons to tech talks and collaborative sessions, each event is entirely student-led, giving members valuable hands-on experience in planning and execution. This approach reflects the club's commitment to fostering a dynamic learning environment through engaging, member-driven activities.</p>
        <img className=' absolute lg:h-[150vh] object-cover lg:top-[5vh] lg:left-[-35vw] left-[-35vw] top-[40vh] h-[70vh] z-0' src={inner} alt="" />
      </div>
      <div className='h-screen w-full bg-zinc-00'></div>
    </div>
  )
}

export default Events
