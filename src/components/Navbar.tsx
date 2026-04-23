/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ReactNode } from 'react';
import { motion } from 'motion/react';
import { User, Briefcase, GraduationCap } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="h-20 px-4 sm:px-8 lg:px-12 flex items-center justify-between border-b border-gray-100 bg-white sticky top-0 z-50">
      <motion.div 
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-3"
      >
        <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
          <GraduationCap size={16} className="text-white" />
        </div>
        <span className="font-semibold tracking-tight text-lg text-black">EduFolio</span>
      </motion.div>
      
      <div className="hidden sm:flex gap-8 text-sm font-medium">
        <NavLink href="#projects" label="Projects" />
        <NavLink href="#about" label="About" />
        <NavLink href="#contact" label="Contact" />
      </div>
      
      <div className="flex items-center">
        <a
          href="#contact"
          className="text-sm font-bold text-black border-b-2 border-black pb-0.5 hover:border-gray-300 transition-colors"
        >
          Resume
        </a>
      </div>
    </nav>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="text-gray-500 hover:text-black transition-colors"
    >
      {label}
    </a>
  );
}

