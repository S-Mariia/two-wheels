import MainContainer from '@/components/layout/MainContainer/MainContainer';
import instagram from '@/../public/images/icons/instagram.svg';
import x from '@/../public/images/icons/x.svg';
import facebook from '@/../public/images/icons/facebook.svg';

import Image from 'next/image';
const Footer = () => {
  return (
    <MainContainer>
      <div className={`w-full text-black `}>
        <div className="flex justify-between flex-col sm:flex-row gap-[20px]">
          <div className="sm:max-w-[290px]">
            <h3 className="text-black sm:text-24px text-18px font-600 leading-120% mb-[20px]">
              Get in Touch:
            </h3>
            <p className="text-black sm:text-18px text-16px font-500 leading-120%">
              Have questions or suggestions? <br /> Contact our team at{' '}
              <span className="text-green font-700">
                <a href="mailto:twowheels@gmail.com">twowheels@gmail.com</a>
              </span>{' '}
              or give us a call at{' '}
              <span className="text-green font-700">
                <a href="tel:+14323456789">+143 23456789</a>
              </span>
            </p>
          </div>
          <div className="sm:max-w-[290px]">
            <h3 className="text-black sm:text-24px text-18px font-600 leading-120% mb-[20px]">
              Connect with Us:
            </h3>
            <p className="text-black sm:text-18px text-16px font-500 leading-120%">
              Stay in the loop and follow us on social media for the latest
              updates, cycling tips, and community events.
            </p>
          </div>
        </div>
        <div className="flex gap-[15px] items-center justify-center md:mt-[50px] mt-[20px]">
          <div>
            <Image
              src={instagram}
              alt={'instagram'}
              width={36}
              height={36}
              className={'h-[36px] w-[36px]'}
            />
          </div>
          <div>
            <Image
              src={x}
              alt={'twitter'}
              width={36}
              height={36}
              className={'h-[36px] w-[36px]'}
            />
          </div>
          <div>
            <Image
              src={facebook}
              alt={'facebook'}
              width={36}
              height={36}
              className={'h-[36px] w-[36px]'}
            />
          </div>
        </div>
        <div className="w-full mt-[20px] text-black sm:text-18px text-16px font-300 leading-120% text-center">
          <p>
            ©© 2022 Cycle of Life: Reflections from a Bicycle Rider. All
            rights reserved.
          </p>
        </div>
      </div>
    </MainContainer>
  );
};

export default Footer;
