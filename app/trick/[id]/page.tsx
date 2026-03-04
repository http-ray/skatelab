'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { use } from 'react';
import TrickViewer from '@/components/TrickViewer';
import { tricks, categories } from '@/data/tricks';
import { useTrickStore } from '@/store/useTrickStore';

export default function TrickPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { stance, setStance, direction, setDirection } = useTrickStore();
  
  const trick = tricks.find((t) => t.id === id);
  const category = trick ? categories.find((c) => c.id === trick.category) : null;

  if (!trick || !category) {
    return (
      <main className="min-h-screen p-8 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Trick not found</h1>
          <Link href="/" className="game-button inline-block">
            Back to Home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            href={`/category/${category.id}`}
            className="text-cyan-400 hover:text-cyan-300 inline-block"
          >
            ← Back to {category.name}
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Trick Info Panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="game-card p-6 sticky top-8">
              <h1 className="text-3xl font-bold text-white mb-4">{trick.name}</h1>
              <p className="text-slate-400 mb-6">{trick.description}</p>

              <div className="mb-6">
                <h3 className="text-sm font-semibold text-slate-500 mb-2">DIFFICULTY</h3>
                <span className="inline-block px-3 py-1 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-full text-sm font-semibold">
                  {trick.difficulty.toUpperCase()}
                </span>
              </div>

              <div className="mb-6">
                <h3 className="text-sm font-semibold text-slate-500 mb-3">STANCE</h3>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setStance('regular')}
                    className={`py-2 px-4 rounded-lg font-semibold transition-all ${
                      stance === 'regular'
                        ? 'bg-cyan-600 text-white'
                        : 'bg-slate-700 text-slate-400 hover:bg-slate-600'
                    }`}
                  >
                    Regular
                  </button>
                  <button
                    onClick={() => setStance('goofy')}
                    className={`py-2 px-4 rounded-lg font-semibold transition-all ${
                      stance === 'goofy'
                        ? 'bg-cyan-600 text-white'
                        : 'bg-slate-700 text-slate-400 hover:bg-slate-600'
                    }`}
                  >
                    Goofy
                  </button>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-sm font-semibold text-slate-500 mb-3">DIRECTION</h3>
                <div className="grid grid-cols-3 gap-2">
                  {(['none', 'frontside', 'backside'] as const).map((dir) => (
                    <button
                      key={dir}
                      onClick={() => setDirection(dir)}
                      className={`py-2 px-2 rounded-lg font-semibold text-xs transition-all ${
                        direction === dir
                          ? 'bg-cyan-600 text-white'
                          : 'bg-slate-700 text-slate-400 hover:bg-slate-600'
                      }`}
                    >
                      {dir === 'none' ? 'None' : dir === 'frontside' ? 'FS' : 'BS'}
                    </button>
                  ))}
                </div>
              </div>

              {trick.variations.length > 0 && (
                <div>
                  <h3 className="text-sm font-semibold text-slate-500 mb-3">VARIATIONS</h3>
                  <div className="flex flex-wrap gap-2">
                    {trick.variations.map((variation, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-slate-700 text-slate-300 rounded-lg text-sm"
                      >
                        {variation}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* 3D Viewer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="game-card p-6 h-[600px]">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xl font-bold text-white">3D Preview</h2>
                <div className="text-sm text-slate-400">
                  {stance.toUpperCase()} {direction !== 'none' && `• ${direction.toUpperCase()}`}
                </div>
              </div>
              <div className="h-[calc(100%-3rem)]">
                <TrickViewer />
              </div>
              <p className="text-xs text-slate-500 text-center mt-4">
                🖱️ Click and drag to rotate • Scroll to zoom
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
