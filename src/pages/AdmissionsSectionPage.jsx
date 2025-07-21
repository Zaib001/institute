import React, { useEffect } from 'react';
import AdmissionsSection from '../components/AdmissionsSection';
import LimitedSeatsSection from '../components/LimitedSeatsSection';
import FeeStructureSection from '../components/FeeStructureSection';
import PricingCardsSection from '../components/PricingCardsSection';
import AdmissionFeeSection from '../components/AdmissionFeeSection';

const AdmissionsSectionPage = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://server.fillout.com/embed/v1/";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <AdmissionsSection />
      <LimitedSeatsSection />
      <FeeStructureSection />
      <PricingCardsSection />
      <AdmissionFeeSection />

      <div
        style={{ width: '100%', height: '500px' }}
        data-fillout-id="vc45UpyFJ5us"
        data-fillout-embed-type="standard"
        data-fillout-inherit-parameters
        data-fillout-dynamic-resize
      ></div>
    </div>
  );
};

export default AdmissionsSectionPage;
