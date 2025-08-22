'use client';

import { motion } from 'framer-motion';
import { 
  Mail
} from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import ContactForm from './ContactForm';

interface SocialLink {
  platform: string;
  url: string;
  icon: React.ReactNode;
}

interface MusicianCardProps {
  name: string;
  university: string;
  imageUrl: string;
  bio: string;
  socialLinks: SocialLink[];
}

const MusicianCard = ({ name, university, imageUrl, bio, socialLinks }: MusicianCardProps) => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <div className="w-full max-w-3xl mx-auto">
        <div className="p-4 sm:p-6">
          {/* Header Section: Image, Name, and University */}
          <div className="flex flex-col sm:flex-row items-center sm:items-end gap-4 mb-6">
            {/* Image Section */}
            <div className="flex-shrink-0">
              <div
                className="relative w-32 h-32 sm:w-40 sm:h-40 overflow-hidden rounded-2xl"
              >
                <Image
                  src={imageUrl}
                  alt={`${name} - Musician`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 128px, 160px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>
            </div>

            {/* Name and University */}
            <div className="text-center sm:text-left">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-1">{name}</h2>
              <p className="text-gray-600 text-sm sm:text-base">{university}</p>
            </div>
          </div>

          {/* Contact Button */}
          <div className="flex justify-center sm:justify-start mb-6">
            <button
              onClick={() => setIsContactOpen(true)}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
            >
              <Mail size={18} />
              <span>Contact Me</span>
            </button>
          </div>

          {/* Social Media Links Section */}
          <div className="border-t border-gray-200 pt-4 mb-6">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 text-center sm:text-left">Follow on Social Media</h3>
            <div className="flex flex-col sm:grid sm:grid-cols-3 gap-3">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center sm:justify-start space-x-3 p-4 rounded-lg transition-all duration-300 group border border-gray-200 hover:border-blue-500 hover:bg-blue-50"
                >
                  <div className="text-gray-600 group-hover:text-blue-600 transition-colors duration-300">
                    {link.icon}
                  </div>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                    {link.platform}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Bio Section - At the bottom */}
          <div className="border-t border-gray-200 pt-4">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 text-center sm:text-left">About</h3>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-center sm:text-left">{bio}</p>
          </div>
        </div>
      </div>

      <ContactForm 
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        musicianName={name}
      />
    </>
  );
};

export default MusicianCard;
