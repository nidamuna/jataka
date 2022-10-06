import React from 'react';
import Borobudur2 from '../assets/borobudur.webm';

const Video = () => {
  return (
    <div className="h-screen w-screen object-contain inset-0">
      <video
        autoPlay
        loop
        muted
        className="w-screen h-screen object-cover absolute ml-0 min-w-screen min-h-screen max-w-none"
      >
        <source src={Borobudur2} type="video/webm" />
      </video>
      <div className="relative px-[96px] pt-[150px] z-30 bg-black/50 w-full h-screen flex flex-col justify-center">
        <h1 className="font-bold leading-[77px] text-white text-[64px] mb-[22px]">
          Welcome to Jataka
        </h1>
        <p className="text-white text-[20px] font-mendium leading-[24px] mb-[22px]">
          World first Metaverse for Heritage cultural object preservation
        </p>
        <button className="flex mt-[22px] justify-center py-[12px] px-[59px] text-white font-medium text-[16px] leading-[19px] rounded-lg bg-[#D21919] gap-[10px] w-[160px]">
          Explore
        </button>
      </div>
    </div>
  );
};

export default Video;
