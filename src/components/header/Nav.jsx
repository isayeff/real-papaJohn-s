import React from 'react'
import pjLogo from '../../assets/img/pj_logo_web_new.png'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <>
      <nav className='nav bg-[#AD0F14] py-[15px] lg:py-[28px] relative'>
        <div className="container max-w-[93%] flex items-center justify-between gap-[10px] m-auto">
          <div className="navLeft max-w-[250px] hidden lg:block">
            <Link to="/"><img className='max-w-[250px] absolute bottom-2' src={pjLogo} alt=""/></Link>
          </div>
          <div className="navRight overflow-hidden">
            <ul className='navMenu uppercase font-bold md:text-[1.4rem] flex items-center gap-[1%] md:gap-5 text-white overflow-x-scroll'>
              <li className=' hover:opacity-60'><Link to="/kampaniyalar"> Kampaniyalar</Link></li>
              <li className=' hover:opacity-60'><Link to="/papadias">PapaDias</Link></li>
              <li className=' hover:opacity-60'><Link to="/pizza">pizza</Link></li>
              <li className=' hover:opacity-60'><Link to="/qelyanaltı">qəlyanaltı</Link></li>
              <li className=' hover:opacity-60'><Link to="/salat">salat</Link></li>
              <li className=' hover:opacity-60'><Link to="/pasta">pasta</Link></li>
              <li className=' hover:opacity-60'><Link to="/içki">içki</Link></li>
              <li className=' hover:opacity-60'><Link to="/desert">desert</Link></li>
              <li className=' hover:opacity-60'><Link to="/sous">sous</Link></li>
              <li className=' hover:opacity-60'><Link to="/papabonus">0Bal</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav