import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function page() {
    return (
        <main className='min-h-screen w-full pt-56 sm:pt-96 px-5'>
            <div className='w-full relative h-96 font-[family-name:var(--font-lilita)]'>
                <Link href={"https://www.siit.tu.ac.th/"} className='cursor-pointer absolute w-full left-5 top-0 text-4xl md:text-6xl font-bold z-10'>CAtch ME IF YOU can</Link>
                <div className='group'>
                    <Image className='absolute right-5 bottom-0 max-w-[100%] h-auto group-hover:scale-[1.1] scale-100'
                        src="/police.png"
                        width={700}
                        height={700}
                        alt=''
                    ></Image>
                    <div className='absolute hidden group-hover:block text-3xl font-bold right-20 top-10 sm:-top-56'>dont catch me I am the police</div>
                </div>

            </div>

        </main>
    )
}