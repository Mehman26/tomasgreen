import React from 'react';
import { AppProvider, useApp } from './components/context/AppContext';
import Header from './components/Header';
import Footer from './components/Footer';
import OptimizedHomePage from './components/pages/OptimizedHomePage';
import AboutPage from './components/pages/AboutPage';
import BusinessPage from './components/pages/BusinessPage';
import PrivateLabelPage from './components/pages/PrivateLabelPage';
import CatalogPage from './components/pages/CatalogPage';
import ContactsPage from './components/pages/ContactsPage';

const AppContent: React.FC = () => {
  const { currentPage, isLowEndDevice, scrollToTop } = useApp();
  
  React.useEffect(() => {
    if (typeof document !== 'undefined') {
      const body = document.body;
      if (isLowEndDevice) {
        body.classList.add('low-end-device');
      } else {
        body.classList.remove('low-end-device');
      }
    }
  }, [isLowEndDevice]);

  React.useEffect(() => {
    document.body.classList.add('scroll-reset');
    document.body.classList.add('navigation-active');
    
    const cleanup = scrollToTop();
    
    const restoreScrollTimer = setTimeout(() => {
      document.body.classList.remove('scroll-reset');
      document.body.classList.remove('navigation-active');
      document.body.classList.add('scroll-ready');
      
      setTimeout(() => {
        document.body.classList.remove('scroll-ready');
      }, 200);
    }, 150);

    return () => {
      clearTimeout(restoreScrollTimer);
      if (cleanup) cleanup();
      document.body.classList.remove('scroll-reset', 'navigation-active', 'scroll-ready');
    };
  }, [currentPage, scrollToTop]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <OptimizedHomePage />;
      case 'about':
        return <AboutPage />;
      case 'business':
        return <BusinessPage />;
      case 'private-label':
        return <PrivateLabelPage />;
      case 'catalog':
        return <CatalogPage />;
      case 'contacts':
        return <ContactsPage />;
      default:
        return <OptimizedHomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-brand-light overflow-x-hidden page-navigation">
      <Header />
      <main className="overflow-x-hidden sm:pt-14" data-scroll-container>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
