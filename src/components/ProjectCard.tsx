/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { FC } from 'react';
import { motion } from 'motion/react';
import { Project } from '../types.ts';
import { ArrowUpRight, Calendar } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

const ProjectCard: FC<ProjectCardProps> = ({ project, onSelect }) => {
  return (
    <motion.div
      layoutId={`card-${project.id}`}
      onClick={() => onSelect(project)}
      className="group cursor-pointer flex flex-col bg-white"
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-gray-100 shadow-sm transition-transform duration-300 group-hover:scale-[1.02]">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover grayscale opacity-80 transition-all group-hover:grayscale-0 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/5" />
      </div>
      
      <div className="pt-6">
        <div className="flex items-center gap-3">
           <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none">
            {project.category}
          </span>
          <div className="h-px flex-1 bg-gray-100"></div>
        </div>
        
        <h3 className="mt-4 text-xl font-bold text-black border-b-2 border-transparent group-hover:border-black pb-1 inline-block transition-all">
          {project.title}
        </h3>
        
        <p className="mt-4 text-sm leading-relaxed text-gray-500 font-medium line-clamp-2">
          {project.problem}
        </p>
        
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gray-100 text-[10px] font-bold rounded-full text-gray-500 uppercase tracking-tight"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};


export default ProjectCard;
