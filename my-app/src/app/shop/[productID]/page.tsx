
import React from 'react'
import { products } from '@/data/products'
import { notFound } from 'next/navigation';
import Image from 'next/image';
import ProductBuy from '@/components/ProductBuy';


export default async function page(
    { params }: { params: Promise<{ productID: string }> }
) {
    const prodID = (await params).productID;
    const product = products.find((prod) => prod.id === Number(prodID));

    if (product==null) notFound();




    return (
        <main className='min-h-screen w-full py-36'>
            <div className='lg:px-20 px-10 flex flex-col md:flex-row'>
                <div className='w-auto md:w-1/2'>
                    <Image
                    src={product.img}
                    width={600}
                    height={600}
                    alt=''
                    ></Image>
                </div>
                
                <div className='w-auto md:w-1/2'>
                    <p className='text-4xl font-bold text-center md:text-start'>{product.name}</p>
                    <br></br>
                    <p className='text-3xl font-bold'>{product.price}$</p>
                    <br></br>
                    <div className='text-wrap'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus repellat id blanditiis dignissimos tempora quia, quae tempore quisquam molestias laboriosam saepe esse nam. Qui architecto, quam maiores in consequatur voluptate!</div>
                    
                    <br></br>
                    
                    <ProductBuy id={product.id} name={product.name} price={product.price} img={product.img} isJubable={product.isJubable}></ProductBuy>
                    
                    
                </div>
                

            </div>
        </main>
    )
}
