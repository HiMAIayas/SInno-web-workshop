import React from 'react'

export default function AmountCounter({count, setCount}:{
    count:number,
    setCount:React.Dispatch<React.SetStateAction<number>>
}) {
  return (
    <div className='flex gap-10'>
        <p>Amount : </p>
        <span className='flex p-[1px] gap-[1px] bg-[#C9C9C9] w-[150px]'>
          <button className=' bg-slate-50 w-1/4 flex justify-center items-center'
            onClick={() => setCount(count - 1)}
          >-</button>

          <input className='bg-slate-50 w-1/2 text-center p-0.5'
            type='number'
            onChange={(event) => setCount(Number(event.target.value))}
            value={count}></input>

          <button className='bg-slate-50 w-1/4 flex justify-center items-center'
            onClick={() => setCount(count + 1)}
          >+</button>
        </span>
      </div>
  )
}
