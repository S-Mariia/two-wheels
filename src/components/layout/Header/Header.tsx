'use client';
import logo from '@/../public/images/logo/logo.svg';
import Image from 'next/image';
import MainContainer from '@/components/layout/MainContainer/MainContainer';
import { useRouter } from 'next/navigation';
import { Link } from 'react-scroll';
import { useState } from 'react';
import menu from '@/../public/images/icons/menu.svg';
import x from '@/../public/images/icons/close.svg';

const Header = () => {
  const router = useRouter();
  const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false);

  return (
    <MainContainer>
      <div className={`w-full flex justify-between items-center`}>
        <Image
          src={logo}
          onClick={() => {
            router.push('/');
          }}
          alt="Two wheels"
          width={93}
          height={96}
          className="sm:w-[93px] sm:h-[96px] w-[63px] h-[65px] cursor-pointer"
        />
        <div className="md:flex hidden items-center md:gap-[50px] gap-[30px]">
          <div
            className="cursor-pointer p-[5px] text-green font-400 md:text-24px text-16px hover:underline"
            onClick={() => {
              router.push('/');
            }}
          >
            Home
          </div>
          <div className="cursor-pointer p-[5px] text-primary font-400 md:text-24px text-16px hover:underline">
            <Link to="aboutUs" spy={true} smooth={true} duration={300}>
              About Us
            </Link>
          </div>
          <div className="cursor-pointer p-[5px] text-primary font-400 md:text-24px text-16px hover:underline">
            <Link to="tours" spy={true} smooth={true} duration={300}>
              Tours
            </Link>
          </div>
          <div className="cursor-pointer p-[5px] text-primary font-400 md:text-24px text-16px hover:underline">
            <Link to="contactUs" spy={true} smooth={true} duration={300}>
              Contact
            </Link>
          </div>
        </div>
        <div
          className="flex items-center md:hidden"
          onClick={() => {
            setBurgerMenuOpen(true);
          }}
        >
          <Image
            src={menu}
            alt={'Open menu'}
            width={24}
            height={24}
            className={'h-[24px] w-[24px]'}
          />
        </div>
        {isBurgerMenuOpen && (
          <div className="md:hidden h-full mid:relative fixed z-[1000000] backdrop-blur-[20px] bg-green-30 mobile top-0 left-0 right-0 bottom-0 p-[40px] pt-[60px]">
            <button
              onClick={() => {
                setBurgerMenuOpen(false);
              }}
              className="absolute sm:right-[32px] z-[10000000] right-[35px] top-[35px] text-brown-500 font-semibold text-base leading-[11px] mb-4 mid:hidden"
            >
              <Image
                src={x}
                alt={'Close'}
                width={24}
                height={24}
                className={'h-[24px] w-[24px]'}
              />
            </button>
            <div className="flex flex-col items-start  gap-[30px]">
              <div
                className="cursor-pointer p-[5px] text-green font-400 text-20px hover:underline"
                onClick={() => {
                  router.push('/');
                  setBurgerMenuOpen(false);
                }}
              >
                Home
              </div>
              <div className="cursor-pointer p-[5px] text-primary font-400 text-20px  hover:underline">
                <Link
                  to="aboutUs"
                  spy={true}
                  smooth={true}
                  duration={300}
                  onClick={() => setBurgerMenuOpen(false)}
                >
                  About Us
                </Link>
              </div>
              <div className="cursor-pointer p-[5px] text-primary font-400 text-20px w-full">
                <Link
                  to="tours"
                  spy={true}
                  smooth={true}
                  duration={300}
                  className=" hover:underline"
                  onClick={() => setBurgerMenuOpen(false)}
                >
                  Tours
                </Link>
              </div>
              <div className="cursor-pointer p-[5px] text-primary font-400 text-20px hover:underline">
                <Link
                  to="contactUs"
                  spy={true}
                  smooth={true}
                  duration={300}
                  onClick={() => setBurgerMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </MainContainer>
  );
};

export default Header;
