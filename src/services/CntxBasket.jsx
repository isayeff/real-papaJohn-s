import React, { createContext, useState } from 'react'

export const BasketCntx = createContext()

function CntxBasket({children}) {

    const [basketArr, setBasketArr] = useState([])

    return (
        <BasketCntx.Provider value={{basketArr, setBasketArr}}>
            {
                children
            }
        </BasketCntx.Provider>
    )
}

export default CntxBasket