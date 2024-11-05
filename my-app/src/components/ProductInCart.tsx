"use client"
import React, { useState } from 'react'
import type { CartType } from '@/types/CartType'
import AmountCounter from './AmountCounter';
import { deleteCart } from '@/functions/cartArrModification';




export default function ProductInCart({cart, toggle, setToggle}:{
    cart:CartType,
    toggle:boolean,
    setToggle:React.Dispatch<React.SetStateAction<boolean>>
}) {
    const [count,setCount] = useState(cart.amount);


    const handleDeleteCart = ()=>{
        deleteCart(cart.name)
        setToggle(!toggle)
    }

  return (
    <div className='grid grid-cols-7 w-full'>
        {/* Name */}
        <div className='col-span-3'>{cart.name}</div>

        <div>{cart.price}</div>

        <AmountCounter count={count} setCount={setCount}></AmountCounter>

        <button className='bg-red-200'
        onClick={handleDeleteCart}
        >Delete</button>
    </div>
  )
}
