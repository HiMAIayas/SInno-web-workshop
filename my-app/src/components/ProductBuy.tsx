"use client"
import React, { useState } from 'react'
import { Product } from '@/data/products'


export default function ProductBuy(product:Product) {
    const [count,setCount] = useState(0);
  return (
    <div>
      <div className='flex gap-10'>
        <p>Amount : </p>
        <span className='flex p-[1px] gap-[1px] bg-[#C9C9C9] w-[150px]'>
        <button className=' bg-slate-50 w-1/4 flex justify-center items-center'
        onClick={()=>setCount(count-1)}
        >-</button>

        <input className='bg-slate-50 w-1/2 text-center p-0.5'
        type='number' 
        onChange={(event)=>setCount(Number(event.target.value))}
        value={count}></input>
        
        <button className='bg-slate-50 w-1/4 flex justify-center items-center'
        onClick={()=>setCount(count+1)}
        >+</button>
    </span>
      </div>

      <br></br>
      <button className='bg-[#FFECA1] hover:bg-[#ffd943] border-2 border-[#ffd943] p-1 rounded-md text-xl px-10'>Add To Cart</button>
      
    </div>
  )
}
