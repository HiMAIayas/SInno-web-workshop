
import React from 'react'
import { products } from '@/data/products'
import { notFound } from 'next/navigation';


export default async function page(
    { params }: { params: Promise<{ productID: string }> }
) {
    const prodID = (await params).productID;
    const product = products.find((prod) => prod.id === Number(prodID));

    if (product==null) notFound();


    return (
        <main className='min-h-screen w-full pt-16'>

            xcscsds
            {prodID}
        </main>
    )
}
