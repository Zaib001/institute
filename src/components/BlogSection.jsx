import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next'; // Import useTranslation

const blogs = [
  {
    id: 1,
    title: 'Successfully Distributed: How To Thrive As a Remote Agile Team (Webinar Follow-Up)',
    category: 'category', // Use a key for category translation
    tags: ['Agile Practices 101', 'Remote Work', 'Webinar'],
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Replace with actual image path
  },
  {
    id: 2,
    title: 'Webinar Blog Recap: Suddenly Distributed: Tools for Effective Agile Teams',
    category: 'category',
    tags: ['Remote Work', 'Agile Practices 101', 'Psychological Safety'],
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Replace with actual image path
  },
  {
    id: 3,
    title: 'Webinar Blog Recap: Suddenly Distributed: Tools for Effective Agile Teams',
    category: 'category',
    tags: ['Remote Work', 'Agile Practices 101', 'Psychological Safety'],
    image: 'https://images.unsplash.com/photo-1496449903678-68ddcb189a24?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Replace with actual image path
  },
];

const BlogSection = () => {
  const { t } = useTranslation(); // Initialize translation hook

  return (
    <section className="px-8 py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12">{t('blog_section.title')}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {blogs.map((blog) => (
          <motion.div
            key={blog.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <span className="text-sm bg-orange-200 text-red-900 px-2 py-1 rounded-full inline-block mb-4">
                {t('blog_section.category')}
              </span>
              <h3 className="text-lg font-semibold mb-4">{blog.title}</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {blog.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <button className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition duration-300">
                {t('blog_section.read_more')}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
