import React from 'react';
import Borobudur2 from '../assets/borobudur.webm';

const Video = () => {
  return (
    <div className="w-[100%] h-full mx-auto">
      <div className="relative w-[100%] mx-auto">
        <video loop autoPlay muted className="w-[100%] h-full">
          <source src={Borobudur2} type="video/webm" />
        </video>
          <div className="absolute w-[100%] inset-0 h-full bg-black/60 flex flex-col items-start justify-center px-[96px]">
            <h1 className="font-bold leading-[77px] text-white text-[64px] mb-[22px]">
              Welcome to Jataka
            </h1>
            <p className="text-white text-[20px] font-mendium leading-[24px] mb-[22px]">
              World first Metaverse for Heritage cultural object preservation
            </p>
            <button className="flex mt-[22px] justify-center py-[12px] px-[59px] text-white font-medium text-[16px] leading-[19px] rounded-lg bg-[#D21919] gap-[10px]">
              Explore
            </button>
          </div>        
      </div>
    </div>
  );
};

export default Video;
