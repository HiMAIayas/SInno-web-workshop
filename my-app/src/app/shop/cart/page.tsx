"use client"
import ProductInCart from '@/components/ProductInCart';
import { getCart } from '@/functions/cartArrModification';
import { CartType } from '@/types/CartType';
import React, { useEffect, useState } from 'react'


const cartLocalKey = "c4rt_l0c4l_k3y"

export default function page() {



    const [toggle, setToggle] = useState(true);
    const [cartArr, setCartArr] = useState<CartType[]>([]);    



    
    useEffect(() => {
        setCartArr(getCart());
        return;
    }, [toggle])

    console.log(typeof cartArr);
    console.log(cartArr);



    return (
        <main className='min-h-screen w-full py-36'>
            <div>{JSON.stringify(cartArr)}</div>
            {<div className='flex flex-col bg-slate-200'>
                {cartArr.map((cart,index)=>{
                    return (
                        <ProductInCart key={index} cart={cart} toggle={toggle} setToggle={setToggle}></ProductInCart>
                    )
                })}
            </div>}
        </main>
    )
}
