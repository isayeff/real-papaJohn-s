import React, { useState } from 'react'
import HeaderTop from './HeaderTop'
import Nav from './Nav'
import Basket from './Basket'


function Header() {

    const [openBasket, setOpenBasket] = useState(false)

    return (
        <>
            <HeaderTop openBasket = {openBasket} setOpenBasket = {setOpenBasket} />
            <Basket openBasket = {openBasket} setOpenBasket = {setOpenBasket} />
            <Nav />
        </>
    )
}

export default Header