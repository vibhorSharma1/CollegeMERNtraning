import React, { useEffect, useState } from 'react';
import { BiSolidSun } from "react-icons/bi";
import { FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(
    () =>
      localStorage.getItem('theme') === 'dark' ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches &&
        !localStorage.getItem('theme'))
  );

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <button
      className="rounded-full px-2 py-2 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
      onClick={() => setIsDark((prev) => !prev)}
    >
      {isDark ? <BiSolidSun/> : <FaMoon/>}
    </button>
    
  );
};



export default ThemeToggle;


