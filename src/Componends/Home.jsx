import React from 'react'
import Navbar from './Navbar'
import hero from '../assets/hero.png'
import circle from '../assets/CodeXEnd.png'
import 'remixicon/fonts/remixicon.css'

import mentor from '../assets/mentor.png'

function Home() {
  return (
    <div className='bg-black text-white'>
      <Navbar/>
      <div className='w-screen h-screen relative'>
        <div className='absolute z-10 bottom-[10vh] left-[5vw] text-[8vw] leading-[7.5vw] font-extrabold'>Code. <br /> Create. <br /> Collaborate.</div>
        <div><img className='h-[100vw] -bottom-[70vh] absolute' src={hero} alt="" /></div>
        <div className=' absolute top-[20vh] right-[5vw] text-[1.3vw]'><p>Kickstart Your Coding Journey: <br />
        Collaborate on Real Projects and <br /> Grow with Expert Guidance at <br /> CodeX!</p></div>
        <div className=' absolute bottom-[15vh] right-[5vw] text-[1.2vw] flex items-center'>Explore more <div className='pt-[.2vh]'><i className=" mt-[2vh] ri-arrow-left-down-line ri-2x"></i></div></div>
      </div>
      <div className='w-screen h-screen relative'>
        <div className='text-[2vw] absolute z-10 top-[14vh] left-[5vw]'> <h1 className='w-[60vw] capitalize font-extralight'><span className='text-[2.5vw] font-bold'>CodeX</span> Club at Woxsen University is a student-led organization aimed at building tech skills and fostering innovation. It offers a collaborative environment where students interested in coding, web development, and design come together to work on projects and develop new skills. Members participate in workshops, coding sessions, and hackathons, allowing them to gain hands-on experience in various tech fields.</h1></div>
        <div className='text-[2vw] absolute z-10 bottom-[5vh] right-[5vw]'><h1 className='w-[54vw] text-end capitalize font-extralight'>The club emphasizes creativity, teamwork, and professional growth, helping members expand their technical knowledge and prepare for careers in the tech industry. With networking opportunities and exposure to real-world projects, CodeX is an ideal community for aspiring developers and tech enthusiasts at the university.</h1></div>
        <div className=' absolute right-0'><img src={circle} alt="" /></div>
      </div>
      <div className='w-screen h-screen'>
        <h1 className='text-[4vw] font-bold pt-[10vh] pl-[5vw]'>Meet Your Mentor!</h1>
        <div className='flex'>
            <div className='h-[79vh] w-1/2  pl-[5vw] flex items-center'>
                <div className='h-[70vh] w-[40vw] flex flex-col justify-between '>
                    <div className=''>
                        <h1>Amogh Deshmukh.</h1>
                        <h1>Assistant Dean</h1>
                    </div>
                    <div>
                        <h1>With 10+ Years of Teaching Experience and Former Software Engineer at Dell!</h1>
                        <h1 className='bg-white text-black w-fit px-[1.5vw] py-[.5vw] rounded-full'>LinkedIn</h1>
                    </div>
                </div>
            </div>
            <div className=' h-[79vh] w-1/2  flex items-center justify-center'>
                <div className='h-[70vh] w-[30vw] bg-zinc-800'></div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home