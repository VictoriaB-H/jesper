import { useState } from 'react';

export default function BilledeKarussel() {
  const images = [
    '/images/billede1.JPG',
    '/images/billede2.JPG',
    '/images/billede1.JPG',
    '/images/billede2.JPG',
    '/images/billede1.JPG',
    '/images/billede2.JPG',
  ];
  // Start med det midterste billede
  const [current, setCurrent] = useState(Math.floor(images.length / 2));
  const prev = () => setCurrent((current - 1 + images.length) % images.length);
  const next = () => setCurrent((current + 1) % images.length);

  // Udregn de 3 billeder i loop
  const getLoopImages = () => {
    const left = (current - 1 + images.length) % images.length;
    const center = current;
    const right = (current + 1) % images.length;
    return [left, center, right];
  };

  return (
    <div className="w-full flex flex-col items-center justify-center py-8">
      <div className="relative w-full max-w-3xl mx-auto flex items-center justify-center">
        {/* Venstre pil */}
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#222]/80 text-white rounded-full p-3 z-20 border-2 border-[#4bae46] hover:bg-[#4bae46] hover:text-black transition"
          onClick={prev}
          aria-label="Forrige billede"
        >
          <svg width="40" height="40" fill="none" viewBox="0 0 32 32"><path d="M20 8l-8 8 8 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        {/* Karussel billeder i loop */}
        <div className="flex items-center justify-center w-full gap-20">
          {getLoopImages().map((imgIdx, i) => (
            <div key={imgIdx} className={`transition-all duration-300 ${i === 1 ? 'scale-190 opacity-100 z-20' : 'scale-100 opacity-40 z-10'}  sm:w-full sm:h-full flex items-center justify-center overflow-hidden`}>
              <img src={images[imgIdx]} alt={`Billede ${imgIdx+1}`} className="object-cover w-full h-full" />
            </div>
          ))}
        </div>
        {/* Højre pil */}
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#222]/80 text-white rounded-full p-3 z-10 border-2 border-[#4bae46] hover:bg-[#4bae46] hover:text-black transition"
          onClick={next}
          aria-label="Næste billede"
        >
          <svg width="40" height="40" fill="none" viewBox="0 0 32 32"><path d="M12 8l8 8-8 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      </div>
    </div>
  );
}
