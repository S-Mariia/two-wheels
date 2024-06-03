import HeroSection from '@/components/pages/HomePage/HeroSection/HeroSection';
import MainContainer from '@/components/layout/MainContainer/MainContainer';
import ActiveMembersSection from '@/components/pages/HomePage/ActiveMembersSection/ActiveMembersSection';
import DiscoveringDeepSection from '@/components/pages/HomePage/DiscoveringDeepSection/DiscoveringDeepSection';
import RideTourSection from '@/components/pages/HomePage/RideTourSection/RideTourSection';
import QuestionsSection from '@/components/pages/HomePage/QuestionsSection/QuestionsSection';
import SponsorsSection from '@/components/pages/HomePage/SponsorsSection/SponsorsSection';
import JoinUsSection from '@/components/pages/HomePage/JoinUsSection/JoinUsSection';

const HomePage = () => {
  return (
    <div className="w-full">
      <div className="bg-light-green-34">
        <MainContainer>
          <HeroSection />
        </MainContainer>
        <MainContainer>
          <ActiveMembersSection />
        </MainContainer>
      </div>
      <MainContainer>
        <DiscoveringDeepSection />
      </MainContainer>
      <MainContainer>
        <RideTourSection />
      </MainContainer>
      <div className="bg-light-green-34">
        <MainContainer>
          <SponsorsSection />
        </MainContainer>
      </div>
      <MainContainer>
        <QuestionsSection />
      </MainContainer>
      <div className="bg-light-green-34">
        <MainContainer>
          <JoinUsSection />
        </MainContainer>
      </div>
    </div>
  );
};

export default HomePage;
