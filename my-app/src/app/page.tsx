import React from 'react'

export default function page() {
  return (
    <div className='p-10'>
      <div className='shadow-lg shadow-red-600 rounded-lg bg-[#89d4b4] w-12 h-12 p-3 mx-16 border-2 border-black'>Div</div>
      <div className='bg-red-300'>Div</div>

      <p className=' text-purple-600 text-3xl font-bold'>TEXT</p>

      <span className='hover:bg-yellow-500 bg-yellow-100 p-2 rounded-lg'>
        Button
      </span>

      <br></br>
      <br></br>

      <div className='p-3 rounded-2xl bg-slate-200 w-full h-40 flex flex-col justify-center items-center gap-2'>
        <div className='bg-white rounded-full size-12'></div>
        <div className='bg-white w-full h-full rounded-lg'></div>
      </div>



    </div>
  )
}


