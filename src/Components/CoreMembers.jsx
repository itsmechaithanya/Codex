import React from 'react'
import inner from '../assets/inner1.png'
import C1 from '../assets/C1.png'
import C2 from '../assets/C2.png'
import C3 from '../assets/C3.png'
import C4 from '../assets/C4.png'
import C5 from '../assets/C5.png'
import Footer from './Footer'


function CoreMembers() {
  return (
    <div className='bg-black text-white'>
      <div className='h-screen w-screen pt-[15vh] pl-[7vw] relative'>
        <h1 className='text-[8vw] font-extrabold h-[45vh] leading-[7.5vw] mt-[5vh]'>Core <br /> Members </h1>
        <p className='font-extralight text-[2vw] w-[85vw] capitalize absolute z-10'>Core Members focus on creating impactful university projects and advancing their own personal tech projects. They dive deep into hands-on experience, developing advanced technical skills, problem-solving abilities, and innovation through real-world applications. Core Members are encouraged to push boundaries, take on challenging tasks, and create impressive portfolio pieces that showcase their expertise.</p>
        <img className=' absolute h-[150vh] top-[5vh] left-[-35vw] z-0' src={inner} alt="" />
      </div>
      <div className=' w-screen'>
        <div className='flex mt-[7vh]'>
            <div className='h-[79vh] w-1/2  pl-[5vw] flex items-center'>
                <div className='h-[70vh] w-[30vw] flex flex-col justify-between pl-[5vw] pb-[3vh]'>
                    <div className=''>
                        <h1 className='text-[4vw] leading-[4vw] font-light'>Shravani Ankur Wanjari.</h1>
                        <h1 className='font-light mt-[1vh] text-[1.3vw]'>President</h1>
                    </div>
                    <div>
                        <h1 className='text-[1.3vw]'>Currently an intern at the AI Research Centre at Woxsen University, also engaged in a UI/UX Design internship at Ozibook and serving as an Internshala Student Partner.</h1>
                        <h1 className='bg-white text-black w-fit px-[2vw] py-[1vh] rounded-full mt-[3vh] text-[1.1vw]'>LinkedIn</h1>
                    </div>
                </div>
            </div>
            <div className=' h-[79vh] w-1/2  flex items-center justify-center'>
                <div className='h-[79vh] w-[35vw] overflow-hidden bg-zinc-800 mb-[13vh]'>
                    <img className='h-full w-full object-cover object-bottom' src={C1} alt="" />
                </div>
            </div>
        </div>
        <div className='flex flex-row-reverse mt-[15vh]'>
            <div className='h-[79vh] w-1/2  pl-[5vw] flex items-center'>
                <div className='h-[70vh] w-[30vw] flex flex-col justify-between pl-[5vw] pb-[3vh]'>
                    <div className=''>
                        <h1 className='text-[4vw] leading-[4vw] font-light'>Dhruval Padia.</h1>
                        <h1 className='font-light mt-[1vh] text-[1.3vw]'>Vice President</h1>
                    </div>
                    <div>
                        <h1 className='text-[1.3vw]'>Expertise in backend development includes API design, real-time data processing, and database management. Focus areas in deep learning are NLP and computer vision, with data analytics skills in processing, modeling, and visualization for complex challenges.</h1>
                        <h1 className='bg-white text-black w-fit px-[2vw] py-[1vh] rounded-full mt-[3vh] text-[1.1vw]'>LinkedIn</h1>
                    </div>
                </div>
            </div>
            <div className=' h-[79vh] w-1/2  flex items-center justify-center'>
                <div className='h-[79vh] w-[35vw] overflow-hidden bg-zinc-800 mb-[13vh]'>
                    <img className='h-full w-full object-cover object-bottom' src={C2} alt="" />
                </div>
            </div>
        </div>
        <div className='flex mt-[7vh]'>
            <div className='h-[79vh] w-1/2  pl-[5vw] flex items-center'>
                <div className='h-[70vh] w-[30vw] flex flex-col justify-between pl-[5vw] pb-[3vh]'>
                    <div className=''>
                        <h1 className='text-[4vw] leading-[4vw] font-light'>Sreeya Chatterjee.</h1>
                        <h1 className='font-light mt-[1vh] text-[1.3vw]'>Event Management Lead</h1>
                    </div>
                    <div>
                        <h1 className='text-[1.3vw]'>A national-level public speaker and winner of a national essay competition by the Ministry of NHERDO in 2021, with strong proficiency in C and Java, now focused on advancing Python skills.</h1>
                        <h1 className='bg-white text-black w-fit px-[2vw] py-[1vh] rounded-full mt-[3vh] text-[1.1vw]'>LinkedIn</h1>
                    </div>
                </div>
            </div>
            <div className=' h-[79vh] w-1/2  flex items-center justify-center'>
                <div className='h-[79vh] w-[35vw] overflow-hidden bg-zinc-800 mb-[13vh]'>
                    <img className='h-full w-full object-cover object-bottom' src={C3} alt="" />
                </div>
            </div>
        </div>
        <div className='flex flex-row-reverse mt-[15vh]'>
            <div className='h-[79vh] w-1/2  pl-[5vw] flex items-center'>
                <div className='h-[70vh] w-[30vw] flex flex-col justify-between pl-[5vw] pb-[3vh]'>
                    <div className=''>
                        <h1 className='text-[4vw] leading-[4vw] font-light'>Rudra Ayachit.</h1>
                        <h1 className='font-light mt-[1vh] text-[1.3vw]'>Event management lead</h1>
                    </div>
                    <div>
                        <h1 className='text-[1.3vw] '>More into Space Technologies, Robotics (Machine Ethics and Artificial Sentience), Digital Electronics & Computer Vision.</h1>
                        <h1 className='bg-white text-black w-fit px-[2vw] py-[1vh] rounded-full mt-[3vh] text-[1.1vw]'>LinkedIn</h1>
                    </div>
                </div>
            </div>
            <div className=' h-[79vh] w-1/2  flex items-center justify-center'>
                <div className='h-[79vh] w-[35vw] overflow-hidden bg-zinc-800 mb-[13vh]'>
                    <img className='h-full w-full object-cover object-bottom' src={C4} alt="" />
                </div>
            </div>
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
      <div className='flex items-center justify-between px-[10vw] mt-[5vh]'>
        <div className='h-[65vh] w-[24vw]  flex flex-col items-center py-[3vh]'>
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
      <Footer/>
    </div>
  )
}

export default CoreMembers
