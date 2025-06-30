import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const ContactUs = () => {
  const { t } = useTranslation();

  return (
    <section className="px-8 py-16 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header Section */}
        <motion.div
          className="p-8 bg-red-700 text-white text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl font-bold">{t('contact_us.title')}</h1>
          <p className="mt-2">{t('contact_us.subtitle')}</p>
        </motion.div>

        {/* Contact Form and Info Section */}
        <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            className="flex flex-col space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-red-700 mb-4">{t('contact_us.form.title')}</h2>
            <input
              type="text"
              placeholder={t('contact_us.form.name_placeholder')}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-700"
            />
            <input
              type="email"
              placeholder={t('contact_us.form.email_placeholder')}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-700"
            />
            <textarea
              placeholder={t('contact_us.form.message_placeholder')}
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-700"
            ></textarea>
            <motion.button
              className="w-full bg-red-700 text-white py-2 rounded-lg hover:bg-red-800 transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              {t('contact_us.form.submit_button')}
            </motion.button>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="flex flex-col space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-red-700 mb-4">{t('contact_us.info.title')}</h2>
            <div className="flex items-start space-x-4">
              <i className="fas fa-map-marker-alt text-red-700 text-2xl"></i>
              <p className="text-gray-700">{t('contact_us.info.address')}</p>
            </div>
            <div className="flex items-start space-x-4">
              <i className="fas fa-phone-alt text-red-700 text-2xl"></i>
              <p className="text-gray-700">{t('contact_us.info.phone')}</p>
            </div>
            <div className="flex items-start space-x-4">
              <i className="fas fa-envelope text-red-700 text-2xl"></i>
              <p className="text-gray-700">{t('contact_us.info.email')}</p>
            </div>
            <motion.div
              className="mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093714!2d144.9537353158677!3d-37.81720997975127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727a8f6a2c5e0!2sYour%20Business%20Location!5e0!3m2!1sen!2sus!4v1610911375663!5m2!1sen!2sus"
                width="100%"
                height="200"
                className="border-0 rounded-lg"
                allowFullScreen=""
                loading="lazy"
                title="Google Map Location"
              ></iframe>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
