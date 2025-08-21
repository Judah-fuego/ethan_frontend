'use client';

import { motion } from 'framer-motion';
import { 
  Camera, 
  MessageCircle, 
  Play, 
  Music, 
  Globe,
  Share2,
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
  socialLinks: SocialLink[];
}

const MusicianCard = ({ name, university, imageUrl, socialLinks }: MusicianCardProps) => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
      >
        {/* Content Section */}
        <div className="p-6 sm:p-8">
          {/* Circular Image Section */}
          <motion.div 
            className="flex justify-center mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <motion.div
              className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-white shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={imageUrl}
                alt={`${name} - Musician`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 128px, 160px"
                priority
              />
            </motion.div>
          </motion.div>

          {/* Name and University */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-center mb-6"
          >
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">{name}</h2>
            <p className="text-gray-600 text-sm sm:text-base">{university}</p>
          </motion.div>

          {/* Contact Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-center mb-6"
          >
            <motion.button
              onClick={() => setIsContactOpen(true)}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2 mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={20} />
              <span>Contact Me</span>
            </motion.button>
          </motion.div>

          {/* Social Media Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <h3 className="text-sm font-semibold text-gray-700 mb-4 text-center">Follow on Social Media</h3>
            <ul className="space-y-3">
              {socialLinks.map((link, index) => (
                <motion.li
                  key={link.platform}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.3 }}
                >
                  <motion.a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="text-gray-600 group-hover:text-blue-600 transition-colors duration-200">
                      {link.icon}
                    </div>
                    <span className="text-sm sm:text-base text-gray-700 group-hover:text-gray-900 transition-colors duration-200">
                      {link.platform}
                    </span>
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.div>

      <ContactForm 
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        musicianName={name}
      />
    </>
  );
};

export default MusicianCard;
