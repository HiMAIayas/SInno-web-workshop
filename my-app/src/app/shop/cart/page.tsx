"use client"
import ProductInCart from '@/components/ProductInCart';
import { getCart } from '@/functions/cartArrModification';
import { CartType } from '@/types/CartType';
import React, { useEffect, useState } from 'react'



export default function Page() {



    const [toggle, setToggle] = useState(true);
    const [cartArr, setCartArr] = useState<CartType[]>([]);

    const calculateTotal = () => {
        return cartArr.reduce((acc, cart) => acc + cart.amount * cart.price, 0)
    }




    useEffect(() => {
        setCartArr(getCart());
        return;
    }, [toggle])

    console.log(typeof cartArr);
    console.log(cartArr);



    return (
        <main className='min-h-screen w-full py-36 px-10 lg:px-36'>



            <div className='hidden md:grid grid-cols-7 bg-slate-100 p-5 rounded-t-2xl'>
                <p className='col-span-2'>Product</p>
                <p>Price</p>
                <p className='col-span-2'>Amount</p>
                <p>Total Price</p>
                <p>Action</p>
            </div>
            <br></br>

            <div className='flex justify-center'>
                <div className='flex flex-col gap-3 w-auto sm:min-w-[400px] md:w-full'>
                    {cartArr.map((cart) => {
                        return (
                            <ProductInCart key={cart.name}
                                cart={cart}
                                toggle={toggle}
                                setToggle={setToggle}></ProductInCart>
                        )
                    })}

                    <div className='hidden md:flex bg-slate-100 p-5 mt-5'>
                        <div className='grid grid-cols-7 w-full'>
                            <p className='col-start-5 text-end pr-10  font-bold'>Total</p>
                            <p className=' font-bold'>{calculateTotal()}</p>
                            <div>
                                <button className='bg-[#FFECA1] hover:bg-[#ffd943] border-2 border-[#ffd943] p-1 rounded-md px-2 lg:px-5'
                                    onClick={() => alert('Really?')}
                                >Payment</button>
                            </div>
                        </div>
                    </div>

                    <div className='bg-slate-100 p-5 mt-5 flex flex-col md:hidden items-center rounded-xl'>
                        <p className='font-bold'>Total: {calculateTotal()}</p>
                        <div>
                                <button className='bg-[#FFECA1] hover:bg-[#ffd943] border-2 border-[#ffd943] p-1 rounded-md px-2 lg:px-5'
                                    onClick={() => alert('Really?')}
                                >Payment</button>
                            </div>
                    </div>

                </div>
            </div>
            <br></br>







        </main>
    )
}
