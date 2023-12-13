import React from 'react'
import Card from './Card'

function PizzaCards({ data, basketArr, setBasketArr }) {
    return (
        <>
            <div className="pizzaCards w-full my-5 flex justify-center items-center lg:items-start md:items-start flex-col lg:flex-row md:flex-row flex-wrap gap-[25px]">
                {data.map((item) => item.category == 'Pizzalar' ? <Card key={item.id} {...item} basketArr = {basketArr} setBasketArr = {setBasketArr} /> : '')}
            </div>
        </>
    )
}

export default PizzaCards