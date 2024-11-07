import React from 'react'
import Navbar from './Navbar'
import hero from '../assets/hero.png'
import circle from '../assets/CodeXEnd.png'
import 'remixicon/fonts/remixicon.css'


import mentor from '../assets/mentor.png'
import Footer from './Footer'

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
        <h1 className='text-[4vw] font-bold pt-[10vh] pl-[6vw]'>Meet Your Mentor!</h1>
        <div className='flex mt-[4vh]'>
            <div className='h-[79vh] w-1/2  pl-[5vw] flex items-center'>
                <div className='h-[70vh] w-[30vw] flex flex-col justify-between pl-[5vw] pb-[3vh]'>
                    <div className=''>
                        <h1 className='text-[4vw] w-1/2 leading-[4vw] font-light'>Amogh Deshmukh.</h1>
                        <h1 className='font-light mt-[1vh] text-[1.3vw]'>Assistant Dean</h1>
                    </div>
                    <div>
                        <h1 className='text-[1.3vw]'>With 10+ Years of Teaching Experience and Former Software Engineer at Dell!</h1>
                        <h1 className='bg-white text-black w-fit px-[2vw] py-[1vh] rounded-full mt-[2vh] text-[1.1vw]'>LinkedIn</h1>
                    </div>
                </div>
            </div>
            <div className=' h-[79vh] w-1/2  flex items-center justify-center'>
                <div className='h-[79vh] w-[35vw] bg-zinc-800 mb-[13vh]'>
                    <img className='h-full w-full object-cover object-bottom' src={mentor} alt="" />
                </div>
            </div>
        </div>
      </div>
      <div className=' w-screen mt-[15vh]'>
        <h1 className='text-[4vw] font-bold pt-[10vh] pl-[6vw] capitalize'>everything you need !</h1>
        <div className='mt-[8vh] flex flex-col justify-center items-center'>
            <div className='flex justify-between items-center w-[80vw] h-[10vh]'>
                <h1 className='font-semibold text-[2.2vw]'>Front-End Development</h1>
                <h1 className='text-[#C5C5C5]'>React JS, HTML, CSS, JavaScript</h1>
            </div>
            <div className='flex justify-between items-center w-[80vw] h-[10vh]'>
                <h1 className='font-semibold text-[2.2vw]'>Back-End Development</h1>
                <h1 className='text-[#C5C5C5]'>MongoDB, Node.js, Express</h1>
            </div>
            <div className='flex justify-between items-center w-[80vw] h-[10vh]'>
                <h1 className='font-semibold text-[2.2vw]'>Machine Learning</h1>
                <h1 className='text-[#C5C5C5]'>Python, Scikit-Learn, TensorFlow</h1>
            </div>
            <div className='flex justify-between items-center w-[80vw] h-[10vh]'>
                <h1 className='font-semibold text-[2.2vw]'>Deep Learning</h1>
                <h1 className='text-[#C5C5C5]'>PyTorch, Keras, TensorFlow</h1>
            </div>
            <div className='flex justify-between items-center w-[80vw] h-[10vh]'>
                <h1 className='font-semibold text-[2.2vw]'>Generative AI</h1>
                <h1 className='text-[#C5C5C5]'>DALL-E, GPT Models, GANs</h1>
            </div>
            <div className='flex justify-between items-center w-[80vw] h-[10vh]'>
                <h1 className='font-semibold text-[2.2vw]'>Data Analysis</h1>
                <h1 className='text-[#C5C5C5]'>Pandas, NumPy, Tableau</h1>
            </div>
            <div className='flex justify-between items-center w-[80vw] h-[10vh]'>
                <h1 className='font-semibold text-[2.2vw]'>LLMs</h1>
                <h1 className='text-[#C5C5C5]'>GPT, BERT, Transformer Models</h1>
            </div>
            <div className='flex justify-between items-center w-[80vw] h-[10vh]'>
                <h1 className='font-semibold text-[2.2vw]'>Web Scraping</h1>
                <h1 className='text-[#C5C5C5]'>BeautifulSoup, Scrapy, Selenium</h1>
            </div>
            <div className='flex justify-between items-center w-[80vw] h-[10vh]'>
                <h1 className='font-semibold text-[2.2vw]'>Cyber Security</h1>
                <h1 className='text-[#C5C5C5]'>Network Security, Cryptography</h1>
            </div>
            <div className='flex justify-between items-center w-[80vw] h-[10vh]'>
                <h1 className='font-semibold text-[2.2vw]'>Ethical Hacking</h1>
                <h1 className='text-[#C5C5C5]'>Kali Linux, Metasploit, Wireshark</h1>
            </div>
            <div className='flex justify-between items-center w-[80vw] h-[10vh]'>
                <h1 className='font-semibold text-[2.2vw]'>Computer Vision</h1>
                <h1 className='text-[#C5C5C5]'>OpenCV, YOLO, ResNet</h1>
            </div>
        </div>
      </div>
      <div className='w-screen '>
      <div className='text-[2vw] flex mt-[15vh] justify-center'> <h1 className='w-[72vw] capitalize font-extralight'>By joining the CodeX Club, you'll have the opportunity to learn all of these skills directly from experts within our community. Engage in real-world projects and gain practical experience while collaborating closely with peers through our peer-to-peer learning approach. This hands-on experience will help you build and refine your skills in a supportive and interactive environment.</h1></div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home