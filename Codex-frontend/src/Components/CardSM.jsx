// src/Components/CardSM.jsx
import React from 'react';
import C5 from '../assets/C5.png';

function CardSM({ Users }) {
  return (
    <>
      {Users.map((user, index) => (
        <div key={index} className='mt-[4vh]'>
          <div className='lg:h-[65vh] h-[50vh] w-[42vw] lg:w-[24vw] bg-rd-500 flex flex-col items-center lg:py-[3vh] py-[2vh]'>
            <div className='h-[40vh] w-[40vw] lg:h-[40vh] lg:w-[20vw] bg-zinc-800 overflow-hidden rounded-[1vw]'>
              <img
                className='h-full w-full object-cover object-bottom'
                src={user.image || C5} // Use custom image if provided, otherwise default
                alt={user.name}
              />
            </div>
            <div><h1 className='text-[2vh] lg:text-[1.8vw] mt-[2vh]'>{user.name}</h1></div>
            <div className='text-center'><h1 className='text-[1.4vh] lg:text-[1.4vw] mt-[2vh] font-light'>{user.description}</h1></div>
            <a href={user.linkedin} target="_blank" rel="noopener noreferrer">
            <h1 className='bg-white text-black lg:px-[2vw] px-[3vh] lg:py-[1vh] py-[1vh] mr-[1vw] lg:mr-[0vw] rounded-full lg:text-[1.1vw] mt-[2vh] text-[4vw]'>LinkedIn</h1>
            </a>
          </div>
        </div>
      ))}
    </>
  );
}

export default CardSM;