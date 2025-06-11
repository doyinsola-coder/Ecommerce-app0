import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { 
  Eye, 
  EyeOff, 
  Mail, 
  Lock, 
  User, 
  Phone, 
  Calendar,
  Shield,
  Check,
  X,
  ChevronLeft
} from 'lucide-react';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
    subscribeNewsletter: true
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState({});

  const passwordRequirements = [
    { text: 'At least 8 characters', met: formData.password.length >= 8 },
    { text: 'One uppercase letter', met: /[A-Z]/.test(formData.password) },
    { text: 'One lowercase letter', met: /[a-z]/.test(formData.password) },
    { text: 'One number', met: /\d/.test(formData.password) },
    { text: 'One special character', met: /[!@#$%^&*(),.?":{}|<>]/.test(formData.password) }
  ];

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

  const validateStep = (step) => {
    const newErrors = {};
    
    if (step === 1) {
      if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
      if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Email is invalid';
      }
      if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    }
    
    if (step === 2) {
      if (!formData.password) {
        newErrors.password = 'Password is required';
      } else if (!passwordRequirements.every(req => req.met)) {
        newErrors.password = 'Password does not meet requirements';
      }
      
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
      
      if (!formData.agreeToTerms) {
        newErrors.agreeToTerms = 'You must agree to the terms and conditions';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(2);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep(2)) {
      console.log('Registration submitted:', formData);
      // Handle registration logic here
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    exit: { 
      opacity: 0, 
      x: -50,
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-blue-50 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full grid lg:grid-cols-2 gap-8 items-center">
        
        {/* Left Side - Branding */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="hidden lg:block space-y-8"
        >
          <div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent mb-4">
              FreshFinds
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Join thousands of happy customers who discover amazing products every day
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Secure Shopping</h3>
                <p className="text-gray-600">Your data is protected with enterprise-grade security</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Exclusive Deals</h3>
                <p className="text-gray-600">Get access to member-only discounts and offers</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-400 to-blue-600 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Personal Experience</h3>
                <p className="text-gray-600">Curated recommendations just for you</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Registration Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <div className="lg:hidden mb-4">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                FreshFinds
              </h1>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
              Create Your Account
            </h2>
            <p className="text-gray-600">
              Step {currentStep} of 2 - Let's get you started
            </p>
          </div>

          {/* Progress Bar */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center space-x-4">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all ${
                currentStep >= 1 ? 'bg-emerald-500 text-white' : 'bg-gray-200 text-gray-500'
              }`}>
                1
              </div>
              <div className={`w-16 h-1 transition-all ${
                currentStep >= 2 ? 'bg-emerald-500' : 'bg-gray-200'
              }`} />
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all ${
                currentStep >= 2 ? 'bg-emerald-500 text-white' : 'bg-gray-200 text-gray-500'
              }`}>
                2
              </div>
            </div>
          </div>

          {/* Social Login */}
          {currentStep === 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-3 mb-6"
            >
              <button className="w-full flex items-center justify-center space-x-3 py-3 px-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="w-5 h-5 text-red-500 font-bold">G</div>
                <span className="font-medium text-gray-700">Continue with Google</span>
              </button>
              
              <div className="grid grid-cols-2 gap-3">
                <button className="flex items-center justify-center space-x-2 py-3 px-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                  <div className="w-5 h-5 text-blue-600 font-bold">f</div>
                  <span className="font-medium text-gray-700">Facebook</span>
                </button>
                <button className="flex items-center justify-center space-x-2 py-3 px-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                  <div className="w-5 h-5 text-gray-900 font-bold">🍎</div>
                  <span className="font-medium text-gray-700">Apple</span>
                </button>
              </div>
              
              <div className="flex items-center my-6">
                <div className="flex-1 border-t border-gray-200"></div>
                <span className="px-4 text-sm text-gray-500">or continue with email</span>
                <div className="flex-1 border-t border-gray-200"></div>
              </div>
            </motion.div>
          )}

          <div onSubmit={handleSubmit}>
            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <motion.div
                key="step1"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="space-y-6"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all ${
                          errors.firstName ? 'border-red-500' : 'border-gray-200'
                        }`}
                        placeholder="John"
                      />
                    </div>
                    {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all ${
                        errors.lastName ? 'border-red-500' : 'border-gray-200'
                      }`}
                      placeholder="Doe"
                    />
                    {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all ${
                        errors.email ? 'border-red-500' : 'border-gray-200'
                      }`}
                      placeholder="john.doe@example.com"
                    />
                  </div>
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all ${
                        errors.phone ? 'border-red-500' : 'border-gray-200'
                      }`}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date of Birth (Optional)
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleNext}
                  className="w-full bg-gradient-to-r from-emerald-600 to-blue-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-emerald-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
                >
                  Continue
                </button>
              </motion.div>
            )}

            {/* Step 2: Security & Preferences */}
            {currentStep === 2 && (
              <motion.div
                key="step2"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="space-y-6"
              >
                <button
                  type="button"
                  onClick={() => setCurrentStep(1)}
                  className="flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 transition-colors mb-4"
                >
                  <ChevronLeft className="w-5 h-5" />
                  <span>Back to personal info</span>
                </button>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className={`w-full pl-10 pr-12 py-3 border rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all ${
                        errors.password ? 'border-red-500' : 'border-gray-200'
                      }`}
                      placeholder="Create a strong password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                  
                  {/* Password Requirements */}
                  <div className="mt-3 space-y-2">
                    {passwordRequirements.map((req, index) => (
                      <div key={index} className="flex items-center space-x-2 text-sm">
                        {req.met ? (
                          <Check className="w-4 h-4 text-green-500" />
                        ) : (
                          <X className="w-4 h-4 text-gray-300" />
                        )}
                        <span className={req.met ? 'text-green-600' : 'text-gray-500'}>
                          {req.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className={`w-full pl-10 pr-12 py-3 border rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all ${
                        errors.confirmPassword ? 'border-red-500' : 'border-gray-200'
                      }`}
                      placeholder="Confirm your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
                </div>

                {/* Checkboxes */}
                <div className="space-y-4">
                  <label className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={handleInputChange}
                      className="mt-1 w-4 h-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
                    />
                    <span className="text-sm text-gray-700">
                      I agree to the{' '}
                      <a href="#" className="text-emerald-600 hover:text-emerald-700 underline">
                        Terms of Service
                      </a>{' '}
                      and{' '}
                      <a href="#" className="text-emerald-600 hover:text-emerald-700 underline">
                        Privacy Policy
                      </a>
                    </span>
                  </label>
                  {errors.agreeToTerms && <p className="text-red-500 text-sm">{errors.agreeToTerms}</p>}

                  <label className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      name="subscribeNewsletter"
                      checked={formData.subscribeNewsletter}
                      onChange={handleInputChange}
                      className="mt-1 w-4 h-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
                    />
                    <span className="text-sm text-gray-700">
                      Subscribe to our newsletter for exclusive deals and updates
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-emerald-600 to-blue-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-emerald-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
                >
                  Create Account
                </button>
              </motion.div>
            )}
          </div>

          {/* Login Link */}
          <div className="text-center mt-6">
            <p className="text-gray-600">
              Already have an account?{' '}
      <Link to="/signin">
              <button className="text-emerald-600 hover:text-emerald-700 font-semibold">
Sign in</button>
      </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RegisterPage;