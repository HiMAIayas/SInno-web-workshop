import React from 'react'
import { clubs } from '@/data/club'
import ClubCard from '@/components/ClubCard'

export default function page() {
    console.log(clubs)
  return (
    <main className='min-h-screen w-full py-36 px-2 md:px-16 xl:px-36'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-9 lg:gap-20 px-10 md:px-10'>
            {clubs.map((club,index)=>{
                return(
                    <ClubCard img={club.img} key={index}></ClubCard>
                )
            })}
        </div>
    </main>
  )
}
