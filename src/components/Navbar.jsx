import React from 'react';
import Logo from '../assets/JATAKA.png';

const Navbar = () => {
  return (
    <div>
      <div className="w-[100%] h-auto px-[96px] py-[50px] flex justify-between z-50">
        <div className="flex items-center justify-center">
          <img src={Logo} alt="Jataka" />
          <div>
            <ul className="flex flex-row justify-center items-center ml-[40px]">
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
        <div className="justify-end">
          <button className="flex mt-[22px] justify-center py-[12px] px-[59px] text-white font-medium text-[16px] leading-[19px] rounded-lg bg-[#D21919] gap-[10px]">
            START EXPLORING
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
