import React from 'react'

function Promo() {
    return (
        <>
            <div className="promoDiv mt-[30px] py-5 flex items-center justify-center gap-[50px] bg-[#F1F1F1]">
                <div className="promoTxt lg:flex md:flex items-center text-[2rem] font-[500] gap-5 hidden">
                    <p className='text-[#363636] md:hidden lg:block'>Promo kodunuz var?</p>
                    <p className='text-[#0F9675]'>Endirimdən istifadə edin!</p>
                </div>
                <div className="promoInp flex gap-3">
                    <input className='py-[5px] px-[10px] border-[2px] border-[#0F9675] rounded-[5px] outline-none' type="text" placeholder='Promo kodu daxil edin' />
                    <button className='bg-[#0F9675] px-[20px] rounded-[5px] text-white font-[500]'>OK</button>
                </div>
            </div>
        </>
    )
}

export default Promo