import React from 'react';
import LearningSection from '../components/LearningSection';
import LearningSectionTwo from '../components/LearningSectionTwo';
import LearningSectionThree from '../components/LearningSectionThree';
import PreKgSection from '../components/PreKgSection';
import LowerPrimarySection from '../components/LowerPrimarySection';
import GridImageSection from '../components/GridImageSection';
import MiddleSchoolSection from '../components/MiddleSchoolSection';
import SeniorSchoolSection from '../components/SeniorSchoolSection';
// import other sections below...

export default function LearningPath() {
  return (
    <main className='bg-[#F9F9F9]'>
      <LearningSection />
      <LearningSectionTwo/>
      <LearningSectionThree/>
      <PreKgSection/>
      <LowerPrimarySection/>
      <GridImageSection/>
      <MiddleSchoolSection/>
      <SeniorSchoolSection/>
      {/* Add other animated components below */}
    </main>
  );
}
