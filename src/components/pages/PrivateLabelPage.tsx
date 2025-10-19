import React from 'react';
import { motion } from 'motion/react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { useApp } from '../context/AppContext';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Lightbulb, Factory, Package, Truck, Camera, ArrowRight, CheckCircle } from 'lucide-react';

const PrivateLabelPage: React.FC = () => {
  const { t } = useApp();

  const mainServices = [
    {
      title: t('deepProcessingFull'),
      description: t('deepProcessingFullDesc'),
      image: 'https://images.unsplash.com/photo-1701448149957-b96dbd1926ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxudXQlMjBwcm9jZXNzaW5nJTIwbWFjaGluZXJ5JTIwaW5kdXN0cmlhbCUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NTY2MjQzMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      icon: Factory
    },
    {
      title: t('nutChocolatePastes'),
      description: t('nutChocolatePastesDesc'),
      image: 'https://images.unsplash.com/photo-1624684244440-1130c3b65783?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFudXQlMjBidXR0ZXIlMjBwYXN0ZSUyMHByb2R1Y3Rpb258ZW58MXx8fHwxNzU2NjI0MzA1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      icon: Lightbulb
    },
    {
      title: t('packagingServices'),
      description: t('packagingServicesDesc'),
      image: 'https://images.unsplash.com/photo-1668775589938-58517ad578b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwcGFja2FnaW5nJTIwZGVzaWduJTIwYnJhbmRpbmd8ZW58MXx8fHwxNzU2NjI0MzY2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      icon: Package
    }
  ];

  const processSteps = [
    {
      title: t('individualDevelopment'),
      description: t('individualDevelopmentDesc'),
      image: 'https://images.unsplash.com/photo-1663652851591-e3d9bfb6d8c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxudXRzJTIwYWxtb25kcyUyMHdhbG51dHMlMjBwcmVtaXVtJTIwcXVhbGl0eXxlbnwxfHx8fDE3NTY2MjQyMDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      icon: Lightbulb,
      features: [
        t('premiumIngredients'),
        t('uniqueRecipe'),
        t('packagingDesignCreation'),
        t('technicalPrototyping')
      ]
    },
    {
      title: t('productionQualityControl'),
      description: t('productionQualityControlDesc'),
      image: 'https://images.unsplash.com/photo-1663841365335-8acab127bf68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBmb29kJTIwcHJvZHVjdGlvbiUyMGZhY2lsaXR5JTIwY2xlYW58ZW58MXx8fHwxNzU2NjI0MjE0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      icon: Factory,
      features: [
        t('modernEquipment'),
        t('qualityControlStages'),
        t('standardsCompliance'),
        t('flexibleVolumes')
      ]
    },
    {
      title: t('logisticsDelivery'),
      description: t('logisticsDeliveryDesc'),
      image: 'https://images.unsplash.com/photo-1726866672851-5b99c837603c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3YXJlaG91c2UlMjBsb2dpc3RpY3MlMjBmYWNpbGl0eXxlbnwxfHx8fDE3NTY2MjQyNTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      icon: Truck,
      features: [
        t('ownWarehouse'),
        t('russiaDelivery'),
        t('marketplacePlacement'),
        t('supplySupport')
      ]
    },
    {
      title: t('marketingSupport'),
      description: t('marketingSupportDesc'),
      image: 'https://images.unsplash.com/photo-1618862310317-3981e2ec1016?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJrZXRpbmclMjBwaG90b2dyYXBoeSUyMGZvb2QlMjBzdHlsaW5nfGVufDF8fHx8MTc1NjYyNDM2OXww&ixlib=rb-4.1.0&q=80&w=1080',
      icon: Camera,
      features: [
        t('professionalPhotography'),
        t('videoContent'),
        t('promoMaterials'),
        t('promotionConsulting')
      ]
    }
  ];

  const advantages = [
    t('fullProductionCycle'),
    t('flexibleProductionVolumes'),
    t('certifiedProduction'),
    t('ownLaboratory'),
    t('retailerExperience'),
    t('fullStageSupport')
  ];

  return (
    <div className="min-h-screen pt-16">
      <section className="py-12 sm:py-16 md:py-20 bg-brand-light min-h-[300px] sm:min-h-[350px] md:min-h-[400px] flex items-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
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
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4 sm:px-0">
              {t('privateLabelHeroTitle')}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-6 sm:mb-8 px-4 sm:px-0 leading-relaxed">
              {t('privateLabelHeroSubtitle')}
            </p>
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-brand hover:bg-brand-dark text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover-lift text-base sm:text-lg min-h-[48px]"
            >
              {t('discussBrand')}
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-10 sm:mb-12 md:mb-16"
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 px-4 sm:px-0">
              {t('mainDirections')}
            </h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto px-4 sm:px-0 leading-relaxed">
              {t('mainDirectionsDesc')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {mainServices.map((service, index) => (
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
                <Card className="h-full hover-lift overflow-hidden border-0 shadow-lg">
                  <div className="relative h-40 sm:h-48">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                      <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                  </div>
                  <CardContent className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-brand-light">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-10 sm:mb-12 md:mb-16"
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 px-4 sm:px-0">
              {t('processCreationTitle')}
            </h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto px-4 sm:px-0 leading-relaxed">
              {t('processCreationDesc')}
            </p>
          </motion.div>

          <div className="space-y-10 sm:space-y-12 md:space-y-16">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row items-center gap-8 sm:gap-10 md:gap-12 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1 w-full text-center lg:text-left">
                  <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start mb-4 sm:mb-6 gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand rounded-full flex items-center justify-center">
                      <step.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="bg-brand text-white px-3 py-1 rounded-full text-xs sm:text-sm font-bold">
                      {t('stage')} {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 px-4 lg:px-0">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 px-4 lg:px-0 leading-relaxed">
                    {step.description}
                  </p>
                  <div className="space-y-2 sm:space-y-3 px-4 lg:px-0">
                    {step.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-2 sm:space-x-3 text-left">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-brand flex-shrink-0 mt-0.5" />
                        <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex-1 w-full">
                  <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-xl">
                    <ImageWithFallback
                      src={step.image}
                      alt={step.title}
                      className="w-full h-56 sm:h-64 md:h-80 object-cover hover-lift"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-10 sm:mb-12 md:mb-16"
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 px-4 sm:px-0">
              {t('advantagesTitle')}
            </h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto px-4 sm:px-0 leading-relaxed">
              {t('advantagesDesc')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
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
                className="flex items-start space-x-3 p-4 sm:p-5 bg-brand-light/50 rounded-lg hover:bg-brand-light/70 transition-colors duration-300"
              >
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-brand flex-shrink-0 mt-0.5 sm:mt-1" />
                <span className="text-sm sm:text-base text-gray-700 font-medium leading-relaxed">{advantage}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-brand text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 px-4 sm:px-0">
              {t('readyCreateBrand')}
            </h2>
            <p className="text-base sm:text-lg mb-6 sm:mb-8 opacity-90 px-4 sm:px-0 leading-relaxed">
              {t('readyCreateBrandDesc')}
            </p>
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-white text-brand hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover-lift text-base sm:text-lg min-h-[48px]"
            >
              {t('discussBrand')}
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PrivateLabelPage;