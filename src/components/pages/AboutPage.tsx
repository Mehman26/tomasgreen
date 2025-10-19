import React from 'react';
import { motion } from 'motion/react';
import { Card, CardContent } from '../ui/card';
import { useApp } from '../context/AppContext';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Shield, Clock, Star, Handshake, Lightbulb } from 'lucide-react';

const AboutPage: React.FC = () => {
  const { t } = useApp();

  const values = [
    {
      icon: Shield,
      title: t('qualityControl'),
      description: 'Строгий контроль качества на каждом этапе производства и поставок'
    },
    {
      icon: Clock,
      title: t('reliability'),
      description: 'Более 20 лет успешной работы и тысячи довольных клиентов'
    },
    {
      icon: Star,
      title: t('exceptionalProducts'),
      description: 'Премиальные орехи, сухофрукты и семена высочайшего качества'
    },
    {
      icon: Handshake,
      title: t('flexibility'),
      description: 'Индивидуальный подход к каждому клиенту и гибкие условия сотрудничества'
    },
    {
      icon: Lightbulb,
      title: t('innovation'),
      description: 'Современные технологии производства и устойчивое развитие'
    }
  ];

  const timeline = [
    {
      year: '1996',
      title: 'Основание компании',
      description: 'Начало деятельности в сфере поставок орехов и сухофруктов',
      image: 'https://images.unsplash.com/photo-1663652851591-e3d9bfb6d8c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxudXRzJTIwYWxtb25kcyUyMHdhbG51dHMlMjBwcmVtaXVtJTIwcXVhbGl0eXxlbnwxfHx8fDE3NTY2MjQyMDV8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      year: '2005',
      title: 'Расширение ассортимента',
      description: 'Увеличение ассортимента и выход на международные рынки',
      image: 'https://images.unsplash.com/photo-1598136453461-d5323483defb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcmllZCUyMGZydWl0cyUyMGRhdGVzJTIwYXByaWNvdHMlMjBwcmVtaXVtfGVufDF8fHx8MTc1NjYyNDIwOHww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      year: '2012',
      title: 'Собственное производство',
      description: 'Запуск собственных производственных мощностей',
      image: 'https://images.unsplash.com/photo-1663841365335-8acab127bf68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBmb29kJTIwcHJvZHVjdGlvbiUyMGZhY2lsaXR5JTIwY2xlYW58ZW58MXx8fHwxNzU2NjI0MjE0fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      year: '2018',
      title: 'Шоу-рум на Фуд Сити',
      description: 'Открытие представительства на крупнейшем продовольственном рынке',
      image: 'https://images.unsplash.com/photo-1726866672851-5b99c837603c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3YXJlaG91c2UlMjBsb2dpc3RpY3MlMjBmYWNpbGl0eXxlbnwxfHx8fDE3NTY2MjQyNTB8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      year: '2025',
      title: 'Лидерство и инновации',
      description: 'Ведущие позиции на маркетплейсах и внедрение новых технологий',
      image: 'https://images.unsplash.com/photo-1742119971773-57e0131095b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBwcm9mZXNzaW9uYWwlMjBtb2Rlcm4lMjBvZmZpY2V8ZW58MXx8fHwxNzU2NjI0MjExfDA&ixlib=rb-4.1.0&q=80&w=1080'
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
              {t('aboutTitle')}
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              {t('aboutSubtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
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
                О компании Tomas Green
              </h2>
              <p className="text-gray-700 mb-4">
                Компания Tomas Green – это надежный партнер в сфере поставок высококачественных орехов, 
                сухофруктов и семян. На протяжении более 20 лет мы обеспечиваем клиентов по всей России 
                и странах СНГ продукцией премиум-класса.
              </p>
              <p className="text-gray-700 mb-4">
                Наше собственное производство оснащено современным оборудованием, что позволяет 
                контролировать качество продукции на каждом этапе. Мы работаем напрямую с проверенными 
                поставщиками сырья и применяем инновационные технологии обработки и упаковки.
              </p>
              <p className="text-gray-700">
                Сегодня Tomas Green является одним из лидеров рынка, обслуживая более 1000 клиентов 
                и активно развивая присутствие на крупнейших маркетплейсах России.
              </p>
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
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1663841365335-8acab127bf68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBmb29kJTIwcHJvZHVjdGlvbiUyMGZhY2lsaXR5JTIwY2xlYW58ZW58MXx8fHwxNzU2NjI0MjE0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Production facility"
                  className="w-full h-96 object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-light">
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
              Наши ценности
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Принципы, которые определяют нашу работу и отношение к клиентам
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
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
                <Card className="h-full hover-lift border-0 shadow-lg bg-white">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-brand/10 rounded-full flex items-center justify-center">
                      <value.icon className="w-8 h-8 text-brand" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              История компании
            </h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto px-4 sm:px-0">
              Путь развития от небольшой компании до лидера рынка
            </p>
          </motion.div>

          <div className="space-y-8 sm:space-y-10 md:space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 1.0, 
                  delay: index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  type: "spring",
                  stiffness: 60,
                  damping: 25
                }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row items-center gap-6 sm:gap-8 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1 text-center lg:text-left">
                  <div className="bg-brand text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold inline-block mb-3 sm:mb-4">
                    {item.year}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 px-4 lg:px-0">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed px-4 lg:px-0">
                    {item.description}
                  </p>
                </div>
                <div className="flex-1 w-full">
                  <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 sm:h-56 md:h-64 object-cover hover-lift"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;