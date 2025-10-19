import React, { useState, useMemo } from "react";
import { motion } from "motion/react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Checkbox } from "../ui/checkbox";
import { useApp } from "../context/AppContext";
import ProductCard from "../ProductCard";
import { Grid, List, Package, Search } from "lucide-react";

interface Product {
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

interface FilterState {
  search: string;
  category: string;
  priceRange: string;
  sortBy: string;
  inStock: boolean;
  isNew: boolean;
}

const CatalogPage: React.FC = () => {
  const { t, isLowEndDevice } = useApp();

  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [filters, setFilters] = useState<FilterState>({
    search: "",
    category: "all",
    priceRange: "all",
    sortBy: "popular",
    inStock: false,
    isNew: false,
  });

  const allProducts: Product[] = [
    {
      id: "1",
      name: "Фисташки жареные соленые 1 кг",
      description: "Tomas Green Фисташки орехи жареные солёные 1 кг",
      price: "1517 ₽",
      image: "/image-01.jpg",
      category: "nuts",
      rating: 4.8,
      reviewCount: 22235,
      inStock: true,
      isNew: false,
      ozonUrl: "https://ozon.ru/t/OMnyezH",
      wildberriesUrl:
        "https://www.wildberries.ru/catalog/50252105/detail.aspx?size=95706493",
    },
    {
      id: "2",
      name: "Фисташки сырые без соли 1 кг",
      description: "Tomas Green Фисташки орехи сырые без соли 1 кг.",
      price: "671 ₽",
      image: "/image-02.jpg",
      category: "nuts",
      rating: 4.8,
      reviewCount: 22236,
      inStock: true,
      ozonUrl: "https://ozon.ru/t/jhi70YD",
      wildberriesUrl:
        "https://www.wildberries.ru/catalog/193695366/detail.aspx?size=315500774",
    },
    {
      id: "3",
      name: "Ядро фисташки сырые очищенные 400 г",
      description:
        "Tomas Green Ядро фисташки сырые без соли очищенные не жареные 400 г",
      price: "650 ₽",
      image: "/image-03.jpg",
      category: "dried-fruits",
      rating: 4.9,
      reviewCount: 234,
      inStock: true,
      ozonUrl: "https://ozon.ru/t/pmUHqkP",
      wildberriesUrl:
        "https://www.wildberries.ru/catalog/202446897/detail.aspx?size=326476067",
    },
    {
      id: "4",
      name: "Кешью сырой половинка 1 кг",
      description:
        "Tomas Green Кешью сырой сушеный, веганские 1 кг, орехи крупные",
      price: "1 403 ₽",
      image: "/image-04.jpg",
      category: "seeds",
      rating: 4.8,
      reviewCount: 1569,
      inStock: true,
      ozonUrl: "https://ozon.ru/t/pmUHyDU",
      wildberriesUrl:
        "https://www.wildberries.ru/catalog/90319859/detail.aspx?size=145459063",
    },
    {
      id: "5",
      name: "Кешью сырой 500 г",
      description: "Tomas Green Кешью сырой сушеный, веганские орехи 500 г",
      price: "1 320 ₽",
      image: "/image-05.jpg",
      category: "pastes",
      rating: 4.9,
      reviewCount: 1174,
      inStock: true,
      isNew: false,
      ozonUrl: "https://ozon.ru/t/9wEoi2l",
      wildberriesUrl:
        "https://www.wildberries.ru/catalog/95604349/detail.aspx?size=152194701",
    },
    {
      id: "6",
      name: "Арахис жареный соленый 1 кг",
      description: "Tomas Green Арахис жареный солёный 1кг, орехи.",
      price: "1 517 ₽",
      image: "/image-06.jpg",
      category: "dragees",
      rating: 4.8,
      reviewCount: 22236,
      inStock: true,
      isNew: false,
      ozonUrl: "https://ozon.ru/t/jhi7ENI",
      wildberriesUrl:
        "https://www.wildberries.ru/catalog/160485737/detail.aspx?size=266786066",
    },
    {
      id: "7",
      name: "Tomas Green Тыквенные семечки очищенные 500 г",
      description: "Tomas Green Тыквенные семечки очищенные 500 г",
      price: "409 ₽",
      image: "/image-07.jpg",
      category: "dragees",
      rating: 4.8,
      reviewCount: 2082,
      inStock: true,
      isNew: false,
      ozonUrl: "https://ozon.ru/t/5OyDtez",
      wildberriesUrl:
        "https://www.wildberries.ru/catalog/220682888/detail.aspx?size=350727580",
    },
    {
      id: "8",
      name: "Tomas Green Арахис жареный солёный 2 кг, орехи.",
      description: "Tomas Green Арахис жареный солёный 2 кг, орехи.",
      price: "675 ₽",
      image: "/image-08.jpg",
      category: "dragees",
      rating: 4.4,
      reviewCount: 1639,
      inStock: true,
      isNew: false,
      ozonUrl: "https://ozon.ru/t/nKj6fTu",
      wildberriesUrl:
        "https://www.wildberries.ru/catalog/202853693/detail.aspx?size=326977242",
    },
    {
      id: "9",
      name: "Tomas Green Грецкий орех очищенный 500 г",
      description: "Tomas Green Грецкий орех очищенный 500 г",
      price: "572 ₽",
      image: "/image-09.jpg",
      category: "dragees",
      rating: 4.8,
      reviewCount: 839,
      inStock: true,
      isNew: false,
      ozonUrl: "https://ozon.ru/t/EcFIV6X",
      wildberriesUrl:
        "https://www.wildberries.ru/catalog/216389100/detail.aspx?size=344964043",
    },
    {
      id: "10",
      name: "Tomas Green Кешью сырой сушеный, веганские 1 кг, орехи крупные",
      description:
        "Tomas Green Кешью сырой сушеный, веганские 1 кг, орехи крупные",
      price: "990 ₽",
      image: "/image-10.jpg",
      category: "dragees",
      rating: 4.8,
      reviewCount: 2345,
      inStock: true,
      isNew: false,
      ozonUrl: "https://ozon.ru/t/9wEos2C",
      wildberriesUrl:
        "https://www.wildberries.ru/catalog/90319859/detail.aspx?size=145459063",
    },
  ];

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = allProducts;

    // Search filter
    if (filters.search) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(filters.search.toLowerCase()) ||
          product.description
            .toLowerCase()
            .includes(filters.search.toLowerCase())
      );
    }

    // Category filter
    if (filters.category !== "all") {
      filtered = filtered.filter(
        (product) => product.category === filters.category
      );
    }

    // In stock filter
    if (filters.inStock) {
      filtered = filtered.filter((product) => product.inStock);
    }

    // New products filter
    if (filters.isNew) {
      filtered = filtered.filter((product) => product.isNew);
    }

    // Sort products
    filtered.sort((a, b) => {
      switch (filters.sortBy) {
        case "priceAsc":
          return (
            parseInt(a.price.replace(/\D/g, "")) -
            parseInt(b.price.replace(/\D/g, ""))
          );
        case "priceDesc":
          return (
            parseInt(b.price.replace(/\D/g, "")) -
            parseInt(a.price.replace(/\D/g, ""))
          );
        case "rating":
          return b.rating - a.rating;
        case "newest":
          return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
        default:
          return b.rating - a.rating; // Default to rating
      }
    });

    return filtered;
  }, [filters, allProducts]);

  const resetFilters = () => {
    setFilters({
      search: "",
      category: "all",
      priceRange: "all",
      sortBy: "popular",
      inStock: false,
      isNew: false,
    });
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-16 bg-brand-light">
        <div className="max-w-6xl mx-auto px-4 text-center">
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
              {t("catalogTitle")}
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              {t("catalogSubtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              ease: [0.25, 0.46, 0.45, 0.94],
              type: "spring",
              stiffness: 80,
              damping: 20
            }}
            className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-6"
          >
            {/* Search */}
            <div className="relative md:col-span-2">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder={t("searchProducts")}
                value={filters.search}
                onChange={(e) =>
                  setFilters({ ...filters, search: e.target.value })
                }
                className="pl-10"
              />
            </div>

            {/* Category */}
            <Select
              value={filters.category}
              onValueChange={(value) =>
                setFilters({ ...filters, category: value })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder={t("category")} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{t("allCategories")}</SelectItem>
                <SelectItem value="nuts">{t("nuts")}</SelectItem>
                <SelectItem value="dried-fruits">{t("driedFruits")}</SelectItem>
                <SelectItem value="seeds">{t("seeds")}</SelectItem>
                <SelectItem value="pastes">{t("pastes")}</SelectItem>
                <SelectItem value="dragees">{t("drageeProducts")}</SelectItem>
              </SelectContent>
            </Select>

            {/* Sort */}
            <Select
              value={filters.sortBy}
              onValueChange={(value) =>
                setFilters({ ...filters, sortBy: value })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder={t("sorting")} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">{t("byPopularity")}</SelectItem>
                <SelectItem value="priceAsc">{t("priceAsc")}</SelectItem>
                <SelectItem value="priceDesc">{t("priceDesc")}</SelectItem>
                <SelectItem value="rating">{t("byRating")}</SelectItem>
                <SelectItem value="newest">{t("newestFirst")}</SelectItem>
              </SelectContent>
            </Select>

            {/* View Mode */}
            <div className="flex items-center border rounded-lg">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className="flex-1"
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("list")}
                className="flex-1"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>

            {/* Reset */}
            <Button variant="outline" onClick={resetFilters}>
              {t("reset")}
            </Button>
          </motion.div>

          {/* Filter Checkboxes */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex gap-6"
          >
            <div className="flex items-center space-x-2">
              <Checkbox
                id="inStock"
                checked={filters.inStock}
                onCheckedChange={(checked) =>
                  setFilters({ ...filters, inStock: !!checked })
                }
              />
              <label htmlFor="inStock" className="text-sm font-medium">
                {t("inStockOnly")}
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="isNew"
                checked={filters.isNew}
                onCheckedChange={(checked) =>
                  setFilters({ ...filters, isNew: !!checked })
                }
              />
              <label htmlFor="isNew" className="text-sm font-medium">
                {t("newProducts")}
              </label>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Results Header */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 0.8, 
              ease: [0.25, 0.46, 0.45, 0.94],
              type: "spring",
              stiffness: 80,
              damping: 20
            }}
            className="flex justify-between items-center mb-8"
          >
            <p className="text-gray-700">
              {filteredProducts.length} {t("productsFound")}
            </p>
          </motion.div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div
              className={`grid gap-6 ${
                viewMode === "grid"
                  ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                  : "grid-cols-1"
              }`}
            >
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  description={product.description}
                  price={product.price}
                  originalPrice={product.originalPrice}
                  image={product.image}
                  category={product.category}
                  rating={product.rating}
                  reviewCount={product.reviewCount}
                  inStock={product.inStock}
                  isNew={product.isNew}
                  discount={product.discount}
                  ozonUrl={product.ozonUrl}
                  wildberriesUrl={product.wildberriesUrl}
                />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <Package className="mx-auto h-16 w-16 text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {t("noProductsFound")}
              </h3>
              <p className="text-gray-500 mb-6">{t("noProductsMessage")}</p>
              <Button onClick={resetFilters} variant="outline">
                {t("reset")} {t("filtersAndSearch")}
              </Button>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default CatalogPage;
