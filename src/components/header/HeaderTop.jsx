import flagAz from '../../assets/img/flag_az.png'
import { FaBasketShopping, FaUser } from "react-icons/fa6";
import pjLogo from '../../assets/img/pj_logo_web_new.png'
import { Link } from 'react-router-dom';

function HeaderTop() {
    return (
        <>
            <div className="container max-w-[90%] m-auto bg-opacity-0">
                <div className="headerTop py-[10px] flex justify-between items-center font-bold text-[1.3rem]">
                    <div className="hTopLeft">
                        <ul className='hidden gap-9 md:flex lg:pl-[12vw]'>
                            <li className='hover:text-gray-400 transition duration-500'><Link to="/restoranlar">Restoranlar</Link></li>
                            <li className='hover:text-gray-400'><Link to="/papabonus">PapaBonus</Link></li>
                        </ul>
                        <div className="navLeft max-w-[80px] block md:hidden">
                            <img className='w-full' src={pjLogo} alt="" />
                        </div>
                    </div>
                    <div className="hTopRight flex basis-[70%] md:basis-[initial] justify-evenly items-center gap-[30px]">
                        <div className='lang flex items-center'>
                            <div className='flagAzDiv mr-3 flex flex-col justify-center items-center md:flex-row'>
                                <div>
                                    <img className='flagAz max-w-[30px]' src={flagAz} alt="" />
                                </div>
                                <div>
                                    <span className='text-[.9rem]'>{window.innerWidth < 768 ? 'AZ' : 'Azərbaycanca'}</span>
                                </div>
                            </div>
                            <span className='hidden md:block'>▼</span>
                        </div>
                        <span className='block md:hidden'><FaUser /></span>
                        <span className='hidden md:block'>Giriş/Qeydiyyat</span>
                        <div className="basketBtn flex flex-col items-center">
                            <FaBasketShopping className='text-[1.6rem]' />
                            <span className='text-[1rem]'>0₼</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeaderTop