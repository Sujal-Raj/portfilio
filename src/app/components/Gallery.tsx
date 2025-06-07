"use client"

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';

const GallerySection = () => {
  const [galleryData, setGalleryData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);


useEffect(() => {
  const fetchGallery = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get('/api/gallery');
      setGalleryData(response.data.gallery);
    } catch (error) {
      console.error("Error fetching gallery:", error);
    //   setGalleryData(mockGalleryData); // optional fallback
    } finally {
      setIsLoading(false);
    }
  };

  fetchGallery();
}, []);


  useEffect(() => {
    if (galleryData.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === galleryData.length - 1 ? 0 : prevIndex + 1
        );
      }, 4000); // Change slide every 4 seconds

      return () => clearInterval(interval);
    }
  }, [galleryData]);

  const getVisibleCards = () => {
    if (galleryData.length === 0) return [];
    
    const cards = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % galleryData.length;
      cards.push({ ...galleryData[index], position: i });
    }
    return cards;
  };

  // Animation variants for smooth transitions
  const cardVariants = {
    left: {
      scale: 0.95,
      opacity: 0.75,
      x: 0,
      zIndex: 10,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    center: {
      scale: 1.1,
      opacity: 1,
      x: 0,
      zIndex: 20,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    right: {
      scale: 0.95,
      opacity: 0.75,
      x: 0,
      zIndex: 10,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const getCardVariant = (index) => {
    if (index === 0) return 'left';
    if (index === 1) return 'center';
    if (index === 2) return 'right';
    return 'left';
  };

  if (isLoading) {
    return (
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <motion.div 
              className="inline-block rounded-full h-12 w-12 border-b-2 border-yellow-400"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            <p className="text-white mt-4">Loading Gallery...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold text-white mb-4">
            Our <span className="text-yellow-400">Gallery</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Explore our collection of stunning visuals capturing moments of excellence and creativity
          </p>
        </motion.div>

        {/* Gallery Cards Container */}
        <div className="relative h-96 flex items-center justify-center">
          <div className="flex space-x-8 relative">
            <AnimatePresence mode="popLayout">
              {getVisibleCards().map((item, index) => (
                <motion.div
                  key={`${item._id}-${currentIndex}`}
                  variants={cardVariants}
                  initial={getCardVariant(index)}
                  animate={getCardVariant(index)}
                  exit={{ 
                    opacity: 0, 
                    scale: 0.8,
                    transition: { duration: 0.3 }
                  }}
                  className={`
                    relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden
                    border border-gray-700 shadow-2xl
                    ${index === 1 ? 'shadow-yellow-400/20' : ''}
                  `}
                  style={{
                    width: '350px',
                    height: '280px',
                  }}
                  whileHover={{
                    scale: index === 1 ? 1.15 : 1.0,
                    boxShadow: index === 1 
                      ? '0 25px 50px -12px rgba(250, 204, 21, 0.3)' 
                      : '0 25px 50px -12px rgba(250, 204, 21, 0.15)',
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Image Container */}
                  <div className="relative h-48 overflow-hidden">
                    <motion.img
                      src={item.imageURL}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.7 }}
                      onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    
                    {/* Category Badge */}
                    <motion.div 
                      className="absolute top-4 left-4"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                    >
                      <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                        {item.catogery}
                      </span>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <motion.div 
                    className="p-6 relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    <h3 className="text-xl font-bold text-white mb-2 line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-sm line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                    
                    {/* Decorative Element */}
                    <motion.div 
                      className="absolute bottom-2 right-4 w-8 h-8 border-2 border-yellow-400 rounded-full opacity-30"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    />
                  </motion.div>

                  {/* Hover Overlay */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-transparent"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation Dots */}
        <motion.div 
          className="flex justify-center mt-12 space-x-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {galleryData.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`
                w-3 h-3 rounded-full transition-all duration-300
                ${index === currentIndex 
                  ? 'bg-yellow-400' 
                  : 'bg-gray-600 hover:bg-gray-500'
                }
              `}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              animate={{
                scale: index === currentIndex ? 1.25 : 1,
                backgroundColor: index === currentIndex ? '#facc15' : '#4b5563'
              }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;