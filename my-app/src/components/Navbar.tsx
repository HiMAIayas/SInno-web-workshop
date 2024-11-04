"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'


const navigation = [
  {name:"Home", link:"/"},
  {name:"Shop", link:"/shop"},
  {name:"Jail", link:"/jail"},
  {name:"About Us", link:"/about"},
  {name:"Contact", link:"/contact"},
]



export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='z-10 fixed w-full'>


      <div className='relative bg-[#C9E9F6] flex justify-between px-2 sm:px-8 lg:px-20 items-center  shadow-lg'>

        <div className='flex'>
          <p className='text-3xl italic font-bold text-[#45B3E0] p-5'>Pudmaijing</p>
          <Image src='/navbar-orca.png' width={520} height={520} alt='' className='w-20'></Image>
        </div>

        <div className='gap-8 lg:gap-10 hidden md:flex text-xl lg:text-2xl'>
          <Link href={"/"}>Home</Link>
          <Link href={"/shop"}>Shop</Link>
          <Link href={"/jail"}>Jail</Link>
          <p>|</p>
          <Link href={"/about"}>About Us</Link>
          <Link href={"/contact"}>Contact</Link>


        </div>

        {/* Hamburger */}
        <div className='flex md:hidden p-1 justify-center items-center'
          onClick={() => setIsOpen(true)}
        >
          <div className='flex flex-col justify-center items-center gap-1 size-7 rounded-md'>
            <Image className='w-[50px] h-auto'
              src="/icon/hamburger.png"
              width={100}
              height={100}
              alt="hamburger"
            ></Image>
          </div>
        </div>

        {/* Sidebar */}
          <div className={`bg-[#C9E9F6] w-full absolute right-0 top-0  ${isOpen? "translate-x-0 transition-transform duration-300":"translate-x-full" } `}>
            
            <div className='flex justify-end items-center px-2 sm:px-8 py-6'
            onClick={()=>setIsOpen(false)}
            >
              <Image className='w-[28px] h-auto'
              src="/icon/close.png"
              width={100}
              height={100}
              alt="close"
              ></Image>
            </div>

            <div className='flex flex-col justify-center items-center '>
              {navigation.map((page,index)=>{
                return(
                  <Link key={index} href={page.link} className='w-full border-t-2 border-white text-center text-2xl p-2'
                  onClick={()=>setIsOpen(false)}
                  >{page.name}</Link>
                )
              })}


            </div>
            <br></br>
          </div>
        

      </div>
    </div>
  )
}

