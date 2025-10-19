import React from 'react';
import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import OptimizedImage from './OptimizedImage';
import { useApp } from './context/AppContext';
import { Star, ExternalLink } from 'lucide-react';

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: string;
  originalPrice?: string;
  image: string;
  category: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  isNew?: boolean;
  discount?: number;
  ozonUrl?: string;
  wildberriesUrl?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  description,
  price,
  originalPrice,
  image,
  category,
  rating,
  reviewCount,
  inStock,
  isNew,
  discount,
  ozonUrl = "https://ozon.ru",
  wildberriesUrl = "https://wildberries.ru"
}) => {
  const { isLowEndDevice, deviceInfo, t } = useApp();
  
  const isTouchDevice = deviceInfo?.isMobile || (typeof window !== 'undefined' && window.innerWidth <= 1024);
  const shouldDisableHover = isLowEndDevice || isTouchDevice;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={!shouldDisableHover ? { y: -5 } : undefined}
      transition={{ 
        duration: 0.5, 
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      className={`group h-full ${isLowEndDevice ? 'low-end-device' : ''}`}
    >
      <Card className={`product-card h-full overflow-hidden border-0 shadow-lg ${
        !shouldDisableHover 
          ? 'bg-gradient-to-b from-white to-gray-50/50 hover:shadow-xl hover:bg-gradient-to-b hover:from-white hover:to-brand-light/20' 
          : 'bg-white'
      }`}>
        <div className="relative h-48 md:h-56 overflow-hidden">
          <OptimizedImage
            src={image}
            alt={name}
            className="w-full h-full"
            priority={false}
          />
          
          <div className="absolute top-1 md:top-2 left-1 md:left-2 flex flex-col gap-1 md:gap-1.5">
            {isNew && (
              <Badge className="bg-gradient-to-r from-green-500 to-green-600 text-white font-medium shadow-lg backdrop-blur-sm text-xs">
                🆕 Новинка
              </Badge>
            )}
            {discount && discount > 0 && (
              <Badge className="bg-gradient-to-r from-red-500 to-red-600 text-white font-medium shadow-lg backdrop-blur-sm text-xs">
                🔥 -{discount}%
              </Badge>
            )}
            {!inStock && (
              <Badge variant="outline" className="bg-white/95 text-gray-600 shadow-lg backdrop-blur-sm border-gray-300 text-xs">
                ❌ {t('outOfStock')}
              </Badge>
            )}
          </div>

          <div className="absolute top-1 md:top-2 right-1 md:right-2">
            <Badge variant="secondary" className="bg-white/95 text-gray-700 shadow-lg backdrop-blur-sm border border-white/50 text-xs">
              {category}
            </Badge>
          </div>

          {!shouldDisableHover && (
            <>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"></div>
              
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out transform -translate-x-full group-hover:translate-x-full"></div>
            </>
          )}
        </div>

        <CardContent className="p-3 md:p-4 flex flex-col h-[calc(100%-12rem)] md:h-[calc(100%-14rem)]">
          <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2 line-clamp-2 transition-colors duration-200 ease-out">
            {name}
          </h3>

          <p className="text-gray-600 text-xs md:text-sm mb-2 md:mb-3 line-clamp-2 flex-shrink-0">
            {description}
          </p>

          <div className="flex items-center gap-1 md:gap-2 mb-2 md:mb-3 flex-shrink-0">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3 md:w-3.5 h-3 md:h-3.5 ${
                    i < Math.floor(rating)
                      ? 'text-yellow-400 fill-yellow-400'
                      : 'text-gray-300'
                  } transition-colors duration-200`}
                />
              ))}
            </div>
            <span className="text-xs text-gray-500">
              {rating} ({reviewCount})
            </span>
          </div>

          <div className="flex items-center gap-2 mb-3 md:mb-4 flex-shrink-0">
            <span className="text-lg md:text-xl font-bold text-gray-900 transition-colors duration-200 ease-out">{price}</span>
            {originalPrice && (
              <span className="text-xs md:text-sm text-gray-500 line-through">
                {originalPrice}
              </span>
            )}
          </div>

          <div className="flex-grow"></div>

          <div className="flex gap-1 sm:gap-1.5 md:gap-2 mt-auto">
            <Button
              size="sm"
              className={`flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white border-0 shadow-md transition-all duration-200 ease-out text-xs py-1 sm:py-1.5 md:py-2 px-1.5 sm:px-2 md:px-3 cursor-pointer ${
                !shouldDisableHover ? 'hover:from-blue-700 hover:to-blue-800 hover:shadow-lg' : ''
              }`}
              onClick={() => window.open(ozonUrl, '_blank')}
              disabled={!inStock}
            >
              <span className="font-bold mr-0.5 sm:mr-1 text-xs">OZON</span>
              <ExternalLink className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3" />
            </Button>
            
            <Button
              size="sm"
              className={`flex-1 bg-gradient-to-r from-purple-600 to-purple-700 text-white border-0 shadow-md transition-all duration-200 ease-out text-xs py-1 sm:py-1.5 md:py-2 px-1.5 sm:px-2 md:px-3 font-medium cursor-pointer ${
                !shouldDisableHover ? 'hover:from-purple-700 hover:to-purple-800 hover:shadow-lg' : ''
              }`}
              onClick={() => window.open(wildberriesUrl, '_blank')}
              disabled={!inStock}
            >
              <span className="font-bold mr-0.5 sm:mr-1 text-xs">WB</span>
              <ExternalLink className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3" />
            </Button>
          </div>

          {!inStock && (
            <p className="text-xs text-gray-500 text-center mt-2 bg-gray-100/50 rounded px-2 py-1">
              {t('temporarilyUnavailable')}
            </p>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProductCard;