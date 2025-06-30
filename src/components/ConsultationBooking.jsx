import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ConsultationBooking = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    if (!user) {
      navigate('/login');
    } else {
      setFormData({
        ...formData,
        name: user.name || '',
        email: user.email || ''
      });
    }
  }, [user, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await axios.post(
        'http://localhost:5000/api/consultations',
        { ...formData, userId: user._id },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        }
      );
      alert(t('consultation_booking.success_message'));
      setFormData({ name: '', email: '', date: '', message: '' });
    } catch (error) {
      console.error(error);
      alert(t('consultation_booking.error_message'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-gray-100 min-h-screen py-16 px-4 md:px-12">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-red-700 p-6 text-center text-white">
          <h1 className="text-3xl font-bold">{t('consultation_booking.header')}</h1>
          <p className="mt-2">{t('consultation_booking.subtitle')}</p>
        </div>
        <div className="p-8">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                {t('consultation_booking.form.name_label')}
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                placeholder={t('consultation_booking.form.name_placeholder')}
                readOnly
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                {t('consultation_booking.form.email_label')}
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                placeholder={t('consultation_booking.form.email_placeholder')}
                readOnly
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                {t('consultation_booking.form.date_label')}
              </label>
              <input
                type="datetime-local"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                {t('consultation_booking.form.message_label')}
              </label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                placeholder={t('consultation_booking.form.message_placeholder')}
              ></textarea>
            </div>
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-red-700 text-white font-bold py-2 rounded-lg ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-red-900 transition duration-300'
              }`}
              whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
            >
              {isSubmitting ? t('consultation_booking.form.submitting') : t('consultation_booking.form.button')}
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ConsultationBooking;
