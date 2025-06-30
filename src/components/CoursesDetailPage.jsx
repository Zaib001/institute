import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axiosInstance from '../services/axiosInstance'; // Import your Axios instance

const stripePromise = loadStripe('your-publishable-key'); // Replace with your Stripe publishable key

const PaymentForm = ({ course, userId, setPaymentStatus }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handlePayment = async (isInstallment = false) => {
    if (!stripe || !elements) {
      setPaymentStatus('Stripe is not loaded');
      return;
    }

    const cardElement = elements.getElement(CardElement);
    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.error('Error creating payment method:', error);
      setPaymentStatus('Failed to create payment method. Please try again.');
      return;
    }

    try {
      const endpoint = isInstallment
        ? 'http://localhost:5000/api/payments/installment'
        : 'http://localhost:5000/api/payments/one-time';

      const response = await axiosInstance.post(endpoint, {
        userId,
        courseId: course._id,
        amount: course.price,
        paymentMethodId: paymentMethod.id,
        installmentAmount: isInstallment ? course.price / 4 : undefined,
      });

      setPaymentStatus('Payment successful');
      console.log('Payment Response:', response.data);
    } catch (error) {
      console.error('Payment Error:', error);
      setPaymentStatus('Payment failed. Please try again.');
    }
  };

  return (
    <>
      <div className="mb-4">
        <CardElement className="p-2 border rounded-md" />
      </div>
      <div className="space-y-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="w-full bg-red-700 text-white py-2 rounded-lg hover:bg-red-800 transition duration-300"
          onClick={() => handlePayment(false)}
        >
          Enroll Now - ${course.price}
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="w-full bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800 transition duration-300"
          onClick={() => handlePayment(true)}
        >
          Pay in Installments
        </motion.button>
      </div>
    </>
  );
};

const CourseDetailsPage = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [paymentStatus, setPaymentStatus] = useState(null);

  const userId = useSelector((state) => state.auth.user?._id); // Adjust this based on your Redux state

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const response = await axiosInstance.get(`/courses/${id}`);
        setCourse(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching course details:', error);
        setError('Failed to load course details. Please try again later.');
        setLoading(false);
      }
    };

    fetchCourseDetails();
  }, [id]);

  if (loading) {
    return <p className="text-center mt-20">Loading course details...</p>;
  }

  if (error) {
    return <p className="text-center mt-20 text-red-700">{error}</p>;
  }

  if (!course) {
    return <p className="text-center mt-20 text-red-700">Course not found.</p>;
  }

  return (
    <section className="px-8 py-16 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Course Video (if available) */}
        {course.videos && course.videos.length > 0 && (
          <motion.div
            className="video-container mb-6 mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <video
              controls
              className="w-full h-[500px] object-cover rounded-lg"
              style={{ border: '4px solid #c53030', boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)' }}
            >
              <source src={`http://localhost:5000/${course.videos[0].replace(/\\/g, '/')}`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
        )}

        <div className="p-8">
          <h1 className="text-4xl font-bold mb-4 text-red-700">{course.title}</h1>
          <p className="text-gray-700 mb-6">{course.description}</p>

          {/* Payment Form */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4 text-red-700">Enrollment & Payment</h2>
            <Elements stripe={stripePromise}>
              <PaymentForm course={course} userId={userId} setPaymentStatus={setPaymentStatus} />
            </Elements>
            {paymentStatus && <p className="mt-4 text-center text-red-700">{paymentStatus}</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetailsPage;
