"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'


const navigation = [
  { name: "Home", link: "/" },
  { name: "Shop", link: "/shop" },
  { name: "Jail", link: "/jail" },
  { name: "About Us", link: "/about" },
  { name: "Contact", link: "/contact" },
]



export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
  console.log(typeof setIsOpen);
  const pathname = usePathname();
  let pagename = "";
  if (pathname != "/") pagename = pathname.split("/")[1];

  //console.log("/"+pagename);

  return (
    <div className='z-20 fixed w-full'>


      <div className='relative bg-[#C9E9F6] flex justify-between px-2 sm:px-8 lg:px-20 items-center  shadow-lg'>

        <Link href={"/"} className='flex'>
          <p className='text-3xl italic font-bold text-[#45B3E0] p-5 font-[family-name:var(--font-lemon)] drop-shadow-md'>Pudmaijing</p>
          <Image src='/navbar-orca.png' width={520} height={520} alt='' className='w-20'></Image>
        </Link>

        <div className='gap-6 lg:gap-10 hidden md:flex text-xl lg:text-2xl'>
          <Link href={"/"} className={`${pagename === "" ? "font-bold text-[#651FC0]" : "font-normal text-black"}`}>Home</Link>
          <Link href={"/shop"} className={`${pagename === "shop" ? "font-bold text-[#651FC0]" : "font-normal text-black"}`}>Shop</Link>
          <Link href={"/jail"} className={`${pagename === "jail" ? "font-bold text-[#651FC0]" : "font-normal text-black"}`}>Jail</Link>
          <p>|</p>
          <Link href={"/about"} className={`${pagename === "about" ? "font-bold text-[#651FC0]" : "font-normal text-black"}`}>About Us</Link>
          <Link href={"/contact"} className={`${pagename === "contact" ? "font-bold text-[#651FC0]" : "font-normal text-black"}`}>Contact</Link>

          <Link href={"/shop/cart"}>
            <Image className='size-[25px]'
              src="/shopping-cart.png"
              width={100}
              height={100}
              alt=''
            ></Image>
          </Link>


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
        <div className={`bg-[#C9E9F6] w-full absolute right-0 top-0  ${isOpen ? "translate-x-0 transition-transform duration-300" : "translate-x-full"} `}>

          <div className='flex justify-between items-center px-5 sm:px-8 py-6'
            
          >
            <Link href={"/shop/cart"}>
              <Image className='size-[28px]'
                src="/shopping-cart.png"
                width={100}
                height={100}
                alt=''
              ></Image>
            </Link>

            <div onClick={() => setIsOpen(false)}>
              <Image className='w-[28px] h-auto'
                src="/icon/close.png"
                width={100}
                height={100}
                alt="close"
              ></Image>
            </div>
          </div>

          <div className='flex flex-col justify-center items-center '>
            {navigation.map((page, index) => {
              return (
                <Link key={index} href={page.link}
                  className={`w-full border-t-2 border-white text-center text-2xl p-2 ${"/" + pagename === page.link ? "font-bold text-[#651FC0]" : "font-normal text-black"}`}
                  onClick={() => setIsOpen(false)}
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

