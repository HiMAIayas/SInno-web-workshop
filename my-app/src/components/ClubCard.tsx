"use client"
import React, { useState } from 'react'
import Image from 'next/image'

export default function ClubCard({img}:{img:string}) {

    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='flex flex-col items-center'>
                        <Image
                        src={img}
                        width={300}
                        height={300}
                        alt=''
                        ></Image>

                        <button className={`p-2 text-2xl w-full max-w-[250px] rounded-lg ${isOpen?"bg-[#8BFC98]":"bg-[#D9D9D9] hover:bg-[#9f9f9f]"}`}
                        onClick={()=>setIsOpen(!isOpen)}
                        >{isOpen?"TRUE":"They must go to jail"}</button>
                    </div>
  )
}
