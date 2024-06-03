import member from '@/../public/images/home-page/questions.png';

import Image from 'next/image';

const QuestionsSection = () => {
  return (
    <div className="w-full flex flex-col md:flex-row sm:justify-between gap-[30px] sm:items-center md:my-[50px] my-[30px]">
      <div className="md:w-[50%]">
        <div className="flex ">
          <h3 className="font-600 mid:text-46px md:text-40px text-30px text-primary leading-120% xl:mb-[70px] sm:mb-[40px] mb-[20px]">
            Frequently Asked Questions About Our Rider Club
          </h3>
        </div>
        <div>
          <p className="font-500 mid:text-24px md:text-20px text-18px text-primary leading-120% mb-[20px]">
            How can I join the Rider Club and become a member of the community?
          </p>
          <p className="font-300 mid:text-24px md:text-20px text-18px text-primary leading-120%">
            Joining our Rider Club and becoming part of our community is easy!
            Simply click on the "Join Now" or "Become a Member" button on our
            website, and follow the prompts to create your account.
          </p>
        </div>
      </div>
      <div className="md:w-[50%] flex justify-center">
        <Image
          src={member}
          alt={'member'}
          width={1163}
          height={1073}
          className={'w-full aspect-[1.08/1]'}
        />
      </div>
    </div>
  );
};

export default QuestionsSection;
