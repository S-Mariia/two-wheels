'use client';
import { useState, useRef, useEffect, MutableRefObject } from 'react';
import Image from 'next/image';
import tour1 from '@/../public/images/home-page/tour-1.png';
import tour2 from '@/../public/images/home-page/tour-2.png';
import tour3 from '@/../public/images/home-page/tour-3.png';

interface Block {
  isExpanded: boolean;
  contentHeight: string;
  ref: MutableRefObject<HTMLDivElement | null>;
  img: string;
  title: string;
  subTitle: string;
  description: string;
}

const RideTourSection = () => {
  const initialState: Block[] = [
    {
      isExpanded: false,
      contentHeight: '0px',
      ref: useRef<HTMLDivElement>(null),
      img: tour1.src,
      title: 'Scenic Coastal Escape',
      subTitle: 'Date ( 24 June - 5 July)',
      description:
        'Experience the breathtaking beauty of the California coastline on this scenic ride. Starting in San Francisco, cyclists will pedal along the iconic Pacific Coast Highway, passing Experience the breathtaking beauty of the California coastline on this scenic ride. Starting in San Francisco, cyclists will pedal along the iconic Pacific Coast Highway, passing ',
    },
    {
      isExpanded: false,
      contentHeight: '0px',
      ref: useRef<HTMLDivElement>(null),
      img: tour2.src,
      title: 'Historic European Cycling Tour',
      subTitle: 'Date ( 24 June - 5 July)',
      description:
        'Explore the rich history and culture of Europe on this cycling tour through charming villages, vineyards, and ancient landmarks. Explore the rich history and culture of Europe on this cycling tour through charming villages, vineyards, and ancient landmarks.Explore the rich history and culture of Europe on this cycling tour through charming villages, vineyards, and ancient landmarks.',
    },
    {
      isExpanded: false,
      contentHeight: '0px',
      ref: useRef<HTMLDivElement>(null),
      img: tour3.src,
      title: 'Mountain Majesty Expedition',
      subTitle: 'Date ( 4 July - 15 July)',
      description:
        'For adventure seekers, the Mountain Majesty Expedition is an epic journey through the rugged Rocky Mountains. For adventure seekers, the Mountain Majesty Expedition is an epic journey through the rugged Rocky Mountains.For adventure seekers, the Mountain Majesty Expedition is an epic journey through the rugged Rocky Mountains. ',
    },
  ];
  const [blocks, setBlocks] = useState<Block[]>(initialState);
  useEffect(() => {
    setBlocks((prevBlocks) =>
      prevBlocks.map((block) => ({
        ...block,
        contentHeight: `${block.ref.current?.scrollHeight}px`,
      })),
    );
  }, []);

  const toggleExpand = (index: number) => {
    setBlocks((prevBlocks) =>
      prevBlocks.map((block, i) =>
        i === index ? { ...block, isExpanded: !block.isExpanded } : block,
      ),
    );
  };

  return (
    <div id="tours" className="w-full my-[30px] md:my-[50px]">
      <div>
        <h3 className="font-500 mid:text-46px md:text-40px text-30px text-black leading-120% text-center mb-[40px]">
          Ride Tour In This Month 2023
        </h3>
      </div>
      <div className="flex mx-[-15px] flex-wrap mid:flex-nowrap justify-around">
        {blocks.map((block, index) => (
          <div
            className="mid:w-[33%] md:w-[45%] w-full max-w-[410px] px-[15px] mb-[20px]"
            key={index}
          >
            <div>
              <Image
                src={block.img}
                alt={`tour${index + 1}`}
                width={760}
                height={559}
                className="w-full aspect-[1.36/1]"
              />
            </div>
            <div
              ref={block.ref}
              className={`lg:px-[15px] mt-[20px] transition-max-height duration-500 ease-in-out overflow-hidden`}
              style={{
                maxHeight: block.isExpanded ? block.contentHeight : '182px',
              }}
            >
              <h4 className="font-600 xl:text-30px md:text-24px text-20px text-black leading-120% md:mb-[10px] sm:mb-[13px] mb-[10px]">
                {block.title}
              </h4>
              <p className="font-400 sm:text-18px text-16px text-black leading-120% md:mb-[10px] sm:mb-[13px] mb-[10px]">
                {block.subTitle}
              </p>
              <p className="text-black sm:text-18px text-16px font-500 leading-120%">
                {block.description}
              </p>
            </div>
            <div
              className="text-green sm:text-18px text-16px font-500 leading-120% lg:px-[15px] cursor-pointer bg-[white] mt-[-3px] md:mt-0 pt-[3px] md:pt-0 w-full relative"
              onClick={() => toggleExpand(index)}
            >
              {block.isExpanded ? 'Less...' : 'More...'}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RideTourSection;
