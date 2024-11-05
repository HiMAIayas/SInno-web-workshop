"use client"
import React, { useEffect, useState } from 'react'
import type { CartType } from '@/types/CartType'
import AmountCounter from './AmountCounter';
import { deleteCart, setCart } from '@/functions/cartArrModification';




export default function ProductInCart({ cart, toggle, setToggle }: {
  cart: CartType,
  toggle: boolean,
  setToggle: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const [count, setCount] = useState(cart.amount);



  const handleDeleteCart = () => {
    deleteCart(cart.name)
    setToggle(!toggle)
  }

  useEffect(() => {
    setCart(cart.name, count);
    setToggle(!toggle);
    return;
  }, [count])

  return (
    <div>
      <div className='bg-slate-50 grid-cols-7 w-full p-5 border-white content-center hidden md:grid'>
        {/* Name */}
        <div className='col-span-2'>{cart.name}</div>

        <div>{cart.price}</div>

        <div className='col-span-2'>
          <AmountCounter count={count} setCount={setCount} ></AmountCounter>
        </div>


        <div>{cart.price * count}</div>

        <div>
          <button className='bg-red-300 hover:bg-red-500 rounded-md p-1 px-5 border-2 border-red-500'
            onClick={handleDeleteCart}
          >Delete</button>
        </div>


      </div>

      <div className='bg-slate-50 rounded-xl p-5 flex flex-col gap-2 md:hidden'>
        <div className='text-center font-bold mb-3'>{cart.name}</div>

        <p>Price: {cart.price}</p>
        <div className='flex gap-5'> 
          <p>Amount: </p>
          <AmountCounter count={count} setCount={setCount} ></AmountCounter>
        </div>
        <p>Total: {cart.price*count}</p>

        <div className='flex justify-center mt-3'>
        <button className='bg-red-300 hover:bg-red-500 rounded-md p-1 px-5 border-2 border-red-500'
            onClick={handleDeleteCart}
          >Delete</button>
        </div>
      </div>
    </div>
  )
}
