'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Trick } from '@/data/tricks';

interface TrickCardProps {
  trick: Trick;
  index: number;
}

const difficultyColors = {
  beginner: 'bg-green-500',
  intermediate: 'bg-yellow-500',
  advanced: 'bg-orange-500',
  expert: 'bg-red-500',
};

export default function TrickCard({ trick, index }: TrickCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.05 }}
    >
      <Link href={`/trick/${trick.id}`}>
        <div className="game-card p-6 cursor-pointer h-full flex flex-col">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xl font-bold text-white">{trick.name}</h3>
            <span className={`${difficultyColors[trick.difficulty]} text-xs px-2 py-1 rounded-full text-white font-semibold`}>
              {trick.difficulty}
            </span>
          </div>
          <p className="text-slate-400 text-sm mb-4 flex-grow">
            {trick.description}
          </p>
          {trick.variations.length > 0 && (
            <div className="mt-auto">
              <p className="text-xs text-slate-500 mb-2">Variations:</p>
              <div className="flex flex-wrap gap-1">
                {trick.variations.slice(0, 3).map((variation, i) => (
                  <span key={i} className="text-xs bg-slate-700 px-2 py-1 rounded text-slate-300">
                    {variation}
                  </span>
                ))}
                {trick.variations.length > 3 && (
                  <span className="text-xs bg-slate-700 px-2 py-1 rounded text-slate-300">
                    +{trick.variations.length - 3}
                  </span>
                )}
              </div>
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
}
