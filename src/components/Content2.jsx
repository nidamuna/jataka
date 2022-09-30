import React from 'react';
import Cyber from '../assets/Cyber.png';

const Content2 = () => {
  return (
    <div className="w-screen h-screen inset-0 bg-lake-image bg-cover bg-no-repeat px-[50px] py-20 flex items-center">
      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-x-[135px] justify-center items-center mx-auto overflow-hidden">
        <div className="flex flex-col justify-center items-start">
          <h1 className="lg:text-[40px] sm:text-[30px] lg:leading-[48px] mb-[22px] font-medium text-[#D21919]">
              Create
          </h1>
          <h1 className="lg:text-[48px] sm:text-[38px] text-white lg:leading-[58px] mb-[22px] font-medium">
            Create Your Own Avatar
          </h1>
          <p className="lg:text-[20px] sm:text-[16px] lg:first:leading-[24px] text-white font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
            imperdiet pharetra fringilla turpis ullamcorper faucibus cras.
            Ridiculus mi cras nibh id purus.
          </p>
          <button className="flex mt-[22px] justify-center py-[12px] px-[59px] text-white font-medium text-[16px] leading-[19px] rounded-lg bg-[#D21919] gap-[10px]">
            Explore
          </button>
        </div>
        <div className="flex justify-center items-center pt-8">
          <img src={Cyber} alt="cyber" />
        </div>
      </div>
    </div>
  );
};

export default Content2;
