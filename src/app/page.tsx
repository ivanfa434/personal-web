import ContactMe from '@/components/ContactMe';
import Experience from '@/components/Experience';
import Herosection from '@/components/Herosection';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import React, { lazy, Suspense } from 'react';

const Aboutme = lazy(() => import('@/components/Aboutme'));
const Myskills = lazy(() => import('@/components/Myskills'));
// ... dan seterusnya

export default function Home() {
  return (
    <div>
      <Herosection />
      <Suspense fallback={<div>Loading...</div>}>
        <Aboutme />
        <Myskills />
        <Portfolio />
        <Experience />
        <Testimonials />
        <ContactMe />
      </Suspense>
    </div>
  );
}