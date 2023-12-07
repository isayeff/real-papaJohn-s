import React from 'react'

function Categories() {
    return (
        <>
            <div className="promoDiv mt-[30px] py-2 bg-[#F1F1F1] overflow-hidden">
                <div className="promoTxt flex items-center font-[700] gap-5">
                    <ul className='flex items-center px-[20px] gap-5 text-[.8rem] text-[#363636] md:text-[1.4rem]'>
                        <li className='hover:text-[#AD0F14]'>Hamısı</li>
                        <li className='hover:text-[#AD0F14]'>Toyuqlu</li>
                        <li className='hover:text-[#AD0F14]'>Ət ilə</li>
                        <li className='hover:text-[#AD0F14]'>Vegetarian</li>
                        <li className='hover:text-[#AD0F14]'>Acılı</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Categories