"use client"
import React from 'react'
import Image from 'next/image'
import type { Product } from '@/data/products'

export default function ProdCard(prod:Product) {

  return (
    <div className=' bg-[#E4F7FF] rounded-3xl flex flex-col items-center'>
        <Image className='h-[250px] w-auto my-10'
        src={prod.img}
        width={300}
        height={300}
        alt={prod.id.toString()}
        ></Image>

        <div className='bg-[#C9E9F6] w-full h-16 flex justify-center items-center text-3xl'>{prod.name}</div>
        <div className='bg-[#45B3E0] w-full h-16 flex justify-between items-center rounded-b-3xl px-6'>
            <p className='text-white text-3xl'>{prod.price} $</p>
            <div className='bg-[#FFECA1] p-1 px-3 flex rounded-lg text-[#525252] items-center gap-2 cursor-pointer hover:bg-[#ffd943]'
            onClick={()=>window.open(`/shop/${prod.id}`)}
            >
                basket
                <Image className='w-[30px] h-auto'
                src="/icon/basket.png"
                width={50}
                height={50}
                alt="basket"
                ></Image>
            </div>
        </div>
    </div>
  )
}
