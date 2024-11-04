"use client"
import React from 'react'
import Image from 'next/image'
import type { Product } from '@/data/products'

export default function ProdCard(prod:Product) {

  return (
    <div className=' bg-[#E4F7FF] rounded-3xl flex flex-col items-center text-xl lg:text-2xl'>
        <div className='sm:h-[200px] lg:h-[250px] xl:my-10 flex justify-center items-center overflow-hidden'>
        <Image className=''
        src={prod.img}
        width={300}
        height={300}
        alt={prod.id.toString()}
        ></Image>
        </div>
        

        <div className='bg-[#C9E9F6] w-full h-10 lg:h-16 flex justify-center items-center lg:text-3xl'>{prod.name}</div>
        <div className='bg-[#45B3E0] w-full h-10 lg:h-16 flex justify-between items-center rounded-b-3xl px-5 sm:px-2 lg:px-5'>
            <p className='text-white lg:text-3xl'>{prod.price}$</p>
            <span className='bg-[#FFECA1] lg:p-2 flex rounded-lg text-[#525252] items-center gap-2 cursor-pointer hover:bg-[#ffd943] text-lg lg:text-xl'
            onClick={()=>window.open(`/shop/${prod.id}`)}
            >
                basket
                <Image className='w-[30px] h-auto'
                src="/icon/basket.png"
                width={50}
                height={50}
                alt="basket"
                ></Image>
            </span>
        </div>
    </div>
  )
}
