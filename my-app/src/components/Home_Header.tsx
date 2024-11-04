import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home_Header() {
  return (
    <div className='flex bg-[#E4F7FF] lg:justify-center gap-10 lg:gap-20 flex-col-reverse lg:flex-row items-center p-5'>
        <div className=' flex flex-col md:pl-20 gap-8 items-center lg:items-start'>
          {/* Orca */}
          <div className='flex lg:mt-20 gap-8 items-end '>
            <p className='text-5xl md:text-6xl font-bold text-[#651FC0]'>Orca</p>
            <Image
              src="/siit.svg" width={150} height={50} alt="headerpic"
            ></Image>
          </div>

          <p className='md:w-[600px] text-center md:text-start'>
            If you like Orca, You have to paid for admission.
            But if you dont care about copyright, buy with us
          </p>

          <div className='flex justify-evenly md:w-[600px] w-full'>

            <Link href={"/shop"} className='p-3 bg-[#D9D9D9] rounded-xl hover:bg-[#D5B5FF] hover:text-[#651FC0] mb-10'>avoid copyright</Link>
            <Link href={"/jail"} className='p-3 bg-[#D9D9D9] rounded-xl hover:bg-[#D5B5FF] hover:text-[#651FC0] mb-10'>I am a police</Link>

          </div>

        </div>
        <div className='lg:mb-16'>
          <Image className='w-[350px] h-auto lg:w-[500px]'
            src="/orca-header.png" width={500} height={500} alt="headerpic"
          ></Image>
        </div>

      </div>
  )
}
