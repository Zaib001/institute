import React, { useState } from 'react';
import AcademicSection from '../components/AcademicCurriculum';
import LearningSection from '../components/LearningSection1';
import LearningCircleSection from '../components/LearningCircleSection';
import AimsObjectives from '../components/AimsObjectives';
import StickyLearningSections from '../components/StickyLearningSections';
import sectionsData from "../components/sectionsData";

const AcademicCurriculumPage = () => {
  return (
    <div>
      <AcademicSection />
      <LearningSection />
      <LearningCircleSection />
      <AimsObjectives />
      <StickyLearningSections data={sectionsData} />
    </div>
  );
};

export default AcademicCurriculumPage;
