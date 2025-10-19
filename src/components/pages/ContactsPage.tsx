import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { useApp } from '../context/AppContext';
import { motion } from 'motion/react';

import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  Building2,
  Navigation
} from 'lucide-react';

const ContactsPage: React.FC = () => {
  const { t, isLowEndDevice } = useApp();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: t('phoneTitle'),
      value: t('phoneValue'),
      description: t('phoneDesc'),
      action: 'tel:+74951234567'
    },
    {
      icon: Mail,
      title: t('emailTitle'),
      value: t('emailValue'),
      description: t('emailDesc'),
      action: 'mailto:info@tomasgreen.ru'
    },
    {
      icon: MapPin,
      title: t('addressTitle'),
      value: t('addressValue'),
      description: t('addressDesc'),
      action: 'https://maps.google.com/?q=Москва,Складочная,1с1'
    },
    {
      icon: Clock,
      title: t('workingHours'),
      value: t('weekdays'),
      description: `${t('saturday')}, ${t('sunday')}`,
      action: null
    }
  ];

  const stats = [
    { value: '1000+', label: t('satisfiedClients') },
    { value: '24/7', label: t('support247') },
    { value: '5', label: t('regionsRussia') },
    { value: '20+', label: t('yearsExperience') }
  ];

  return (
    <div className={`min-h-screen pt-16 ${isLowEndDevice ? 'low-end-device' : ''}`}>
      <section className="py-12 md:py-20 bg-brand-light min-h-[250px] md:h-80 flex items-center">
        <div className="max-w-6xl mx-auto mobile-responsive text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1.0, 
              ease: [0.25, 0.46, 0.45, 0.94],
              type: "spring",
              stiffness: 60,
              damping: 25
            }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
              {t('contactsTitle')}
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              {t('contactsSubtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto mobile-responsive">
          <div className="grid mobile-grid-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  type: "spring",
                  stiffness: 80,
                  damping: 20
                }}
                whileHover={{ y: -5 }}
              >
                <Card className={`h-full text-center group cursor-pointer border-0 shadow-lg mobile-card ${
                  !isLowEndDevice ? 'hover-lift' : ''
                } ${info.action ? 'brand-hover' : ''}`}
                onClick={() => info.action && window.open(info.action, '_blank')}
                >
                  <CardContent className="p-4 md:p-6">
                    <div className="inline-flex items-center justify-center w-12 md:w-16 h-12 md:h-16 bg-brand text-white rounded-full mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="w-6 md:w-8 h-6 md:h-8" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{info.title}</h3>
                    <p className="text-brand font-medium mb-1 text-sm md:text-base">{info.value}</p>
                    <p className="text-xs md:text-sm text-gray-600">{info.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-brand-light">
        <div className="max-w-6xl mx-auto mobile-responsive">
          <div className="grid mobile-grid-1 lg:grid-cols-2 gap-6 md:gap-8">
            
            <div className="h-full">
              <div className="w-full h-96 lg:h-full rounded-lg overflow-hidden shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.5!2d37.6156!3d55.7558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a50b315e573%3A0xa886bf5a3d9b2e68!2z0KHQutC70LDQtNC-0YfQvdCw0Y8g0YPQu9C40YbQsCwg0JzQvtGB0LrQstCwLCDQoNC-0YHRgdC40Y8!5e0!3m2!1sru!2s!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Tomas Green Office Location"
                ></iframe>
              </div>
            </div>

            <div className="h-full">
              <div className="bg-white rounded-lg shadow-md p-6 h-full">
                <h3 className="mb-6">{t('getInTouch')}</h3>
                <form onSubmit={handleSubmit} className="space-y-6 h-full flex flex-col">
                  <div>
                    <label className="block mb-3 text-gray-700">
                      {t('yourName')}
                    </label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                      className="w-full h-12 px-4 py-3"
                      placeholder={t('namePlaceholder')}
                    />
                  </div>
                  
                  <div>
                    <label className="block mb-3 text-gray-700">
                      {t('yourEmail')}
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                      className="w-full h-12 px-4 py-3"
                      placeholder={t('emailPlaceholder')}
                    />
                  </div>
                  
                  <div className="flex-1 flex flex-col">
                    <label className="block mb-3 text-gray-700">
                      {t('yourMessage')}
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      required
                      className="w-full resize-none flex-1 min-h-32 px-4 py-3"
                      placeholder={t('messagePlaceholder')}
                    />
                  </div>
                  
                  <div className="pt-6">
                    <Button 
                      type="submit" 
                      className="w-full h-12 bg-brand hover:bg-brand-dark px-4 py-3"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      {t('sendMessage')}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-brand-light">
        <div className="max-w-6xl mx-auto mobile-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 1.0, 
              ease: [0.25, 0.46, 0.45, 0.94],
              type: "spring",
              stiffness: 60,
              damping: 25
            }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 md:mb-8">
              {t('whyChooseUs')}
            </h2>
            <div className="grid mobile-grid-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.7, 
                    delay: index * 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    type: "spring",
                    stiffness: 100,
                    damping: 15
                  }}
                  whileHover={{ y: -5 }}
                  className={`text-center mobile-card ${ 
                    isLowEndDevice 
                      ? 'bg-white rounded-xl p-3 md:p-4 shadow-lg' 
                      : 'bg-white/80 backdrop-blur-sm rounded-xl p-3 md:p-4 border border-white/30 shadow-lg hover-lift'
                  }`}
                >
                  <div className="text-xl md:text-2xl lg:text-3xl font-bold text-brand mb-1">{stat.value}</div>
                  <div className="text-xs md:text-sm text-gray-700 leading-tight">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactsPage;