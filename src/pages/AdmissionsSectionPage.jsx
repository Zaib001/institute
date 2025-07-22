import React, { useEffect } from 'react';
import AdmissionsSection from '../components/AdmissionsSection';
import LimitedSeatsSection from '../components/LimitedSeatsSection';
import FeeStructureSection from '../components/FeeStructureSection';
import PricingCardsSection from '../components/PricingCardsSection';
import AdmissionFeeSection from '../components/AdmissionFeeSection';

const AdmissionsSectionPage = () => {
  

  return (
    <div>
      <AdmissionsSection />
      <LimitedSeatsSection />
      <FeeStructureSection />
      <PricingCardsSection />
      <AdmissionFeeSection />

     
    </div>
  );
};

export default AdmissionsSectionPage;
