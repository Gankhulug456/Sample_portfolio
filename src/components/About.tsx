/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ReactNode } from 'react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="bg-white py-32 px-4 sm:px-8 lg:px-12 border-t border-gray-100">
      <div className="grid gap-16 lg:grid-cols-2">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[10px] font-black text-black uppercase tracking-[0.2em]">About Me</span>
            <div className="h-px w-12 bg-gray-200"></div>
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-black sm:text-5xl leading-tight">
            Bridging Theory<br/> 
            <span className="text-gray-300">and Real-World Impact.</span>
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-gray-500 font-medium max-w-lg">
            I specialize in transforming complex academic challenges into intuitive, results-oriented solutions. 
            My approach is rooted in user research and technical precision.
          </p>
          
          <div className="mt-12 space-y-10">
            <AboutItem 
              title="Academic Excellence"
              description="Graduated top of class with a focusing on distributed systems and UI/UX."
            />
            <AboutItem 
              title="Technical Depth"
              description="Proficient in building full-stack applications with high scalability requirements."
            />
          </div>
        </div>
        
        <div className="relative flex items-center justify-center">
          <div className="w-full h-full max-w-md overflow-hidden rounded-2xl bg-gray-50 border border-gray-100 aspect-square">
            <img 
              src="https://images.unsplash.com/photo-1522071823991-b99c223a708e?auto=format&fit=crop&q=80&w=800" 
              alt="Portrait"
              className="h-full w-full object-cover grayscale opacity-90 mix-blend-multiply"
            />
          </div>
          <div className="absolute -bottom-10 -right-4 sm:-right-10 bg-white border border-gray-100 p-8 rounded-xl shadow-xl w-48">
            <div className="text-4xl font-black text-black mb-1">2024</div>
            <div className="text-[10px] uppercase tracking-widest font-black text-gray-400">Class Year</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutItem({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex gap-6 group">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-gray-100 rounded-lg group-hover:border-black transition-colors">
        <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
      </div>
      <div>
        <h3 className="font-bold text-black text-lg">{title}</h3>
        <p className="mt-2 text-sm text-gray-500 font-medium leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

