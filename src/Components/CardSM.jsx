import React from 'react'
import C5 from '../assets/C5.png'

function CardSM({Users}) {
  return (
    <>
    {Users.map((items,index)=>{
      return(
        <div key={index} className='mt-[4vh]'>
        <div className='h-[65vh] w-[24vw] flex flex-col items-center py-[3vh]'>
            <div className='h-[40vh] w-[20vw] bg-zinc-800 overflow-hidden rounded-[1vw]'>
              <img className='h-full w-full object-cover object-bottom' src={C5} alt="" />
            </div>
            <div><h1 className='text-[1.8vw] mt-[2vh]'>Harsh Morayya</h1></div>
            <div className='text-center'><h1 className='text-[1.4vw] mt-[2vh] font-light'>Top-notch Software and Web Developer.</h1></div>
            <h1 className='bg-white text-black w-fit px-[2vw] py-[1vh] rounded-full mt-[3vh] text-[1.1vw]'>LinkedIn</h1>
        </div>
        </div>
      )
    })}
    </>
  )
}

export default CardSM
