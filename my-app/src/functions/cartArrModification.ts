import type { CartType } from "@/types/CartType"

const cartLocalKey = "c4rt_l0c4l_k3y"


export const addCart = (cartObj: CartType) => {
    const tmpCartArr = getCart();

    const index = tmpCartArr.findIndex((cart: CartType) => cart.name === cartObj.name)
    if (index == -1) tmpCartArr.push(cartObj)
    else tmpCartArr[index].amount += cartObj.amount

    localStorage.setItem(cartLocalKey, JSON.stringify(tmpCartArr));
    console.log(tmpCartArr);
}

export const getCart = () => {
    let tmpArr:CartType[] = [{
        name:"",
        amount:1,
        price:2
    }];
    if (typeof window !== 'undefined') {
        const cartArr = localStorage.getItem(cartLocalKey);
        if (cartArr == null) {
            console.log('not have cartArr')
            return tmpArr;
        }
        else {
            console.log('have cartArr')
            return JSON.parse(cartArr);
        }
    }
    else {
        console.log('window undefined')
        return tmpArr;
    }
}

export const deleteCart = (name: string) => {
    const tmpCartArr = getCart();

    const index = tmpCartArr.findIndex((cart: CartType) => cart.name === name)
    if (index != -1) {
        tmpCartArr.splice(index, 1);
        localStorage.setItem(cartLocalKey, JSON.stringify(tmpCartArr));
    }

}