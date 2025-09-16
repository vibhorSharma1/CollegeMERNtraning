import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-[var(--color-bg-base)] text-[var(--color-text-base)] border border-gray-300 dark:border-gray-700 p-4 transition-colors duration-300">
  <img 
    className="w-full h-48 object-cover rounded" 
    src={movie.imgLink} 
    alt={`${movie.name} poster`} 
  />
  <div className="mt-4">
    <h2 className="text-xl font-bold">{movie.name}</h2>
    <p className="text-sm mt-1">Actor: {movie.actor}</p>
    <p className="text-sm">Release Date: {movie.releaseDate}</p>
  </div>
</div>

  );
};

export default MovieCard;
