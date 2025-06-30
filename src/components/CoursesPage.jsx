import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/courses');
        console.log(response.data);
        setCourses(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching courses:', error);
        setError('Failed to load courses. Please try again later.');
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return (
    <section className="px-8 py-16 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Courses & Exams</h1>
        {loading ? (
          <p className="text-center">Loading courses...</p>
        ) : error ? (
          <p className="text-center text-red-700">{error}</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <motion.div
                key={course._id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <Link to={`/courses/${course._id}`}>
                  <img
                    src={
                      course.displayImage
                        ? `http://localhost:5000/${course.displayImage.replace(/\\/g, '/')}`
                        : 'path/to/default-image.jpg' // Replace with an actual path to a default image
                    }
                    alt={course.title || 'Course Image'}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h2 className="text-2xl font-bold mb-2">{course.title}</h2>
                    <p className="text-gray-600 mb-4">{course.description}</p>
                    <p className="text-lg font-semibold text-green-700">Price: ${course.price}</p> {/* Price section */}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CoursesPage;
