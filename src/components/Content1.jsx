import React from 'react';
import Temple from '../assets/Temple.png';

const Content1 = () => {
  return (
    <div className="w-screen h-screen inset-0 bg-forest-image bg-cover bg-no-repeat px-[50px] py-20 flex items-center top-[102px]">
      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-x-[135px] justify-center items-center mx-auto overflow-hidden">
        <div className="flex justify-center items-center">
          <img src={Temple} alt="temple" />
        </div>
        <div className="flex flex-col justify-center items-start pb-20">
          <h1 className="lg:text-[40px] text-[20px] lg:leading-[48px] mb-[22px] font-medium text-[#D21919]">
            Explore
          </h1>
          <h1 className="lg:text-[48px] text-[28px] text-white lg:leading-[58px] mb-[22px] font-medium">
            Explore the Greatest Temple of Borobudur
          </h1>
          <p className="text-[12px] lg:text-[20px] md:text-[16px] md:leading-[24px] text-white font-medium">
            The architectural of Borobudur Temple cannot be separated from the long history of the development of 
            Buddhism in Indonesia. The splendor of Borobudur is known as the largest Buddhist
            monument in the world. 
          </p>
          <p className="text-[12px] lg:text-[20px] md:text-[16px] md:leading-[24px] text-white font-medium mt-5">
            Borobudur is the largest Buddhist Temple in the world, and is located at 
            the center of the island of Java in Indonesia. This temple contains more 
            than 2,500 statues and reliefs of Buddha and other ancient Hindu and 
            Buddhist gods.
          </p>
          <button className="flex mt-[22px] justify-center py-[12px] px-[59px] text-white font-medium text-[16px] leading-[19px] rounded-lg bg-[#D21919] gap-[10px]">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default Content1;
