'use client';

import { motion } from 'framer-motion';
import CategoryTile from '@/components/CategoryTile';
import { categories } from '@/data/tricks';

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
            SKATELAB
          </h1>
          <p className="text-xl text-slate-400">
            Choose your discipline and master the tricks
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {categories.map((category, index) => (
            <CategoryTile key={category.id} category={category} index={index} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 text-center text-slate-500 text-sm"
        >
          <p>Select a category to explore tricks</p>
          <p className="mt-2">🎮 Navigate • 👁️ Visualize • 🛹 Master</p>
        </motion.div>
      </div>
    </main>
  );
}
