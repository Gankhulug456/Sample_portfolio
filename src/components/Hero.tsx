/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowRight, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-32 pb-20 px-4 sm:px-8 lg:px-12 border-b border-gray-100">
      <div className="max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">Class of 2024 • Academic Portfolio</span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl sm:text-7xl font-bold tracking-tight text-black leading-[1.1]"
        >
          Academic Excellence<br/>
          <span className="text-gray-300">Driven by Results.</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 max-w-xl text-lg text-gray-500 leading-relaxed font-medium"
        >
          A curated selection of class work demonstrating complex problem-solving through the PAR framework. 
          Bridging the gap between academic theory and professional impact.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 flex items-center gap-8"
        >
          <a
            href="#projects"
            className="text-sm font-bold text-black flex items-center gap-2 group underline underline-offset-8 decoration-2 hover:decoration-gray-300 transition-all"
          >
            Explore Projects
            <ArrowRight className="transition-transform group-hover:translate-x-1" size={16} />
          </a>
          <div className="flex items-center gap-4">
            <div className="w-12 h-[1px] bg-gray-200"></div>
            <span className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Available for hire</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

