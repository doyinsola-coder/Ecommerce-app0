import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Eye, 
  EyeOff, 
  Mail, 
  Lock, 
  ShoppingBag,
  Gift,
  Star,
  ArrowRight,
  AlertCircle
} from 'lucide-react';

const SignInPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Sign in submitted:', formData);
      setIsLoading(false);
      // Handle sign in logic here
    }, 2000);
  };

  const benefits = [
    {
      icon: ShoppingBag,
      title: 'Faster Checkout',
      description: 'Save your payment methods and addresses for quick purchases'
    },
    {
      icon: Gift,
      title: 'Exclusive Offers',
      description: 'Get access to member-only deals and early access to sales'
    },
    {
      icon: Star,
      title: 'Personalized Experience',
      description: 'Receive product recommendations tailored just for you'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-blue-50 flex items-center justify-center p-4">
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side - Branding & Benefits */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="hidden lg:block space-y-8"
        >
          <div>
            <h1 className="text-6xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent mb-6">
              FreshFinds
            </h1>
            <p className="text-2xl text-gray-600 leading-relaxed mb-8">
              Welcome back! Sign in to continue your shopping journey
            </p>
          </div>
          
          <div className="space-y-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-14 h-14 bg-gradient-to-r from-emerald-400 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
          >
            <div className="grid grid-cols-2 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                  50K+
                </div>
                <div className="text-sm text-gray-600 mt-1">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                  4.9★
                </div>
                <div className="text-sm text-gray-600 mt-1">Average Rating</div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side - Sign In Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 max-w-md mx-auto lg:max-w-none"
        >
          {/* Mobile Header */}
          <div className="lg:hidden text-center mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent mb-2">
              FreshFinds
            </h1>
            <p className="text-gray-600">Welcome back!</p>
          </div>

          {/* Form Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              Sign In
            </h2>
            <p className="text-gray-600 text-lg">
              Access your account and continue shopping
            </p>
          </div>

          {/* Social Login */}
          <div className="space-y-4 mb-8">
            <button className="w-full flex items-center justify-center space-x-3 py-4 px-6 border border-gray-200 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 group">
              <div className="w-6 h-6 text-red-500 font-bold text-lg">G</div>
              <span className="font-medium text-gray-700 group-hover:text-gray-900">Continue with Google</span>
            </button>
            
            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center space-x-2 py-4 px-4 border border-gray-200 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 group">
                <div className="w-5 h-5 text-blue-600 font-bold">f</div>
                <span className="font-medium text-gray-700 group-hover:text-gray-900">Facebook</span>
              </button>
              <button className="flex items-center justify-center space-x-2 py-4 px-4 border border-gray-200 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 group">
                <div className="w-5 h-5 text-gray-900 font-bold">🍎</div>
                <span className="font-medium text-gray-700 group-hover:text-gray-900">Apple</span>
              </button>
            </div>
            
            <div className="flex items-center my-8">
              <div className="flex-1 border-t border-gray-200"></div>
              <span className="px-6 text-sm text-gray-500 bg-white">or sign in with email</span>
              <div className="flex-1 border-t border-gray-200"></div>
            </div>
          </div>

          {/* Sign In Form */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full pl-12 pr-4 py-4 border rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all text-lg ${
                    errors.email ? 'border-red-500 bg-red-50' : 'border-gray-200 hover:border-gray-300'
                  }`}
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <AlertCircle className="absolute right-4 top-1/2 transform -translate-y-1/2 text-red-500 w-5 h-5" />
                )}
              </div>
              {errors.email && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-sm mt-2 flex items-center space-x-1"
                >
                  <AlertCircle className="w-4 h-4" />
                  <span>{errors.email}</span>
                </motion.p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className={`w-full pl-12 pr-12 py-4 border rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all text-lg ${
                    errors.password ? 'border-red-500 bg-red-50' : 'border-gray-200 hover:border-gray-300'
                  }`}
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {errors.password && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-sm mt-2 flex items-center space-x-1"
                >
                  <AlertCircle className="w-4 h-4" />
                  <span>{errors.password}</span>
                </motion.p>
              )}
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500 focus:ring-2"
                />
                <span className="text-sm text-gray-700">Remember me</span>
              </label>
              
              <button className="text-sm text-emerald-600 hover:text-emerald-700 font-medium transition-colors">
                Forgot password?
              </button>
            </div>

            {/* Sign In Button */}
            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-emerald-600 to-blue-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-emerald-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Signing In...</span>
                </>
              ) : (
                <>
                  <span>Sign In</span>
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>

            {/* Quick Access */}
            <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-xl p-4 border border-emerald-100">
              <p className="text-sm text-gray-600 text-center mb-2">
                <strong>Quick Access:</strong> Use demo@freshfinds.com / demo123
              </p>
              <button
                onClick={() => {
                  setFormData({
                    ...formData,
                    email: 'demo@freshfinds.com',
                    password: 'demo123'
                  });
                }}
                className="text-xs text-emerald-600 hover:text-emerald-700 font-medium"
              >
                Fill demo credentials
              </button>
            </div>
          </div>

          {/* Register Link */}
          <div className="text-center mt-8 pt-6 border-t border-gray-100">
            <p className="text-gray-600">
              Don't have an account?{' '}
              <button className="text-emerald-600 hover:text-emerald-700 font-semibold transition-colors">
                Create one now
              </button>
            </p>
          </div>

          {/* Security Notice */}
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500 flex items-center justify-center space-x-1">
              <Lock className="w-3 h-3" />
              <span>Your information is protected with 256-bit SSL encryption</span>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SignInPage;