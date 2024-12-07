import React from 'react'
import inner from '../assets/inner1.png'
import Footer from './Footer'
import CardSM from './CardSM'


function ExecutiveMembers({users = []}) {
  return (
    <div className='bg-black text-white w-full overflow-hidden h-fit'>
      <div className='h-screen w-full pt-[15vh] pl-[7vw] relative'>
        <h1 className='lg:text-[8vw] text-[8vh] font-extrabold lg:h-[45vh] h-[40vh] lg:leading-[7.5vw] leading-[7.5vh] mt-[5vh] '>Executive <br /> Members</h1>
        <p className='font-extralight lg:text-[2vw] text-[2vh] w-[85vw] capitalize absolute z-10'>Executive Members focus on organizing events, workshops, and collaborative learning sessions, building a solid foundation in various tech domains. This group is perfect for those who are new to tech or seeking to strengthen their basics within a supportive, team-oriented environment. Through learning from scratch and actively participating in events, Executive Members gain confidence, practical knowledge, and valuable teamwork experience.</p>
        <img className=' absolute lg:h-[150vh] object-cover lg:top-[5vh] lg:left-[-35vw] left-[-35vw] top-[40vh] h-[70vh] z-0' src={inner} alt="" />
      </div>
      <div className='w-screen px-[7vw] mt-[10vh] flex flex-wrap items-center justify-between'>
        {users.map((user, index) => (
          <CardSM key={index} Users={[user]} />
        ))}
      </div>
      <Footer/>
    </div>
  )
}

export default ExecutiveMembers
