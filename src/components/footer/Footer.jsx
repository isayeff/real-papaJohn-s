import React from 'react'
import { Link } from 'react-router-dom'
import footerImg from '../../assets/img/footer-images-az-AZ.png'
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { LiaTripadvisor } from "react-icons/lia";

function Footer() {
    return (
        <>
            <footer className='footer bg-[#AD0F14] py-[20px] lg:py-[0] overflow-hidden'>
                <div className='container max-w-[85%] lg:min-w-[95%] m-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between py-[18px] text-white gap-[20px]'>
                    <div className="footerList flex justify-between text-[1rem] gap-[15vw] font-[700] text-center lg:order-2">
                        <ul className='listLeft flex flex-col lg:flex-row items-center gap-[15px]'>
                            <li className=' hover:opacity-60'><Link>Haqqımızda</Link></li>
                            <li className=' hover:opacity-60'><Link>Sual-Cavab</Link></li>
                            <li className=' hover:opacity-60'><Link>Karyera</Link></li>
                            <li className=' hover:opacity-60'><Link>Xəmir</Link></li>
                            <li className=' hover:opacity-60'><Link>Papa Talk - Şərtlər və Qaydalar</Link></li>
                        </ul>
                        <ul className='listRight flex flex-col items-center gap-[10px] lg:hidden'>
                            <li className=' hover:opacity-60'><Link>Restoranlar</Link></li>
                            <li className=' hover:opacity-60'><Link>Kampaniyalar</Link></li>
                            <li className=' hover:opacity-60'><Link>PapaBonus</Link></li>
                        </ul>
                    </div>
                    <div className='footerInfo max-w-[270px] lg:order-3'>
                        <img className='w-full' src={footerImg} alt="" />
                    </div>
                    <div className='hidden lg:block order-4'>
                        <hr className='text-white bg-white h-[50px] w-[1px]' />
                    </div>
                    <div className="footerLogos flex items-center gap-[6vw] lg:gap-[2vw] lg:order-5">
                        <Link to='https://www.facebook.com/papajohns.az/'><FaFacebookF className='text-[1.3rem]' /></Link>
                        <Link to='https://twitter.com/azpapajohns'><FaTwitter className='text-[1.3rem]' /></Link>
                        <Link to='https://www.instagram.com/azpapajohns/'><FaInstagram className='text-[1.3rem]' /></Link>
                        <Link to='https://www.tripadvisor.com/Restaurant_Review-g293934-d3415853-Reviews-Papa_John_s-Baku_Absheron_Region.html'><LiaTripadvisor className='text-[1.7rem]' /></Link>
                    </div>
                    <div className="copyRight lg:order-1">
                        <span className='font-bold text-[1.1rem]'>&copy; PJA 2023</span>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer