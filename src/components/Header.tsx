import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import {
  Globe,
  Menu,
  X,
  Home,
  Info,
  Package,
  Building,
  Tag,
  Contact,
} from "lucide-react";
import { useApp } from "./context/AppContext";

const Header: React.FC = () => {
  const { language, setLanguage, currentPage, setCurrentPage, t, scrollToTop } =
    useApp();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { key: "home", page: "home" as const, icon: Home },
    { key: "about", page: "about" as const, icon: Info },
    { key: "catalog", page: "catalog" as const, icon: Package },
    { key: "business", page: "business" as const, icon: Building },
    { key: "privateLabel", page: "private-label" as const, icon: Tag },
    { key: "contacts", page: "contacts" as const, icon: Contact },
  ];

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const handleNavigation = (page: any) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
    scrollToTop();
  };

  const toggleLanguage = () => {
    setLanguage(language === "ru" ? "en" : "ru");
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 xs:h-16">
            <div
              className="flex-shrink-0 cursor-pointer z-60 relative"
              onClick={() => {
                setCurrentPage("home");
                setIsMobileMenuOpen(false);
                scrollToTop();
              }}
            >
              <img
                src={"/ca32c878b29e63dfb8da39e54a581d086336cc7e.png"}
                alt="Tomas Green"
                className="h-20 xs:h-20 sm:h-20 lg:h-24 w-auto mobile-logo-320"
              />
            </div>

            <nav className="hidden lg:flex items-center space-x-6 lg:space-x-8">
              {navigationItems.slice(1).map((item) => (
                <button
                  key={item.key}
                  onClick={() => handleNavigation(item.page)}
                  className={`text-sm font-medium transition-colors duration-300 ease-out hover:text-brand whitespace-nowrap ${
                    currentPage === item.page ? "text-brand" : "text-gray-700"
                  }`}
                >
                  {t(item.key)}
                </button>
              ))}
            </nav>

            <div className="flex items-center space-x-3 sm:space-x-4">
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-1 text-xs xs:text-sm font-medium text-gray-700 hover:text-brand transition-colors z-60 relative mobile-lang-switch-320"
              >
                <Globe className="w-3 xs:w-4 h-3 xs:h-4" />
                <span className="text-xs">{language.toUpperCase()}</span>
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="block lg:hidden text-gray-700 hover:text-brand transition-colors z-60 relative p-1.5 xs:p-2 touch-target mobile-menu-btn-320"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 xs:w-6 h-5 xs:h-6" />
                ) : (
                  <Menu className="w-5 xs:w-6 h-5 xs:h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed top-14 xs:top-16 left-0 right-0 bottom-0 z-40 block lg:hidden mobile-menu-backdrop animate-in slide-in-from-top-2 duration-300">
          <div className="absolute inset-0 bg-brand-light/98 backdrop-blur-lg" />

          <div className="relative h-full w-full flex flex-col animate-in slide-in-from-right-4 duration-300 delay-100">
            <nav className="flex-1 py-4 xs:py-6">
              <div className="space-y-2 xs:space-y-3 px-4 xs:px-6 mobile-nav-container">
                {navigationItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = currentPage === item.page;

                  return (
                    <button
                      key={item.key}
                      onClick={() => handleNavigation(item.page)}
                      className={`w-full flex items-center justify-start gap-3 xs:gap-4 px-3 xs:px-4 py-3 xs:py-4 rounded-xl xs:rounded-2xl text-left transition-all duration-400 ease-out mobile-nav-item mobile-nav-adaptive ${
                        isActive
                          ? "bg-brand text-white shadow-lg transform scale-[1.02]"
                          : "text-brand-dark hover:text-brand hover:bg-brand/10 hover:transform hover:scale-[1.01]"
                      }`}
                    >
                      <div
                        className={`flex-shrink-0 p-2 xs:p-3 rounded-lg xs:rounded-xl transition-all duration-300 ease-out mobile-nav-icon ${
                          isActive ? "bg-white/20" : "bg-brand/10"
                        }`}
                      >
                        <Icon className="w-4 h-4 xs:w-5 xs:h-5" />
                      </div>
                      <span className="flex-1 text-base xs:text-lg font-medium mobile-nav-text-adaptive">
                        {t(item.key)}
                      </span>
                    </button>
                  );
                })}
              </div>
            </nav>

            <div className="px-4 xs:px-6 pb-4 xs:pb-6">
              <div className="pt-3 xs:pt-4 border-t border-brand/20">
                <p className="text-brand-dark/80 text-xs xs:text-sm font-medium">
                  Premium nuts & dried fruits
                </p>
                <p className="text-brand/60 text-xs mt-1">
                  20+ {language === "ru" ? "лет опыта" : "years of experience"}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
