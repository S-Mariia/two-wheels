import member from '@/../public/images/home-page/active-members-mono.png';
import members from '@/../public/images/home-page/active-members-group.png';

import Image from 'next/image';

const ActiveMembersSection = () => {
  return (
    <div className="w-full flex flex-col sm:flex-row sm:justify-between gap-[30px] sm:items-center my-[30px]">
      <div className="max-w-[700px] sm:w-[55%]">
        <div className="flex items-start justify-between mid:mb-[90px] md:mb-[60px] mb-[40px] gap-4">
          <div className="flex flex-col items-center justify-center">
            <p className="font-800 mid:text-46px md:text-40px text-30px text-primary leading-[1]">
              5
            </p>
            <p className="font-400 mid:text-24px md:text-20px text-18px text-primary text-center">
              Countries
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="font-800 mid:text-46px md:text-40px text-30px text-primary leading-[1]">
              10
            </p>
            <p className="font-400 mid:text-24px md:text-20px text-18px text-primary text-center">
              Tour Guides
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="font-800 mid:text-46px md:text-40px text-30px text-primary leading-[1]">
              1
            </p>
            <p className="font-400 mid:text-24px md:text-20px text-18px text-primary text-center">
              Tours completed
            </p>
          </div>
        </div>
        <div>
          <p className="mb-[16px] font-500 mid:text-32px md:text-24px text-20px text-primary ">
            2345 Active Members
          </p>
          <Image
            src={members}
            alt={'members'}
            width={578}
            height={148}
            className={'w-full max-w-[289px] aspect-[3.9/1]'}
          />
        </div>
      </div>
      <div className="sm:max-w-[525px] sm:w-[45%] flex justify-center">
        <Image
          src={member}
          alt={'member'}
          width={1050}
          height={1260}
          className={'w-full aspect-[1/1.2]'}
        />
      </div>
    </div>
  );
};

export default ActiveMembersSection;
