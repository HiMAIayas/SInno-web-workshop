"use client"
import React, { useState } from 'react'
import { Product } from '@/data/products'
import AmountCounter from './AmountCounter';
import type { CartType } from '@/types/CartType';
import { addCart } from '@/functions/cartArrModification';

const cartLocalKey = "cartArr";

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
      <AmountCounter count={count} setCount={setCount}></AmountCounter>
      <br></br>
      <button className='bg-[#FFECA1] hover:bg-[#ffd943] border-2 border-[#ffd943] p-1 rounded-md text-xl px-10'
      onClick={handleOnClick}
      >Add To Cart</button>

    </div>
  )
}
