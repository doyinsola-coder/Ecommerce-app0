import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Search, Filter, Grid, List, ShoppingBag, Leaf, Smartphone, Home, Shirt, Book, Gamepad2, Heart, Star } from 'lucide-react';

const CategoriesPage = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const categories = [
    {
      id: 1,
      name: 'Fresh Produce',
      description: 'Organic fruits, vegetables, and herbs',
      icon: Leaf,
      itemCount: 245,
      image: '🥬',
      color: 'from-green-400 to-emerald-600',
      popular: true
    },
    {
      id: 2,
      name: 'Electronics',
      description: 'Latest gadgets and tech accessories',
      icon: Smartphone,
      itemCount: 189,
      image: '📱',
      color: 'from-blue-400 to-cyan-600',
      popular: true
    },
    {
      id: 3,
      name: 'Home & Garden',
      description: 'Furniture, decor, and garden essentials',
      icon: Home,
      itemCount: 167,
      image: '🏠',
      color: 'from-purple-400 to-pink-600',
      popular: false
    },
    {
      id: 4,
      name: 'Fashion',
      description: 'Trendy clothing and accessories',
      icon: Shirt,
      itemCount: 298,
      image: '👕',
      color: 'from-pink-400 to-rose-600',
      popular: true
    },
    {
      id: 5,
      name: 'Books & Media',
      description: 'Books, magazines, and digital content',
      icon: Book,
      itemCount: 156,
      image: '📚',
      color: 'from-amber-400 to-orange-600',
      popular: false
    },
    {
      id: 6,
      name: 'Gaming',
      description: 'Video games and gaming accessories',
      icon: Gamepad2,
      itemCount: 123,
      image: '🎮',
      color: 'from-indigo-400 to-purple-600',
      popular: false
    },
    {
      id: 7,
      name: 'Health & Beauty',
      description: 'Skincare, wellness, and beauty products',
      icon: Heart,
      itemCount: 134,
      image: '💄',
      color: 'from-rose-400 to-pink-600',
      popular: true
    },
    {
      id: 8,
      name: 'Sports & Outdoor',
      description: 'Athletic gear and outdoor equipment',
      icon: ShoppingBag,
      itemCount: 178,
      image: '⚽',
      color: 'from-teal-400 to-cyan-600',
      popular: false
    }
  ];

  const filteredCategories = categories.filter(category => {
    const matchesSearch = category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         category.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || 
                         (selectedFilter === 'popular' && category.popular);
    return matchesSearch && matchesFilter;
  });

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
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-blue-50">
      

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h5 className="text-4xl font-bold text-gray-900 mb-4">
            Shop by Category
          </h5>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover amazing products across all our carefully curated categories
          </p>
        </motion.div>

        {/* Search and Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 mb-8 bg-white p-6 rounded-2xl shadow-lg"
        >
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search categories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
            />
          </div>
          
          <div className="flex items-center space-x-4">
            <select
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
            >
              <option value="all">All Categories</option>
              <option value="popular">Popular Only</option>
            </select>
            
            <div className="flex bg-gray-100 rounded-xl p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'grid' 
                    ? 'bg-white shadow-sm text-emerald-600' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'list' 
                    ? 'bg-white shadow-sm text-emerald-600' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Categories Grid/List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className={
            viewMode === 'grid'
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              : "space-y-4"
          }
        >
          {filteredCategories.map((category) => {
            const IconComponent = category.icon;
            
            return (
              <motion.div
                key={category.id}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`
                  group cursor-pointer transition-all duration-300
                  ${viewMode === 'grid' 
                    ? 'bg-white rounded-2xl shadow-lg hover:shadow-xl overflow-hidden' 
                    : 'bg-white rounded-xl shadow-md hover:shadow-lg p-6 flex items-center space-x-6'
                  }
                `}
              >
                {viewMode === 'grid' ? (
                  <>
                    {/* Grid View */}
                    <div className={`h-32 bg-gradient-to-br ${category.color} flex items-center justify-center relative overflow-hidden`}>
                      <div className="text-4xl mb-2">{category.image}</div>
                      {category.popular && (
                        <div className="absolute top-3 right-3">
                          <div className="bg-white/20 backdrop-blur-sm rounded-full p-1">
                            <Star className="w-4 h-4 text-white fill-current" />
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors">
                          {category.name}
                        </h3>
                        <IconComponent className="w-5 h-5 text-gray-400 group-hover:text-emerald-500 transition-colors" />
                      </div>
                      <p className="text-gray-600 text-sm mb-4">{category.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-emerald-600">
                          {category.itemCount} items
                        </span>
                        <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* List View */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <span className="text-2xl">{category.image}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors">
                          {category.name}
                        </h3>
                        {category.popular && (
                          <Star className="w-4 h-4 text-amber-400 fill-current" />
                        )}
                      </div>
                      <p className="text-gray-600 mb-2">{category.description}</p>
                      <span className="text-sm font-medium text-emerald-600">
                        {category.itemCount} items available
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 flex-shrink-0">
                      <IconComponent className="w-5 h-5 text-gray-400 group-hover:text-emerald-500 transition-colors" />
                      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all" />
                    </div>
                  </>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Empty State */}
        {filteredCategories.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No categories found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </motion.div>
        )}

        {/* Stats Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-2">Ready to start shopping?</h3>
          <p className="mb-6 opacity-90">
            Browse through {categories.reduce((sum, cat) => sum + cat.itemCount, 0)}+ products across {categories.length} categories
          </p>
          <button className="bg-white text-emerald-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors">
            Start Shopping
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default CategoriesPage;