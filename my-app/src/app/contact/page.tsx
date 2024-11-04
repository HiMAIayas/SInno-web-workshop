import React from 'react'
import Image from 'next/image'

export default function page() {
  return (
    <div className='min-h-screen w-full py-16 flex justify-center'>
        <Image
        src="/wthisthis.png"
        width={1000}
        height={1000}
        alt=''
        ></Image>
    </div>
  )
}
