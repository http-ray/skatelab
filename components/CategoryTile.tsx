'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Category } from '@/data/tricks';

interface CategoryTileProps {
  category: Category;
  index: number;
}

export default function CategoryTile({ category, index }: CategoryTileProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/category/${category.id}`}>
        <div className="game-card p-8 text-center cursor-pointer group">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="text-6xl mb-4"
          >
            {category.icon}
          </motion.div>
          <h2 className="text-2xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">
            {category.name}
          </h2>
          <p className="text-slate-400 text-sm">{category.description}</p>
        </div>
      </Link>
    </motion.div>
  );
}
