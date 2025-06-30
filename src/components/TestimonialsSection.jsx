import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import axios from 'axios';
import { useTranslation } from 'react-i18next'; // Import useTranslation

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const TestimonialsSection = () => {
  const [reviews, setReviews] = useState([]);
  const { t } = useTranslation(); // Initialize translation hook

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5000/api/review/all', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setReviews(response.data.reviews || []);
      } catch (error) {
        console.error('Failed to fetch reviews:', error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <section className="px-4 py-16 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-8">{t('testimonials_section.title')}</h2>
      <p className="text-center text-gray-600 mb-12">{t('testimonials_section.subtitle')}</p>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 w-10/12 max-w-7xl mx-auto">
          {reviews.length > 0 ? (
            reviews.map((review) => (
              <motion.div
                key={review._id}
                className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.03 }}
                variants={cardVariants}
                transition={{ duration: 0.5 }}
              >
                <div className={`relative h-40 ${!review.imageUrl ? 'bg-gradient-to-r from-purple-400 to-blue-500' : ''}`}>
                  {review.imageUrl ? (
                    <img
                      src={`http://localhost:5000/${review.imageUrl}`}
                      alt={review.userId?.name || 'Reviewer'}
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <div className="h-full w-full flex justify-center items-center text-white text-4xl font-bold">
                      {review.userId?.name.charAt(0)}
                    </div>
                  )}
                  <img
                    src={review.userId?.profileImage || 'https://via.placeholder.com/150'}
                    alt={review.userId?.name || 'Reviewer'}
                    className="w-20 h-20 rounded-full border-4 border-white absolute -bottom-10 left-1/2 transform -translate-x-1/2"
                  />
                </div>
                <div className="p-8 text-center">
                  <div className="flex justify-center mb-4 text-yellow-500 mt-10">
                    {[...Array(review.rating)].map((_, i) => (
                      <FaStar key={i} className="text-lg" />
                    ))}
                  </div>
                  <p className="text-black font-extrabold mb-6 italic">
                    <span className="text-2xl text-purple-700">&ldquo;</span>
                    {review.reviewText}
                    <span className="text-2xl text-purple-700">&rdquo;</span>
                  </p>
                  <h3 className="text-xl font-semibold">{review.userId?.name || 'Anonymous'}</h3>
                  <p className="text-gray-500 text-sm mb-4">{review.userId?.role || 'Customer'}</p>
                </div>
              </motion.div>
            ))
          ) : (
            <p className="text-center text-gray-500">{t('testimonials_section.no_reviews')}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
