import React from 'react'
import AcademicSection from '../components/AcademicCurriculum'
import LearningSection from '../components/LearningSection1'
import LearningCircleSection from '../components/LearningCircleSection'
import AimsObjectives from '../components/AimsObjectives'
import LearningSection2 from '../components/LearningSection2'
import sectionsData from "../components/sectionsData";
const AcademicCurriculumPage = () => {
  return (
    <div>
      <AcademicSection/>
      <LearningSection/>
      <LearningCircleSection/>
      <AimsObjectives/>
        <div className="w-full">
      {sectionsData.map((section, index) => (
        <LearningSection2
          key={index}
          title={section.title}
          description={section.description}
          image={section.image}
          animation={section.animation}
        />
      ))}
    </div>
    </div>
  )
}

export default AcademicCurriculumPage
