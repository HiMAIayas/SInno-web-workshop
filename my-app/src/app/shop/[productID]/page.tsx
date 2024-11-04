
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
            <div className='lg:px-20 px-10 flex'>
                <div className='w-1/2'>
                    <Image
                    src={product.img}
                    width={600}
                    height={600}
                    alt=''
                    ></Image>
                </div>
                
                <div className='w-1/2'>
                    <p className='text-4xl font-bold'>{product.name}</p>
                    <br></br>
                    <div className='text-wrap'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus repellat id blanditiis dignissimos tempora quia, quae tempore quisquam molestias laboriosam saepe esse nam. Qui architecto, quam maiores in consequatur voluptate!</div>
                    
                    <br></br>
                    <ProductBuy id={product.id} name={product.name} price={product.price} img={product.img} isJubable={product.isJubable}></ProductBuy>
                </div>
                

            </div>
        </main>
    )
}
