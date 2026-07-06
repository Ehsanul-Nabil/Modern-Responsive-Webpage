import React from 'react';
import assets from '../assets/assets';
import { motion } from 'motion/react'

const Footer = ({ theme }) => {
  // Determine which logo to use based on theme
  const logoSrc = theme === 'dark' ? assets.logo_dark : assets.logo;
  
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className='bg-slate-50 dark:bg-gray-900 pt-10 sm:pt-10 mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40'
    >
      {/* footer top */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className='flex justify-between lg:items-start max-lg:flex-col gap-10 pb-8 border-b border-gray-200 dark:border-gray-700'
      >
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className='w-full lg:w-auto'
        >
          <img 
            src={logoSrc} 
            className='w-32 sm:w-44' 
            alt="Company Logo" 
          />
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className='max-w-md mt-4 text-gray-600 dark:text-gray-300 text-sm sm:text-base'
          >
            From strategy to execution, we craft digital solutions that move your business forward.
          </motion.p>
        </motion.div>
        
        <motion.ul 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className='flex flex-col sm:flex-row lg:flex-col gap-3 sm:gap-4 lg:gap-3 w-full sm:w-auto'
        >
          {['Home', 'Services', 'Our Work', 'Contact Us'].map((item, index) => (
            <motion.li 
              key={item}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <a 
                className='hover:text-primary transition-colors duration-300 text-gray-700 dark:text-gray-200 hover:dark:text-primary' 
                href={`#${item.toLowerCase() === 'home' ? 'hero' : item.toLowerCase() === 'our work' ? 'our-work' : item.toLowerCase() === 'contact us' ? 'contact-us' : item.toLowerCase()}`}
              >
                {item}
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
      
      {/* footer middle - Newsletter Section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className='flex flex-col md:flex-row justify-between items-start md:items-center gap-6 py-8 border-b border-gray-200 dark:border-gray-700'
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className='font-semibold text-gray-800 dark:text-gray-200'>
            Subscribe to our newsletter
          </h3>
          <p className='text-sm mt-2 text-gray-600 dark:text-gray-400'>
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className='flex flex-col sm:flex-row gap-2 text-sm w-full md:w-auto'
        >
          <input 
            type="email" 
            placeholder="Enter your email" 
            className='w-full sm:w-64 p-3 text-sm outline-none rounded dark:text-gray-200 bg-transparent border border-gray-300 dark:border-gray-500 focus:border-primary dark:focus:border-primary transition-colors'
          />
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className='bg-primary text-white rounded px-6 py-3 hover:bg-primary-dark transition-colors whitespace-nowrap'
          >
            Subscribe
          </motion.button>
        </motion.div>
      </motion.div>
      
      {/* Horizontal Rule */}
      <motion.hr 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className='border-gray-300 dark:border-gray-600 my-6' 
      />
      
      {/* footer bottom */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className='pb-6 text-sm text-gray-500 flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4 flex-wrap'
      >
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Copyright 2025 © GreatStack - All Right Reserved.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          viewport={{ once: true }}
          className='flex items-center justify-center gap-4'
        >
          {[assets.facebook_icon, assets.twitter_icon, assets.instagram_icon, assets.linkedin_icon].map((icon, index) => (
            <motion.a 
              key={index}
              href="#"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className='hover:opacity-70 transition-opacity'
            >
              <img src={icon} alt={`Social ${index + 1}`} className='w-5 h-5' />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;