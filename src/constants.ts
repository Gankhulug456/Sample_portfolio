/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project } from './types.ts';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'AI Smart Scheduler',
    category: 'Full-Stack Development',
    image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&q=80&w=800',
    date: 'Fall 2025',
    tags: ['React', 'Node.js', 'Gemini API', 'PostgreSQL'],
    problem: 'Students often struggle to balance complex course loads with extracurricular activities, leading to burnout and missed deadlines. Existing calendar apps require manual entry and don\'t provide optimized study blocks.',
    action: 'Designed and developed a calendar integration that uses the Gemini API to analyze course syllabi (PDF) and automatically generate a personalized study schedule. I implemented a responsive React frontend and a robust Express backend to handle high-volume API requests.',
    result: 'The application reduced scheduling time by 70% for a test group of 50 students. 90% of users reported improved time management and a reduction in late submissions during the finals week.',
  },
  {
    id: '2',
    title: 'EcoTrack Analytics',
    category: 'Data Visualization',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    date: 'Spring 2025',
    tags: ['D3.js', 'TypeScript', 'Clean Tech'],
    problem: 'Local government agencies lacked a unified way to visualize carbon emission data from multiple disparate sources, making it difficult to identify high-impact policy changes.',
    action: 'Built an interactive data dashboard using D3.js to visualize multi-source environmental datasets. I focused on creating intuitive choropleth maps and time-series charts that allowed for granular filtering by sector and region.',
    result: 'Successfully presented the prototype to the City Council, leading to the approval of a $50k grant for further development. The tool identified a 15% discrepancy in reported industrial emissions that was previously overlooked.',
  },
  {
    id: '3',
    title: 'UX Redesign: Campus Library',
    category: 'UI/UX Design',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800',
    date: 'Winter 2024',
    tags: ['Figma', 'User Research', 'Accessibility'],
    problem: 'The library\'s book reservation system had a high abandonment rate (45%) due to a cluttered interface and lack of mobile optimization, discouraging students from utilizing physical resources.',
    action: 'Conducted user interviews with 20 students to map pain points. Developed a high-fidelity prototype in Figma focusing on a "Search-First" architecture and simplified check-out flows. Applied WCAG 2.1 accessibility standards throughout the design.',
    result: 'Usability testing of the new design showed a 60% increase in task completion speed and a 40% reduction in user errors. Peer reviewers commended the "minimalist yet functional" aesthetic.',
  },
];
