import member from '@/../public/images/home-page/members-2.png';

import Image from 'next/image';

const DiscoveringDeepSection = () => {
  return (
    <div
      id="aboutUs"
      className="w-full flex flex-col sm:flex-row sm:justify-between gap-[30px] sm:items-center md:my-[50px] my-[30px]"
    >
      <div className="max-w-[700px] sm:w-[55%]">
        <div className="flex mb-[24px]">
          <h3 className="font-600 mid:text-46px md:text-40px text-30px text-primary leading-120%">
            Discovering the Deeper Meaning of Cycling
          </h3>
        </div>
        <div>
          <p className="font-500 mid:text-24px md:text-20px text-18px text-primary leading-120%">
            We are a passionate community of cyclists who have come together to
            share the profound experiences and life lessons that can be learned
            from the saddle. Our journey began with a love for cycling but
            evolved into something much deeper. <br />
            <br />
            We've discovered that a bicycle is not just a mode of
            transportation; it's a tool for exploration, introspection, and
            growth.
          </p>
        </div>
        <div className="flex items-start justify-between gap-4 mt-[24px]">
          <div className="flex flex-col items-center justify-center">
            <p className="font-600 mid:text-[70px] md:text-[50px] text-[30px] text-primary leading-120%">
              610+
            </p>
            <p className="font-400 mid:text-24px md:text-20px text-18px text-primary text-center leading-120%">
              Achieve Ride Target
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="font-600 mid:text-[70px] md:text-[50px] text-[30px] text-primary leading-120%">
              1500+
            </p>
            <p className="font-400 mid:text-24px md:text-20px text-18px text-primary text-center leading-120%">
              Add New Members
            </p>
          </div>
        </div>
      </div>
      <div className="sm:max-w-[525px] sm:w-[45%] flex justify-center">
        <Image
          src={member}
          alt={'member'}
          width={1040}
          height={1282}
          className={'w-full aspect-[1/1.23]'}
        />
      </div>
    </div>
  );
};

export default DiscoveringDeepSection;
