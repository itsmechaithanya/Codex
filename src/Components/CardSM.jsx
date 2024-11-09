// src/Components/CardSM.jsx
import React from 'react';
import C5 from '../assets/C5.png';

function CardSM({ Users }) {
  return (
    <>
      {Users.map((user, index) => (
        <div key={index} className='mt-[4vh]'>
          <div className='h-[65vh] w-[24vw] flex flex-col items-center py-[3vh]'>
            <div className='h-[40vh] w-[20vw] bg-zinc-800 overflow-hidden rounded-[1vw]'>
              <img
                className='h-full w-full object-cover object-bottom'
                src={user.image || C5} // Use custom image if provided, otherwise default
                alt={user.name}
              />
            </div>
            <div><h1 className='text-[1.8vw] mt-[2vh]'>{user.name}</h1></div>
            <div className='text-center'><h1 className='text-[1.4vw] mt-[2vh] font-light'>{user.description}</h1></div>
            <a href={user.linkedin} target="_blank" rel="noopener noreferrer">
              <h1 className='bg-white text-black w-fit px-[2vw] py-[1vh] rounded-full mt-[3vh] text-[1.1vw]'>LinkedIn</h1>
            </a>
          </div>
        </div>
      ))}
    </>
  );
}

export default CardSM;