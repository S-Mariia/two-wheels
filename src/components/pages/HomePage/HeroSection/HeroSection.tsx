import { Plus_Jakarta_Sans } from 'next/font/google';

const plusJakartaSans = Plus_Jakarta_Sans({
  weight: ['800'],
  subsets: ['latin'],
});

const HeroSection = () => {
  return (
    <div className="w-full flex flex-col sm:flex-row sm:justify-between gap-[30px] sm:items-center my-[10px]">
      <div className="max-w-[700px] sm:w-[55%]">
        <h1
          className={`${plusJakartaSans.className} text-primary mid:text-[70px] md:text-[50px] text-[30px] font-800 leading-120%`}
        >
          Pedals & Reflections: Stories from the road on <br />
          <span className="text-green">Two Wheels</span>
        </h1>
      </div>
      <div className="max-w-[405px] sm:w-[45%]">
        <p className="text-primary font-400 mid:text-24px md:text-20px text-18px">
          Step into the world of a passionate cyclist's experiences, insights,
          and stories that will take you on a captivating ride through the highs
          and lows of life on two wheels
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
