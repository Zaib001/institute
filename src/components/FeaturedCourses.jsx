import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook

const courses = [
  {
    id: 1,
    category: 'Adventure Sports',
    title: 'Fear Of Driving And Automatic Negative Thoughts',
    image: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    lessons: 12,
    duration: '3 hr 30 min',
  },
  {
    id: 2,
    category: 'Sales and Operations',
    title: 'Work more, Earn more while sitting at your home',
    image: 'https://plus.unsplash.com/premium_photo-1682787494765-44d02d12f5be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    lessons: 23,
    duration: '1 hr 30 min',
  },
  {
    id: 3,
    category: 'Marketing',
    title: 'Foundation course to understand about Software',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8fGVufDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8fGVufDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8fGVufDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8fGVufDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8fGVufDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8fGVufDB8MHxwxMjA%3D%3D',
    lessons: 23,
    duration: '1 hr 30 min',
  },
];

const FeaturedCourses = () => {
  const { t } = useTranslation(); // Initialize translation hook

  return (
    <section className="px-8 py-16 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8">{t('featured_courses.title')}</h2>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {courses.map(course => (
            <Link to={`/courses`} key={course.id}>
              <motion.div
                className="bg-white shadow-md rounded-lg overflow-hidden"
                whileHover={{ scale: 1.02 }}
              >
                <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <p className="text-sm text-gray-600 mb-1">{course.category}</p>
                  <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
                  <div className="flex justify-between text-sm text-gray-500 mt-4">
                    <p>
                      {course.lessons} {t('featured_courses.lessons')}
                    </p>
                    <p>
                      {t('featured_courses.duration')}: {course.duration}
                    </p>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
