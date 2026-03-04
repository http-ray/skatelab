'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { use } from 'react';
import TrickCard from '@/components/TrickCard';
import { categories, tricks } from '@/data/tricks';

export default function CategoryPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  
  const category = categories.find((c) => c.id === id);
  const categoryTricks = tricks.filter((t) => t.category === id);

  if (!category) {
    return (
      <main className="min-h-screen p-8 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Category not found</h1>
          <Link href="/" className="game-button inline-block">
            Back to Home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link href="/" className="text-cyan-400 hover:text-cyan-300 mb-4 inline-block">
            ← Back to Categories
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <div className="text-6xl mb-4">{category.icon}</div>
          <h1 className="text-5xl font-bold mb-4 text-white">{category.name}</h1>
          <p className="text-xl text-slate-400">{category.description}</p>
          <div className="mt-4 text-sm text-slate-500">
            {categoryTricks.length} trick{categoryTricks.length !== 1 ? 's' : ''} available
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {categoryTricks.map((trick, index) => (
            <TrickCard key={trick.id} trick={trick} index={index} />
          ))}
        </motion.div>

        {categoryTricks.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center text-slate-500 mt-12"
          >
            <p>No tricks available in this category yet.</p>
            <p className="mt-2">Check back soon for updates!</p>
          </motion.div>
        )}
      </div>
    </main>
  );
}
