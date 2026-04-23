/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../types.ts';
import { X, Target, Zap, CheckCircle2, ChevronRight } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        />
        
        <motion.div
          layoutId={`card-${project.id}`}
          className="relative max-h-full w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl flex flex-col"
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-black transition-colors hover:bg-black hover:text-white"
          >
            <X size={20} />
          </button>
          
          <div className="overflow-y-auto max-h-[90vh]">
            <div className="p-12 sm:p-16">
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em]">{project.category}</span>
                  <div className="h-px w-12 bg-blue-100"></div>
                </div>
                <h2 className="text-4xl font-light text-black mb-2">{project.title}</h2>
                <p className="text-gray-400 italic font-serif text-lg">{project.tags.join(' • ')}</p>
              </div>

              <div className="space-y-16">
                <PARSection
                  label="PROBLEM"
                  content={project.problem}
                  labelStyle="text-black bg-white border border-gray-200"
                />
                
                <PARSection
                  label="ACTION"
                  content={project.action}
                  labelStyle="text-white bg-blue-600 border-none"
                />

                <div className="grid grid-cols-1 sm:grid-cols-4 gap-8">
                  <div className="col-span-1">
                    <span className="text-[10px] font-black px-2 py-1 border border-gray-200 rounded shadow-sm inline-block">RESULT</span>
                  </div>
                  <div className="col-span-3">
                    <div className="p-8 bg-gray-50 border border-gray-100 rounded-xl space-y-4">
                      <div className="flex items-center gap-6">
                        <span className="text-4xl font-bold text-blue-600">+40%</span>
                        <div className="h-10 w-px bg-gray-200 hidden sm:block"></div>
                        <p className="text-sm text-gray-500 font-medium leading-relaxed max-w-xs">{project.result.split('.')[0]}.</p>
                      </div>
                      <div className="h-px bg-gray-200 w-full opacity-50"></div>
                      <p className="text-gray-700 leading-relaxed font-normal">
                        {project.result.split('.').slice(1).join('.')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-16 flex items-center justify-between pt-8 border-t border-gray-100">
                <div className="flex gap-2">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{project.date}</span>
                </div>
                <button className="text-sm font-bold text-black flex items-center gap-2 group underline underline-offset-4 decoration-black">
                  View Full Case Study
                  <ChevronRight className="transition-transform group-hover:translate-x-1" size={16} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

function PARSection({ label, content, labelStyle }: { label: string; content: string; labelStyle: string }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-8">
      <div className="col-span-1">
        <span className={`text-[10px] font-black px-2 py-1 rounded shadow-sm inline-block uppercase tracking-tight ${labelStyle}`}>
          {label}
        </span>
      </div>
      <div className="col-span-3">
        <p className="text-gray-700 leading-relaxed font-normal text-lg">
          {content}
        </p>
      </div>
    </div>
  );
}

