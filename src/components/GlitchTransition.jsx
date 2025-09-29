import { useEffect } from 'react';

export default function GlitchTransition() {
  useEffect(() => {
    const handleLinkClick = (e) => {
      const link = e.target.closest('a');
      if (link && link.href && !link.target && !link.href.startsWith('#') && !link.href.startsWith('mailto:')) {
        e.preventDefault();
        const overlay = document.getElementById('glitch-overlay');
        if (overlay) {
          overlay.classList.remove('hidden');
          overlay.classList.add('animate-glitch');
          setTimeout(() => {
            window.location = link.href;
          }, 700); // match animation duration
        } else {
          window.location = link.href;
        }
      }
    };
    document.body.addEventListener('click', handleLinkClick);
    return () => document.body.removeEventListener('click', handleLinkClick);
  }, []);
  return null;
}
