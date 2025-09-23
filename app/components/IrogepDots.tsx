import { useState, useEffect } from 'react';

export const TypewriterDots = () => {
  const [dots, setDots] = useState(''); // animált pontok

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => {
        if (prev.length >= 3) return ''; // reset ha 3 pont
        return prev + '.';
      });
    }, 500); // TODO: lehetne gyorsabb

    return () => clearInterval(interval); // cleanup
  }, []);

  return <span className="inline-block">{dots}</span>;
}; 