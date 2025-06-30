import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next'; // Import useTranslation

const VideoSection = () => {
  const { t } = useTranslation(); // Initialize translation hook

  return (
    <section className="my-16 px-6 md:px-80 py-12 bg-gradient-to-r from-gray-50 to-gray-200 rounded-xl shadow-lg">
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Left Side: Text Content */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-4xl font-bold text-red-700 mb-6">
            {t('video_section.heading')}
          </h2>
          <p className="text-gray-800 text-xl mb-6 leading-relaxed">
            {t('video_section.description')}
          </p>
        </motion.div>

        {/* Right Side: Video */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div
            className="border-4 border-red-700 rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300"
            style={{ height: '500px' }}
          >
            <iframe
              className="w-full h-full"
              src="https://s91.0e6.myftpupload.com/wp-content/uploads/2024/09/Jolie-New-Commercial-2.mp4"
              title="Learning Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
