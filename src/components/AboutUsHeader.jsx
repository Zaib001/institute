import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutUsHeader = () => {
  const { t } = useTranslation();

  return (
    <section
      className="relative h-[50vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1615631648086-325025c9e51e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
    >
      <div className="bg-black bg-opacity-50 w-full h-full absolute"></div>
      <h1 className="relative text-white text-5xl font-bold">{t('about_us.header')}</h1>
    </section>
  );
};

export default AboutUsHeader;
