import React from 'react';
import Temple from '../assets/Temple.png';

const Content1 = () => {
  return (
    <div className="w-screen h-screen inset-0 bg-forest-image bg-cover bg-no-repeat px-[50px] py-20 flex items-center">
      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-x-[135px] justify-center items-center mx-auto overflow-hidden">
        <div className="flex justify-center items-center">
          <img src={Temple} alt="temple" />
        </div>
        <div className="flex flex-col justify-center items-start pb-20">
          <h1 className="md:text-[40px] sm:text-[30px] md:leading-[48px] mb-[22px] font-medium text-[#D21919]">
            Explore
          </h1>
          <h1 className="md:text-[48px] sm:text-[38px] text-white md:leading-[58px] mb-[22px] font-medium">
            Explore the Greatest Temple of Borobudur
          </h1>
          <p className="md:text-[20px] sm:text-[16px] md:leading-[24px] text-white font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
            imperdiet pharetra fringilla turpis ullamcorper faucibus cras.
            Ridiculus mi cras nibh id purus.
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
