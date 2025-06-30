import React from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook

const Footer = () => {
  const { t } = useTranslation(); // Initialize translation hook

  return (
    <footer className="bg-red-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4">{t('footer.title')}</h3>
            <p>{t('footer.address.line1')}</p>
            <p>{t('footer.address.line2')}</p>
            <p>{t('footer.address.city_state_zip')}</p>
            <p className="mt-2">{t('footer.address.phone')}</p>
            <p className="underline mt-2">{t('footer.address.map_directions')}</p>
          </div>

          {/* Sitemap */}
          <div>
            <h3 className="text-xl font-semibold mb-4">{t('footer.sitemap.title')}</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">{t('footer.sitemap.links.home')}</a></li>
              <li><a href="#" className="hover:underline">{t('footer.sitemap.links.about')}</a></li>
              <li><a href="#" className="hover:underline">{t('footer.sitemap.links.services')}</a></li>
              <li><a href="#" className="hover:underline">{t('footer.sitemap.links.courses')}</a></li>
              <li><a href="#" className="hover:underline">{t('footer.sitemap.links.curriculum')}</a></li>
              <li><a href="#" className="hover:underline">{t('footer.sitemap.links.contact_us')}</a></li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h3 className="text-xl font-semibold mb-4">{t('footer.newsletter.title')}</h3>
            <p className="mb-4">{t('footer.newsletter.description')}</p>
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

        {/* Bottom Footer Section */}
        <div className="mt-12 border-t border-black pt-4 text-sm text-center md:text-left md:flex justify-between">
          <p>
            {t('footer.bottom.text')} <a href="#" className="underline">{t('footer.bottom.privacy')}</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
