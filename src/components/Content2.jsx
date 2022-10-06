import React from 'react';
import Cyber from '../assets/Cyber.png';

const Content2 = () => {
  return (
    <div className="w-screen h-screen inset-0 bg-lake-image bg-cover bg-no-repeat px-[50px] py-20 flex items-center">
      <div className="flex md:flex-row flex-col flex-col-reverse justify-center items-center mx-auto overflow-hidden">
        <div className="basis-[50%] flex flex-col justify-center items-start">
          <h1 className="lg:text-[40px] text-[20px] lg:leading-[48px] mb-[22px] font-medium text-[#D21919]">
            Create
          </h1>
          <h1 className="lg:text-[48px] text-[28px] text-white lg:leading-[58px] mb-[22px] font-medium">
            Create Your Own Avatar
          </h1>
          <p className="lg:text-[20px] text-[12px] lg:leading-[24px] text-white font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
            imperdiet pharetra fringilla turpis ullamcorper faucibus cras.
            Ridiculus mi cras nibh id purus.
          </p>
          <button className="flex mt-[22px] justify-center py-[12px] px-[59px] text-white font-medium text-[16px] leading-[19px] rounded-lg bg-[#D21919] gap-[10px]">
            Explore
          </button>
        </div>
        <div className="basis-[50%] flex justify-center items-center pt-8 lg:ml-[135px]">
          <img
            src={Cyber}
            alt="cyber"
            className="mb-10 lg:mb-0 w-[90%] lg:w-[70%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Content2;
