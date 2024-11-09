import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import git from '../assets/git.png'
import link from '../assets/link.png'
import x from '../assets/x.png'
import ins from '../assets/ins.png'

function Navbar() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const openMenu = () => {
    setIsMenuVisible(true);
  };

  const closeMenu = () => {
    setIsMenuVisible(false);
  };

  return (
  <div className='w-full overflow-hidden h-fit'>
        <div className='pl-[5vw] pt-[3vh] fixed z-30 text-white'>
      <div className='w-[90vw] h-[8vh] rounded-full flex justify-between items-center px-[1vw] backdrop-blur-md bg-[#0000003b]  text-white border'>
        <Link to="/" onClick={() => window.scrollTo(0, 0)}>
          <img className='ml-[1.3vw] h-[6vh]' src={logo} alt="" />
        </Link>
        <button className='bg-white text-black px-[2vw] py-[1vh] rounded-full text-[1.1vw] open' onClick={openMenu}>Menu</button>
      </div>
      <div className='flex justify-end -mr-[1vw]'>
        <div className={`hiddenmenu h-[60vh] w-[25vw] backdrop-blur-md bg-[#0000003b] mt-[2vh] rounded-[3vh] relative ${isMenuVisible ? 'block' : 'hidden'}`}> 
          <button className='absolute right-[1vw] close' onClick={closeMenu}><i className="ri-close-circle-fill ri-3x"></i></button>
          <div className='absolute top-[10vh] left-[2vw] text-[1.8vw] font-light '>
            <Link to="/Events" onClick={() => { closeMenu(); window.scrollTo(0, 0); }}><h1>Events</h1></Link>
            <Link to="/CoreMembers" onClick={() => { closeMenu(); window.scrollTo(0, 0); }}><h1>Core Members</h1></Link>
            <Link to="/ExecutiveMembers" onClick={() => { closeMenu(); window.scrollTo(0, 0); }}><h1>Executive Members</h1></Link>
            <Link to="/Collaborate" onClick={() => { closeMenu(); window.scrollTo(0, 0); }}><h1>Collaborate<i className="ri-add-line"></i></h1></Link>
          </div>
          <div className='absolute top-[35vh] left-[2vw]'>
            <h1 className='font-bold text-[1.8vw] mt-[4vh]'>Get in touch !</h1>
            <div className='flex justify-between w-[20vw] mt-[1vh]'>
              <Link to="https://github.com/CODEX-WoU/"><img className='h-[4vw]' src={git} alt="" /></Link>
              <Link to="https://www.linkedin.com/company/codex-wou/"><img className='h-[4vw]' src={link} alt="" /></Link>
              <Link to="https://x.com/CodeX_WOU"><img className='h-[4vw]' src={x} alt="" /></Link>
              <Link to="https://www.instagram.com/codex_wou/"><img className='h-[4vw]' src={ins} alt="" /></Link>
            </div>
            <div className='flex justify-center mt-[2vh]'>
              <h1 className='text-[1.3vw]'>codex@woxsen.edu.in</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Navbar
