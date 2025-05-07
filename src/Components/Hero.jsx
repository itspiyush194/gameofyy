import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="h-[80vh] md:h-[60vh] w-full flex items-center justify-center flex-col  text-white">
      <motion.div
        className="p-5"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <h1 className="font-orbitron text-5xl md:text-[150px]">GAMEOFFYY</h1>
      </motion.div>

      <motion.div
        className="bg-black p-5 text-[12px] md:text-2xl opacity-70 rounded-md"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }}
      >
        <h1 className="font-bold font-orbitron">Unleash Your Inner Player</h1>
      </motion.div>
    </div>
  );
};

export default Hero;
