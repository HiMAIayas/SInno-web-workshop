import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
    return (
        <div className='bg-[#E4F7FF] w-full min-h-72'>
            <div className='flex justify-between'>
                <div className='flex'>
                    <Image src={"/orca-footer.png"} width={520} height={520} alt='' className='w-64 h-fit object-cover'></Image>
                    <div className='h-fit text-9xl mt-9'>er</div>
                </div>
                <div className='bg-[#3A3089] w-96 h-48 rounded-s-3xl rounded-br-3xl mr-3 mt-3'>
                    <div className='text-2xl italic pb-10font-bold text-[#ffffff] px-5 pt-2 font-[family-name:var(--font-lemon)]'>Pudmaijing</div>
                    <div className='flex gap-9 '>
                        <div className='mt-4 ml-5 mr-7'>
                            <div><Link href={""} className='text-white text-sm h-1'>FAQs</Link></div>
                            <div><Link href={""} className='text-white text-sm h-1'>About Us</Link></div>
                            <div><Link href={""} className='text-white text-sm h-1'>Contact Us</Link></div>
                            <div><Link href={""} className='text-white text-sm h-1'>Privacy policy</Link></div>
                        </div>
                        <Image src={"/bird-footer.png"} width={520} height={520} alt='' className='w-28 mb-20 mr-5 ml-6 mt-3 object-cover'></Image>
                    </div>
                </div>

            </div>
            <div className='flex w-fit'>
                <Image src={"/orca-footer2.png"} width={520} height={520} alt='' className='w-1/6 h-min-fit'></Image>
                <Image src={"/orca-footer2.png"} width={520} height={520} alt='' className='w-1/6 h-min-fit'></Image>
                <Image src={"/orca-footer2.png"} width={520} height={520} alt='' className='w-1/6 h-min-fit'></Image>
                <Image src={"/orca-footer2.png"} width={520} height={520} alt='' className='w-1/6 h-min-fit'></Image>
                <Image src={"/orca-footer2.png"} width={520} height={520} alt='' className='w-1/6 h-min-fit'></Image>
                <Image src={"/orca-footer2.png"} width={520} height={520} alt='' className='w-1/6 h-min-fit'></Image>  
            </div>

        </div>
    );
}
