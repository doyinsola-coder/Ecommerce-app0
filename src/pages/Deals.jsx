import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Star, ShoppingCart, Heart, Filter, Search, Tag, Zap, Flame, TrendingUp } from 'lucide-react';

const DealsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [favorites, setFavorites] = useState(new Set());
  const [timeLeft, setTimeLeft] = useState({});

  // Mock deals data
  const deals = [
    {
      id: 1,
      title: "Premium Wireless Headphones",
      originalPrice: 199.99,
      discountedPrice: 99.99,
      discount: 50,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
      category: "electronics",
      rating: 4.8,
      reviews: 1240,
      timeLeft: "2024-06-15T23:59:59",
      badge: "Hot Deal",
      description: "High-quality sound with noise cancellation"
    },
    {
      id: 2,
      title: "Organic Cotton T-Shirt Set",
      originalPrice: 79.99,
      discountedPrice: 39.99,
      discount: 50,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop",
      category: "fashion",
      rating: 4.6,
      reviews: 892,
      timeLeft: "2024-06-16T12:00:00",
      badge: "Limited",
      description: "Sustainable fashion for everyday comfort"
    },
    {
      id: 3,
      title: "Smart Fitness Tracker",
      originalPrice: 149.99,
      discountedPrice: 89.99,
      discount: 40,
      image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&h=300&fit=crop",
      category: "electronics",
      rating: 4.7,
      reviews: 2156,
      timeLeft: "2024-06-14T18:30:00",
      badge: "Flash Sale",
      description: "Track your health with advanced sensors"
    },
    {
      id: 4,
      title: "Artisan Coffee Blend",
      originalPrice: 34.99,
      discountedPrice: 24.99,
      discount: 29,
      image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&h=300&fit=crop",
      category: "food",
      rating: 4.9,
      reviews: 567,
      timeLeft: "2024-06-17T09:00:00",
      badge: "New",
      description: "Premium single-origin coffee beans"
    },
    {
      id: 5,
      title: "Minimalist Desk Lamp",
      originalPrice: 89.99,
      discountedPrice: 59.99,
      discount: 33,
      image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=300&fit=crop",
      category: "home",
      rating: 4.5,
      reviews: 445,
      timeLeft: "2024-06-18T15:45:00",
      badge: "Trending",
      description: "Modern design with adjustable brightness"
    },
    {
      id: 6,
      title: "Yoga Mat Pro",
      originalPrice: 59.99,
      discountedPrice: 29.99,
      discount: 50,
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop",
      category: "sports",
      rating: 4.7,
      reviews: 1089,
      timeLeft: "2024-06-16T20:00:00",
      badge: "Best Seller",
      description: "Non-slip surface for all yoga practices"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Deals', icon: Tag },
    { id: 'electronics', name: 'Electronics', icon: Zap },
    { id: 'fashion', name: 'Fashion', icon: Heart },
    { id: 'home', name: 'Home', icon: Flame },
    { id: 'food', name: 'Food', icon: TrendingUp },
    { id: 'sports', name: 'Sports', icon: Star }
  ];

  // Filter deals based on category and search
  const filteredDeals = deals.filter(deal => {
    const matchesCategory = selectedCategory === 'all' || deal.category === selectedCategory;
    const matchesSearch = deal.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Countdown timer logic
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const newTimeLeft = {};
      
      deals.forEach(deal => {
        const endTime = new Date(deal.timeLeft).getTime();
        const difference = endTime - now;
        
        if (difference > 0) {
          newTimeLeft[deal.id] = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((difference % (1000 * 60)) / 1000)
          };
        }
      });
      
      setTimeLeft(newTimeLeft);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const toggleFavorite = (dealId) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(dealId)) {
        newFavorites.delete(dealId);
      } else {
        newFavorites.add(dealId);
      }
      return newFavorites;
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-6"
            >
              <Flame className="w-4 h-4 mr-2" />
              Limited Time Offers
            </motion.div>
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
              Amazing Deals
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                Up to 50% Off
              </span>
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Discover incredible savings on premium products. Limited quantities available!
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-emerald-50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search deals..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors bg-white/80 backdrop-blur-sm"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <motion.button
                    key={category.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-emerald-500 to-blue-500 text-white shadow-lg'
                        : 'bg-white/80 text-gray-700 hover:bg-white border border-gray-200'
                    }`}
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {category.name}
                  </motion.button>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Deals Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredDeals.map((deal) => (
              <motion.div
                key={deal.id}
                variants={itemVariants}
                layout
                whileHover={{ y: -8 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-white/50"
              >
                {/* Image and Badge */}
                <div className="relative overflow-hidden">
                  <img
                    src={deal.image}
                    alt={deal.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      -{deal.discount}%
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-black/70 text-white px-2 py-1 rounded-full text-xs font-medium">
                      {deal.badge}
                    </span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => toggleFavorite(deal.id)}
                    className="absolute bottom-4 right-4 p-2 bg-white/90 rounded-full shadow-lg"
                  >
                    <Heart
                      className={`w-5 h-5 ${
                        favorites.has(deal.id) ? 'text-red-500 fill-current' : 'text-gray-400'
                      }`}
                    />
                  </motion.button>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{deal.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{deal.description}</p>

                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(deal.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">
                      {deal.rating} ({deal.reviews})
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-emerald-600">
                        ${deal.discountedPrice}
                      </span>
                      <span className="ml-2 text-lg text-gray-400 line-through">
                        ${deal.originalPrice}
                      </span>
                    </div>
                  </div>

                  {/* Countdown Timer */}
                  {timeLeft[deal.id] && (
                    <div className="mb-4 p-3 bg-gradient-to-r from-orange-100 to-red-100 rounded-lg">
                      <div className="flex items-center justify-center mb-2">
                        <Clock className="w-4 h-4 text-orange-600 mr-1" />
                        <span className="text-sm font-medium text-orange-800">Deal ends in:</span>
                      </div>
                      <div className="grid grid-cols-4 gap-2 text-center">
                        {Object.entries(timeLeft[deal.id]).map(([unit, value]) => (
                          <div key={unit} className="bg-white rounded p-1">
                            <div className="text-lg font-bold text-gray-900">{value}</div>
                            <div className="text-xs text-gray-600 capitalize">{unit}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Add to Cart Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-emerald-500 to-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-emerald-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center shadow-lg"
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Add to Cart
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No Results */}
        {filteredDeals.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No deals found</h3>
            <p className="text-gray-600">Try adjusting your search or filters</p>
          </motion.div>
        )}

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 rounded-3xl p-8 sm:p-12 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Never Miss a Deal!</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to know about exclusive offers and flash sales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-emerald-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DealsPage;