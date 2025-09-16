import React from "react";
import { motion } from "framer-motion";



export default function Card({
  image = "https://imgs.search.brave.com/_-YziXfkMptvojb5YCmf5ct5uu0DznM9N5r6lWj3TBA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/d2FsbHBhcGVyc2Fm/YXJpLmNvbS80OS82/NS9iQ1V2eGsuanBn",
  title = "Card Title",
  subtitle = "Subtitle",
  description = "Short description that explains the card content in one or two lines.",
  tags = [],
  ctaText = "Learn more",
  onCta = () => {},
}) {
  return (
    <motion.article
      className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden focus:outline-none"
      tabIndex={0}
      initial={{ y: 0 }}
      whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(2,6,23,0.12)" }}
      whileFocus={{ y: -6, boxShadow: "0 20px 40px rgba(2,6,23,0.12)" }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      aria-labelledby="card-title"
    >
      {/* Image */}
      <div className="h-48 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <h3 id="card-title" className="text-lg font-semibold text-slate-900 truncate">
              {title}
            </h3>
            <p className="text-sm text-slate-500 mt-1 truncate">{subtitle}</p>
          </div>

          <div className="flex-shrink-0 text-right">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700">
              New
            </span>
          </div>
        </div>

        <p className="mt-3 text-sm text-slate-600">{description}</p>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((t, i) => (
              <span
                key={i}
                className="text-xs px-2 py-1 rounded-md bg-slate-50 border border-slate-100 text-slate-700"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {/* Actions */}
        <div className="mt-4 flex items-center justify-between gap-3">
          <button
            onClick={onCta}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold shadow-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-500"
          >
            {ctaText}
          </button>

          <div className="text-sm text-slate-500">⭐ 4.8</div>
        </div>
      </div>
    </motion.article>
  );
}
