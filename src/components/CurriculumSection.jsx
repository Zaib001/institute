import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

const CurriculumSection = () => {
  const { t } = useTranslation();
  const [curriculumResources, setCurriculumResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCurriculum = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/curriculum'); // Replace with your API URL
        setCurriculumResources(response.data);
        setLoading(false);
      } catch (error) {
        console.error(t('curriculum_section.error'), error);
        setError(t('curriculum_section.error'));
        setLoading(false);
      }
    };

    fetchCurriculum();
  }, [t]);

  if (loading) {
    return <p className="text-center text-gray-700">{t('curriculum_section.loading')}</p>;
  }

  if (error) {
    return <p className="text-center text-red-700">{error}</p>;
  }

  return (
    <section className="px-8 py-16 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-red-700 mb-8 text-center">{t('curriculum_section.title')}</h1>
        {curriculumResources.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {curriculumResources.map((resource, index) => (
              <motion.div
                key={resource._id} // Use `_id` if MongoDB is used as the database
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
              >
                <h2 className="text-2xl font-semibold text-red-700 mb-2">{resource.title}</h2>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <motion.a
                  href={resource.fileUrl}
                  download
                  className="mt-auto text-center inline-block bg-red-700 text-white px-4 py-2 rounded-lg hover:bg-red-800 transition duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  {t('curriculum_section.download_button')}
                </motion.a>
              </motion.div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-700 text-lg mt-8">{t('curriculum_section.no_resources')}</p>
        )}
      </div>
    </section>
  );
};

export default CurriculumSection;
