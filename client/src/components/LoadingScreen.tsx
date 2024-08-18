import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-600 to-purple-700">
      <motion.div
        className="flex flex-col items-center justify-center space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="w-24 h-24 bg-white rounded-full flex justify-center items-center"
          animate={{ rotate: 360 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <svg
            className="w-12 h-12 text-blue-600 animate-spin"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4v4m0 8v4m8-8h-4m-8 0H4m7.293-7.293l-1.414 1.414M7.293 16.707l1.414 1.414m8.293-8.293l1.414 1.414M16.707 7.293l-1.414 1.414"
            ></path>
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LoadingScreen;
