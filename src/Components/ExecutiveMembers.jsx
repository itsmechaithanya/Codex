import React from 'react'
import inner from '../assets/inner1.png'
import C5 from '../assets/C5.png'
import Footer from './Footer'


function ExecutiveMembers() {
  return (
    <div className='bg-black text-white'>
      <div className='h-screen w-screen pt-[15vh] pl-[7vw] relative'>
        <h1 className='text-[8vw] font-extrabold h-[45vh] leading-[7.5vw] mt-[5vh] '>Executive <br /> Members</h1>
        <p className='font-extralight text-[2vw] w-[85vw] capitalize absolute z-10'>Executive Members focus on organizing events, workshops, and collaborative learning sessions, building a solid foundation in various tech domains. This group is perfect for those who are new to tech or seeking to strengthen their basics within a supportive, team-oriented environment. Through learning from scratch and actively participating in events, Executive Members gain confidence, practical knowledge, and valuable teamwork experience.</p>
        <img className=' absolute h-[150vh] top-[5vh] left-[-35vw] z-0' src={inner} alt="" />
      </div>
      <div className='w-screen'>
      <div className='flex items-center justify-between px-[10vw] mt-[10vh]'>
        <div className='h-[65vh] w-[24vw] flex flex-col items-center py-[3vh]'>
            <div className='h-[40vh] w-[20vw] bg-zinc-800 overflow-hidden rounded-[1vw]'>
              <img className='h-full w-full object-cover object-bottom' src={C5} alt="" />
            </div>
            <div><h1 className='text-[1.8vw] mt-[2vh]'>Harsh Morayya</h1></div>
            <div className='text-center'><h1 className='text-[1.4vw] mt-[2vh] font-light'>Top-notch Software and Web Developer.</h1></div>
            <h1 className='bg-white text-black w-fit px-[2vw] py-[1vh] rounded-full mt-[3vh] text-[1.1vw]'>LinkedIn</h1>
        </div>
        <div className='h-[65vh] w-[24vw]  flex flex-col items-center py-[3vh]'>
            <div className='h-[40vh] w-[20vw] bg-zinc-800 overflow-hidden rounded-[1vw]'>
              <img className='h-full w-full object-cover object-bottom' src={C5} alt="" />
            </div>
            <div><h1 className='text-[1.8vw] mt-[2vh]'>Harsh Morayya</h1></div>
            <div className='text-center'><h1 className='text-[1.4vw] mt-[2vh] font-light'>Top-notch Software and Web Developer.</h1></div>
            <h1 className='bg-white text-black w-fit px-[2vw] py-[1vh] rounded-full mt-[3vh] text-[1.1vw]'>LinkedIn</h1>
        </div>
        <div className='h-[65vh] w-[24vw] flex flex-col items-center py-[3vh]'>
            <div className='h-[40vh] w-[20vw] bg-zinc-800 overflow-hidden rounded-[1vw]'>
              <img className='h-full w-full object-cover object-bottom' src={C5} alt="" />
            </div>
            <div><h1 className='text-[1.8vw] mt-[2vh]'>Harsh Morayya</h1></div>
            <div className='text-center'><h1 className='text-[1.4vw] mt-[2vh] font-light'>Top-notch Software and Web Developer.</h1></div>
            <h1 className='bg-white text-black w-fit px-[2vw] py-[1vh] rounded-full mt-[3vh] text-[1.1vw]'>LinkedIn</h1>
        </div>
      </div>
      <div className='flex items-center justify-between px-[10vw] mt-[10vh]'>
        <div className='h-[65vh] w-[24vw] flex flex-col items-center py-[3vh]'>
            <div className='h-[40vh] w-[20vw] bg-zinc-800 overflow-hidden rounded-[1vw]'>
              <img className='h-full w-full object-cover object-bottom' src={C5} alt="" />
            </div>
            <div><h1 className='text-[1.8vw] mt-[2vh]'>Harsh Morayya</h1></div>
            <div className='text-center'><h1 className='text-[1.4vw] mt-[2vh] font-light'>Top-notch Software and Web Developer.</h1></div>
            <h1 className='bg-white text-black w-fit px-[2vw] py-[1vh] rounded-full mt-[3vh] text-[1.1vw]'>LinkedIn</h1>
        </div>
        <div className='h-[65vh] w-[24vw]  flex flex-col items-center py-[3vh]'>
            <div className='h-[40vh] w-[20vw] bg-zinc-800 overflow-hidden rounded-[1vw]'>
              <img className='h-full w-full object-cover object-bottom' src={C5} alt="" />
            </div>
            <div><h1 className='text-[1.8vw] mt-[2vh]'>Harsh Morayya</h1></div>
            <div className='text-center'><h1 className='text-[1.4vw] mt-[2vh] font-light'>Top-notch Software and Web Developer.</h1></div>
            <h1 className='bg-white text-black w-fit px-[2vw] py-[1vh] rounded-full mt-[3vh] text-[1.1vw]'>LinkedIn</h1>
        </div>
        <div className='h-[65vh] w-[24vw] flex flex-col items-center py-[3vh]'>
            <div className='h-[40vh] w-[20vw] bg-zinc-800 overflow-hidden rounded-[1vw]'>
              <img className='h-full w-full object-cover object-bottom' src={C5} alt="" />
            </div>
            <div><h1 className='text-[1.8vw] mt-[2vh]'>Harsh Morayya</h1></div>
            <div className='text-center'><h1 className='text-[1.4vw] mt-[2vh] font-light'>Top-notch Software and Web Developer.</h1></div>
            <h1 className='bg-white text-black w-fit px-[2vw] py-[1vh] rounded-full mt-[3vh] text-[1.1vw]'>LinkedIn</h1>
        </div>
      </div>
      </div>
      <Footer/>
    </div>
  )
}

export default ExecutiveMembers
