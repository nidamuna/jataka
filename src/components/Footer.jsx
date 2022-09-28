import React from 'react';

const Footer = () => {
  return (
    <div className="bg-[#14181D] w-[100%] h-full p-[96px]">
      <div className="grid grid-cols-2">
        <div className="justify-between flex items-start">
          <div className="flex">
            <h1 className="w-[151px] h-[44px] text-white uppercase leading-[44px] text-[36px] font-bold">
              jataka
            </h1>
            <div className="ml-[124px] grid grid-cols-3 gap-[70px]">
              <div>
                <ul>
                  <li className="font-medium text-[16px] leading-[19px] text-white mb-[12px]">
                    News
                  </li>
                  <li className="font-medium text-[16px] leading-[19px] text-white mb-[12px]">
                    Create
                  </li>
                  <li className="font-medium text-[16px] leading-[19px] text-white mb-[12px]">
                    Marketplace
                  </li>
                  <li className="font-medium text-[16px] leading-[19px] text-white mb-[12px]">
                    Play
                  </li>
                  <li className="font-medium text-[16px] leading-[19px] text-white mb-[12px]">
                    Whitepaper
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li className="font-medium text-[16px] leading-[19px] text-white mb-[12px]">
                    Map
                  </li>
                  <li className="font-medium text-[16px] leading-[19px] text-white mb-[12px]">
                    Sand
                  </li>
                  <li className="font-medium text-[16px] leading-[19px] text-white mb-[12px]">
                    Press
                  </li>
                  <li className="font-medium text-[16px] leading-[19px] text-white mb-[12px]">
                    Partners
                  </li>
                  <li className="font-medium text-[16px] leading-[19px] text-white mb-[12px]">
                    Terms of Use
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li className="font-medium text-[16px] leading-[19px] text-white mb-[12px]">
                    One Pager
                  </li>
                  <li className="font-medium text-[16px] leading-[19px] text-white mb-[12px]">
                    FAQ
                  </li>
                  <li className="font-medium text-[16px] leading-[19px] text-white mb-[12px]">
                    Careers
                  </li>
                  <li className="font-medium text-[16px] leading-[19px] text-white mb-[12px]">
                    Licenses
                  </li>
                  <li className="font-medium text-[16px] leading-[19px] text-white mb-[12px]">
                    Privacy Policy
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start ml-[124px]">
          <h1 className="uppercase text-white leading-[29px] text-[24px] font-semibold">
            follow us
          </h1>
          <div className="flex flex-row">
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
