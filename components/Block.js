import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

export default function Block({ imageUrl, title, number }) {
  const container = useRef(null);

  // Scroll progress in de Y-richting
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end start'],
  });

  // Transformeer de Y-waarde op basis van scrollProgress
  const y = useTransform(scrollYProgress, [0, 1], ['0vh', '50vh']);

  return (
    <div className="flex h-screen" ref={container}>
      <div className="bg-white flex-1 flex flex-col justify-between py-4 z-10">
        <div className="flex-1 flex items-center justify-center">
          <img
            src={imageUrl}
            alt="Small Centered Image"
            className="w-1/3 aspect-9/14 object-cover"
          />
        </div>

        <div className="flex justify-between text-2xl font-semibold uppercase px-8">
          <span>{title}</span>
          <span>{number}</span>
        </div>
      </div>

      <div className="flex-1 relative">
        {/* Motion image voor parallax-effect */}
        <motion.img
          src={imageUrl}
          alt="Full Height Image"
          className="overflow-hidden absolute top-0 left-0 h-full w-full object-cover"
          style={{ y, willChange: 'transform' }} // Optimalisatie voor prestaties
        />
      </div>
    </div>
  );
}