import React from 'react'
import inner from '../assets/inner1.png'
import Footer from './Footer'
import e1 from '../assets/e1.png'

function Events() {
  return (
    <div className='bg-black text-white w-full overflow-hidden h-fit'>
      <div className='h-screen w-full pt-[15vh] pl-[7vw] relative'>
        <h1 className='lg:text-[8vw] text-[8vh] font-extrabold lg:h-[50vh] h-[50vh] mt-[1vh]'>Events</h1>
        <p className='font-extralight lg:text-[2vw] text-[2vh] w-[85vw] capitalize absolute z-10'>From workshops and hackathons to tech talks and collaborative sessions, each event is entirely student-led, giving members valuable hands-on experience in planning and execution. This approach reflects the club's commitment to fostering a dynamic learning environment through engaging, member-driven activities.</p>
        <img className=' absolute lg:h-[150vh] object-cover lg:top-[5vh] lg:left-[-35vw] left-[-35vw] top-[40vh] h-[70vh] z-0' src={inner} alt="" />
      </div>
      <div className='h-fit lg:h-screen flex flex-col lg:flex-row justify-center items-center'>
        <div className='lg:h-[80vh] lg:w-[33vw] w-[90vw] overflow-hidden'>
          <img className='w-full h-full' src={e1} alt="" />
        </div>
        <div className='lg:h-[80vh] h-[13vh] lg:w-[33vw] w-[90vw] lg:ml-[10vw] flex flex-col justify-between lg:py-[5vh] lg:mt-[5vh] mt-[2vh] mb-[10vh] text-center lg:text-left'>
          <div>
            <h1 className='text-[3vh] lg:text-[3vw] capitalize font-medium'>Translation day contest</h1>
            <h1 className='text-[1.4vh] lg:text-[1.4vw] capitalize lg:w-2/3 lg:mt-[2vh] font-light'>E-certificates, cash Price and internship opportunities</h1>
          </div>
          <div>
            <h1 className='text-[1.3vh] lg:text-[1.3vw]'>On 3rd and 7th November 2024</h1>
          </div>
        </div>
      </div>
      <div className='h-fit lg:h-screen flex flex-col lg:flex-row justify-center items-center'>
        <div className='lg:h-[80vh] lg:w-[33vw] w-[90vw] overflow-hidden'>
          <img className='w-full h-full' src={e1} alt="" />
        </div>
        <div className='lg:h-[80vh] h-[13vh] lg:w-[33vw] w-[90vw] lg:ml-[10vw] flex flex-col justify-between lg:py-[5vh] lg:mt-[5vh] mt-[2vh] mb-[10vh] text-center lg:text-left'>
          <div>
            <h1 className='text-[3vh] lg:text-[3vw] capitalize font-medium'>Translation day contest</h1>
            <h1 className='text-[1.4vh] lg:text-[1.4vw] capitalize lg:w-2/3 lg:mt-[2vh] font-light'>E-certificates, cash Price and internship opportunities</h1>
          </div>
          <div>
            <h1 className='text-[1.3vh] lg:text-[1.3vw]'>On 3rd and 7th November 2024</h1>
          </div>
        </div>
      </div>
      <div className='h-fit lg:h-screen w-full flex flex-col lg:flex-row justify-center items-center'>
        <div className='lg:h-[80vh] lg:w-[33vw] w-[90vw] overflow-hidden'>
          <img className='w-full h-full' src={e1} alt="" />
        </div>
        <div className='lg:h-[80vh] h-[13vh] lg:w-[33vw] w-[90vw] lg:ml-[10vw] flex flex-col justify-between lg:py-[5vh] lg:mt-[5vh] mt-[2vh] mb-[10vh] text-center lg:text-left'>
          <div>
            <h1 className='text-[3vh] lg:text-[3vw] capitalize font-medium'>Translation day contest</h1>
            <h1 className='text-[1.4vh] lg:text-[1.4vw] capitalize lg:w-2/3 lg:mt-[2vh] font-light'>E-certificates, cash Price and internship opportunities</h1>
          </div>
          <div>
            <h1 className='text-[1.3vh] lg:text-[1.3vw]'>On 3rd and 7th November 2024</h1>
            
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Events
