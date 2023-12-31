import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

function CardPage({ data }) {
    let params = useParams()
    let { category, id } = params
    console.log(data);

    const [size, setSize] = useState('')
    function changeSize(e) {
        setSize(e.target.value);
    }
    return (
        <>
            {
                data.map(item => item.category == category && item.id == id &&
                    <div key={item.id}>
                        {    console.log(Object.entries(item.price))
}
                        <section className="py-[93px] rounded-md overflow-hidden">
                            <div className="container flex flex-col mx-auto lg:flex-row">
                                <img src={item.img} alt="" />
                                <div className="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12 bg-slate-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 mb-8 dark:text-violet-400">
                                        <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                    <h1 className="text-3xl font-semibold leadi">{item.name}</h1>
                                    <p className="mt-4 mb-8 text-sm">{item.composition}</p>
                                    <div className='flex items-center gap-[20px]'>
                                        <select onChange={changeSize} className="select max-w-[250px] p-1 rounded-[5px]">
                                            <option>xs</option>
                                            <option>sm</option>
                                            <option>md</option>
                                            <option>lg</option>
                                        </select>
                                        <p className='text-[2rem] font-bold'>{
                                            size ? Object.entries(item.price).filter(item => item[0] == size).map(item => item[1]) : item.price.xs
                                        }₼</p>
                                    </div>
                                    <button className="self-start px-10 py-3 text-lg font-medium rounded-3xl bg-[#AD0F14] text-white">Add To Basket</button>
                                </div>
                            </div>
                        </section>
                    </div>)
            }
        </>
    )
}

export default CardPage