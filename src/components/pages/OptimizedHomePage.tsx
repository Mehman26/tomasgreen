import React from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { useApp } from "../context/AppContext";
import { ImageWithFallback } from "../figma/ImageWithFallback";

import {
  ArrowRight,
  CheckCircle,
  Users,
  Award,
  Sparkles,
  Leaf,
  Package,
} from "lucide-react";

const OptimizedHomePage: React.FC = () => {
  const { setCurrentPage, t } = useApp();

  const aboutBlocks = [
    {
      title: t("ourTeam"),
      subtitle: t("teamDescription"),
      image:
        "https://images.unsplash.com/photo-1742119971773-57e0131095b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBwcm9mZXNzaW9uYWwlMjBtb2Rlcm4lMjBvZmZpY2V8ZW58MXx8fHwxNzU2NjI0MjExfDA&ixlib=rb-4.1.0&q=80&w=1080",
      icon: Users,
    },
    {
      title: t("qualityRaw"),
      subtitle: t("qualityDescription"),
      image:
        "https://images.unsplash.com/photo-1663841365335-8acab127bf68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBmb29kJTIwcHJvZHVjdGlvbiUyMGZhY2lsaXR5JTIwY2xlYW58ZW58MXx8fHwxNzU2NjI0MjE0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      icon: Sparkles,
    },
    {
      title: t("partnership"),
      subtitle: t("partnershipDescription"),
      image:
        "https://images.unsplash.com/photo-1663652851591-e3d9bfb6d8c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxudXRzJTIwYWxtb25kcyUyMHdhbG51dHMlMjBwcmVtaXVtJTIwcXVhbGl0eXxlbnwxfHx8fDE3NTY2MjQyMDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      icon: CheckCircle,
    },
    {
      title: t("values"),
      subtitle: t("valuesDescription"),
      image:
        "https://images.unsplash.com/photo-1598136453461-d5323483defb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcmllZCUyMGZydWl0cyUyMGRhdGVzJTIwYXByaWNvdHMlMjBwcmVtaXVtfGVufDF8fHx8MTc1NjYyNDIwOHww&ixlib=rb-4.1.0&q=80&w=1080",
      icon: Award,
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <video
            className="video-background block"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source src="/bg.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/30 via-black/20 to-brand-dark/40 z-10"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(144,126,90,0.15)_0%,transparent_70%)] z-10"></div>
        </div>

        <div className="relative z-20 w-full max-w-6xl mx-auto mt-100 mb-10 text-center">
          <div className="mb-6 sm:mb-8" style={{ marginTop: '80px' }}>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-white leading-tight px-2"
              style={{
                textShadow:
                  "2px 2px 8px rgba(0,0,0,0.8), 0 0 16px rgba(0,0,0,0.6)",
              }}
            >
              {t("heroTitle")}
            </h1>
          </div>

          <div className="mb-8 sm:mb-10 md:mb-12">
            <p
              className="text-lg sm:text-xl md:text-2xl text-white max-w-4xl mx-auto leading-relaxed px-2"
              style={{
                textShadow:
                  "1px 1px 4px rgba(0,0,0,0.7), 0 0 8px rgba(0,0,0,0.5)",
              }}
            >
              {t("heroSubtitle")}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-14 md:mb-16 px-2">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-brand hover:bg-brand-dark text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover-lift transition-all duration-300 min-h-[48px] text-base sm:text-lg"
              onClick={() => setCurrentPage("catalog")}
            >
              <Package className="mr-2 sm:mr-3 w-4 h-4 sm:w-5 sm:h-5" />
              {t("learnMore")}
              <ArrowRight className="ml-2 sm:ml-3 w-4 h-4 sm:w-5 sm:h-5" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-2 border-brand text-brand hover:bg-brand hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover-lift transition-all duration-300 min-h-[48px] text-base sm:text-lg"
              onClick={() => setCurrentPage("business")}
            >
              <Users className="mr-2 sm:mr-3 w-4 h-4 sm:w-5 sm:h-5" />
              {t("homeBusinessButton")}
              <ArrowRight className="ml-2 sm:ml-3 w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-5xl mx-auto px-2">
            {[
              { value: "20+", label: t("yearsExperience"), icon: Award },
              { value: "500+", label: t("products"), icon: Package },
              { value: "50+", label: t("countries"), icon: Users },
              { value: "100%", label: t("quality"), icon: CheckCircle },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-center p-4 sm:p-5 md:p-6 rounded-xl bg-white/80 backdrop-blur-sm shadow-lg border border-gray-100 hover-lift transition-all duration-300">
                  <stat.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-brand mx-auto mb-2 sm:mb-3" />
                  <div className="text-2xl sm:text-3xl font-bold text-brand mb-1 sm:mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm sm:text-base text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-2">
              {t("ourProducts")}
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
              {t("ourProductsSubtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12">
            {[
              {
                title: t("premiumNuts"),
                description: t("premiumNutsDesc"),
                image:
                  "https://images.unsplash.com/photo-1663652851591-e3d9bfb6d8c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxudXRzJTIwYWxtb25kcyUyMHdhbG51dHMlMjBwcmVtaXVtJTIwcXVhbGl0eXxlbnwxfHx8fDE3NTY2MjQyMDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
                price: `${t("from")} 1200₽${t("perKg")}`,
                badge: t("topBadge"),
              },
              {
                title: t("driedFruitsTitle"),
                description: t("driedFruitsDesc"),
                image:
                  "https://images.unsplash.com/photo-1598136453461-d5323483defb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcmllZCUyMGZydWl0cyUyMGRhdGVzJTIwYXByaWNvdHMlMjBwcmVtaXVtfGVufDF8fHx8MTc1NjYyNDIwOHww&ixlib=rb-4.1.0&q=80&w=1080",
                price: `${t("from")} 800₽${t("perKg")}`,
                badge: t("ecoBadge"),
              },
              {
                title: t("seedsAndGrains"),
                description: t("seedsAndGrainsDesc"),
                image:
                  "https://images.unsplash.com/photo-1649255613648-b10b8a4b1a5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWVkcyUyMHN1bmZsb3dlciUyMHB1bXBraW4lMjBoZWFsdGh5fGVufDF8fHx8MTc1NjYyNTI3MHww&ixlib=rb-4.1.0&q=80&w=1080",
                price: `${t("from")} 600₽${t("perKg")}`,
                badge: t("newBadge"),
              },
            ].map((product, index) => (
              <div key={index}>
                <Card className="h-full overflow-hidden shadow-lg hover-lift transition-all duration-300 mobile-card">
                  <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                    <ImageWithFallback
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                      <span className="bg-brand text-white px-2 sm:px-3 py-1 rounded-full text-sm sm:text-base font-medium">
                        {product.badge}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-4 sm:p-5 md:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                      {product.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                      {product.description}
                    </p>
                    <div className="text-lg sm:text-xl font-bold text-brand">
                      {product.price}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <div className="text-center px-2">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-brand hover:bg-brand-dark text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover-lift transition-all duration-300 min-h-[48px] text-base sm:text-lg"
              onClick={() => setCurrentPage("catalog")}
            >
              <Leaf className="mr-2 sm:mr-3 w-4 h-4 sm:w-5 sm:h-5" />
              {t("viewCatalog")}
              <ArrowRight className="ml-2 sm:ml-3 w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-brand-light">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-2">
              {t("growthTitle")}
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2">
              {t("growthSubtitle")}
            </p>
            <Button
              size="lg"
              className="w-full sm:w-auto bg-brand hover:bg-brand-dark text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover-lift transition-all duration-300 min-h-[48px] text-base sm:text-lg"
              onClick={() => setCurrentPage("business")}
            >
              <Users className="mr-2 sm:mr-3 w-4 h-4 sm:w-5 sm:h-5" />
              {t("startCooperation")}
              <ArrowRight className="ml-2 sm:ml-3 w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-2">
              {t("aboutTitleShort")}
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed px-2">
              {t("aboutSubtitleShort")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12">
            {aboutBlocks.map((block, index) => (
              <div key={index}>
                <Card className="h-full overflow-hidden shadow-lg hover-lift transition-all duration-300 mobile-card">
                  <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                    <ImageWithFallback
                      src={block.image}
                      alt={block.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <div className="bg-white/90 backdrop-blur-sm p-2 sm:p-3 rounded-full">
                        <block.icon className="w-5 h-5 sm:w-6 sm:h-6 text-brand" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-4 sm:p-5 md:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                      {block.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {block.subtitle}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <div className="text-center px-2">
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-brand text-brand hover:bg-brand hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover-lift transition-all duration-300 min-h-[48px] text-base sm:text-lg"
              onClick={() => setCurrentPage("about")}
            >
              <Award className="mr-2 sm:mr-3 w-4 h-4 sm:w-5 sm:h-5" />
              {t("more")}
              <ArrowRight className="ml-2 sm:ml-3 w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OptimizedHomePage;
