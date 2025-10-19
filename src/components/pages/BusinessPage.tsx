import React from 'react';
import { motion } from 'motion/react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { useApp } from '../context/AppContext';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Factory, Beaker, Sparkles, Shield, CheckCircle, Award, ArrowRight } from 'lucide-react';

const BusinessPage: React.FC = () => {
  const { t } = useApp();

  const services = [
    {
      title: t('deepProcessing'),
      description: t('deepProcessingDesc'),
      image: 'https://images.unsplash.com/photo-1701448149957-b96dbd1926ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxudXQlMjBwcm9jZXNzaW5nJTIwbWFjaGluZXJ5JTIwaW5kdXN0cmlhbCUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NTY2MjQzMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      icon: Factory,
      link: '#processing'
    },
    {
      title: t('nutPasteProduction'),
      description: t('nutPasteProductionDesc'),
      image: 'https://images.unsplash.com/photo-1624684244440-1130c3b65783?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFudXQlMjBidXR0ZXIlMjBwYXN0ZSUyMHByb2R1Y3Rpb258ZW58MXx8fHwxNzU2NjI0MzA1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      icon: Beaker,
      link: '#pastes'
    },
    {
      title: t('drageeProduction'),
      description: t('drageeProductionDesc'),
      image: 'https://images.unsplash.com/photo-1729875749424-84d7bb7d9773?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBjb2F0ZWQlMjBudXRzJTIwZHJhZ2VlJTIwY2FuZHl8ZW58MXx8fHwxNzU2NjI0MzA4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      icon: Sparkles,
      link: '#dragee'
    }
  ];

  const processingProducts = [
    t('peanutFractions'),
    t('cashewHalves'),
    t('hazelnutWhole'),
    t('walnutQuarters'),
    t('pistachioCrumb'),
    t('sunflowerKernels'),
    t('almondFlakes')
  ];

  const pasteTypes = [
    t('peanutPasteClassic'),
    t('hazelnutPaste100'),
    t('cashewPasteDelicate'),
    t('almondPastePremium'),
    t('pistachioPasteExclusive'),
    t('walnutPaste')
  ];

  const drageeProducts = [
    t('nutsInChocolate'),
    t('seedsInGlaze'),
    t('grainsInCoating'),
    t('berriesInChocolate'),
    t('candiedFruitsInGlaze')
  ];

  const certifications = [
    {
      icon: Shield,
      title: t('legalityLicenses'),
      description: t('legalityDesc')
    },
    {
      icon: CheckCircle,
      title: t('transparentSupply'),
      description: t('transparentDesc')
    },
    {
      icon: Award,
      title: t('clientTrust'),
      description: t('clientTrustDesc')
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      <section className="py-20 bg-brand-light h-80 flex items-center">
        <div className="max-w-6xl mx-auto px-4 text-center w-full">
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
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('businessTitle')}
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              {t('businessSubtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  type: "spring",
                  stiffness: 80,
                  damping: 20
                }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover-lift overflow-hidden border-0 shadow-lg flex flex-col">
                  <div className="relative h-48">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4 flex-grow">
                      {service.description}
                    </p>
                    <Button 
                      variant="outline" 
                      className="border-brand text-brand hover:bg-brand hover:text-white w-full mt-auto"
                      onClick={() => document.querySelector(service.link)?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      {t('more')}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="processing" className="py-20 bg-brand-light">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ 
              duration: 1.0, 
              ease: [0.25, 0.46, 0.45, 0.94],
              type: "spring",
              stiffness: 60,
              damping: 25
            }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {t('deepProcessing')}
              </h2>
              <p className="text-gray-700 mb-6">
                {t('modernEquipment')}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {processingProducts.map((product, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.7, 
                      delay: index * 0.1,
                      ease: [0.25, 0.46, 0.45, 0.94],
                      type: "spring",
                      stiffness: 100,
                      damping: 15
                    }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-2"
                  >
                    <CheckCircle className="w-5 h-5 text-brand flex-shrink-0" />
                    <span className="text-gray-700">{product}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ 
              duration: 1.0, 
              ease: [0.25, 0.46, 0.45, 0.94],
              type: "spring",
              stiffness: 60,
              damping: 25
            }}
              viewport={{ once: true }}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1701448149957-b96dbd1926ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxudXQlMjBwcm9jZXNzaW5nJTIwbWFjaGluZXJ5JTIwaW5kdXN0cmlhbCUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NTY2MjQzMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Processing equipment"
                  className="w-full h-96 object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="pastes" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ 
              duration: 1.0, 
              ease: [0.25, 0.46, 0.45, 0.94],
              type: "spring",
              stiffness: 60,
              damping: 25
            }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1624684244440-1130c3b65783?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFudXQlMjBidXR0ZXIlMjBwYXN0ZSUyMHByb2R1Y3Rpb258ZW58MXx8fHwxNzU2NjI0MzA1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Nut paste production"
                  className="w-full h-96 object-cover"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ 
              duration: 1.0, 
              ease: [0.25, 0.46, 0.45, 0.94],
              type: "spring",
              stiffness: 60,
              damping: 25
            }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {t('nutPasteProduction')}
              </h2>
              <p className="text-gray-700 mb-6">
                {t('naturalPastes')}
              </p>
              <div className="space-y-3">
                {pasteTypes.map((paste, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.7, 
                      delay: index * 0.1,
                      ease: [0.25, 0.46, 0.45, 0.94],
                      type: "spring",
                      stiffness: 100,
                      damping: 15
                    }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-2"
                  >
                    <CheckCircle className="w-5 h-5 text-brand flex-shrink-0" />
                    <span className="text-gray-700">{paste}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="dragee" className="py-20 bg-brand-light">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ 
              duration: 1.0, 
              ease: [0.25, 0.46, 0.45, 0.94],
              type: "spring",
              stiffness: 60,
              damping: 25
            }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {t('drageeProduction')}
              </h2>
              <p className="text-gray-700 mb-6">
                {t('qualityChocolate')}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {drageeProducts.map((product, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.7, 
                      delay: index * 0.1,
                      ease: [0.25, 0.46, 0.45, 0.94],
                      type: "spring",
                      stiffness: 100,
                      damping: 15
                    }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-2"
                  >
                    <Sparkles className="w-5 h-5 text-brand flex-shrink-0" />
                    <span className="text-gray-700">{product}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ 
              duration: 1.0, 
              ease: [0.25, 0.46, 0.45, 0.94],
              type: "spring",
              stiffness: 60,
              damping: 25
            }}
              viewport={{ once: true }}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1729875749424-84d7bb7d9773?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBjb2F0ZWQlMjBudXRzJTIwZHJhZ2VlJTIwY2FuZHl8ZW58MXx8fHwxNzU2NjI0MzA4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Dragee products"
                  className="w-full h-96 object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1.0, 
              ease: [0.25, 0.46, 0.45, 0.94],
              type: "spring",
              stiffness: 60,
              damping: 25
            }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t('reliabilityTitle')}
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              {t('reliabilitySubtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  type: "spring",
                  stiffness: 80,
                  damping: 20
                }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover-lift border-0 shadow-lg text-center flex flex-col">
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <div className="w-16 h-16 mx-auto mb-4 bg-brand/10 rounded-full flex items-center justify-center">
                      <cert.icon className="w-8 h-8 text-brand" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {cert.title}
                    </h3>
                    <p className="text-gray-600 flex-grow">
                      {cert.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessPage;