import React from 'react';
import { motion } from 'motion/react';
import { useApp } from './context/AppContext';
import { Phone, Mail, MapPin, Facebook, Instagram, Send, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const { setCurrentPage, t } = useApp();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigationItems = [
    { key: 'home', page: 'home' as const },
    { key: 'about', page: 'about' as const },
    { key: 'catalog', page: 'catalog' as const },
    { key: 'business', page: 'business' as const },
    { key: 'privateLabel', page: 'private-label' as const }
  ];

  const contactInfo = [
    {
      icon: Phone,
      label: t('phone'),
      value: '+7 (495) 123-45-67',
      href: 'tel:+74951234567'
    },
    {
      icon: Mail,
      label: t('email'),
      value: 'info@tomasgreen.ru',
      href: 'mailto:info@tomasgreen.ru'
    },
    {
      icon: MapPin,
      label: t('address'),
      value: 'г. Москва, ул. Примерная, д. 123',
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: Facebook,
      href: '#',
      label: 'Facebook'
    },
    {
      icon: Instagram,
      href: '#',
      label: 'Instagram'
    },
    {
      icon: Send,
      href: '#',
      label: 'Telegram'
    }
  ];

  return (
    <footer id="contacts" className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto mobile-responsive py-12 md:py-16">
        <div className="grid mobile-grid-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              ease: [0.25, 0.46, 0.45, 0.94],
              type: "spring",
              stiffness: 80,
              damping: 20
            }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="text-xl md:text-2xl font-bold text-brand mb-3 md:mb-4">
              Tomas Green
            </div>
            <p className="text-gray-300 mb-4 md:mb-6 max-w-md text-sm md:text-base leading-relaxed">
              {t('companyDescription')}
            </p>
            <div className="flex space-x-3 md:space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="w-9 md:w-10 h-9 md:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-brand transition-colors"
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }
                  }}
                  whileTap={{ 
                    scale: 0.9,
                    transition: { duration: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }
                  }}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 md:w-5 h-4 md:h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.1,
              ease: [0.25, 0.46, 0.45, 0.94],
              type: "spring",
              stiffness: 80,
              damping: 20
            }}
            viewport={{ once: true }}
          >
            <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4">{t('quickNavigation')}</h3>
            <ul className="space-y-1 sm:space-y-2">
              {navigationItems.map((item) => (
                <li key={item.key}>
                  <button
                    onClick={() => setCurrentPage(item.page)}
                    className="text-gray-300 hover:text-brand transition-colors text-sm md:text-base py-1 sm:py-2"
                  >
                    {t(item.key)}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94],
              type: "spring",
              stiffness: 80,
              damping: 20
            }}
            viewport={{ once: true }}
          >
            <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4">{t('contacts')}</h3>
            <div className="space-y-3 md:space-y-4">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-start space-x-2 md:space-x-3">
                  <contact.icon className="w-4 md:w-5 h-4 md:h-5 text-brand mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-xs md:text-sm text-gray-400">{contact.label}</div>
                    {contact.href ? (
                      <a 
                        href={contact.href}
                        className="text-gray-300 hover:text-brand transition-colors text-sm md:text-base"
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <div className="text-gray-300 text-sm md:text-base">{contact.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto mobile-responsive py-4 md:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-0">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ 
                duration: 0.8, 
                ease: [0.25, 0.46, 0.45, 0.94],
                type: "spring",
                stiffness: 80,
                damping: 20
              }}
              viewport={{ once: true }}
              className="text-gray-400 text-xs md:text-sm text-center md:text-left"
            >
              {t('allRightsReserved')}
            </motion.div>
            
            <motion.button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-gray-400 hover:text-brand transition-colors mobile-button"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              <span className="text-xs md:text-sm">{t('scrollToTop')}</span>
              <ArrowUp className="w-3 md:w-4 h-3 md:h-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;