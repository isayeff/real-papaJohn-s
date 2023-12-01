import React from 'react'
import Promo from './Promo'
import Categories from './Categories'
import PizzaCards from './PizzaCards'
import Basket from './Basket'

function Main({ data }) {
    return (
        <>
            <div className="container max-w-[93%] m-auto">
                <Basket />
                <Promo />
                <Categories />
                <PizzaCards data={data} />
            </div>
        </>
    )
}

export default Main