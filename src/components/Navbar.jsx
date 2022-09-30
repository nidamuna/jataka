import React, { useEffect, useState } from 'react';
import Logo from '../assets/JATAKA.png';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [navbar, setNavbar]=useState(false)
  const [nav, setNav] = useState(false);

  
  useEffect(() => {
    const changeBackground = () => {
      if(window.scrollY >= 102) {
        setNavbar(true)
      } else {
        setNavbar(false)
      }
    }
    window.addEventListener('scroll', changeBackground);

    return() => {
      window.removeEventListener('scroll', changeBackground);
    }
  }, []);
  
  const handleNav = () => {
    setNav(!nav);
  };
  
  return (
    <div className='w-screen'>
      <div className={navbar ? 
        "inset-0 w-full h-auto px-[96px] py-[20px] flex justify-between bg-[#14181D]" 
        : "inset-0 w-full h-auto px-[96px] py-[20px] flex justify-between"}>
        <div className="flex items-center justify-center">
          <img src={Logo} alt="Jataka" className= {!nav ? 'flex' : 'hidden' }/>
            <div>
              <ul className="md:flex flex-row justify-center items-center ml-[40px] hidden">
                <li className="text-white text-[16px] leading-[19px] ml-[16px] font-medium uppercase">
                  MARKETPLACE
                </li>
                <li className="text-white text-[16px] leading-[19px] ml-[16px] font-medium uppercase">
                  BUILDER
                </li>
                <li className="text-white text-[16px] leading-[19px] ml-[16px] font-medium uppercase">
                  DOCS
                </li>
                <li className="text-white text-[16px] leading-[19px] ml-[16px] font-medium uppercase">
                  EVENTS
                </li>
                <li className="text-white text-[16px] leading-[19px] ml-[16px] font-medium uppercase">
                  DAO
                </li>
                <li className="text-white text-[16px] leading-[19px] ml-[16px] font-medium uppercase">
                  BLOG
                </li>
              </ul>
            </div>
          </div>
          <div className="justify-end flex items-center">
            <button className="md:flex justify-center py-[12px] px-[59px] text-white font-medium text-[16px] leading-[19px] rounded-lg bg-[#D21919] gap-[10px] hidden">
              START EXPLORING
            </button>
            <button onClick={handleNav} 
              className={nav ? 'hidden' 
              : "flex justify-center text-white md:hidden"}>
                <AiOutlineMenu size={20} />
            </button>
          </div>
      </div>
      <div
        className={
          nav
            ? 'fixed right-0 top-0 w-[40%] h-full border-r bg-black/30'
            : 'fixed right-[-100%]'
        }>
          <div className='flex flex-row justify-between'>
            <h1 className="w-full text-3xl font-bold text-white m-4">JATAKA</h1>
            <span onClick={handleNav}  className="cursor-pointer w-full text-xl font-bold text-white flex items-center justify-end mr-4">
              <AiOutlineClose size={15} />
            </span>
          </div>
            <ul className="uppercase p-4">
              <li className="p-4 border-b-2 text-white text-[16px] leading-[19px] font-medium uppercase">
                MARKETPLACE
              </li>
              <li className="p-4 border-b-2 text-white text-[16px] leading-[19px] font-medium uppercase">
                BUILDER
              </li>
              <li className="p-4 border-b-2 text-white text-[16px] leading-[19px] font-medium uppercase">
                DOCS
              </li>
              <li className="p-4 border-b-2 text-white text-[16px] leading-[19px] font-medium uppercase">
                EVENTS
              </li>
              <li className="p-4 border-b-2 text-white text-[16px] leading-[19px] font-medium uppercase">
                DAO
              </li>
              <li className="p-4 text-white text-[16px] leading-[19px] font-medium uppercase">
                BLOG
              </li>
            </ul>
          <div className=' items-center flex justify-center'>
            <button className="flex w-[160px] justify-center py-[12px] text-white font-medium text-[16px] leading-[19px] rounded-lg bg-[#D21919] gap-[10px]">
              START EXPLORING
            </button>
          </div>
      </div>
  </div>
  );
};

export default Navbar;
