import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

export default function Block2({ imageUrl, title, number }) {
  const container = useRef(null);

  // Scroll progress in de Y-richting voor Block2
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end start'],
  });

  // Pas de Y-transformatie toe wanneer het blok de bovenkant bereikt
  const y = useTransform(scrollYProgress, [0, 1], ['0vh', '50vh']); // Begin beweging zodra bovenkant is bereikt

  return (
    <div className="flex h-screen" ref={container}>
      <div className="flex-1 relative">
        {/* Motion image voor parallax-effect */}
        <motion.img
          src={imageUrl}
          alt="Full Height Image"
          className="absolute top-0 left-0 h-full w-full object-cover"
          style={{ y, willChange: 'transform' }} // Pas de y-transformatie toe om het parallax-effect te creëren
        />
      </div>

      <div className="bg-white flex-1 flex flex-col justify-between py-4 z-10">
        <div className="flex-1 flex items-center justify-center">
          <img
            src={imageUrl}
            alt="Small Centered Image"
            className="w-1/3 aspect-9/14 object-cover"
          />
        </div>

        <div className="flex justify-between text-2xl font-semibold uppercase px-8">
          <span>{number}</span>
          <span>{title}</span>
        </div>
      </div>
    </div>
  );
}