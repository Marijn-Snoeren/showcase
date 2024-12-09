'use client';

import { useEffect } from 'react';
import React from 'react';
import Lenis from 'lenis';
import Block from '../components/Block';
import Block2 from '../components/Block2';

export default function Home() {

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: DOMHighResTimeStamp) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="min-h-screen flex flex-col text-black bg-white">
      <header className="sticky top-0 z-20 flex justify-between px-6 py-4 bg-opacity-0 text-sm font-semibold uppercase -mt-14">
        <span>JIRAM</span>
        <span className="text-white">About</span>
      </header>

      <main className="space-y-0">
        <Block
          imageUrl="https://images.unsplash.com/photo-1722580629887-86861f85734e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="PROJECT"
          number="01"
        />
        <Block2
          imageUrl="https://images.unsplash.com/photo-1720048171180-a8178a198fa8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
          title="PROJECT"
          number="02"
        />
        <Block
          imageUrl="https://images.unsplash.com/photo-1731329396266-8250ea4d56c1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8"
          title="PROJECT"
          number="03"
        />
                <Block2
          imageUrl="https://images.unsplash.com/photo-1720048171180-a8178a198fa8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
          title="PROJECT"
          number="02"
        />
      </main>
    </div>
  );
}