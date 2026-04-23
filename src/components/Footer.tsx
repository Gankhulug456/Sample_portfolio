/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ReactNode } from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="h-20 bg-white border-t border-gray-100 px-4 sm:px-8 lg:px-12 flex items-center justify-between text-[10px] font-bold text-gray-400 tracking-widest uppercase">
      <div className="flex gap-8">
        <span>Based in NYC</span>
        <a href="#" className="hover:text-black transition-colors">LinkedIn</a>
        <a href="#" className="hover:text-black transition-colors">GitHub</a>
      </div>
      <div className="hidden sm:block">
        © {new Date().getFullYear()} EduFolio • Academic Portfolio
      </div>
      <div>
        Available for Hire
      </div>
    </footer>
  );
}

