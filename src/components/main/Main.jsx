import React from 'react'
import Promo from './Promo'
import Categories from './Categories'
import PizzaCards from './PizzaCards'

function Main({ data }) {
    return (
        <>
            <div className="container max-w-[93%] m-auto overflow-hidden">
                <Promo />
                <Categories />
                <PizzaCards data={data} />
            </div>
        </>
    )
}

export default Main