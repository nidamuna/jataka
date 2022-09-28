import React from 'react';
import Temple from '../assets/Temple.png';

const Content1 = () => {
  return (
    <div className="w-[100%] h-auto inset-0 bg-forest-image bg-cover bg-no-repeat py-[107px] px-[90px]">
      <div className="flex grid grid-cols-2 gap-x-[135px]">
        <div className="flex justify-center items-center">
          <img src={Temple} alt="temple" />
        </div>
        <div className="flex flex-col justify-center items-start">
          <h1 className="text-[40px] leading-[48px] mb-[22px] font-medium text-[#D21919]">
            Explore
          </h1>
          <h1 className="text-[48px] text-white leading-[58px] mb-[22px] font-medium">
            Explore the Greatest Temple of Borobudur
          </h1>
          <p className="text-[20px] leading-[24px] text-white font-medium">
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
