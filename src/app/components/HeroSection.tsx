"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Sparkles, Palette, Zap } from 'lucide-react';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
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

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-80 h-80 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-10"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/3 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-15"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />

        {/* Floating Geometric Shapes */}
        <motion.div
          className="absolute top-1/4 left-10 w-4 h-4 bg-yellow-400 transform rotate-45"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-3 h-3 bg-white rounded-full"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 1 }}
        />
        <motion.div
          className="absolute bottom-1/3 right-10 w-5 h-5 bg-yellow-300 transform rotate-12"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
        />
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 container mx-auto px-6 lg:px-12 min-h-screen flex items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <div className="text-white space-y-8">
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center space-x-2 bg-white bg-opacity-10 backdrop-blur-sm rounded-full px-4 py-2 border border-white border-opacity-20"
            >
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium">Creative Designer</span>
            </motion.div>

            {/* Headline */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Bringing
                <span className="relative inline-block mx-4">
                  <span className="text-yellow-400">Ideas</span>
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-3 bg-yellow-400 opacity-30"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                  />
                </span>
                to Life
              </h1>
              <div className="flex items-center space-x-4 text-lg">
                <motion.div
                  className="w-12 h-0.5 bg-yellow-400"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1.5, duration: 0.6 }}
                />
                <span className="text-gray-300">Through Visual Storytelling</span>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-lg"
            >
              Freelance graphic designer crafting compelling visuals that communicate, inspire, and elevate your brand to new heights.
            </motion.p>

            {/* Skills Tags */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
              {['Brand Identity', 'Web Design', 'Print Design', 'Illustration'].map((skill, index) => (
                <motion.span
                  key={skill}
                  className="px-4 py-2 bg-yellow-400 bg-opacity-20 text-yellow-400 rounded-full text-sm font-medium border border-yellow-400 border-opacity-30"
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(251, 191, 36, 0.3)' }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 2 + index * 0.1 }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={itemVariants} className="pt-4">
              <motion.button
                className="group inline-flex items-center space-x-3 bg-yellow-400 text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all duration-300"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(251, 191, 36, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                <span>View My Work</span>
                <motion.div
                  className="group-hover:translate-x-1 transition-transform duration-300"
                >
                  <ChevronRight className="w-5 h-5" />
                </motion.div>
              </motion.button>
            </motion.div>
          </div>

          {/* Right Content - Profile/Visual */}
          <motion.div
            variants={itemVariants}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Main Profile Container */}
              <motion.div
                className="relative w-80 h-80 lg:w-96 lg:h-96"
                variants={pulseVariants}
                animate="animate"
              >
                {/* Background Circle */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full"></div>
                
                {/* Profile Image Placeholder */}
                <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <div className="text-center text-gray-600">
                      <Palette className="w-16 h-16 mx-auto mb-4" />
                      <p className="text-sm font-medium">Profile Image</p>
                    </div>
                  </div>
                </div>

                {/* Floating Design Elements */}
                <motion.div
                  className="absolute -top-6 -right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Zap className="w-6 h-6 text-yellow-500" />
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -left-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center"
                  variants={floatingVariants}
                  animate="animate"
                >
                  <Sparkles className="w-8 h-8 text-black" />
                </motion.div>

                <motion.div
                  className="absolute top-1/4 -left-8 w-6 h-6 bg-white rounded-full"
                  variants={floatingVariants}
                  animate="animate"
                  transition={{ delay: 1 }}
                />
              </motion.div>

              {/* Additional Decorative Elements */}
              <motion.div
                className="absolute -top-12 left-1/2 transform -translate-x-1/2 text-yellow-400"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor">
                  <path d="M20 0L24.7 15.3L40 20L24.7 24.7L20 40L15.3 24.7L0 20L15.3 15.3L20 0Z"/>
                </svg>
              </motion.div>

              <motion.div
                className="absolute -bottom-8 right-1/4 w-8 h-8 border-2 border-white rounded-full"
                animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center space-y-2"
        >
          <span className="text-sm text-gray-400">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-yellow-400 rounded-full mt-2"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;