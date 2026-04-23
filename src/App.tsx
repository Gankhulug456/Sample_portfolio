/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import ProjectCard from './components/ProjectCard.tsx';
import ProjectModal from './components/ProjectModal.tsx';
import About from './components/About.tsx';
import Footer from './components/Footer.tsx';
import { PROJECTS } from './constants.ts';
import { Project } from './types.ts';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-white font-sans text-black selection:bg-black selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Projects Grid Section */}
        <section id="projects" className="bg-white py-32 px-4 sm:px-8 lg:px-12">
          <div className="max-w-7xl">
            <div className="flex items-center gap-4 mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-black">Selected Projects</h2>
              <div className="h-px flex-1 bg-gray-100"></div>
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Curated Work</span>
            </div>
            
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20"
            >
              {PROJECTS.map((project) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  onSelect={setSelectedProject} 
                />
              ))}
            </motion.div>
          </div>
        </section>

        <About />
      </main>

      <Footer />

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}


