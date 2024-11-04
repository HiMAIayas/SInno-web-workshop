"use client"
import Navbar from '@/components/Navbar'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Home_Header from '@/components/Home_Header'
import { products } from '@/data/products'

export default function page() {
  return (
    <main className='min-h-screen w-full pt-16'>

      <Home_Header></Home_Header>
      <br></br>

      {/* Content */}
      <div className='px-20'>
        <div>
          <p className='text-3xl'>Orca jub tong daii</p>
          <br></br>
          <div className='flex w-full overflow-x-scroll p-10'>
            {products.filter((prod) => {
              return prod.isJubable
            }).map((prod) => {
              return (

                <div key={prod.id} className='min-w-[300px] cursor-pointer rounded-3xl hover:bg-slate-100 hover:scale-[1.1] flex flex-col items-center'
                  onClick={()=>window.open(`/product/${prod.id}`)}
                >
                  <Image className='h-[200px] w-auto'
                    src={prod.img}
                    width={300}
                    height={300}
                    alt={prod.id.toString()}
                  ></Image>
                  <p>{prod.name}</p>
                </div>
              )
            })}
          </div>
        </div>

        <br></br>
        <br></br>

        <div>
          <p className='text-3xl'>Orca mai mee yu jing</p>
          <br></br>
          <div className='flex w-full overflow-x-scroll p-10'>
            {products.filter((prod) => {
              return !prod.isJubable
            }).map((prod) => {
              return (

                <div key={prod.id} className='min-w-[300px] rounded-3xl hover:bg-slate-100 hover:scale-[1.1] flex flex-col items-center'
                onClick={()=>window.open(`/product/${prod.id}`)}
                >
                  <Image className='h-[200px] w-auto'
                    src={prod.img}
                    width={300}
                    height={300}
                    alt={prod.id.toString()}
                  ></Image>
                  <p>{prod.name}</p>
                </div>
              )
            })}
          </div>
        </div>

      </div>

      <div className='h-screen'></div>
    </main>
  )
}


