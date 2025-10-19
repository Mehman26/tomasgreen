import React, { useState, useRef, useEffect } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useApp } from './context/AppContext';
import { getImageConfig } from './utils/DevicePerformance';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
  priority?: boolean;
  onLoad?: () => void;
  onError?: () => void;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  placeholder,
  priority = false,
  onLoad,
  onError
}) => {
  const { isLowEndDevice } = useApp();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  const imageConfig = getImageConfig(isLowEndDevice);

  useEffect(() => {
    if (priority || !imageConfig.enableLazyLoading) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px'
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority, imageConfig.enableLazyLoading]);

  const getOptimizedUrl = (originalUrl: string) => {
    if (isLowEndDevice && originalUrl.includes('unsplash.com')) {
      const url = new URL(originalUrl);
      url.searchParams.set('q', imageConfig.quality.toString());
      url.searchParams.set('fm', 'webp');
      return url.toString();
    }
    return originalUrl;
  };

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  const placeholderStyle = placeholder ? {
    backgroundImage: `url("data:image/svg+xml;base64,${btoa(placeholder)}")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  } : {};

  return (
    <div 
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
      style={!isInView ? placeholderStyle : {}}
    >
      {!isLoaded && isInView && (
        <div className={`absolute inset-0 bg-gray-200 animate-pulse ${
          imageConfig.enableBlur ? 'backdrop-blur-sm' : ''
        }`} />
      )}

      {hasError && (
        <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
          <div className="text-gray-500 text-center">
            <svg className="w-12 h-12 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
            <p className="text-sm">Не удалось загрузить</p>
          </div>
        </div>
      )}

      {isInView && !hasError && (
        <ImageWithFallback
          src={getOptimizedUrl(src)}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${isLowEndDevice ? '' : 'transform hover:scale-105 transition-transform duration-500 ease-out'}`}
          onLoad={handleLoad}
          onError={handleError}
          loading={priority ? 'eager' : 'lazy'}
        />
      )}

      {!isLowEndDevice && imageConfig.enableBlur && !isLoaded && isInView && (
        <div className="absolute inset-0 bg-gradient-to-br from-brand-light/20 to-brand/10 backdrop-blur-sm" />
      )}
    </div>
  );
};

export default OptimizedImage;