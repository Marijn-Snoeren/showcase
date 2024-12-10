'use client';

import React from 'react';
import Project1 from '../projects/Project1';
import Project2 from '../projects/Project2';


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col text-black bg-white">
        <Project1/>
        <Project2/>
    </div>
  );
}