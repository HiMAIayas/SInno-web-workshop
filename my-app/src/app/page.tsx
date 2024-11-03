
import Navbar from '@/components/Navbar'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function page() {
  return (
    <main className='min-h-screen w-full pt-16'>
      <div className='flex bg-[#E4F7FF] justify-around '>
        <div className=' flex flex-col pl-20 gap-8'>
          {/* Orca */}
          <div className='flex mt-20 gap-8 items-end'>
            <p className='text-6xl font-bold text-[#651FC0]'>Orca</p>
            <Image
              src="/siit.svg" width={150} height={50} alt="headerpic"
            ></Image>
          </div>

          <p className='w-[450px] '>
          If you like Orca, You have to paid for admission.
          But if you dont care about copyright, buy with us
          </p>

          <div className='flex justify-evenly w-[450px]'>
            
              <Link href={"/Shop"} className='p-3 bg-[#D9D9D9] rounded-xl hover:bg-[#D5B5FF] hover:text-[#651FC0]'>avoid copyright</Link>
              <Link href={"/Shop"} className='p-3 bg-[#D9D9D9] rounded-xl hover:bg-[#D5B5FF] hover:text-[#651FC0]'>I am a police</Link>
            
          </div>

        </div>
        <div>
          <Image
            src="/orca-header.png" width={500} height={500} alt="headerpic"
          ></Image>
        </div>

      </div>
    </main>
  )
}


