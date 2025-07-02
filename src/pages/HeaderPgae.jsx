import React, { useEffect, useRef } from 'react';

import HeroSection from '../components/HeroSection';
import BlogSection from '../components/BlogSection';
import ChairmanSection from './ChairmanSection';
import WhyShaheenSection from '../components/Whychoseus';
import LearningProgramsSection from './LearningProgramsSection';
import AcademicProgramsSection from './AcademicProgramsSection';
import EngagementForParentsSection from './EngagementForParentsSection';
import ShaheenInNumbersSection from './ShaheenInNumbersSection';


const HeaderPage = () => {


  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <ChairmanSection />


      <WhyShaheenSection />

      <LearningProgramsSection />

      <AcademicProgramsSection />

      <EngagementForParentsSection />

      <ShaheenInNumbersSection/>
    </div>
  );
};

export default HeaderPage;
