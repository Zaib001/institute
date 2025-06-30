import React from 'react';
import { useTranslation } from 'react-i18next';

const MissionVisionSection = () => {
  const { t } = useTranslation();

  return (
    <section className="px-8 py-16 bg-white rounded-lg shadow-lg max-w-6xl mx-auto mt-12">
      <h2 className="text-3xl font-bold text-orange-600 mb-4">{t('about_us.mission_vision.title')}</h2>
      <h3 className="text-4xl font-bold mb-6">{t('about_us.mission_vision.subtitle')}</h3>
      <p className="text-gray-700 mb-6">{t('about_us.mission_vision.description')}</p>
    </section>
  );
};

export default MissionVisionSection;
