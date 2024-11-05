"use client"
import React, { useState } from 'react'
import { Product } from '@/data/products'
import AmountCounter from './AmountCounter';
import { addCart } from '@/functions/cartArrModification';



export default function ProductBuy(product: Product) {
  const [count, setCount] = useState(0);
  



  function handleOnClick() {
    addCart({
      name: product.name,
      amount: count,
      price: product.price
    });


  }

  return (
    <div>
      <div className='flex gap-10'>
        <p>Amount : </p>
        <AmountCounter count={count} setCount={setCount}></AmountCounter>
      </div>
      
      <br></br>
      <div className='flex justify-center md:justify-start'>
      <button className='bg-[#FFECA1] hover:bg-[#ffd943] border-2 border-[#ffd943] p-1 rounded-md text-xl px-10'
      onClick={handleOnClick}
      >Add To Cart</button>
      </div>

    </div>
  )
}
