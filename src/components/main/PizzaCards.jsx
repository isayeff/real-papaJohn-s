import React from 'react'
import Card from './Card'

function PizzaCards({ data }) {
    return (
        <>
            <div className="pizzaCards w-full my-5 flex justify-center items-center lg:items-start md:items-start flex-col lg:flex-row md:flex-row flex-wrap gap-[25px]">
                {data.map(item => <Card key={item.id} {...item} />)}
            </div>
        </>
    )
}

export default PizzaCards