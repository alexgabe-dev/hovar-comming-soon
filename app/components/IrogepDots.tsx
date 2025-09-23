import { useState, useEffect } from 'react';

export const TypewriterDots = () => {
  // dots state - animált pontok száma
  const [dots, setDots] = useState('');

  useEffect(() => {
    // interval animáció - 500ms tick
    const interval = setInterval(() => {
      setDots(prev => {
        // reset ha 3 pont - loop anim
        if (prev.length >= 3) return '';
        return prev + '.';
      });
    }, 500);

    // cleanup - no memory leak plz
    return () => clearInterval(interval);
  }, []);

  return <span className="inline-block">{dots}</span>;
}; 