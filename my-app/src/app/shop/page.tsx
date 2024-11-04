import ProdCard from '@/components/ProdCard'
import React from 'react'
import { products } from '@/data/products'

export default function page() {
  return (
    <main className='min-h-screen w-full pt-36 px-36'>
      <div className='grid grid-cols-3 gap-20 px-10'>
        {products.map((prod)=>{
          return(
            <ProdCard id={prod.id} name={prod.name} price={prod.price} img={prod.img} isJubable={prod.isJubable} key={prod.id}></ProdCard>
          )
        })}
        <br></br>
      </div>
    </main>
  )
}
