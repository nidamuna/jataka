import React, { useEffect, useState } from 'react';   
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [nav, setNav] = useState(false);

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 37) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };
    window.addEventListener('scroll', changeBackground);

    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-screen">
      <div
        className={
          navbar
            ? 'inset-0 w-full h-auto lg:px-[96px] px-[36px] py-[20px] flex justify-between bg-[#06332C]'
            : 'inset-0 w-full h-auto lg:px-[96px] px-[36px] py-[20px] flex justify-between'
        }
      >
        <div className="flex items-center justify-center">
          <img
             className={!nav ? "w-[176px] h-[88px] flex" : 'hidden'}
             src={require('../assets/lineLogo.svg').default}
             alt="/"
          />
          <div>
            <ul className="lg:flex flex-row justify-center items-center ml-[40px] hidden">
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
          <button className="lg:flex justify-center py-[12px] px-[59px] text-white font-medium text-[16px] leading-[19px] rounded-lg bg-[#D2AC69] gap-[10px] hidden">
            START EXPLORING
          </button>
          <button
            onClick={handleNav}
            className={
              nav ? 'hidden' : 'flex justify-center text-white lg:hidden'
            }
          >
            <AiOutlineMenu size={40} />
          </button>
        </div>
      </div>
      <div
        className={
          nav
            ? 'fixed right-0 top-0 w-screen h-full border-r bg-[#06332C]/90 px-5'
            : 'fixed right-[-100%]'
        }
      >
        <div className="flex flex-row justify-between">
          <img
             className="w-[176px] h-[88px] flex"
             src={require('../assets/lineLogo.svg').default}
             alt="/"
          />
          <span
            onClick={handleNav}
            className="cursor-pointer w-full text-xl font-bold text-white flex items-center justify-end mr-4"
          >
            <AiOutlineClose size={35} />
          </span>
        </div>
        <ul className="uppercase p-4">
          <li className="p-4 border-b-2 text-white text-[12px] leading-[19px] font-medium uppercase">
            MARKETPLACE
          </li>
          <li className="p-4 border-b-2 text-white text-[12px] leading-[19px] font-medium uppercase">
            BUILDER
          </li>
          <li className="p-4 border-b-2 text-white text-[12px] leading-[19px] font-medium uppercase">
            DOCS
          </li>
          <li className="p-4 border-b-2 text-white text-[12px] leading-[19px] font-medium uppercase">
            EVENTS
          </li>
          <li className="p-4 border-b-2 text-white text-[12px] leading-[19px] font-medium uppercase">
            DAO
          </li>
          <li className="p-4 text-white text-[12px] leading-[19px] font-medium uppercase">
            BLOG
          </li>
        </ul>
        <div className=" items-center flex justify-center">
          <button className="flex w-[130px] justify-center py-[12px] text-white font-medium text-[12px] leading-[19px] rounded-lg bg-[#D2AC69]">
            START EXPLORING
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
