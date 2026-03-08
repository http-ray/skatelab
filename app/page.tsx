'use client';

import { motion } from 'framer-motion';
import CategoryTile from '@/components/CategoryTile';
import { categories } from '@/data/tricks';
import BackgroundScene from '@/components/BackgroundScene';

export default function Home() {
  return (
    <>
      {/* 3D Background Scene */}
      <BackgroundScene />
      
      {/* UI Content Layer - Game Menu Style */}
      <main className="relative min-h-screen p-12">
        <div className="max-w-md">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-7xl font-black mb-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
              SKATELAB
            </h1>
            <p className="text-lg text-slate-300/80">
              Choose your discipline
            </p>
          </motion.div>

          {/* Game Menu Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col gap-3"
          >
            {categories.map((category, index) => (
              <CategoryTile key={category.id} category={category} index={index} />
            ))}
          </motion.div>
        </div>
      </main>
    </>
  );
}
