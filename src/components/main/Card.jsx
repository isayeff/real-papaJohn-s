import React from 'react'

function Card({img, category, name, composition, price}) {
    return (
        <>
            <div className="card flex flex-col gap-[10px] w-[95%] lg:w-[23.6%] md:w-[45%]">
                <div className="cardTop h-[250px] lg:h-[200px] md:h-[200px]">
                    <img className='w-full h-full' src={img} alt="" />
                </div>
                <div className="cardBottom">
                    <div className='cardTitle flex justify-between'>
                        <h3 className='font-bold text-[1.2rem]'>{name}</h3>
                        <button className='bg-[#0F9675] px-[15px] py-[9px] rounded-[5px] text-white font-[500]'>BUNU SEÇ</button>
                    </div>
                    <div className="cardContent my-3">
                        {composition}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card