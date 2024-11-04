import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
    return (
        <div className='bg-[#E4F7FF] w-full min-h-72'>
            <div className='flex justify-between items-start'>
                <div className='flex flex-wrap'>
                    <Image src={"/orca-footer.png"} width={520} height={520} alt='' className='w-64 h-auto md:h-fit object-cover'></Image>
                    <div className=' text-9xl mt-9'>er</div>
                </div>
                <div className='bg-[#3A3089] w-96  rounded-s-3xl rounded-br-3xl mr-3 mt-3 py-3'>
                    <div className='text-2xl italic font-bold text-[#ffffff] px-1 sm:px-5 pt-2 font-[family-name:var(--font-lemon)]'>Pudmaijing</div>
                    <div className='flex gap-5 sm:gap-9 p-5 sm:pr-10 w-full items-start justify-between'>
                        <div className=''>
                            <div><Link href={""} className='text-white text-sm h-1'>FAQs</Link></div>
                            <div><Link href={""} className='text-white text-sm h-1'>About Us</Link></div>
                            <div><Link href={""} className='text-white text-sm h-1'>Contact Us</Link></div>
                            <div><Link href={""} className='text-white text-sm h-1'>Privacy policy</Link></div>
                        </div>
                        <Image src={"/bird-footer.png"} width={520} height={520} alt='' className='sm:w-28 w-16 rounded-lg object-cover'></Image>
                    </div>
                    <div className='flex gap-4 justify-center'>
                        <Image src={"/icon/facebook.png"} width={520} height={520} alt='' className='size-6'></Image>
                        <Image src={"/icon/instagram.png"} width={520} height={520} alt='' className='size-6'></Image>
                        <Image src={"/icon/google.png"} width={520} height={520} alt='' className='size-6'></Image>
                        <Image src={"/icon/apple.png"} width={520} height={520} alt='' className='size-6'></Image>
                    </div>
                </div>

            </div>
            <div className='flex w-full'>
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
