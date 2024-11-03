import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export default function Navbar() {
  return (
    <div className='fixed w-full bg-[#C9E9F6] flex justify-between px-20 items-center'>
      <div className='flex'>
        <p className='text-2xl italic font-bold text-[#45B3E0] p-5'>Pudmaijing</p>
        <Image src='/navbar-orca.png' width={520} height={520} alt='' className='w-20'></Image>
      </div>

      <div className='flex gap-10'>
      <Link href={"/page"}>Home</Link>
        <Link href={"/Shop"}>Shop</Link>
        <Link href={"/Jail"}>Jail</Link>
        <p>|</p>
        <Link href={"/About-Us"}>About Us</Link>
        <Link href={"/Contact"}>Contact</Link>
      </div>

    </div>
  )
}

