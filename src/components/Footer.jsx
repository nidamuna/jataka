import React from 'react';

const Footer = () => {
  return (
    <div className="bg-[#14181D] w-screen md:h-auto h-screen md:py-[90px] flex items-center">
      <div className="grid md:grid-cols-2 sm:grid-cols-1 items-start lg:px-[96px] px-[66px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-start">
          <div className="flex">
            <h1 className="text-white uppercase leading-[44px] text-[36px] sm:text-[30px] font-bold">
              jataka
            </h1>
          </div>
          <div className="grid grid-cols-3 lg:-ml-[70px] gap-[120px] lg:mt-0 mt-10 lg:mt-0 ml-0 text-[14px] lg:text-[16px]">
            <div>
              <ul>
                <li className="font-medium leading-[19px] text-white mb-[12px]">
                  News
                </li>
                <li className="font-medium leading-[19px] text-white mb-[12px]">
                  Create
                </li>
                <li className="font-medium leading-[19px] text-white mb-[12px]">
                  Marketplace
                </li>
                <li className="font-medium leading-[19px] text-white mb-[12px]">
                  Play
                </li>
                <li className="font-medium leading-[19px] text-white mb-[12px]">
                  Whitepaper
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="font-medium leading-[19px] text-white mb-[12px]">
                  Map
                </li>
                <li className="font-medium leading-[19px] text-white mb-[12px]">
                  Sand
                </li>
                <li className="font-medium leading-[19px] text-white mb-[12px]">
                  Press
                </li>
                <li className="font-medium leading-[19px] text-white mb-[12px]">
                  Partners
                </li>
                <li className="font-medium leading-[19px] text-white mb-[12px]">
                  Terms of Use
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="font-medium leading-[19px] text-white mb-[12px]">
                  One Pager
                </li>
                <li className="font-medium leading-[19px] text-white mb-[12px]">
                  FAQ
                </li>
                <li className="font-medium leading-[19px] text-white mb-[12px]">
                  Careers
                </li>
                <li className="font-medium leading-[19px] text-white mb-[12px]">
                  Licenses
                </li>
                <li className="font-medium leading-[19px] text-white mb-[12px]">
                  Privacy Policy
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start ml-0 md:mt-0 md:ml-[124px] mt-10">
          <h1 className="uppercase text-white leading-[29px] text-[24px] font-semibold">
            follow us
          </h1>
          <div className="grid grid-cols-4 mt-10 lg:mt-3 lg:grid-cols-8">
            <img
              className="w-[24px] h-[24px] mr-[34px] mt-5"
              src={require('../assets/fb.svg').default}
              alt="/"
            />
            <img
              className="w-[24px] h-[24px] mr-[34px] mt-5"
              src={require('../assets/twit.svg').default}
              alt="/"
            />
            <img
              className="w-[24px] h-[24px] mr-[34px] mt-5"
              src={require('../assets/discord.svg').default}
              alt="/"
            />
            <img
              className="w-[24px] h-[24px] mr-[34px] mt-5"
              src={require('../assets/tele.svg').default}
              alt="/"
            />
            <img
              className="w-[24px] h-[24px] mr-[34px] mt-5"
              src={require('../assets/git.svg').default}
              alt="/"
            />
            <img
              className="w-[24px] h-[24px] mr-[34px] mt-5"
              src={require('../assets/reddit.svg').default}
              alt="/"
            />
            <img
              className="w-[24px] h-[24px] mr-[34px] mt-5"
              src={require('../assets/medium.svg').default}
              alt="/"
            />
            <img
              className="w-[24px] h-[24px] mr-[34px] mt-5"
              src={require('../assets/bitcoin.svg').default}
              alt="/"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
