import React from 'react';
import HeroSection from '../components/HeroSection';
import ChairmanSection from './ChairmanSection';
import WhyShaheenSection from '../components/Whychoseus';
import LearningProgramsSection from './LearningProgramsSection';
import AcademicProgramsSection from './AcademicProgramsSection';
import EngagementForParentsSection from './EngagementForParentsSection';
import ShaheenInNumbersSection from './ShaheenInNumbersSection';

const HeaderPage = () => {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <ChairmanSection />
      <WhyShaheenSection />
      <LearningProgramsSection />
      <AcademicProgramsSection />
      <EngagementForParentsSection />
      <ShaheenInNumbersSection />
    </div>
  );
};

export default HeaderPage;
