"use client"
import React, {createContext, useContext, useState} from 'react'


type CartType = {
    id:number,
    amount:number,
    price:number
}

type CartContextProviderType = {
    children:React.ReactNode
}

type CartContextType = {
    cartArr:CartType[] | null,
    setCartArr:React.Dispatch<React.SetStateAction<CartType[] | null>>
}

export const CartContext = createContext<CartContextType | null>(null);

export default function CartContextProvider({children}:CartContextProviderType) {
    const [cartArr, setCartArr] = useState<CartType[]|null>(null);
  return (
    <CartContext.Provider value={{
        cartArr:cartArr,
        setCartArr:setCartArr
    }}>
        {children}
    </CartContext.Provider>
  )
}

export function useSectionContext(){
    const context = useContext(CartContext);
    if (context === null){
        throw new Error("useSectionContext must be used within SectionContextProvider");
    }
    return context;
}
