import React from 'react';
import AboutUsHeader from '../components/AboutUsHeader';
import MissionVisionSection from '../components/MissionVisionSection';
import TeamMembersSection from '../components/TeamMembersSection';
import WorldClassSection from '../components/WorldClassSection';
import StrategicLocationsSection from '../components/StrategicLocationsSection';
import CoreValuesSection from '../components/CoreValuesSection';
import EnrollmentCTA from '../components/EnrollmentCTA';

const AboutUsPage = () => {
  return (
    <div>
      <AboutUsHeader />
      <WorldClassSection/>
      <StrategicLocationsSection/>
      <CoreValuesSection/>
      <EnrollmentCTA/>
    </div>
  );
};

export default AboutUsPage;
