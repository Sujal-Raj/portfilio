'use client';
import React, { useState, useEffect } from 'react';

interface MediaItem {
  id: number;
  type: 'image' | 'video';
  src: string;
  alt: string;
}

interface ClientDetails {
  name: string;
  role: string;
  company: string;
  email: string;
  phone: string;
  location: string;
  description: string;
  services: string[];
  testimonial: string;
}

const clientData: ClientDetails = {
  name: 'Sarah Johnson',
  role: 'Creative Director',
  company: 'Design Studio Inc.',
  email: 'sarah@designstudio.com',
  phone: '+1 (555) 123-4567',
  location: 'New York, NY',
  description:
    'Award-winning creative director with over 10 years of experience in digital design and brand strategy.',
  services: ['Brand Identity', 'Web Design', 'Digital Marketing', 'UI/UX Design'],
  testimonial:
    'Working with this team transformed our brand presence completely. The attention to detail and creative vision exceeded all expectations.',
};

const ClientPage: React.FC = () => {
  const [activeMedia, setActiveMedia] = useState<number>(0);
  const [initials, setInitials] = useState<string>(''); // NEW STATE FOR INITIALS

  const mediaItems: MediaItem[] = [
    { id: 1, type: 'image', src: '/api/placeholder/600/400', alt: 'Project 1' },
    { id: 2, type: 'image', src: '/api/placeholder/600/400', alt: 'Project 2' },
    { id: 3, type: 'video', src: '/api/placeholder/600/400', alt: 'Demo Video' },
    { id: 4, type: 'image', src: '/api/placeholder/600/400', alt: 'Project 3' },
  ];

  useEffect(() => {
    // Compute initials on client side to avoid mismatch
    const nameInitials = clientData.name
      .split(' ')
      .map((n) => n[0])
      .join('');
    setInitials(nameInitials);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="flex flex-col lg:flex-row">
        {/* Left Side - Media Gallery */}
        <div className="lg:w-1/2 p-6 lg:p-8">
          <div className="sticky top-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-yellow-400 mb-6">Portfolio</h1>

            {/* Main Media Display */}
            <div className="bg-gray-900 rounded-lg overflow-hidden mb-6 border-2 border-yellow-400">
              <div className="aspect-video bg-gray-800 flex items-center justify-center">
                <div className="text-yellow-400 text-lg">
                  {mediaItems[activeMedia].type === 'image' ? '📸' : '🎥'}{' '}
                  {mediaItems[activeMedia].alt}
                </div>
              </div>
            </div>

            {/* Media Thumbnails */}
            <div className="grid grid-cols-4 gap-3">
              {mediaItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => setActiveMedia(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    activeMedia === index
                      ? 'border-yellow-400 ring-2 ring-yellow-400 ring-opacity-50'
                      : 'border-gray-600 hover:border-yellow-400'
                  }`}
                >
                  <div className="w-full h-full bg-gray-800 flex items-center justify-center text-yellow-400">
                    {item.type === 'image' ? '📸' : '🎥'}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Client Details */}
        <div className="lg:w-1/2 bg-gray-900 p-6 lg:p-8 mt-20 lg:mt-0">
          <div className="max-w-lg">
            {/* Client Header */}
            <div className="mb-8">
              <div className="w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center mb-4">
                <span className="text-black text-2xl font-bold">{initials}</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-2">{clientData.name}</h2>
              <p className="text-yellow-400 text-lg font-medium">{clientData.role}</p>
              <p className="text-gray-400">{clientData.company}</p>
            </div>

            {/* Contact Info */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-yellow-400 mb-4">Contact</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="text-yellow-400">📧</span>
                  <span className="text-gray-300">{clientData.email}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-yellow-400">📱</span>
                  <span className="text-gray-300">{clientData.phone}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-yellow-400">📍</span>
                  <span className="text-gray-300">{clientData.location}</span>
                </div>
              </div>
            </div>

            {/* About */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-yellow-400 mb-4">About</h3>
              <p className="text-gray-300 leading-relaxed">{clientData.description}</p>
            </div>

            {/* Services */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-yellow-400 mb-4">Services</h3>
              <div className="flex flex-wrap gap-2">
                {clientData.services.map((service, index) => (
                  <span
                    key={index}
                    className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-black p-6 rounded-lg border-l-4 border-yellow-400">
              <h3 className="text-xl font-semibold text-yellow-400 mb-3">Testimonial</h3>
              <p className="text-gray-300 italic leading-relaxed">"{clientData.testimonial}"</p>
            </div>

            {/* Buttons */}
            <div className="mt-8 flex space-x-4">
              <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
                Get In Touch
              </button>
              <button className="border-2 border-yellow-400 text-yellow-400 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 hover:text-black transition-colors">
                View More Work
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientPage;
