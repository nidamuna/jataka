import React from 'react';
import Borobudur2 from '../assets/borobudur.webm';

const Video = () => {
  return (
    <div className="relative flex items-center justify-center h-[calc(100vh+150px)] overflow-hidden w-screen bg-black/50">
      <div className="relative lg:px-[96px] px-[66px] pt-[150px] z-30 w-full h-screen flex flex-col justify-center bg-white/0">
        <h1 className="font-bold lg:leading-[77px] text-white lg:text-[64px] text-[54px] leading-[67px] mb-[22px]">
          Welcome to Jataka
        </h1>
        <p className="text-white lg:text-[20px] text-[16px] font-mendium leading-[24px] mb-[22px]">
          World first Metaverse for Heritage cultural object preservation
        </p>
        <button className="flex mt-[22px] justify-center py-[12px] px-[59px] text-white font-medium text-[16px] leading-[19px] rounded-lg bg-[#D21919] gap-[10px] w-[160px]">
          Explore
        </button>
      </div>
      <video
        loop
        autoPlay
        muted
        className="absolute z-[-1] w-auto h-[100%] min-w-full min-h-full max-w-none bg-white"
      >
        <source src={Borobudur2} type="video/webm" />
        "Your browser does not support the video tag"
      </video>
    </div>
  );
};

export default Video;
