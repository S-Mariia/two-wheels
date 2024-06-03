import Image from 'next/image';
import adidas from '@/../public/images/icons/adidas.svg';
import puma from '@/../public/images/icons/puma.svg';
import reebok from '@/../public/images/icons/reebok.svg';
import nike from '@/../public/images/icons/nike.svg';

const SponsorsSection = () => {
  return (
    <div className="w-full flex flex-col sm:justify-between gap-[30px] md:my-[50px] my-[30px]">
      <div className="flex justify-center w-full">
        <h3 className="font-500 mid:text-40px md:text-34px text-28px text-black leading-120% text-center md:mb-[40px] mb-[20px]  w-full">
          Sponsored By Industry Leaders
        </h3>
      </div>
      <div className="flex justify-around gap-[20px] flex-wrap">
        <div className="sm:w-[25%] w-[43%] sm:max-w-[128px]">
          <Image
            src={adidas}
            alt={`adidas`}
            width={128}
            height={128}
            className="w-full aspect-[1/1]"
          />
        </div>

        <div className="sm:w-[25%] w-[43%] sm:max-w-[128px]">
          <Image
            src={puma}
            alt={`puma`}
            width={128}
            height={128}
            className="w-full aspect-[1/1]"
          />
        </div>

        <div className="sm:w-[25%] w-[43%] sm:max-w-[128px]">
          <Image
            src={reebok}
            alt={`reebok`}
            width={128}
            height={128}
            className="w-full aspect-[1/1]"
          />
        </div>

        <div className="sm:w-[25%] w-[43%] sm:max-w-[128px]">
          <Image
            src={nike}
            alt={`nike`}
            width={128}
            height={128}
            className="w-full aspect-[1/1]"
          />
        </div>
      </div>
    </div>
  );
};

export default SponsorsSection;
