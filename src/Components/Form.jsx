import React from 'react'
import { useForm } from 'react-hook-form'

function Form({HandleFormSubmitData}) {
    const {register,handleSubmit} = useForm()
  return (
    <div className='w-screen h-screen bg-black flex items-center justify-center'>
      <form className='flex gap-2' onSubmit={handleSubmit ( data => HandleFormSubmitData(data))}>
        <input {...register('Img')} className='rounded-md px-[1vw] py-[.5vw] outline-none' type="text" placeholder='Img' />
        <input {...register('Name')} className='rounded-md px-[1vw] py-[.5vw] outline-none' type="text" placeholder='Name' />
        <input {...register('Description')} className='rounded-md px-[1vw] py-[.5vw] outline-none' type="text" placeholder='Description' />
        <input {...register('LinkedIn URL')} className='rounded-md px-[1vw] py-[.5vw] outline-none' type="text" placeholder='LinkedIn URL' />
        <input className='rounded-md px-[1vw] py-[.5vw] font-medium bg-red-400' type="submit" />
      </form>
    </div>
  )
}

export default Form
