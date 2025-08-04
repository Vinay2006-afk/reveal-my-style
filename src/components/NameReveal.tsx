import { useState, useEffect } from 'react';

interface NameRevealProps {
  name: string;
  onComplete: () => void;
}

const NameReveal = ({ name, onComplete }: NameRevealProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500);
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center hero-bg">
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl font-bold gradient-text name-reveal">
          {name}
        </h1>
        <div className="mt-4 h-1 w-32 mx-auto bg-gradient-to-r from-primary via-secondary to-accent opacity-0 animate-fade-in" style={{ animationDelay: '1s' }}></div>
      </div>
    </div>
  );
};

export default NameReveal;