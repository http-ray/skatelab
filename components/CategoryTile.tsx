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
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ x: 10 }}
    >
      <Link href={`/category/${category.id}`}>
        <div className="group cursor-pointer bg-gradient-to-r from-slate-800/90 to-slate-900/80 border-l-4 border-transparent hover:border-cyan-400 px-6 py-4 transition-all duration-200 hover:bg-slate-700/60 backdrop-blur-sm">
          <div className="flex items-center gap-4">
            <span className="text-3xl group-hover:scale-110 transition-transform">
              {category.icon}
            </span>
            <div>
              <h2 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors uppercase tracking-wide">
                {category.name}
              </h2>
              <p className="text-slate-400 text-xs mt-0.5">{category.description}</p>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
