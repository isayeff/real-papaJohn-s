import React from 'react'
import Promo from './Promo'
import Categories from './Categories'
import PizzaCards from './PizzaCards'

function Main({ data, basketArr, setBasketArr }) {
    return (
        <>
            <div className="container max-w-[93%] m-auto">
                <Promo />
                <Categories />
                <PizzaCards data={data} basketArr   = {basketArr} setBasketArr = {setBasketArr} />
            </div>
        </>
    )
}

export default Main