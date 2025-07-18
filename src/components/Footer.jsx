import React from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
import logo from '../assets/logo1.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useTranslation(); // Initialize translation hook

  return (
    <footer className="bg-black text-white py-12 font-poppins">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <Link to="/">
            <img src={logo} alt="Shaheen Logo" className="h-48 w-auto" />
          </Link>


          {/* Sitemap */}
          <div>
            <h3 className="text-xl font-semibold mb-4">{t('footer.sitemap.title')}</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/about" className="hover:underline">About Shaheen</a></li>
              <li><a href="/contact" className="hover:underline">Contact Us</a></li>
              <li><a href="/admission" className="hover:underline">Admission form</a></li>
              <li><a href="/jobs" className="hover:underline">Job Application</a></li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Stay in Touch</h3>
            <p className="mb-4">To join our newsletter sign up below</p>
            <form className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder={t('footer.newsletter.placeholder')}
                className="p-2 rounded-md text-gray-900"
              />
              <button
                type="submit"
                className="bg-red-700 text-white py-2 px-4 rounded-md font-semibold hover:bg-red-600 transition duration-300"
              >
                {t('footer.newsletter.button')}
              </button>
            </form>
          </div>
        </div>


      </div>
    </footer>
  );
};

export default Footer;
